import Link from "next/link";


const PostPage = () => {
    return (
        <div>
            Post page
            {[1, 2, 3, 4].map(x => (
                <div key={x}>
                    <span>Post {x}</span>
                    <Link href={`/posts/${x}`}>post detail</Link>
                </div>
            ))}

        </div>
    );
};
export default PostPage;
