import Navbar from "./Navbar";
import Journal from "./Journal";
import data from "./data"

export default function Main(){
    const journalElements = data.map((destination)=>{
        return <Journal key={destination.id} {...destination} />
    })
    
    return (
        <>
            <Navbar />
            {journalElements}
        </>
    )
}