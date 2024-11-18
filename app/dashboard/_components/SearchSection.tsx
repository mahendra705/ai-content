import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold text-white">Browse All Templates</h2>
      <p className="text-muted">What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border border-input rounded-md bg-card my-5 w-[50%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-black"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
