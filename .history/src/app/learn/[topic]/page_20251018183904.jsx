"use client";

export default async function topic({useParams}){
    const {topic}= await useParams();

    return (
        <h1>topic detail {topic}</h1>
    )
}