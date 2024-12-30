import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row w-full">
      {/* Left Section */}
      <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-tr from-black via-gray-900 to-gray-800 w-full lg:w-1/2 px-12 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-16 -left-16 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-16 right-16 w-72 h-72 bg-gradient-to-l from-pink-500 to-red-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        </div>
        <div className="z-10 text-center text-primary-foreground space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Welcome to <span className="text-purple-400">AMRAK</span>
          </h1>
          <p className="text-md md:text-lg text-gray-300 font-medium">
            Explore the finest collection of clothes tailored just for you.
          </p>
          <button className="px-4 md:px-6 py-2 md:py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300 shadow-md">
            Start Shopping
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex flex-1 items-center justify-center bg-gray-50 px-6 py-12 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-16 left-8 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-12 right-12 w-60 md:w-80 h-60 md:h-80 bg-gradient-to-t from-green-400 to-blue-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        </div>
        <div className="z-10 w-full max-w-md space-y-6">
          <Outlet />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-center bg-gradient-to-tr from-black via-gray-900 to-gray-800 text-white py-4 px-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Welcome to <span className="text-purple-400">AMRAK</span>
        </h1>
      </div>
    </div>
  );
}

export default AuthLayout;
