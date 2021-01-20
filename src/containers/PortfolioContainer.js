import React, { useEffect, useState } from 'react'
import Parser from 'rss-parser'
import FeaturedPosts from '../components/FeaturedPosts'
import Portfolio from '../components/Portfolio'
import Pager from '../components/Pager'

function PortfolioContainer() {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    const parser = new Parser()

    const getBlogPostsFrom = (items, limit) => {

      let blogPosts = items.reduce((acc, item) => {
        
        let blogPost

        //filter out the item if it doesn't have a <figure> in it. blog posts do.
        if(item["content:encoded"].indexOf("<figure>") > -1) {
          blogPost = {}
          blogPost.title = item["title"]
          blogPost.url = item["link"]
          blogPost.pubDate = item["pubDate"]

          const content = new DOMParser().parseFromString(item["content:encoded"], 'text/html')
          const subtitle = content.querySelector('p').textContent //get the first paragraph
          if(subtitle.length < 100) blogPost.subtitle = subtitle //if it's short, it must be the subtitle

          const image = content.querySelector('figure').querySelector('img')//the image will always be the first image in the first figurenpm
          if(image) blogPost.imgUrl = image.src
        }

        if(blogPost) acc.push(blogPost)

        return acc
      }, [])

      if(blogPosts.length > limit) return blogPosts.slice(0, limit)//don't return more than the limit
      return blogPosts

    }

    const fetchPosts = async () => {
      const url = 'http://138.68.23.63:4050/medium'
      const feed = await parser.parseURL(url)
      const blogPosts = getBlogPostsFrom(feed.items, 5)
      setPosts(blogPosts)
    }

    fetchPosts()

  }, [])

  return (
    <div className="home">
      <main className="main">
        <h3 className="portfolio-header">Portfolio</h3>
        <Portfolio />
        <Pager />
      </main>
      <aside className="left">
        <h3 className="feature-header">Recent blog posts</h3>
        <FeaturedPosts posts={ posts } />
        <div className='blog-more'><a href=''>More blog posts...</a></div>
      </aside>
    </div>
  )
}

export default PortfolioContainer
