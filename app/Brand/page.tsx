"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { BsThreeDotsVertical } from "react-icons/bs";

const Brand = () => {
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
          <span className="text-xl hover:cursor-pointer">
            <BsThreeDotsVertical />
          </span>
        </div>
        <h1 className="text-4xl font-bold mt-4 text-black">THE UNBRANDED BRAND</h1>
        <p className="text-lg font-sans mt-2 text-black">Is generic the new unique?</p>
      </div>

      {/* Image Section */}
      <div className="mt-10 w-full max-w-3xl p-4">
        <div className="relative bg-black overflow-hidden shadow-2x">
          <Image
            src="/brand1.jpeg"
            alt="Brand"
            layout="responsive"
            width={640}
            height={600}
            className="object-cover"
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="w-full max-w-3xl mt-10 bg-white text-black">
        <p className="text-base text-gray-700 p-4 mb-4 font-serif">
        Welcome to your new blog! This is where you can connect with your readers and potential customers. Think of this as an ongoing conversation, where you share updates on your business, the latest trends, news, and much more. It&apos;s the perfect space to keep your audience informed and engaged while reflecting your brand&apos;s personality.
        </p>

        <h2 className="text-2xl font-bold p-4 mb-4">Design with Ease</h2>
        <p className="text-base text-gray-700 mb-4 border-l-4 border-black p-4 font-serif">
          &quot;Do you have a vision for your blog&apos;s design? Whether you&apos;re aiming for a trendy postcard look or something with a more editorial flair, there&apos;s a layout to fit your needs.&quot;
          Each blog layout is designed to be both stunning and functional, with built-in social features. Your readers can easily share your posts on platforms like Facebook and Twitter, see how many people have liked and commented, and more. With Wix, growing your online community has never been easier.
        </p>

        <h2 className="text-2xl font-bold mb-4 p-4">Create Relevant Content</h2>
        <p className="text-base text-gray-700 p-4 mb-4 font-serif">
          As you post content regularly, it&apos;s essential to keep your blog organized with categories that allow your readers to discover what interests them most. Each category page is fully customizable, so you can add a catchy title, a brief description, and a beautiful header image to make it truly yours. Don&apos;t forget to add hashtags (#vacation #dream #summer) throughout your posts. Hashtags can help broaden your audience and make it easier for readers to find related content. Go ahead, use hashtags to extend your reach!
        </p>

        <h2 className="text-2xl font-bold mb-4 p-4">Stun Your Readers</h2>
        <p className="text-3xl text-gray-700 p-4 border-l-4 border-black font-serif">“Be original, show off your style, and tell your story.”</p>
        <p className="text-base text-gray-700 p-4 font-serif">
          Blogging offers a voice to your site, giving your business personality and style. Whether you&apos;re a creative agency sharing exciting projects, a tech expert offering tips, or simply a brand with a message, blogging allows you to stand out. Spice up your posts with images, videos, and fun language to keep readers engaged. No matter your industry, blogging is an excellent way to communicate with your audience in a creative and fresh way.
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
            <p className="text-black">No comments yet. Be the first to comment!</p>
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

export default Brand;
