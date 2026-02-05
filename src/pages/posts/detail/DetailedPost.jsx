import { useParams } from "react-router-dom";
import { INITIAL_POSTS } from "../PostsPage";
import { useMemo } from "react";
import Typo from "../../../components/Typo/Typo";
import Container from "../../../components/Сontainer/Container";
import * as SC from "./styles";
import Link from "../../../components/Link/Link";


export default function DetailedPost() {
    const { id } = useParams();
    const currentPost = useMemo(() => {
        return INITIAL_POSTS.find((post) => post.id === Number(id));
    }, [id]);

    if (!currentPost) {
        return <>Пост не найден</>
    }

    return (
        <Container>
            <Typo>{currentPost.title}</Typo>
            <SC.Image src={currentPost.image} alt={currentPost.title} />
            <SC.Text>{currentPost.text}</SC.Text>
            <div style={{ clear: 'both' }} />
            <SC.LinkWrapper>
                <Link to='/posts'>Обратно к публикациям</Link>
            </SC.LinkWrapper>
        </Container>
    )
}