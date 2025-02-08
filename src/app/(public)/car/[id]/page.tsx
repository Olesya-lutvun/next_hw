import { Metadata } from 'next';
import { SearchParams } from 'next/dist/server/request/search-params';
import * as React from 'react';

type PropsType = {
    params: Promise<{ id: string; }>;
    searchParams: Promise<SearchParams>;
};

export const generateMetadata = async ({ params }: PropsType): Promise<Metadata> => {
    const { id } = await params;

    return ({
        title: `Car page ${id}`,
    });
};

const CarPage: React.FC<PropsType> = async ({
   params,}) => {
    const { id } = await params;


    return (
        <div>
            Car page: {id}
        </div>
    );
};

export default CarPage;