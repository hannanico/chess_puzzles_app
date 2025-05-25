import {useEffect, useState } from 'react';
import { type PostType } from '../types/PostType';
import type { UserType } from '../../users/types/UserType';

export default function usePosts() {
    const [posts, setPosts] = useState<PostType[]>();

    async function fetchPosts(){
        const postsRes = await fetch("/posts.json");
        const postsData = await postsRes.json() as PostType[];

        const usersRest = await fetch("/users.json");
        const usersData = await usersRest.json() as UserType[];

        postsData.forEach((post) => {
            const matchingUser = usersData.find((user) => user.id === post.userId);
            if (matchingUser) {
                post.user = matchingUser;
            }
        })

        setPosts(postsData);
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    return posts;
}