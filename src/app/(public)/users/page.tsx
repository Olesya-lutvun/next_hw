import Link from "next/link";

const UserPage = () =>{
    return(
        <div>
            User page

            {[1, 2, 3, 4].map(x => (
                <div key={x}>
                    <span>User {x}</span>
                    <Link href={`/users/${x}`}>user detail</Link>
                </div>
            ))}

        </div>
    );
};
export default UserPage;
