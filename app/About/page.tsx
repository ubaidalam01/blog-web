import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
            <Image
              src="/man.jpeg"
              alt="About Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="mb-4">
              Welcome to VOID, where creativity meets innovation. We are a
              passionate team dedicated to pushing the boundaries of design and
              technology.
            </p>
            <p className="mb-4">
              Our mission is to create meaningful experiences that inspire and
              empower. With a focus on cutting-edge solutions, we strive to make
              a lasting impact in the digital world.
            </p>
            <p className="mb-4">
              At VOID, we believe in the power of collaboration and continuous
              learning. Our diverse team brings together a wealth of expertise
              across various disciplines, allowing us to tackle complex
              challenges with fresh perspectives.
            </p>
            <p className="mb-4">
              From conceptualization to execution, we are committed to
              delivering excellence at every step of the journey. Our team
              thrives on exploring new ideas and embracing challenges that
              others may shy away from.
            </p>
            <p className="mb-4">
              As a forward-thinking organization, we understand the importance
              of adapting to an ever-evolving landscape. This adaptability
              allows us to stay ahead of the curve and provide our clients with
              solutions that are both innovative and reliable.
            </p>
            <p className="mb-4">
              Whether it's developing user-friendly applications, crafting
              visually stunning designs, or implementing robust technical
              solutions, VOID is dedicated to exceeding expectations and setting
              new standards in the industry.
            </p>
            <p>
              Join us on our journey as we continue to shape the future with
              passion, creativity, and an unwavering commitment to quality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
