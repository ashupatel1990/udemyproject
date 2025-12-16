import * as React from 'react';
import blogData from '@/data/blog.json';
import Blogitem from './Item/BlogItem';

const Blog = () => {
  return (
    <section className="list-blog three-col lg:mt-25 sm:mt-16 mt-10 pb-25">
        <div className="container">
            <h3 className="heading3 text-center">Latest News</h3>
            <div className="list grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
                {
                    blogData.slice(0,3).map((item, index) => (
                        <Blogitem data={item} key={index} number={index} /> 
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Blog;