import React from 'react'

function Chat() {
  return (
    <div className="flex flex-col  md:items-center md:min-h-screen p-4">
      <div className="w-full md:w-3/4 lg:w-1/2">
        {/* Content here */}
        <div className="grid grid-cols-1 gap-4">
          <label>asd</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded"
            placeholder="Input 1"
          />

          {/* Add more inputs or content as needed */}
        </div>
      </div>
    </div>
  );
}

export default Chat;