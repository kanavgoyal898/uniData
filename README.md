# uniData

uniData is a web platform that brings the collaborative workflow of GitHub to academia. It enables researchers, students, and educators to publish research papers, create academic profiles, collaborate with co-authors, and discover scholarly work through a unified repository.

Designed as a proof of concept, uniData demonstrates how modern software development workflows can be adapted for academic publishing and research collaboration.

## Project Status

This project is no longer under active development and remains incomplete. It is preserved as a portfolio project and proof of concept showcasing the core design, architecture, and functionality of a GitHub-inspired academic repository.

## Features

- User authentication
- Academic user profiles
- Publish and manage research papers
- Research feed for discovering publications
- Paper pages with abstracts and contributor information
- Research collaboration support
- External profile integration
  - Google Scholar
  - GitHub
  - LinkedIn
  - ORCID
  - Personal portfolio
- Responsive interface for desktop and mobile devices

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- React Hook Form

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Project Structure

```text
uniData/
│
├── client/          # React frontend
├── server/          # Express backend
├── database/        # MongoDB models
└── README.md
````

## Getting Started

### Clone the repository

```bash
git clone https://github.com/kanavgoyal898/uniData.git
cd uniData
```

### Install dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

### Run the application

Frontend

```bash
npm run dev
```

Backend

```bash
npm start
```

## Available Pages

* Home
* Sign In
* Sign Up
* Research Feed
* Research Paper
* User Profile

## Vision

Academic research deserves the same collaborative experience that software developers enjoy with platforms like GitHub.

uniData explores this idea by providing a centralized platform where researchers can showcase publications, collaborate with peers, and build an academic portfolio within a modern web application.

## Planned Features

Although development has been discontinued, the original roadmap included:

* DOI integration
* ORCID synchronization
* Google Scholar import
* Citation generation
* Publication version history
* Dataset and supplementary material uploads
* Institution verification
* Peer review workflow
* Advanced search and filtering
* Research recommendations
* Discussion threads
* Research groups and laboratories
* Bookmarking and saved publications

## Contributing

This repository is archived as a portfolio project and is no longer accepting feature contributions. Feel free to fork the project for learning or experimentation.
