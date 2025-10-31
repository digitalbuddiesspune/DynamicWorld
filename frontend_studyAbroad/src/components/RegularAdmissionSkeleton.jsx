const RegularAdmissionSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-white text-[#31393C] animate-pulse">
      {/* Header Section */}
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Logo Placeholder */}
            <div className="h-20 w-20 lg:w-48 bg-white/20 rounded-lg" />

            {/* Text Placeholder */}
            <div className="flex-1 space-y-3">
              <div className="h-6 max-w-48 bg-white/30 rounded-md"></div>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-6 w-full bg-white/30 rounded-md"></div>
            <div className="h-6 w-full bg-white/30 rounded-md"></div>
          </div>
          <div className="mt-3 space-x-3 flex">
            <div className="h-6 w-48 bg-white/30 rounded-md"></div>
            <div className="h-6 w-48 bg-white/30 rounded-md"></div>
            <div className="h-6 w-48 bg-white/30 rounded-md"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-32 bg-white/30 ">
          <div className="flex justify-between px-5 items-center">
            <div className="bg-gray-50 h-16"></div>
            <div className="bg-gray-50 h-16"></div>
          </div>
           <div className="mt-3 space-x-3 flex">
            <div className="h-6 w-48 bg-white/30 rounded-md"></div>
            <div className="h-6 w-48 bg-white/30 rounded-md"></div>
            <div className="h-6 w-48 bg-white/30 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularAdmissionSkeleton;
