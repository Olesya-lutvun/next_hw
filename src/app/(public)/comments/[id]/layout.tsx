import React from "react";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'IdCommentLayout metadata'
}
type Props = { children: React.ReactNode }


const IdCommentLayout = ({children}: Props) => {
    return (
        <>
            comments page component
            {children}
        </>
    );
};
export default IdCommentLayout