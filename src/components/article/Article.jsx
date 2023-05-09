import "./article.css"

function Article({ blogImage, date, title }) {
   return (
      <div className="blog-container__article">
         <div className="blog-container__image">
            <img src={blogImage} alt="blog" />
         </div>

         <div className="blog-container__article-content">
            <div>
               <p>{date}</p>
               <h3>{title}</h3>
            </div>
            <p>Read Full Article</p>
         </div>
      </div>
   )
}

export default Article
