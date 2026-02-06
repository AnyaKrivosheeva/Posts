import Link from '../../Link/Link';
import * as SC from './styles';

export default function Post(props) {
    const {
        post,
    } = props;

    const image = post.image || "https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg";

    return (
        <SC.Post>
            <SC.Image src={image} alt={post.title} />
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Читать далее...</Link>
        </SC.Post>
    )
};