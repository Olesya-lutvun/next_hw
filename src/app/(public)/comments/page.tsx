import Link from "next/link";


const CommentPage = () => {
    return (
        <div>
            Comments page
            {[1, 2, 3, 4].map(x => (
                <div key={x}>
                    <span>Comment {x}</span>
                    <Link href={`/comments/${x}`}>comment detail</Link>
                </div>
            ))}
        </div>
    );
};
export default CommentPage;
