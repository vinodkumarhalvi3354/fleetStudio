
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
