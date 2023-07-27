import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Author from "./author"

export default function section2() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://myblog-bk.onrender.com/api/post/posts'); // Make sure to use the correct API endpoint URL
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <section className='container mx-auto md:px-20 py-10'>
        <h1 className='font- bold text-4xl py-12 text-center'>Latest Post</h1>
    
        {/*grid colums*/}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    
    
    
    </section>
  )
}


function Post({ post }) {
  return (
    <div className='items'>
      <div className='images'>
        <Link href={`/post/${post._id}`}>
          <Image src={post.thumbnail.url} alt={post.title} width={400} height={300} className='rounded' />
        </Link>
      </div>
      <div className='info flex justify-center flex-col py-4'>
        <div className='cat'>
          {post.tags.map((tag, index) => (
            <Link key={index} href={`/search?tags=${tag}`}>
              <a className='text-orange-600 hover:text-orange-800'>{tag}</a>
            </Link>
          ))}
          <span className='text-gray-600 hover:text-gray-600'> - {new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        <div className='title'>
          <Link href={`/post/${post._id}`}>
            <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>{post.title}</a>
          </Link>
        </div>
        <p className='text-gray-500 py-3'>{post.content}</p>
        <Author />
      </div>
    </div>
  );
}