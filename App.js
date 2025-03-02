import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <header className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-md text-center">
        <img src="/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Thanh Trần</h1>
        <p className="text-gray-600">Finance | CFA | Data Enthusiast</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
        {/* Profile Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <img src="/cv.png" alt="CV" className="w-20 h-20 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Hồ sơ cá nhân</h2>
          <p className="text-gray-600 text-center">Giới thiệu bản thân, CV, LinkedIn.</p>
          <a href="#" className="text-blue-500 mt-2 inline-block">Xem hồ sơ</a>
        </div>
        
        {/* Learning Tracker */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <img src="/calendar.png" alt="Calendar" className="w-20 h-20 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">For Learning</h2>
          <p className="text-gray-600 text-center">Theo dõi CFA, IELTS, HSK, số ngày đến kỳ thi.</p>
          <a href="#" className="text-blue-500 mt-2 inline-block">Xem tiến độ</a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-6">
        {/* Entertainment */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <img src="/music.png" alt="Music" className="w-20 h-20 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Giải trí</h2>
          <p className="text-gray-600 text-center">Chia sẻ nhạc, phim, sở thích.</p>
        </div>
        
        {/* Future Expansion */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <img src="/future.png" alt="Future" className="w-20 h-20 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Mở rộng</h2>
          <p className="text-gray-600 text-center">Tính năng bổ sung trong tương lai.</p>
        </div>
      </div>
    </div>
  );
}
