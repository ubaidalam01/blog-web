"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

const Popular = () => {
  const cards = [
    {
      title: 'FETCH FESTIVAL BRLN 2023',
      imageUrl: 'https://static.wixstatic.com/media/84770f_fa58299371f84ccab29edc0d417d1ac3~mv2.jpg/v1/fill/w_396,h_528,fp_0.50_0.50,q_90,enc_auto/84770f_fa58299371f84ccab29edc0d417d1ac3~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'See the full program for the upcoming festival. Early bird tickets are on sale now.',
      url: '/Fetch',
    },
    {
      title: '365 DAYS. 365 FRAMES.',
      imageUrl: 'https://static.wixstatic.com/media/84770f_fe6fab9a56414a00976c0d1673796c90~mv2.jpg/v1/fill/w_397,h_528,fp_0.50_0.50,q_90,enc_auto/84770f_fe6fab9a56414a00976c0d1673796c90~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      url: '/Frames',
      description: 'What can we learn from Matthew Soja,s latest work? Shots from the same location in Oslo for one whole year, every single day.',
    },
    {
      title: '20 MUSEUMS YOU SHOULD VISIT AT LEAST ONCE',
      imageUrl: 'https://static.wixstatic.com/media/84770f_c65865dcbe344e959c00cd572c022bfd~mv2.jpg/v1/fill/w_396,h_528,fp_0.50_0.50,q_90,enc_auto/84770f_c65865dcbe344e959c00cd572c022bfd~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'The full list includes 10 cities in 8 different countries.',
      url: '/Place1',
    },
    {
      title: 'THE UNBRANDED BRAND',
      imageUrl: 'https://static.wixstatic.com/media/c837a6_684fbc0670df4d17970663d4e5fcd732~mv2.jpg/v1/fill/w_395,h_527,fp_0.50_0.50,q_90,enc_auto/c837a6_684fbc0670df4d17970663d4e5fcd732~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'Explore the power of creating a unique brand identity without any established labels or constraints.',
      url: '/Brand',
    },
    {
      title: 'SEEKING INSPIRATION? 15 RESOURCES THAT',
      imageUrl: 'https://static.wixstatic.com/media/c837a6_32d7a4c0dc4c49349c0a9af84fb83459~mv2.jpg/v1/fill/w_395,h_527,fp_0.50_0.50,q_90,enc_auto/c837a6_32d7a4c0dc4c49349c0a9af84fb83459~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'Discover 15 valuable resources to ignite your creative spark and fuel your next project.',
      url: '/Inspiration',
    },
    {
      title: '73 QUESTIONS WITH DONNA FAY',
      imageUrl: 'https://static.wixstatic.com/media/c837a6_61a8e45085564423b55da150c271136c~mv2.jpg/v1/fill/w_395,h_527,fp_0.50_0.50,q_90,enc_auto/c837a6_61a8e45085564423b55da150c271136c~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'An in-depth conversation with Donna Fay, answering 73 thought-provoking questions on creativity and success.',
      url: '/Donna',
    },
    {
      title: 'A SURREAL CONCRETE DREAM',
      imageUrl: 'https://static.wixstatic.com/media/c837a6_e4f2137f4d6347d0bc981bca96bcb657~mv2.jpg/v1/fill/w_395,h_527,fp_0.50_0.50,q_90,enc_auto/c837a6_e4f2137f4d6347d0bc981bca96bcb657~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'Imagine a universe made with concrete alone. Arla Page explores the strength of cement in a series of 3D images and videos.',
      url: '/Dream1', 
    },
    {
      title: 'THE STORY BEHIND “FYI: I AM ABOUT TO LOVE YOU” — AN INTERVIEW WITH KAY VAN HANS',
      imageUrl: 'https://static.wixstatic.com/media/84770f_6ead7869ff5a4842aee87b0d58d83504~mv2.jpg/v1/fill/w_395,h_527,fp_0.50_0.50,q_90,enc_auto/84770f_6ead7869ff5a4842aee87b0d58d83504~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'The hamburg based artist opens the door to a different dimension.',
      url: '/Story',
    },
    {
      title: 'HOW TO BRAND A DISEASE?',
      imageUrl: 'https://static.wixstatic.com/media/c837a6_c11c1e65b3434138b7a5cbbbbac07111~mv2.jpg/v1/fill/w_395,h_527,fp_0.50_0.50,q_90,enc_auto/c837a6_c11c1e65b3434138b7a5cbbbbac07111~mv2.jpg',
      date: "Jun 12, 2023 • 2 min read",
      description: 'A controversial exploration of how branding strategies can be applied to medical conditions for awareness.',
      url: '/Disease', 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-32 bg-white">
      {cards.map((card, index) => (
        <Link key={index} href={card.url} passHref>
          <div className="bg-white w-full max-w-sm overflow-hidden mx-auto font-[sans-serif]">
            <div className="min-h-[256px]">
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={396} // Set appropriate width
                height={528} // Set appropriate height
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
