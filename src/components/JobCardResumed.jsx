import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/jobCard.css';
import { Card, Button } from 'react-bootstrap';
import storage from '../context/context';

function JobCardResumed({
  jobId, jobTitle, companyName, jobDescription, job,
}) {
  const { setSelectedJob } = useContext(storage);
  const resumedDescription = Parser(jobDescription);
  return (
    <Card id={jobId} className="card">
      <Card.Body>
        <Card.Title>
          {jobTitle}
        </Card.Title>
        <Card.Subtitle>
          {companyName}
        </Card.Subtitle>
        <Card.Text className="job-description">
          {resumedDescription}
        </Card.Text>
        <Button onClick={() => setSelectedJob(job)}>Show more</Button>
      </Card.Body>
    </Card>
  );
}

JobCardResumed.propTypes = {
  jobId: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  job: PropTypes.shape({
    jobId: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCardResumed;
