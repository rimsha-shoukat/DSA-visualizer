
export default async function topic({params}){
    const {id }= await params;

    return (
        <h1>topic detail ${id}</h1>
    )
}