import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    return (
        <div className="post-container">
            <h1 class="head" style={{textAlign: "center"}}> List of Posts</h1>
        {posts.map((post) =>
            <PostItem post={post} key={post.id}/>
        )}
        </div>
    )
}

export default PostList;