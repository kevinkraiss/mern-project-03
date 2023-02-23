// import ApiButton from './apiButton'


const ApiListItem=({restaurantResult})=>{
    console.log(restaurantResult)

    //const{}=restaurantResults //{name,location,address}

    return(
        <li className="list-group-item d-flex justify-content-between">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    <a href=""target="_blank">
                        {/* {restaurantResult.menuUrl} */}
                        {restaurantResult.name}
                    </a>
                </div>
                {restaurantResult.parentGeoName} <br/>
                <span className="badge bg-secondary rounded-pill">
                    {/* <i className="bi bi-star-fill">{ }</i> */}
                </span>
             </div>
        </li>
    )
}
export default ApiListItem