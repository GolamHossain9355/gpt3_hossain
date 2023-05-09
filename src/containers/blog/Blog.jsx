import { Article } from "../../components"

import "./blog.css"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"

function Blog() {
   return (
      <div className="blog section__padding" id="blog">
         <div className="blog__heading">
            <h1 className="gradient__text">
               A lot is happening, We are blogging about it.
            </h1>
         </div>

         <div className="blog-container">
            <div className="blog-container__groupA">
               <Article
                  blogImage={blog01}
                  date="Sep 26, 2021"
                  title="GPT-3 and Open  AI is the future. Let us explore how it is?"
               />
            </div>

            <div className="blog-container__groupB">
               <Article
                  blogImage={blog02}
                  date="Sep 26, 2021"
                  title="GPT-3 and Open  AI is the future. Let us explore how it is?"
               />
               <Article
                  blogImage={blog03}
                  date="Sep 26, 2021"
                  title="GPT-3 and Open  AI is the future. Let us explore how it is?"
               />
               <Article
                  blogImage={blog04}
                  date="Sep 26, 2021"
                  title="GPT-3 and Open  AI is the future. Let us explore how it is?"
               />
               <Article
                  blogImage={blog05}
                  date="Sep 26, 2021"
                  title="GPT-3 and Open  AI is the future. Let us explore how it is?"
               />
            </div>
         </div>
      </div>
   )
}

export default Blog
