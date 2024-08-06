const axios = require('axios');

const fetchCommitDiff = async (owner, repository, oid) => {
  const response = await axios.get(`https://api.github.com/repos/${owner}/${repository}/commits/${oid}`);
  return response.data;
};

module.exports = { fetchCommitDiff };
