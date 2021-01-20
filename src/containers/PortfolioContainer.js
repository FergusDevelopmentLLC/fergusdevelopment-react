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
        <ul>
          <li><h4><a href="https://medium.com/@will-carter/a-medium-slice-430c413adfb9?source=rss-d569880f50b6------2">A Medium Slice</a></h4><div class="blog-subtitle"><a href="https://medium.com/@will-carter/a-medium-slice-430c413adfb9?source=rss-d569880f50b6------2">CORS workaround to consume RSS in a React&nbsp;App</a></div><div class="blog-date">Jan 18, 2021</div><a href="https://medium.com/@will-carter/a-medium-slice-430c413adfb9?source=rss-d569880f50b6------2"><img src="https://cdn-images-1.medium.com/max/859/1*vZN_v070UlW9h0fuUdaa8w.png" alt="A Medium Slice" /></a></li>
          <li><h4><a href="https://medium.com/@will-carter/community-mojo-b989517e3c7e?source=rss-d569880f50b6------2">Community Mojo</a></h4><div class="blog-subtitle"><a href="https://medium.com/@will-carter/community-mojo-b989517e3c7e?source=rss-d569880f50b6------2">Community Building using React Native and Firebase&nbsp;noSQL</a></div><div class="blog-date">Jan 11, 2021</div><a href="https://medium.com/@will-carter/community-mojo-b989517e3c7e?source=rss-d569880f50b6------2"><img src="https://cdn-images-1.medium.com/max/1024/1*k6ZR4qmtcvnPPUN7zkLwRA.png" alt="Community Mojo" /></a></li>
          <li><h4><a href="https://medium.com/@will-carter/javascript-closures-ba64b241ec68?source=rss-d569880f50b6------2">JavaScript Closures</a></h4><div class="blog-subtitle"><a href="https://medium.com/@will-carter/javascript-closures-ba64b241ec68?source=rss-d569880f50b6------2">Part 1: The&nbsp;Basics</a></div><div class="blog-date">Jan 4, 2021</div><a href="https://medium.com/@will-carter/javascript-closures-ba64b241ec68?source=rss-d569880f50b6------2"><img src="https://cdn-images-1.medium.com/max/800/1*-dlQyugUOFTrkyOM5la_SQ.png" alt="JavaScript Closures" /></a></li>
          <li><h4><a href="https://medium.com/@will-carter/truthy-and-falsey-values-ae3c49cdbfa9?source=rss-d569880f50b6------2">Truthy and Falsey values</a></h4><div class="blog-subtitle"><a href="https://medium.com/@will-carter/truthy-and-falsey-values-ae3c49cdbfa9?source=rss-d569880f50b6------2">How does JavaScript compare to&nbsp;Ruby?</a></div><div class="blog-date">Dec 21, 2020</div><a href="https://medium.com/@will-carter/truthy-and-falsey-values-ae3c49cdbfa9?source=rss-d569880f50b6------2"><img src="https://cdn-images-1.medium.com/max/1024/1*PvtOVNzjmNflhlKz_r3v8A.png" alt="Truthy and Falsey values" /></a></li>
          <li><h4><a href="https://medium.com/@will-carter/javascript-symbols-178948780ccd?source=rss-d569880f50b6------2">JavaScript Symbols</a></h4><div class="blog-subtitle"><a href="https://medium.com/@will-carter/javascript-symbols-178948780ccd?source=rss-d569880f50b6------2">Shedding light on a newer JavaScript primitive</a></div><div class="blog-date">Dec 21, 2020</div><a href="https://medium.com/@will-carter/javascript-symbols-178948780ccd?source=rss-d569880f50b6------2"><img src="https://cdn-images-1.medium.com/max/1024/1*6zYxdvxwllYoLoeuAKaOMw.png" alt="JavaScript Symbols" /></a></li>
        </ul>        
        <div className='blog-more'><a href="https://will-carter.medium.com/">More blog posts...</a></div>
      </aside>
    </div>
  )
}

export default PortfolioContainer
{/* <FeaturedPosts posts={ posts } /> */}
