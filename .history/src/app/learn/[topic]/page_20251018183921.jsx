"use client";
import { useParams } from 'next/navigation';

export default async function topic(){
    const param= await useParams();

    return (
        <h1>topic detail {topic}</h1>
    )
}