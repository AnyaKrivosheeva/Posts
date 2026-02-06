import { useEffect } from "react";
import Posts from "../../components/Posts/Posts";
import Typo from "../../components/Typo/Typo";
import Container from "../../components/Сontainer/Container";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlice";

export default function PostsPage() {
    const dispatch = useDispatch();
    const { posts, loading } = useSelector((state) => state.posts.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    if (!posts && loading) {
        return <Container>Loading...</Container>
    }

    if (!posts) {
        return <h1>404</h1>
    }

    return (
        <>
            <Typo>Публикации</Typo>
            <Container>
                <Posts posts={posts} />
            </Container>
        </>
    )
}