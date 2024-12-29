"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const Dream1 = () => {
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
    <div className="min-h-screen flex flex-col items-center py-16 bg-white">
      {/* Blog Header */}
      <div className="text-black w-full max-w-3xl p-4 shadow-2x">
        <div className="flex justify-between items-center">
          <p className="text-sm text-black">Jun 12, 2023 • 2 min read</p>
          <span className="text-xl hover:cursor-pointer">
            <BsThreeDotsVertical />
          </span>
        </div>
        <h1 className="text-4xl font-bold mt-4 text-black">A SURREAL CONCRETE DREAM</h1>
        <p className="text-lg font-sans mt-2 text-black">
          Imagine a universe made with concrete alone. Arla Page explores the strength of cement in a series of 3D images and videos.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full max-w-3xl p-4">
        <div className="relative bg-black overflow-hidden shadow-2x">
          <Image
            src="/dream.jpeg"
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
        <p className="text-base text-black p-4 mb-4 font-serif">
          Dive into the heartfelt journey of music and connection with Kay Van Hans in &quot;FYI: I&apos;m About to Love You.&quot; This exclusive interview reveals the inspiration behind the lyrics, the creative process, and the emotions that brought this iconic song to life.
        </p>

        <h2 className="text-2xl font-bold p-4 mb-4 text-black">The Meaning Behind the Lyrics</h2>
        <p className="text-base text-black mb-4 border-l-4 border-black p-4 font-serif">
          &quot;What inspired those unforgettable words?&quot; Kay delves into the personal experiences that shaped the song. From fleeting moments of connection to profound realizations about love, every lyric tells a story that resonates deeply with listeners worldwide.
        </p>

        <h2 className="text-2xl font-bold mb-4 p-4 text-black">The Creative Journey</h2>
        <p className="text-base text-black p-4 mb-4 font-serif">
          Writing and recording &quot;FYI: I&apos;m About to Love You&quot; was both a challenge and a catharsis for Kay. The interview explores the late-night studio sessions, the collaboration with top producers, and the raw honesty that made this track stand out. Learn how the synergy between creativity and emotion brought this masterpiece to fruition.
        </p>

        <h2 className="text-2xl font-bold mb-4 p-4 text-black">A Universal Love Story</h2>
        <p className="text-3xl text-black p-4 border-l-4 border-black font-serif">
          &ldquo;Music is the language of love, and this song speaks volumes.&rdquo;
        </p>
        <p className="text-base text-black p-4 font-serif">
          In this candid conversation, Kay shares how &quot;FYI: I&apos;m About to Love You&quot; became a symbol of connection and hope for fans around the globe. Whether it&apos;s through heartfelt ballads or energetic anthems, Kay&apos;s music continues to inspire. Step into the world of a visionary artist and feel the love in every note.
        </p>
      </div>

      {/* Comment Section */}
      <div className="w-full max-w-3xl mt-10 bg-white p-4">
        <h3 className="text-2xl font-bold mb-4 text-black">Comments</h3>

        {/* Input for new comment */}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 outline-none border-b-2 border-black mb-4"
          placeholder="Write a comment..."
        ></textarea>
        <button
          onClick={addComment}
          className="px-9 border-black border-2 py-2 text-black hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          Add Comment
        </button>

        {/* Display Comments */}
        <div className="mt-4 text-black">
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

export default Dream1;
