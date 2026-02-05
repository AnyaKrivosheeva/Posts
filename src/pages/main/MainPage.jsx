import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../../components/Posts/Posts";
import Typo from "../../components/Typo/Typo";
import Container from "../../components/Сontainer/Container";
import { getLatestPosts } from '../../redux/slices/postsSlice';



export default function MainPage() {
    const postForView = useSelector((state) => state.posts.postForView);
    const latestPosts = useSelector((state) => state.posts.latestPosts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestPosts());
    }, []);

    return (
        <>
            <Container>
                {latestPosts &&
                    <>
                        <Typo>Свежие публикации</Typo>
                        <Posts posts={latestPosts} />
                    </>
                }
                {postForView &&
                    <>
                        <Typo>Последний просмотренный пост</Typo>
                        <Posts posts={[postForView]} />
                    </>
                }
            </Container>
        </>
    )
}