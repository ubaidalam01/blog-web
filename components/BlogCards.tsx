import React from 'react';
import Link from 'next/link'; 

const CardComponent = () => {
  const cards = [
    {
      title: 'THE UNBRANDED BRAND',
      imageUrl: 'https://static.wixstatic.com/media/c837a6_684fbc0670df4d17970663d4e5fcd732~mv2.jpg/v1/fill/w_290,h_259,fp_0.50_0.50,q_90,enc_auto/c837a6_684fbc0670df4d17970663d4e5fcd732~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'Explore the power of creating a unique brand identity without any established labels or constraints.',
      url: '/Brand',
    },
    {
      title: 'SEEKING INSPIRATION? 15 RESOURCES THAT',
      imageUrl: 'https://static.wixstatic.com/media/c837a6_32d7a4c0dc4c49349c0a9af84fb83459~mv2.jpg/v1/fill/w_290,h_373,fp_0.50_0.50,q_90,enc_auto/c837a6_32d7a4c0dc4c49349c0a9af84fb83459~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'Discover 15 valuable resources to ignite your creative spark and fuel your next project.',
      url: '/Inspiration',
    },
    {
      title: '73 QUESTIONS WITH DONNA FAY',
      imageUrl: 'https://static.wixstatic.com/media/c837a6_61a8e45085564423b55da150c271136c~mv2.jpg/v1/fill/w_290,h_240,fp_0.50_0.50,q_90,enc_auto/c837a6_61a8e45085564423b55da150c271136c~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'An in-depth conversation with Donna Fay, answering 73 thought-provoking questions on creativity and success.',
      url: '/Donna', 
    },
    {
      title: 'HOW TO BRAND A DISEASE?',
      imageUrl: 'https://static.wixstatic.com/media/c837a6_c11c1e65b3434138b7a5cbbbbac07111~mv2.jpg/v1/fill/w_289,h_282,fp_0.50_0.50,q_90,enc_auto/c837a6_c11c1e65b3434138b7a5cbbbbac07111~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'A controversial exploration of how branding strategies can be applied to medical conditions for awareness.',
      url: '/Disease', 
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-gray-800 text-2xl font-bold ml-2 md:ml-10 mb-4">Latest</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 p-0 md:p-10">
        {cards.map((card, index) => (
          <Link key={index} href={card.url} passHref>
            <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif]">
              <div className="min-h-[256px]">
                <img src={card.imageUrl} alt={card.title} className="w-full" />
              </div>
              <div className="p-6">
                <h3 className="text-gray-800 text-xl font-bold">{card.title}</h3>
                <p className="mt-4 text-sm text-black leading-relaxed">{card.date}</p>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
