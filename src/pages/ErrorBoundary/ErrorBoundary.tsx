const ErrorFallback = () => {
  return (
    <div className="h-full w-full bg-gray-800 flex justify-center items-center">
      <div className="w-2/6 border-2 border-solid border-gray-500 rounded-3xl flex flex-col p-6 bg-gray-700">
        <h1 className="text-gray-400 text-center mb-6">Opps...</h1>
        <span className="text-red-500 mb-4 h-[20px]">
          Something went wrong...
        </span>
        <button
          className="mt-4 bg-gray-800 border-b border-solid border-gray-500 w-full p-2 rounded text-white"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
