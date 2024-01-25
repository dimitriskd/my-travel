import location from "./assets/location.svg"

export default function Journal(props) {
    console.log(props)
    return(
        <section className="card">
            <img className="card--img" src={props.imageUrl} alt="" />
            <div className="card--details">
                <span className="card--info">
                    <img className="location" src={ location } alt="" />
                    <p className="card--country">{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </span>
                <h1 className="card--title">{props.title}</h1>
                <span className="card--dates">
                    <h2 className="card--date">{props.startDate}</h2>
                    -
                    <h2 className="card--date">{props.endDate}</h2>
                </span>
                <p className="card--description">{props.description}</p>
            </div>
        </section>
    )
}