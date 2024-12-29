"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';  // Import Image component from next/image

const Popular = () => {
  const cards = [
    {
      title: 'FETCH FESTIVAL BRLN 2023',
      imageUrl: 'https://static.wixstatic.com/media/84770f_fa58299371f84ccab29edc0d417d1ac3~mv2.jpg/v1/fill/w_396,h_528,fp_0.50_0.50,q_90,enc_auto/84770f_fa58299371f84ccab29edc0d417d1ac3~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      url: "/Fetch",
      description: 'See the full program for the upcoming festival. Early bird tickets are on sale now.',
    },
    {
      title: '365 DAYS. 365 FRAMES.',
      imageUrl: 'https://static.wixstatic.com/media/84770f_fe6fab9a56414a00976c0d1673796c90~mv2.jpg/v1/fill/w_397,h_528,fp_0.50_0.50,q_90,enc_auto/84770f_fe6fab9a56414a00976c0d1673796c90~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      url: "/Frames",
      description: 'What can we learn from Matthew Soja,s latest work? Shots from the same location in Oslo for one whole year, every single day.',
    },
    {
      title: '20 MUSEUMS YOU SHOULD VISIT AT LEAST ONCE',
      imageUrl: 'https://static.wixstatic.com/media/84770f_c65865dcbe344e959c00cd572c022bfd~mv2.jpg/v1/fill/w_396,h_528,fp_0.50_0.50,q_90,enc_auto/84770f_c65865dcbe344e959c00cd572c022bfd~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'The full list includes 10 cities in 8 different countries.',
      url: "/Place1"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-32">
      {cards.map((card, index) => (
        <Link key={index} href={card.url} passHref>
          <div className="bg-white w-full max-w-sm overflow-hidden mx-auto font-[sans-serif]">
            <div className="min-h-[256px]">
              <Image 
                src={card.imageUrl} 
                alt={card.title} 
                width={396}  // Specify width for optimization
                height={528} // Specify height for optimization
                className="w-full" 
              />
            </div>
            <div className="p-2">
              <h3 className="text-gray-800 text-xl font-bold">{card.title}</h3>
              <p className="mt-4 text-sm text-black leading-relaxed">{card.date}</p>
              <p className="mt-4 text-sm text-black leading-relaxed">{card.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Popular;
