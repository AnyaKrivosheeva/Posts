import Post from "./components/Post";
import * as SC from "./styles";

export default function Posts(props) {
    const {
        posts,
    } = props;

    return (
        <>
            <SC.Posts>
                {
                    posts.map((post) => (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ))
                }
            </SC.Posts>
        </>
    )

};