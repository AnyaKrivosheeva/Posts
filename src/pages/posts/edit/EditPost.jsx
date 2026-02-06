import { useParams } from "react-router-dom";
import PostForm from "../components/PostForm/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../../redux/slices/postsSlice";
import Container from "../../../components/Сontainer/Container";


export default function EditPost() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts.posts);

    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues));
    };

    if (!posts) {
        return <Container>Пост не найден</Container>
    }

    const foundedPost = posts.find((post) => post.id === Number(id));

    return (
        <PostForm title={`Редактирование поста -${id} `} onSubmitForm={onSubmitForm} defaultValues={foundedPost} />
    )
}