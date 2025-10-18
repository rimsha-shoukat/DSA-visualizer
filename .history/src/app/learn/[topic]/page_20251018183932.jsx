"use client";
import { useParams } from 'next/navigation';

export default async function topic(){
    const params = await useParams();
    const {topic} = para

    return (
        <h1>topic detail {topic}</h1>
    )
}