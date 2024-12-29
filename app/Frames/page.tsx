"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const Frames = () => {
  // Define the state for comments and new comment input
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Define the state for showing and hiding the delete dropdown
  const [showDeleteIndex, setShowDeleteIndex] = useState<number | null>(null);

  // Function to handle adding a new comment
  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(""); // Reset the comment input field
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
        <h1 className="text-4xl font-bold mt-4">365 DAYS. 365 FRAMES.</h1>
        <p className="text-lg font-sans mt-2">
          What can we learn from Matthew Soja&apos;s latest work? Shots from the same location in Oslo for one whole year, every single day.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full max-w-3xl p-4">
        <div className="relative bg-black overflow-hidden shadow-2x">
          <Image
            src="/frames.jpeg"
            alt="Brand"
            layout="responsive"
            width={640}
            height={600}
            className="object-cover"
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="w-full max-w-3xl mt-10 bg-white">
        <p className="text-base text-gray-700 p-4 mb-4 font-serif">
          What if you could capture every single day in a frame? &quot;365 Days. 365 Frames.&quot; is a journey into the extraordinary moments hidden in the ordinary. From sunrises to celebrations, this project invites you to see life through a different lens—one day, one frame at a time.
        </p>

        <h2 className="text-2xl font-bold p-4 mb-4">The Inspiration Behind the Project</h2>
        <p className="text-base text-gray-700 mb-4 border-l-4 border-black p-4 font-serif">
          &quot;What inspired this creative endeavor?&quot; It started with a simple idea: to celebrate life&apos;s fleeting moments by capturing one frame each day. From candid snapshots to meticulously planned shots, these frames tell a story of resilience, beauty, and connection. Explore how each image becomes a piece of the larger narrative.
        </p>

        <h2 className="text-2xl font-bold mb-4 p-4">Turning Moments into Art</h2>
        <p className="text-base text-gray-700 p-4 mb-4 font-serif">
          Each frame is more than a photograph&mdash;it&apos;s a reflection of time and emotion. From the colors of a quiet morning to the energy of a bustling city, the project transforms everyday scenes into stunning visual art. Discover how to find beauty in the mundane and turn your daily life into a gallery-worthy collection.
       </p>
        <h2 className="text-2xl font-bold mb-4 p-4">Share Your Story</h2>
        <p className="text-3xl text-gray-700 p-4 border-l-4 border-black font-serif">
          &ldquo;One frame. One story. Every day.&rdquo;
        </p>
        <p className="text-base text-gray-700 p-4 font-serif">
          Join the movement and start your own &quot;365 Days. 365 Frames.&quot; project. Share your journey on social media, connect with others who are embracing this creative challenge, and celebrate the beauty of the everyday. It&apos;s not just about photography—it&apos;s about seeing life in a new way and inspiring others to do the same.
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
              <div
                key={index}
                className="flex justify-between items-center p-2 border-b border-gray-200"
              >
                <p>{comment}</p>
                <div className="relative">
                  <button
                    onClick={() =>
                      setShowDeleteIndex(
                        index === showDeleteIndex ? null : index
                      )
                    }
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

export default Frames;
