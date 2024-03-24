import Image from "next/image";
import image from '@/public/photo1.jpg';

import React from 'react'

const Jobcard = () => {
  return (
    <div className="flex justify-center items-center h-screen pl-40">
      <div className="lg:p-6 md:w-full flex justify-start mt-10 pl-24 pr-24 pt-24">
        <div className="max-w-6xl rounded-2xl overflow-hidden shadow-lg flex flex-col">
          <div className="w-1/3">
            <Image
              src={image}
              alt="img"
              className="pl-5"
              width={80} 
              height={80}
            />
          </div>
          <div className="w-2/3 px-6 py-4 flex flex-col justify-between pl-24 -mt-16">
            <div>
              <div className="title-font text-lg font-medium mb-2">
                <span className="no-underline font-bold">Social Media Assistant</span>
              </div>
              <p className="p-1 font-epilogue text-16 font-normal leading-6 text-left">
                Young Men Christians Association.Addis Ababa, Ethiopia
              </p>
              <p className="text-gray-900 text-base p-1 ">
                As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.
              </p>
            </div>
            <div className="mt-5 w-80 flex">
              <button className="w-16 h-7 rounded-3xl border-1 border-green-300 border-solid text-xs text-green-500">In Person</button>
              <Image className="ml-1" src="/line.png" alt="Image Not Found" width={1} height={30} />
              <button className="w-20 h-7 rounded-3xl ml-3 border-1 border-orange-400 bg-orange-100 text-xs text-orange-600">Education</button>
              <button className="w-12 h-7 rounded-3xl ml-3 border-1 border-purple-950 text-purple-900 text-xs">IT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobcard
