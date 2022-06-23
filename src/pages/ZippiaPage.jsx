import React, { useContext } from 'react';
import JobCardComplete from '../components/jobCardComplete';
import JobCard from '../components/JobCardResumed';
import storage from '../context/context';

import '../styles/zippiaPage.css';

function ZippiaPage() {
  const { jobsList } = useContext(storage);
  return (
    <main className="main">
      <header>
        Header
      </header>
      <aside className="aside">
        {jobsList.map((
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
      </aside>
      <section className="content">
        <JobCardComplete />
      </section>
    </main>
  );
}

export default ZippiaPage;
