import React, { useContext, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Header from '../components/Header';
import JobCardComplete from '../components/jobCardComplete';
import JobCard from '../components/JobCardResumed';
import storage from '../context/context';

import '../styles/zippiaPage.css';

function ZippiaPage() {
  const { filteredJobsList, alphabeticFilter } = useContext(storage);
  const [active, setActive] = useState('1');
  let jobsToBeShown = filteredJobsList;

  const orderAlphabetically = () => {
    if (alphabeticFilter === 'Ascending') {
      const sortedAscending = filteredJobsList
        .sort((a, b) => (a.companyName).localeCompare(b.companyName));
      jobsToBeShown = sortedAscending;
    }
    if (alphabeticFilter === 'Descending') {
      const sortedDescending = filteredJobsList
        .sort((a, b) => (b.companyName).localeCompare(a.companyName));
      jobsToBeShown = sortedDescending;
    }
  };

  orderAlphabetically();

  const setJobsOnPagination = () => {
    const jobsPerPage = 10;
    const initialIndex = jobsPerPage * (active - 1);
    const finalIndex = jobsPerPage * active;

    const jobsPerPageList = [];
    for (let index = initialIndex; index < finalIndex; index += 1) {
      if (jobsToBeShown[index]) jobsPerPageList.push(jobsToBeShown[index]);
    }
    jobsToBeShown = jobsPerPageList;
  };

  setJobsOnPagination();

  const setPagination = ({ target }) => {
    setActive(target.innerText);
  };

  const paginationBasic = (
    <div>
      <Pagination size="lg">
        <Pagination.Item
          key={1}
          active={Number(active) === 1}
          onClick={setPagination}
        >
          {1}
        </Pagination.Item>
        <Pagination.Item
          key={2}
          active={Number(active) === 2}
          onClick={setPagination}
        >
          {2}
        </Pagination.Item>
      </Pagination>
    </div>
  );
  return (
    <main className="main">
      <Header />
      <aside className="aside">
        {jobsToBeShown.map((
          {
            jobId, jobTitle, companyName, jobDescription,
          },
        ) => (
          <JobCard
            key={jobId}
            jobId={jobId}
            jobTitle={jobTitle}
            companyName={companyName}
            jobDescription={jobDescription}
            job={{
              jobId, jobTitle, companyName, jobDescription,
            }}
          />
        ))}
        {paginationBasic}
      </aside>
      <section className="content">
        <JobCardComplete />
      </section>
    </main>
  );
}

export default ZippiaPage;
