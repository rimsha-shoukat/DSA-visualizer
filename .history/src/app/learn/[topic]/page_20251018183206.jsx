'use server'
export default function topic({usearams}){
    const id = useParams();

    return (
        <h1>topic detail ${id}</h1>
    )
}