import React from "react";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'IdPostLayout metadata'
}
type Props = { children: React.ReactNode }


const IdPostLayout = ({children}: Props) => {
    return (
        <>
            Post page
            {children}
        </>
    );
};
export default IdPostLayout