import MainLayout from "../../../common/layout/MainLayout";
import Posts from "../components/Post";
import usePosts from "../hooks/userPosts";

export default function MainFeed(){
    const posts = usePosts();

    function renderPosts(){
        return posts?.map((post) => {
            return <Posts post={post} key={post.id}/>
        })
    }

    return (
    <MainLayout>
        <main>
            <h1>All post</h1>
            {renderPosts()}
        </main>
        </MainLayout>
    );
}