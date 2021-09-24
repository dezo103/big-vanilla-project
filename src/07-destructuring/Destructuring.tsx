import React from "react";

type StreetType = {
    title: string
}

type AddressType = {
    street: StreetType
}

type LessonsType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: AddressType
}


type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {


    return (
        <div>
            <h1>{title}</h1>
            <div>{props.car.model}</div>
            <div>{man.name}</div>
        </div>
    )
}

//деструктуризация массива
