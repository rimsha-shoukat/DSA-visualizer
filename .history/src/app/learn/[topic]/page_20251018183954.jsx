"use client";
import { useParams } from 'next/navigation';

export default function topic(){
    const params = await useParams();
    const {topic} = params;

    return (
        <h1>topic detail {topic}</h1>
    )
}