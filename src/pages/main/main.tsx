import {getDocs, collection} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Post {
    id: string;
    title: string;
    description: string;
    username: string;
    userId: string;
}

export const Main = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const results = await getDocs(postsRef);
        const postsData = results.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPostsList(postsData as Post[]);
    }


    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h1>Main Page</h1>
            {postsList?.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
}
