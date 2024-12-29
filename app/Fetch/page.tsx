"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const Fetch = () => {
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
        <h1 className="text-4xl font-bold mt-4">FETCH FESTIVAL BRLN 2023</h1>
        <p className="text-lg font-sans mt-2">
          See the full program for the upcoming festival. Early bird tickets are
          on sale now.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full max-w-3xl p-4">
        <div className="relative bg-black overflow-hidden shadow-2x">
          <Image
            src="/fetch.jpeg"
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
          Get ready to experience the vibrant energy of FETCH Festival BRLN
          2023! This iconic event brings together music, art, and culture in the
          heart of Berlin.Whether you&apos;re a music enthusiast or a lover of 
          contemporary art, this festival promises an unforgettable celebration
          of creativity and community.
        </p>

        <h2 className="text-2xl font-bold p-4 mb-4">A Lineup to Remember</h2>
        <p className="text-base text-gray-700 mb-4 border-l-4 border-black p-4 font-serif">
          &quot;Who&apos;s performing this year?&quot; From globally renowned headliners to
          emerging local talents, FETCH Festival BRLN 2023 offers a diverse
          lineup of artists across multiple genres. Enjoy electrifying
          performances, immersive DJ sets, and live bands that will keep you
          dancing from day to night.
        </p>

        <h2 className="text-2xl font-bold mb-4 p-4">
          Art Installations and Workshops
        </h2>
        <p className="text-base text-gray-700 p-4 mb-4 font-serif">
          Beyond music, the festival features interactive art installations and
          workshops led by industry professionals. Explore avant-garde designs,
          participate in creative sessions, and discover the stories behind the
          art. It&apos;s a perfect blend of inspiration and innovation for
          festival-goers.
        </p>

        <h2 className="text-2xl font-bold mb-4 p-4">Unite and Celebrate</h2>
        <p className="text-3xl text-gray-700 p-4 border-l-4 border-black font-serif">
          &ldquo;Join the movement and feel the rhythm of Berlin.&rdquo;
        </p>
        <p className="text-base text-gray-700 p-4 font-serif">
          FETCH Festival BRLN 2023 is more than just an event; it&apos;s a community.
          Meet like-minded individuals, share memorable moments, and immerse
          yourself in Berlin&apos;s dynamic cultural scene. From food trucks to
          pop-up shops, there&apos;s something for everyone to enjoy. Don&apos;t miss this
          chance to celebrate creativity and connection.
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

export default Fetch;
