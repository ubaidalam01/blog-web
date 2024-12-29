import Image from 'next/image';

const Story = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image 
          src="/story.jpeg" 
          alt="Background Image" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center"
          className="filter brightness-110"
        />
      </div>
      <div className="relative flex items-center justify-center h-full text-center text-white">
        <div className="absolute top-10 left-0 right-0">
          <h2 className="text-xl sm:text-3xl font-medium">
            STORY OF THE WEEK
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="font-medium">
            July,12,2023 . 2 min read 
          </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold hover:text-black">
            THE STORY BEHIND “FYI:<br/> I&apos;M ABOUT TO LOVE YOU” —<br/> AN INTERVIEW WITH KAY VAN<br/> HANS
          </h1>
        </div>
        
      </div>
    </div>
  );
};

export default Story;
