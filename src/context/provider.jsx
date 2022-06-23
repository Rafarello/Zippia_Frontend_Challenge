import React, { useEffect, useMemo, useState } from 'react';
import Proptypes from 'prop-types';
import storage from './context';
import { requestJobs } from '../services/zippiaJobsApi';

function Provider({ children }) {
  const [jobsList, setJobsList] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});
  const [companiesNames, setCompaniesNames] = useState([]);
  const [companyFilter, setCompanyFilter] = useState('Show All');
  const [dateFilter, setDateFilter] = useState('All Time');
  const [alphabeticFilter, setAlphabeticFilter] = useState('None');
  const [filteredJobsList, setFilteredJobsList] = useState([]);
  // Effects triggered when the page first renders

  useEffect(() => {
    // getData sets the array state of jobs after the request is made from API
    const getData = async () => {
      const { data: { jobs } } = await requestJobs();
      setJobsList(jobs);
      setFilteredJobsList(jobs);
      setSelectedJob(jobs[0]);
      const companiesList = {};
      // This loop creates a dict of all the companies names
      jobs.forEach((job) => {
        companiesList[job.companyName] = 1;
      });
      // This returns to companiesArray all the companies names of the dict
      setCompaniesNames(Object.keys(companiesList));
    };
    getData();
  }, []);

  const filterJobs = () => {
    if (companyFilter === 'Show All') {
      if (dateFilter === 'All Time') {
        return setFilteredJobsList(jobsList);
      }
      const filteredByDate = jobsList.filter(({ postedDate }) => {
        // Retrieving the date from the posted date string
        // and transforming to number to compare
        const dayRetrieved = Number(postedDate.split('d')[0]);
        return dayRetrieved <= 7;
      });
      return setFilteredJobsList(filteredByDate);
    }
    const filteredJobs = jobsList.filter((job) => job.companyName === companyFilter);
    if (dateFilter === 'All Time') {
      return setFilteredJobsList(filteredJobs);
    }

    const filteredByCompanyAndDate = filteredJobs.filter(({ postedDate }) => {
      // Retrieving the date from the posted date string
      // and transforming to number to compare
      const dayRetrieved = Number(postedDate.split('d')[0]);
      return dayRetrieved <= 7;
    });
    return setFilteredJobsList(filteredByCompanyAndDate);
  };

  // Effect triggered when the option company name or date filter
  // is clicked on Header
  useEffect(() => filterJobs(), [companyFilter, dateFilter]);

  const memoHook = useMemo(() => ({
    jobsList,
    selectedJob,
    setSelectedJob,
    companiesNames,
    setCompanyFilter,
    companyFilter,
    filteredJobsList,
    dateFilter,
    setDateFilter,
    alphabeticFilter,
    setAlphabeticFilter,
  }));

  return (
    <storage.Provider value={memoHook}>
      {children}
    </storage.Provider>
  );
}

Provider.propTypes = {
  children: Proptypes.element.isRequired,
};

export default Provider;
