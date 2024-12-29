import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
            <Image
              src="/man.jpeg"
              alt="Contact Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full border border-gray-300 p-2" required></textarea>
              </div>
              <button className="px-9 border-black border-2 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out">
          Send Message
        </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

