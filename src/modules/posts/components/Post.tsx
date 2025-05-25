import type { PostType } from "../types/PostType";

export default function Posts({ post }: {post: PostType}) {
    console.log(post);
    return (
        <div>
            <h2>{post.title}</h2>
            {post.user && <span>{post.user.username}</span>}
            <p>{post.content}</p>
        </div>
    )
}