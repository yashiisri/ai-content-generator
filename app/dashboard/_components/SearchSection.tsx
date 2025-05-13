import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from bg-purple-500 via to to-blue-600 flex flex-col justify-center items-center text-white'>
        <h2 className='text-3xl font-bold '>
            Browse All Templates</h2>
            <p>What would you like to create today?</p>
            <div className='w-full flex justify-center '>
                <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[30%]'>
                    <Search className='text-[#7B3AED]'/>
                    <input type='text' placeholder='Search'
                    onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent text-black w-full outline-none'/>

                </div>

            </div>
            
            
            </div>
  )
}

export default SearchSection