"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { BsThreeDotsVertical } from "react-icons/bs";

const Dona = () => {
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
    <div className="min-h-screen flex flex-col items-center py-16 bg-white">
      {/* Blog Header */}
      <div className="text-black w-full max-w-3xl p-4 shadow-2x">
        <div className="flex justify-between items-center">
          <p className="text-sm">Jun 12, 2023 • 2 min read</p>
          <span className="text-xl hover:cursor-pointer text-black">
            <BsThreeDotsVertical />
          </span>
        </div>
        <h1 className="text-4xl font-bold mt-4 text-black">73 QUESTIONS WITH DONNA <br/>FAY</h1>
        <p className="text-lg font-sans mt-2 text-black">The founder of FAR-FAY, NYC-based design studio.</p>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full max-w-3xl p-4">
        <div className="relative bg-black overflow-hidden shadow-2x">
          <Image
            src="/donna.jpeg"
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
          Get to know Donna Fay like never before! In this candid session, she answers 73 intriguing questions about her life, career, and creative process. From her morning routine to her biggest inspirations, dive deep into the thoughts and experiences that shape her world.
        </p>

        <h2 className="text-2xl font-bold p-4 mb-4 text-black">Her Creative Journey</h2>
        <p className="text-base text-gray-700 mb-4 border-l-4 border-black p-4 font-serif">
          &quot;What fuels your creativity, Donna?&quot; she shares insights into the moments and experiences that have defined her artistic career. From her favorite childhood memories to the challenges she&apos;s overcome, every answer reveals a new layer of her personality and passion.
        </p>

        <h2 className="text-2xl font-bold mb-4 p-4 text-black">Life Beyond Work</h2>
        <p className="text-base text-gray-700 p-4 mb-4 font-serif">
          When she&apos;s not creating, Donna loves exploring nature, cooking up new recipes, and spending time with her close-knit family. In this segment, she answers questions about her favorite books, travel destinations, and what she values most in life. Get a glimpse into the heart of her everyday experiences.
        </p>

        <h2 className="text-2xl font-bold mb-4 p-4 text-black">Advice for Aspiring Creatives</h2>
        <p className="text-3xl text-gray-700 p-4 border-l-4 border-black font-serif">
          &ldquo;Believe in your vision and never stop learning.&rdquo;
        </p>
        <p className="text-base text-gray-700 p-4 font-serif">
          Donna shares valuable advice for those looking to follow in her footsteps. From staying authentic to embracing failure as part of the growth process, her answers are both inspiring and practical. Whether you&apos;re an artist, writer, or entrepreneur, her words will leave you motivated to chase your dreams.
        </p>
      </div>

      {/* Comment Section */}
      <div className="w-full max-w-3xl mt-10 bg-white p-4">
        <h3 className="text-2xl font-bold mb-4 text-black">Comments</h3>

        {/* Input for new comment */}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 outline-none border-b-2 border-black mb-4 "
          placeholder="Write a comment..."
        ></textarea>
        <button
          onClick={addComment}
          className="px-9 border-black border-2 py-2 text-black hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          Add Comment
        </button>

        {/* Display Comments */}
        <div className="mt-4">
          {comments.length === 0 ? (
            <p classname="text-black">No comments yet. Be the first to comment!</p>
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

export default Dona;
