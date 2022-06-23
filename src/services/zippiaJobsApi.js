import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.zippia.com/api/jobs/',
});

/*

Constants endpoint and requestPayload are setted after Henry Shao's
guidelines message on Linkedin

*/

const endpoint = '';

export const requestPayload = {
  companySkills: true,
  dismissedListingHashes: [],
  fetchJobDesc: true,
  jobTitle: 'Business Analyst',
  locations: [],
  numJobs: 20,
  previousListingHashes: [],
};

export const requestJobs = async () => {
  try {
    const response = await api.post(endpoint, requestPayload);
    return response;
  } catch (error) {
    return error;
  }
};
