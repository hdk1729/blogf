import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Author from './author';
import Image from 'next/image';

export default function Section4() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (selectedTag) {
      fetchPostsByTag(selectedTag);
    }
  }, [selectedTag]);

  const fetchPostsByTag = async (tag) => {
    try {
      const response = await fetch(
        `https://myblog-bk.onrender.com/api/post/posts?tags=${tag}`
      );
      const data = await response.json();
      setPosts(data.posts);
      console.log(data.posts);
    } catch (error) {
      console.error('Error fetching posts by tag:', error);
    }
  };

  const tags = ['nature', 'adventure', 'health', 'travel', 'lifestyle', 'history', 'cooking', 'hiking', 'summer', 'recipes' ]; // Add more tags as needed

  return (
    <div className="container mx-auto md:px-20">
      <h1 className="font-bold text-4xl pb-12 mt-10 text-center">Tags</h1>

      {/* Tags Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {tags.map((tag) => (
          <TagCard
            key={tag}
            tag={tag}
            isSelected={selectedTag === tag}
            onSelect={() => setSelectedTag(tag)}
          />
        ))}
      </div>

      {/* Display Posts */}
      {selectedTag && (
        <div>
          <h2 className="font-bold text-2xl mt-8 mb-4">Posts with tag: {selectedTag}</h2>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

function TagCard({ tag, isSelected, onSelect }) {
  return (
    <div
      className={`bg-gray-200 p-2 rounded-lg cursor-pointer ${
        isSelected ? 'bg-blue-500 text-white' : ''
      }`}
      onClick={onSelect}
    >
      {tag}
    </div>
  );
}


function Post({ post }) {
  return (
    <div className='flex gap-5'>
      <div className='images flex flex-col justify-start'>
        <Link href={`/post/${post._id}`}>
          <Image
            src={post.thumbnail.url}
            alt={post.title}
            width={200}
            height={150}
            className='rounded'
          />
        </Link>
      </div>
      <div className='info flex justify-center flex-col'>
      <div className='cat'>
  {post.tags.map((tag, index) => (
    <span key={index}>
      <Link href={`/search?tags=${tag}`}>
        <span className='text-orange-600 hover:text-orange-800'>{tag}</span>
      </Link>
      {index < post.tags.length - 1 && ' | '}
    </span>
  ))}
  <span className='text-gray-600 hover:text-gray-600'>
    - {new Date(post.createdAt).toLocaleDateString()}
  </span>
</div>
        <div className='title'>
          <Link href={`/post/${post._id}`}>
            <span className='text-xl font-bold text-gray-800 hover:text-gray-600'>
              {post.title}
            </span>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}

