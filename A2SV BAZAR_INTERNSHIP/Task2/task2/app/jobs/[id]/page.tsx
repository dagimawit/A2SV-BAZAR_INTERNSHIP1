"use client";
import JobcardProps from "@/components/Jobcard";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import profile from "@/./public/photo1.jpg";
import image1 from '@/public/image1.png';
import image from '@/public/image.png';
export default function Detail() {
  const params = useParams();
  const jobId = params.id;
  const [data, setData] = useState<typeof JobcardProps | null>();
  return (
    <>
      <div className="p-10">
        <div className="flex m-5 justify-between p-6 rounded-tl-3xl  rounded-bl-3xl rounded-br-3xl rounded-tr-3xl  border border-solid shadow-lg">
          <div className="flex ">
            <div className="flex-shrink-0 pr-3 ">
              <Image
                src={profile}
                alt="jjjj"
                className="pl-5"
                width={80}
                height={80}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold pb-3">
                Social Media Assistant
              </h1>
              <p className="text-gray-500">
                Yenigat Birhan. Addis Ababa, Ethiopia.In Person
              </p>
            </div>
          </div>

          <div className="flex gap-10 p-3">
          <Image
                src={image}
                alt="jjjj"
                width={25}
                height={10}
              />
               <Image
                src={image1}
                alt="jjjj"
                width={3}
                height={10}
              />
            <button className='w-28 h-10 mt- text-white text-base font-Poppins font-medium rounded-3xl bg-indigo-900 '>Apply</button>
          </div>
        </div>

        <div>
          <div className="p-6">
            <h1 className="text-2xl font-bold pb-3">Description</h1>
            <p className="text-24 pl-1 ">
              As a Social Media Assistant, you will work closely with the social
              media manager or marketing team to execute social media strategies
              and campaigns. You will be responsible for assisting in the
              creation and scheduling of engaging content, monitoring social
              media channels, and interacting with followers. Your primary goal
              will be to enhance brand visibility, foster positive relationships
              with the audience, and drive engagement and conversions
            </p>
          </div>
          <div className="p-6 pt-2 ">
            <h1 className="text-2xl font-bold pb-3 ">Responsibilities</h1>
            <div className="flex items-center mt-2  ">
              <div  className="flex items-center">
              <Image className="ml-1" src="/Icon.png" alt="Image Not Found" width={30} height={30} />
              </div>
              <p className="pl-2">Community engagement to ensure that is supported and actively represented online </p>
            </div>
         
            <div className="flex items-center  mt-2 ">
              <div >
              <Image className="ml-1" src="/Icon.png" alt="Image Not Found" width={30} height={30} />
              </div>

              <p className="pl-2">Focus on social media content development and publication </p>
            </div>
            <div className="flex items-center  mt-2 ">
              <div className="flex-shrink-0">
              <Image className="ml-1" src="/Icon.png" alt="Image Not Found" width={30} height={30} />
              </div>
              <p className="pl-2">Marketing and strategy support</p>
            </div>
            <div className="flex items-center  mt-2 ">
              <div className="flex-shrink-0">
              <Image className="ml-1" src="/Icon.png" alt="Image Not Found" width={30} height={30} />
              </div>
              <p className="pl-2">
                Stay on top of trends on social media platforms, and suggest
                content ideas to the team
              </p>
            </div>
            <div className="flex items-center  mt-2 ">
              <div className="flex-shrink-0">
              <Image className="ml-1" src="/Icon.png" alt="Image Not Found" width={30} height={30} />
              </div>
              <p className="pl-2">Engage with online communities</p>
            </div>
          </div>
          <div className="p-6 pb-1">
            <h1 className="text-2xl font-bold pb-3 pt-0" >Ideal Candidate we want</h1>
            <li className="font-bold ">Young(18-24 year old) Female social media manager</li>
            <li>
              <span className="font-bold ">Passionate & Reliable:</span>Passionate & Reliable: Genuine interest in our mission and a
              strong desire to make a positive impact, responsible, and
              committed to fulfilling volunteer commitments.{" "}
            </li>
            <li>
              {" "}
              <span className="font-bold " >Adaptable, Team Player & Strong Communication Skills:</span> Able to work
              effectively in diverse teams; and contributes positively.Flexible
              and open to embracing new challenges and shifting priorities;
              Clear verbal and written communication, active listening, and
              constructive feedback.
            </li>
            <li>
              <span className="font-bold " >Respectful:</span> Embraces diversity, inclusive, and treats others with
              respect. Abides with all our rules and regulations
            </li>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <h1 className="text-2xl font-bold pb-3" >When & Where</h1>
          <div className="flex pl-5">
            <Image  src="/Icon1.png" alt="Image Not Found" width={30} height={30} />
            <p className="whitespace-pre-line">The onboading event for this event will take place in Jan 18th, 2023 in AAU Auditorium</p>
         </div>
         </div>
        
         
       
      </div>
    </>
  );
}
