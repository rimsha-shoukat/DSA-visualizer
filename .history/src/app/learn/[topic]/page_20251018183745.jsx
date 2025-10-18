"use client";
export default async function topic({useParams}){
    const {topic}= await arams;

    return (
        <h1>topic detail {topic}</h1>
    )
}