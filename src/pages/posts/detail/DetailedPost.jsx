import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Typo from "../../../components/Typo/Typo";
import Container from "../../../components/Сontainer/Container";
import * as SC from "./styles";
import Link from "../../../components/Link/Link";
import { deletePost, getPostById, showPost } from "../../../redux/slices/postsSlice";


export default function DetailedPost() {
    const { id } = useParams();

    const { posts } = useSelector((state) => state.posts.posts);
    const currentPost = useSelector((state) => state.posts.postForView);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [postForDelete, setPostForDelete] = useState(null);

    const onDeletePost = () => {
        dispatch(deletePost(postForDelete));

        setPostForDelete(null);

        navigate('/posts');
    };

    useEffect(() => {
        const intId = Number(id);
        const foundedPost = posts ? posts.find((post) => post.id === intId) : undefined;

        if (foundedPost) {
            dispatch(showPost(foundedPost));
        } else {
            dispatch(getPostById(intId));
        }
    }, [id, posts, dispatch]);

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
            {postForDelete &&
                <SC.ModalWrapper>
                    <SC.Modal>
                        <SC.ModalText>Вы точно уверены, что хотите удалить публикацию c ID - {postForDelete.id}?</SC.ModalText>
                        <SC.ModalContent>
                            <SC.DeleteButton onClick={onDeletePost}>Да</SC.DeleteButton>
                            <button onClick={() => setPostForDelete(null)}>Нет</button>
                        </SC.ModalContent>
                    </SC.Modal>
                </SC.ModalWrapper>
            }
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <div style={{ clear: 'both' }} />
            <SC.LinkWrapper>
                <Link to='/posts'>Обратно к публикациям</Link>
                {posts && <Link to={`/posts/${post.id}/edit`}>Редактировать пост</Link>}
                {posts && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>}
            </SC.LinkWrapper>
        </Container>
    )
}