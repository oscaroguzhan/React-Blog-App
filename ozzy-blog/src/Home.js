import { useState } from "react";
import BlogList from "./Blogs";
const Home = () => {
    const [blogs, SetBlogs] = useState([
        {title:"My new Program", body: "React Javascript", author: "Ozzy", id:1},
        {title:"My favorite artist", body: "Blondie Bella", author: "Karin", id:2},
        {title:"Best action artist of the time", body: "p", author: "Ozzy", id:3},
        {title:"My favorites", body: "My family", author: "Karin", id:4}
    ])
    
    //let name = 'Mario';
    // IF YOU HAVE A PARAMETER IN YOUR FUNCTION YOU NEED TO WRAP THE FUNCTION INTO ANOTHER ANONYMS FUNCTION
    
    return (
      <div className="home">
          <BlogList blogs={blogs} title="All Blogs"/>
          <BlogList blogs={blogs.filter((blog) => blog.author === "Ozzy")} title="Ozzys Blogs"/>
          
      </div>  
    );
}
 
export default Home;