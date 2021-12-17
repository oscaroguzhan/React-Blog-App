const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handelDelete = () => {
        
    }
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
              <div className="blog-preview" key={blog.id}>
                  <h3>{ blog.title }</h3>
                  <p>Written by { blog.author }</p>
                  <button className="btn btn-warning" onClick={() => handelDelete(blog.id)}>Delete</button>
                  
              </div>
          ))}
        </div>
    );
}
 
export default BlogList;