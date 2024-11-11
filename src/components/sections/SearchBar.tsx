import React from 'react';
import { Search, Mic, Camera } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative max-w-2xl w-full mx-auto">
      <div className="flex items-center bg-white rounded-full shadow-lg hover:shadow-xl px-6 py-3 gap-4">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Google or type a URL"
          className="flex-1 outline-none text-gray-700"
        />
        <div className="flex items-center gap-4">
          <Mic className="w-5 h-5 text-blue-500 cursor-pointer" />
          <Camera className="w-5 h-5 text-blue-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}