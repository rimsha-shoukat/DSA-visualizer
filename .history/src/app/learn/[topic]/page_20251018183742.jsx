"use client";
export default async function topic({useParams}){
    const {topic}= await params;

    return (
        <h1>topic detail {topic}</h1>
    )
}