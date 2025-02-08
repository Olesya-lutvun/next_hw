'use server';

import { redirect } from "next/navigation";
import {saveCar} from "@/services/api.service";

export const saveCarAction = async (formData: FormData) => {
    const brand = formData.get('brand') as string;
    const year = formData.get('year') as string;
    const price = formData.get('price') as string;



    await saveCar({
        brand: brand,
        year: +year,
        price: +price,
    });

    redirect('/cars')
};