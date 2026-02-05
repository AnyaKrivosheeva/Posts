import Posts from "../../components/Posts/Posts";
import Typo from "../../components/Typo/Typo";
import Container from "../../components/Сontainer/Container";
import { useSelector } from "react-redux";

export default function PostsPage() {
    const posts = useSelector((state) => state.posts.posts);

    return (
        <>
            <Typo>Публикации</Typo>
            <Container>
                <Posts posts={posts} />
            </Container>
        </>
    )
}