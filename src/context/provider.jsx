import React, { useEffect, useMemo, useState } from 'react';
import Proptypes from 'prop-types';
import storage from './context';
import { requestJobs } from '../services/zippiaJobsApi';

function Provider({ children }) {
  const [jobsList, setJobsList] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => {
    // getData sets the array state of jobs after the request is made from API
    const getData = async () => {
      const { data: { jobs } } = await requestJobs();
      setJobsList(jobs);
      setSelectedJob(jobs[0]);
    };
    getData();
  }, []);

  const memoHook = useMemo(() => ({ jobsList, selectedJob, setSelectedJob }));

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
