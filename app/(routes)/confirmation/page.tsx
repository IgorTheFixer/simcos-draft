'use client';

import { useRouter } from 'next/navigation';

export default function ConfirmationPage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/'); // Change the path to your orders page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <div className="mb-4 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Thanks for your order</h2>
        <p className="text-gray-600 mb-6">
          You have just completed your payment. The seller will reach out to you
          as soon as possible.
        </p>
        <button
          onClick={handleRedirect}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Home Page
        </button>
      </div>
    </div>
  );
}