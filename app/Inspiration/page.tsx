"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { BsThreeDotsVertical } from "react-icons/bs";

const Inspiration = () => {
  // Define the state for comments and new comment input
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  
  // Define the state for showing and hiding the delete dropdown
  const [showDeleteIndex, setShowDeleteIndex] = useState<number | null>(null);

  // Function to handle adding a new comment
  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(''); // Reset the comment input field
    }
  };

  // Function to handle deleting a comment
  const deleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-16">
      {/* Blog Header */}
      <div className="text-black w-full max-w-3xl p-4 shadow-2x">
        <div className="flex justify-between items-center">
          <p className="text-sm">Jun 12, 2023 • 2 min read</p>
          <span className="text-xl hover:cursor-pointer">
            <BsThreeDotsVertical />
          </span>
        </div>
        <h1 className="text-4xl font-bold mt-4">SEEKING INSPIRATION? 15 <br/>RESOURCES THAT WILL <br/>SURPRISE YOU</h1>
        <p className="text-lg font-sans mt-2">From mini art galleries to hidden street.</p>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full max-w-3xl p-4">
        <div className="relative bg-black overflow-hidden shadow-2x">
          <Image
            src="/inspire.jpeg"
            alt="Brand"
            layout="responsive"
            width={640}
            height={400}
            className="object-cover"
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="w-full max-w-3xl mt-10 bg-white">
  <p className="text-base text-gray-700 p-4 mb-4 font-serif">
    Feeling stuck or uninspired? Discover 15 incredible resources that can ignite your creativity. From thought-provoking podcasts to visually stunning art platforms, these tools are here to energize your mind and spark new ideas. Dive into this treasure trove and let your imagination flourish.
  </p>

  <h2 className="text-2xl font-bold p-4 mb-4">Podcasts That Spark Ideas</h2>
  <p className="text-base text-gray-700 mb-4 border-l-4 border-black p-4 font-serif">
    "Ever wondered how a simple conversation could light up your creative side?" Explore engaging podcasts that delve into creativity, problem-solving, and innovation. Featuring hosts from diverse backgrounds, these shows challenge conventional thinking and offer fresh perspectives. Perfect for commutes or downtime, they’re bound to inspire your next big project.
  </p>

  <h2 className="text-2xl font-bold mb-4 p-4">Art Platforms for Visual Inspiration</h2>
  <p className="text-base text-gray-700 p-4 mb-4 font-serif">
    Online art communities are goldmines for creativity. Browse collections of digital art, photography, and graphic design that push boundaries. Curated galleries and emerging artist features make these platforms a must-visit for anyone seeking visual stimulation. Remember to save and organize your favorite pieces for quick inspiration whenever you need it.
  </p>

  <h2 className="text-2xl font-bold mb-4 p-4">Uncover Hidden Gems</h2>
  <p className="text-3xl text-gray-700 p-4 border-l-4 border-black font-serif">
    “Challenge yourself to look beyond the usual.”
  </p>
  <p className="text-base text-gray-700 p-4 font-serif">
    Creativity thrives when you step out of your comfort zone. Visit local art shows, try out niche online forums, or even explore historical archives. These unconventional sources can offer fresh insights and fuel unique projects. Remember, inspiration can come from the most unexpected places—you just have to be open to it.
  </p>
</div>


      {/* Comment Section */}
      <div className="w-full max-w-3xl mt-10 bg-white p-4">
        <h3 className="text-2xl font-bold mb-4">Comments</h3>

        {/* Input for new comment */}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 outline-none border-b-2 border-black mb-4 "
          placeholder="Write a comment..."
        ></textarea>
        <button
          onClick={addComment}
          className="px-9 border-black border-2 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          Add Comment
        </button>

        {/* Display Comments */}
        <div className="mt-4">
          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-b border-gray-200">
                <p>{comment}</p>
                <div className="relative">
                  <button
                    onClick={() => setShowDeleteIndex(index === showDeleteIndex ? null : index)}
                    className="text-red-500 hover:cursor-pointer"
                  >
                    <BsThreeDotsVertical />
                  </button>
                  {/* Delete Option Dropdown */}
                  {showDeleteIndex === index && (
                    <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md">
                      <button
                        onClick={() => deleteComment(index)}
                        className="text-red-500 px-4 py-2 hover:bg-gray-100"
                      >
                        Delete Comment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
