import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 bg-slate-100 text-slate-400 flex items-center justify-center rounded-full mb-6">
        <FileQuestion size={40} />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
      <p className="text-slate-600 max-w-md mb-8">
        We couldn't find the page you were looking for. It might have been removed, renamed, or doesn't exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-brand-primary text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
