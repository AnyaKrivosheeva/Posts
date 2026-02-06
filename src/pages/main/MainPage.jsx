import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../../components/Posts/Posts";
import Typo from "../../components/Typo/Typo";
import Container from "../../components/Сontainer/Container";
import { getLatestPosts } from '../../redux/slices/postsSlice';



export default function MainPage() {
    const { post } = useSelector((state) => state.posts.postForView);
    const { posts, loading } = useSelector((state) => state.posts.latestPosts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestPosts());
    }, []);

    return (
        <>
            <Container>
                {loading && <Container>Loading...</Container>}
                {posts &&
                    <>
                        <Typo>Свежие публикации</Typo>
                        <Posts posts={posts} />
                    </>
                }
                {post &&
                    <>
                        <Typo>Последний просмотренный пост</Typo>
                        <Posts posts={[post]} />
                    </>
                }
            </Container>
        </>
    )
}