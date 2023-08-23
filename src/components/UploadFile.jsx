import React, { useState } from "react";

const UploadFile = ({ file }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    setIsLoading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input type="file" className="border rounded p-2" />
      {isLoading ? (
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75"></div>
      ) : (
        <img src={file} alt="Uploaded File" className="max-h-60" />
      )}
      {!isLoading && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleClick}
        >
          View File
        </button>
      )}
    </div>
  );
};

export default UploadFile;
