// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import CodeDiff from './CodeDiff';

// function CommitDetails() {
//   const { owner, repository, commitSHA } = useParams();
//   const [commit, setCommit] = useState(null);

//   useEffect(() => {
//     const fetchCommitData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_BACKEND_URL}/api/repositories/${owner}/${repository}/commits/${commitSHA}`
//         );
//         setCommit(response.data);
//       } catch (error) {
//         console.error('Error fetching commit data:', error);
//       }
//     };

//     fetchCommitData();
//   }, [owner, repository, commitSHA]);

//   return (
//     <div>
//       {commit && (
//         <div>
//           <h2>Commit Details</h2>
//           <p><strong>Message:</strong> {commit.message}</p>
//           <p><strong>Author:</strong> {commit.author.name}</p>
//           <p><strong>Date:</strong> {new Date(commit.author.date).toLocaleString()}</p>
//           <CodeDiff diffs={commit.files} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default CommitDetails;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommitDetails({ owner, repository, commitSHA }) {
  const [commit, setCommit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommitData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repository}/commits/${commitSHA}`
        );

        const data = response.data;

        // Format the data to match the desired structure
        const formattedData = {
          oid: data.sha,
          message: data.commit.message,
          author: {
            name: data.commit.author.name,
            date: data.commit.author.date,
            email: data.commit.author.email,
          },
          committer: {
            name: data.commit.committer.name,
            date: data.commit.committer.date,
            email: data.commit.committer.email,
          },
          parents: data.parents.map(parent => ({
            oid: parent.sha,
          })),
        };

        setCommit(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching commit data:', error);
        setError('Failed to fetch commit data');
        setLoading(false);
      }
    };

    fetchCommitData();
  }, [owner, repository, commitSHA]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!commit) {
    return <div>No commit data available.</div>;
  }

  return (
    <div>
      <h2>Commit Details</h2>
      <p><strong>OID:</strong> {commit.oid}</p>
      <p><strong>Message:</strong> {commit.message}</p>
      <p><strong>Author:</strong> {commit.author.name}</p>
      <p><strong>Date:</strong> {new Date(commit.author.date).toLocaleString()}</p>
      <p><strong>Committer:</strong> {commit.committer.name}</p>
      <p><strong>Parents:</strong> {commit.parents.map(parent => parent.oid).join(', ')}</p>
    </div>
  );
}

export default CommitDetails;
