import React from "react";

const PostItem = (props) => {

    return (
        <div>
            <div className="post-item">
                <h2>{props.post.title}</h2>
                <p>{props.post.body}</p>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default PostItem;