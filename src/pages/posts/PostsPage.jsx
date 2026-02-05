import Posts from "../../components/Posts/Posts";
import Typo from "../../components/Typo/Typo";
import Container from "../../components/Сontainer/Container";

const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
    },
    {
        id: 4,
        title: 'Post 4',
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
    },
    {
        id: 5,
        title: 'Post 5',
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg',
    },
];

export default function PostsPage() {
    return (
        <>
            <Typo>Публикации</Typo>
            <Container>
                <Posts posts={INITIAL_POSTS} />
            </Container>
        </>
    )
}