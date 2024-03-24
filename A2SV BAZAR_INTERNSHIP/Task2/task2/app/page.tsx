import Link from "next/link";
import Jobcard from "@/components/Jobcard";
import data from '../data.json';
import Image from "next/image";
export default function Home() {
  return (
    <div className="px-10">
      <div className="flex justify-between p-5">
        <div>
        <h1 className='text-3xl text-indigo-950 font-bold'>Opportunities</h1>
          <p className="text-body text-epilogue text-base font-normal leading-6 text-left text-gray-500">Showing 73 results </p>
        </div>
        <div className='flex justify-end items-center w-72 mr-52'>
                  <p className='font-Epilogue text-indigo-950 font-medium'><span className="text-body text-epilogue text-base font-normal leading-6 text-right text-gray-500">Sort by:</span> Most relevant</p>
                  <Image className='pt-1' src = "/dropdown.jpg" width={30} height={30} alt="Image Not Found" />
        </div>
      </div>
      
      {data?.map((job) => (
        <Link href={`/jobs/${job.id}`} key={job.id.toString()}>
          <Jobcard 
            id={job.id}
            imageUrl={job.imageUrl}
            title={job.title}
            subTitle={job.subTitle}
            description={job.description}
            responsibility={job.responsibility}
            relatedTopics={job.relatedTopics}
          />
        </Link>
      ))}
    </div>
  );
}