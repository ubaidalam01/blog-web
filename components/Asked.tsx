import Image from "next/image";

const Asked = () => {
  return (
    <div className="flex min-h-screen p-10 flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center p-8">
        <form className="space-y-8 w-full max-w-sm">
          <h2 className="text-2xl font-semibold">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 p-2 rounded text-white"
          >
            Login
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 overflow-hidden">
        <div className="sticky top-0 w-full h-full">
          <Image
            src="/pillow.jpeg"
            alt="Your Image"
            width={1920} 
            height={561}
            style={{ objectFit: "cover" }}
            className="w-full h-[561px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Asked;
