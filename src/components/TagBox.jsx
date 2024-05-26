// components/TagBox.jsx
import React from 'react';

const TagBox = ({ keys }) => {
  return (
    <div className="inline-flex items-center justify-center px-2 py-1 bg-gray-100 border border-gray-300 rounded">
      {keys.map((key, index) => (
        <kbd key={index} className="font-mono text-sm text-gray-600 mx-1">
          {key}
        </kbd>
      ))}
    </div>
  );
};

export default TagBox;
