# Welcome to Zippia Frontend Challenge!

## Summary:

- [Briefing](#Briefing)
- [Main tools](#Main-tools)
- [Project structure](#Project-structure)

# Briefing

This project was made for a technical test. The goal was to retrieve a list of jobs from an API with a fixed payload and render it on the screen with some specifications. The style of the rendering was optional and could be a Sliding, Carousel or a List. 

Among the specifications, there was the need to filter the jobs by company name, alphabetically ascending or descending, and date. The former was meant to show only the jobs that's been posted in the last 7 days.

# Main tools

This project was made mainly with React.js with functional components and Javascript. Some React Hooks, as useState, useEffect, useContext also have been used to assist the development.

# Project structure

The project has been structured as the following demo shows:

src 
  - components
     - Header.jsx
     - jobCardComplete.jsx
     - jobCardResumed.jsx
   
  - context
     - context.js
     - provider.jsx
   
  - pages
     - ZippiaPage.jsx

  - services
     - zippiaJobsApi.js
  
  - styles
     - header.css
     - jobCard.css
     - zippiaPage.css

App.jsx
index.jsx
