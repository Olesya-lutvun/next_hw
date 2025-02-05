import React from "react";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'UserLayout metadata'
}
type Props = { children: React.ReactNode }


const UserLayout = ({children}: Props) => {
    return (
        <>
            <hr/>
            user layout
            {children}
            <hr/>
        </>
    );
};
export default UserLayout;