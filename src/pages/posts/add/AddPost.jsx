import PostForm from '../components/PostForm/PostForm';
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/slices/postsSlice";


export default function AddPost() {
    const dispatch = useDispatch();

    const onSubmitForm = (formValues) => {
        dispatch(addPost(formValues));
    };

    return (
        <PostForm title="Добавление нового поста" onSubmitForm={onSubmitForm} />
    )
}