# fleetStudio

# Full-Stack Git Diff App

## Overview

The Full-Stack Git Diff App is a web application that allows users to view and compare differences between commits in a Git repository. The app leverages a backend API to fetch commit data and provides a user-friendly interface for displaying the diffs between specified commits.

## Features

- View a list of commits in a Git repository.
- Compare differences between two commits.
- User-friendly interface for easy navigation and diff visualization.

## Technologies

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express
- **API**: Git Diff API (Documentation: [Git Diff API Documentation](https://teamfleetstudio.github.io/git-diff-api-doc/#/paths/~1repositories~1%7Bowner%7D~1%7Brepository%7D~1commits~1%7Boid%7D/get))

## Setup

### Prerequisites

- Node.js and npm installed
- A Git repository to test the application

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>


2. Navigate to the project directory:

   ```bash
   cd full-stack-git-diff-app
   ```

3. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

4. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```


### Running the Application

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```bash
   cd ../frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the app.

## Usage

1. Enter the repository owner and repository name in the appropriate fields.
2. Select the commits you want to compare.
3. View the differences between the selected commits in the diff viewer.


