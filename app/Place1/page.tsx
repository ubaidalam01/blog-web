"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const Place = () => {
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
        <h1 className="text-4xl font-bold mt-4">20 MUSEUMS YOU SHOULD<br/> VISIT AT LEAST ONCE</h1>
        <p className="text-lg font-sans mt-2">
        The full list includes 10 cities in 8 different countries.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full max-w-3xl p-4">
        <div className="relative bg-black overflow-hidden shadow-2x">
          <Image
            src="/visit.jpeg"
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
    Museums are the custodians of history, culture, and art. &quot;20 Museums You Should Visit at Least Once&quot; is your guide to exploring the world's most iconic and inspiring museums. From ancient artifacts to modern masterpieces, each museum offers a unique window into the past and the present.
  </p>

  <h2 className="text-2xl font-bold p-4 mb-4">Why Visit These Museums?</h2>
  <p className="text-base text-gray-700 mb-4 border-l-4 border-black p-4 font-serif">
    &quot;What makes these museums special?&quot; Each of these twenty museums has been selected for its unparalleled collections, architectural beauty, and cultural significance. They are spaces where stories come to life, sparking curiosity and inspiring a deeper appreciation for the world around us.
  </p>

  <h2 className="text-2xl font-bold mb-4 p-4">Unmissable Highlights</h2>
  <p className="text-base text-gray-700 p-4 mb-4 font-serif">
    Whether it's the enigmatic Mona Lisa at the Louvre, the awe-inspiring dinosaur skeletons at the American Museum of Natural History, or the cutting-edge exhibitions at the Guggenheim, these museums house treasures that captivate visitors of all ages. Discover the must-see exhibits that make each visit unforgettable.
  </p>

  <h2 className="text-2xl font-bold mb-4 p-4">Plan Your Museum Adventures</h2>
  <p className="text-3xl text-gray-700 p-4 border-l-4 border-black font-serif">
    &ldquo;Expand your horizons and step into a world of wonder.&rdquo;
  </p>
  <p className="text-base text-gray-700 p-4 font-serif">
    Start planning your museum bucket list today. From Europe to Asia, and North America to Australia, these museums are waiting to be explored. Whether you prefer history, art, or science, there’s something for everyone. Don’t just read about history—experience it up close and personal.
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

export default Place;
