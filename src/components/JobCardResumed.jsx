import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/jobCard.css';
import { Card, Button } from 'react-bootstrap';

function JobCard({
  jobId, jobTitle, companyName, jobDescription,
}) {
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
        <Button>Show more</Button>
      </Card.Body>
    </Card>
  );
}

JobCard.propTypes = {
  jobId: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
};

export default JobCard;
