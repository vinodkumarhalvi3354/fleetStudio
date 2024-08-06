import React from 'react';

function CodeDiff({ diffs }) {
  return (
    <div>
      <h3>Code Diff</h3>
      {diffs.map((file, index) => (
        <div key={index}>
          <h4>{file.filename}</h4>
          <pre>{file.patch}</pre>
        </div>
      ))}
    </div>
  );
}

export default CodeDiff;
