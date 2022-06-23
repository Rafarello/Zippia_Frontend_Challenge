import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/jobCard.css';
import { Card } from 'react-bootstrap';
import storage from '../context/context';

function JobCardComplete() {
  const { selectedJob } = useContext(storage);
  const {
    jobDescription,
    jobId,
    jobTitle,
    companyName,
  } = selectedJob;

  const descriptionParsed = Parser(String(jobDescription));
  return (
    <Card id={jobId} className="card">
      <Card.Body>
        <Card.Title>
          {jobTitle}
        </Card.Title>
        <Card.Subtitle>
          {companyName}
        </Card.Subtitle>
        <Card.Text className="job-description-complete">
          {(descriptionParsed)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

JobCardComplete.propTypes = {
  job: PropTypes.shape({
    jobId: PropTypes.string,
    jobTitle: PropTypes.string,
    companyName: PropTypes.string,
    jobDescription: PropTypes.string,
  }),
};

JobCardComplete.defaultProps = {
  job: {
    jobId: '',
    jobTitle: '',
    companyName: '',
    jobDescription: '',
  },
};

export default JobCardComplete;
