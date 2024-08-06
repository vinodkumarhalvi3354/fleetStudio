const { fetchCommitDiff } = require('./services');

const getCommitDiff = async (req, res) => {
  const { owner, repository, oid } = req.params;
  try {
    const commitDiff = await fetchCommitDiff(owner, repository, oid);
    res.json(commitDiff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getCommitDiff };
