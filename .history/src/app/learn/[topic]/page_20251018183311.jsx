
export default function topic({params}){
    const id = params();

    return (
        <h1>topic detail ${id}</h1>
    )
}