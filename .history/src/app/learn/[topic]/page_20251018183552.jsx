
export default async function topic({params}){
    const {topic}= await params;

    return (
        <h1>topic detail ${topic}</h1>
    )
}