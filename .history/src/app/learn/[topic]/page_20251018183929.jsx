"use client";
import { useParams } from 'next/navigation';

export default async function topic(){
    const params = await useParams();
    const {topic} 

    return (
        <h1>topic detail {topic}</h1>
    )
}