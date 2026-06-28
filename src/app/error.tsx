"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 bg-red-100 text-red-600 flex items-center justify-center rounded-full mb-6">
        <AlertTriangle size={40} />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
      <p className="text-slate-600 max-w-md mb-8">
        We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-brand-primary text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-md font-medium hover:bg-slate-50 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
