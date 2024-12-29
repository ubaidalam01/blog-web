"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { BsThreeDotsVertical } from "react-icons/bs";

const Disease = () => {
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
        <h1 className="text-4xl font-bold mt-4">HOW TO BRAND A DISEASE?</h1>
        <p className="text-lg font-sans mt-2">The incredible story behind the launch of a new pharmaceutical drug by A+B.</p>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full max-w-3xl p-4">
        <div className="relative bg-black overflow-hidden shadow-2x">
          <Image
            src="/Disease.jpeg"
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
    Ever wondered how public awareness campaigns shape perceptions about health? Branding a disease is an intricate process that involves creating a relatable identity, crafting compelling messages, and engaging audiences to inspire action. Dive into this guide to learn how communication strategies can drive awareness and change.
  </p>

  <h2 className="text-2xl font-bold p-4 mb-4">Understanding the Concept</h2>
  <p className="text-base text-gray-700 mb-4 border-l-4 border-black p-4 font-serif">
    "What does it mean to brand a disease?" It’s about making a health issue recognizable and relatable. From the iconic pink ribbon for breast cancer to global campaigns for malaria prevention, branding creates a visual and emotional connection that resonates with the public. Learn how these efforts translate awareness into action.
  </p>

  <h2 className="text-2xl font-bold mb-4 p-4">Crafting a Powerful Message</h2>
  <p className="text-base text-gray-700 p-4 mb-4 font-serif">
    The right message can make all the difference. Successful disease branding involves understanding the audience and addressing their fears, hopes, and motivations. Use simple, impactful language and visuals that encourage engagement. Whether it’s promoting vaccinations or lifestyle changes, a clear message can inspire trust and action.
  </p>

  <h2 className="text-2xl font-bold mb-4 p-4">Building Community Support</h2>
  <p className="text-3xl text-gray-700 p-4 border-l-4 border-black font-serif">
    “Together, we can make a difference.”
  </p>
  <p className="text-base text-gray-700 p-4 font-serif">
    Collaboration is key to impactful disease branding. Engage with healthcare providers, non-profits, and influencers to amplify your reach. Community events, social media campaigns, and storytelling can foster a sense of unity and shared purpose. The goal is to create a movement that drives awareness, prevention, and support.
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

export default Disease;
