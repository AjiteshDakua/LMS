import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-16 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 text-lg font-medium">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
