import Link from '../../Link/Link';
import * as SC from './styles';

export default function Post(props) {
    const {
        post,
    } = props;

    return (
        <SC.Post>
            <SC.Image src={post.image} alt={post.title} />
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Читать далее...</Link>
        </SC.Post>
    )
};