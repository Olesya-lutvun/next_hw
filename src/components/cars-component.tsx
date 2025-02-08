import * as React from 'react';


import { CarItemComponent } from './car-item-component';
import {getAllCars} from "@/services/api.service";

export const CarsComponent: React.FC = async () => {
    const cars = await getAllCars(true);

    //console.log(cars);

    return (
        <div className='cars-component'>
            {
                cars.map(item => (
                    <CarItemComponent key={item.id} item={item} />
                ))
            }
        </div>
    );
};