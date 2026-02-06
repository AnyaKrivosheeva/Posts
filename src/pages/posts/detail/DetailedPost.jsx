import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Typo from "../../../components/Typo/Typo";
import Container from "../../../components/Сontainer/Container";
import * as SC from "./styles";
import Link from "../../../components/Link/Link";
import { getPostById } from "../../../redux/slices/postsSlice";


export default function DetailedPost() {
    const { id } = useParams();

    const currentPost = useSelector((state) => state.posts.postForView);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostById(Number(id)));
    }, [id]);

    if (currentPost.loading) {
        return <Container>Loading...</Container>
    }

    if (!currentPost.post || !currentPost.post.hasOwnProperty('id')) {
        return <>Пост не найден</>
    }

    const { post } = currentPost;
    const image = post.image || "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg";

    return (
        <Container>
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both' }} />
            <SC.LinkWrapper>
                <Link to='/posts'>Обратно к публикациям</Link>
            </SC.LinkWrapper>
        </Container>
    )
}