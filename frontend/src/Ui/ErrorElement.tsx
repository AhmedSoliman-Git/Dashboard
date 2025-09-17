import { useNavigate, useRouteError } from "react-router-dom";

function ErrorElement() {
  const navigate = useNavigate();
  const error: any = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <h1 className="text-5xl font-bold mb-6 text-red-400">Oops!</h1>
      <p className="text-xl mb-2">Something went wrong.</p>
      <p className="text-gray-400 mb-6">
        {error?.statusText || error?.message || "Unexpected error occurred"}
      </p>
      <button
        onClick={() => navigate("/dashboard")}
        className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl shadow-lg transition-all duration-200">
        Back to Dashboard
      </button>
    </div>
  );
}

export default ErrorElement;
