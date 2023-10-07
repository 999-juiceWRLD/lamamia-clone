'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';
import React from 'react'
import useSWR from 'swr';

const Dashboard = () => {

  const session = useSession();
  
  const router = useRouter();
  
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  
  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);
  if (session.status === 'loading') {
    return <p>Loading...</p>
  }
  
  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    const username = session.data.user.name
    console.log(session.data.user.name + ' called this')
    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title, desc, img, content, username
        })
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  }
  
  const handleDelete = async (id) => {
    console.log(id, 'to be deleted');
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
      mutate();
    } catch (err) {

    }
  }

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          { isLoading ? 
            'loading...'
            :
            data?.map(post => (
              <div key={post._id} className={styles.post}>
                <div className={styles.imgContainer}>
                  <Image src={post.image} alt='' width={200} height={100} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
              </div>
          ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add new Post</h1>
          <input type="text" placeholder='Title' className={styles.input} />
          <input type="text" placeholder='Desc' className={styles.input} />
          <input type="text" placeholder='Image' className={styles.input} />
          <textarea placeholder='Content' className={styles.textArea} cols={30} rows={10} />
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
}

export default Dashboard;