// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import CommitDetails from './components/CommitDetails';
// import Header from './components/Header';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route
//           path="/repositories/:owner/:repository/commit/:commitSHA"
//           component={CommitDetails}
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import CommitDetails from './components/CommitDetails';

function App() {
  const owner = 'octocat';
  const repository = 'Hello-World';
  const commitSHA = '7fd1a60b01f91b314f5995b8e2a9ec1c43119b4f';

  return (
    <div className="App">
      <h1>GitHub Commit Viewer</h1>
      <CommitDetails owner={owner} repository={repository} commitSHA={commitSHA} />
    </div>
  );
}

export default App;
