import { useEffect } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = ([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(ref => ref.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl">Blog: </h2>
        </div>
    );
};

export default Blogs;