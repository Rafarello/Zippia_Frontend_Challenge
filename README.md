# Welcome to Zippia Frontend Challenge repository!

## Summary:

- [Briefing](#Briefing)
- [Main tools](#Main-tools)
- [Project structure](#Project-structure)
- [Components details](#Components-details)
  - [Header](#Header)
      - [JobCardComplete](#Job-card-complete)
      - [JobCardResumed](#Job-card-resumed)

# Briefing

This project was made for a technical test. The goal was to retrieve a list of jobs from an API with a fixed payload and render it on the screen with some specifications. The style of the rendering was optional and could be a Sliding, Carousel or a List. 

Among the specifications, there was the need to filter the jobs by company name, alphabetically ascending or descending, and date. The former was meant to show only the jobs that's been posted in the last 7 days.

# Main tools

This project was made mainly with React.js with functional components and Javascript. Some React Hooks, as useState, useEffect, useContext also have been used to assist the development.

# Project structure

The project has been structured as the following shows:

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

# Components details

## Header

This component has all of the available manners to control and filter the jobs being shown, it was constructed using Bootstrap's Reacts component. There are 3 distinghished dropdowns, each one having its own category and function to manipulate the global state.

- Functions:

`changeCompanyFilter` => Used in the Company's name dropdown and it changes the filter to only show jobs from the target company clicked.

Obs: It can be restored to show jobs from all of the companies again.

`changeDataFilter` => Used to change the filter which manipulates the display of jobs that has been posted on the last week and all time

`changeAlphabeticFilter` => Used to change the filter for ordering the list alphabetically ascending or descending.

## JobCardComplete

This component represents the main content of the page, it is positioned on the left side of the page and has all of the info asked at the goals of the challenge.

There are only one element of this on the page, and the job being displayed is being controlled by a global state named `selectedJob`

## JobCardResumed

It represents a briefly resumé of the job and is mounted inside the aside component of the page. The aside component is a list of these cards that has the resumed info 

## Context
