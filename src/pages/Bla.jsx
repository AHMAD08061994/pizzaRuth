import { useEffect, useState } from "react";
import axios from "axios";


function Bla() {

    const [posts, setPosts] = useState([]);

    const data = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // console.log(response);
            const dados = response.data;
            setPosts(dados);
        }
        catch (error) {
            console.log(error);
        }
        
    }

    
    
    useEffect(() => {
        data();
    }, [])

    return (
        <div>
            
            <h1>Posts</h1>
            <br />
            <ul>
                {posts.map( post =>
                    <li key={post.id}>{post.title}</li>
                    )}
            </ul>
        </div>
    )
}

export default Bla