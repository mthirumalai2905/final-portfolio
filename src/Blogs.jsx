import React from 'react'
import './App.css'

const Blogs = () => {

    const redirectToSocial = (socialLink) => {
        window.location.href = socialLink;
      };

  return (
    <div>
      
    <h2 className='blogs-headline'>I Write At</h2>
    <div className='blogs-container'>
     <div className='blogs-wrapper'>
     <div href="" className='blogs-card'target='_blank' onClick={() => redirectToSocial('https://tthirruu.hashnode.dev/mongoshell-with-postman')}>
     <div className='blogs-card-gardient'></div>
     <div className='blogs-card-links' ></div>
     <h3 className='blogs-card-name'>Mongo-shell with Postman .</h3>
     <p>Dec 15, 2023 &nbsp; 3 min read</p>
     <p>Tap On Me & Read</p>
     <div className='blogs-card-languages'></div>
     </div>
     <div href="" className='blogs-card'target='_blank' onClick={() => redirectToSocial('https://tthirruu.hashnode.dev/coding-vs-programming?source=more_articles_bottom_blogs')}>
     <div className='blogs-card-gardient'></div>
     <div className='blogs-card-links'></div>
     <h3 className='blogs-card-name'>Coding vs Programming .</h3>
     <p>Dec 15, 2023 &nbsp; 3 min read</p>
     <p>Tap On Me & Read</p>
     <div className='blogs-card-languages'></div>
     </div>
     <div href="" className='blogs-card'target='_blank' onClick={() => redirectToSocial('https://tthirruu.hashnode.dev/csr-vs-ssr')}>
     <div className='blogs-card-gardient'></div>
     <div className='blogs-card-links'></div>
     <h3 className='blogs-card-name'>CSR vs SSR .</h3>
     <p>Dec 15, 2023 &nbsp; 3 min read</p>
     <p>Tap On Me & Read</p>
     <div className='blogs-card-languages'></div>
     </div>
     <div href="" className='blogs-card'target='_blank' onClick={() => redirectToSocial('https://tthirruu.hashnode.dev/my-first-annual-leetcode-badge')}>
     <div className='blogs-card-gardient'></div>
     <div className='blogs-card-links'></div>
     <h3 className='blogs-card-name'>My First Annnual Leetcode Badge .</h3>
     <p>Dec 15, 2023 &nbsp; 3 min read</p>
     <p>Tap On Me & Read</p>
     <div className='blogs-card-languages'></div>
     </div>
     <div href="" className='blogs-card'target='_blank' onClick={() => redirectToSocial('https://tthirruu.hashnode.dev/exploring-the-power-duo-expressjs-vs-nodejs')}>
     <div className='blogs-card-gardient'></div>
     <div className='blogs-card-links'></div>
     <h3 className='blogs-card-name'>Exploring The Power Duo .</h3>
     <p>Dec 15, 2023 &nbsp; 3 min read</p>
     <p>Tap On Me & Read</p>
     <div className='blogs-card-languages'></div>
     </div>
     <div href="" className='blogs-card'target='_blank' onClick={() => redirectToSocial('https://tthirruu.hashnode.dev/creating-a-signup-login-page-react-node-express-mysql')}>
     <div className='blogs-card-gardient'></div>
     <div className='blogs-card-links'></div>
     <h3 className='blogs-card-name'>Connecting Frontend And Backend .</h3>
     <p>Dec 15, 2023 &nbsp; 3 min read</p>
     <p>Tap On Me & Read</p>
     <div className='blogs-card-languages'></div>
     </div>
     </div>

     
     </div>

    </div>
  )
}

export default Blogs
