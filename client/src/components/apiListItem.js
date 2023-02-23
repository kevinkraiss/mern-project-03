// import ApiButton from './apiButton'


const ApiListItem=({restaurantResult})=>{
    console.log(restaurantResult)

    //const{}=restaurantResults //{name,location,address}

    return(
        <li  className="list-group-item d-flex justify-content-between">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    <a href= {restaurantResult.menuUrl} target="_blank">
                        {/* {restaurantResult.menuUrl} */}
                        {restaurantResult.name}
                    </a>
                </div>
                {restaurantResult.parentGeoName} <br/>
                {restaurantResult.establishmentTypeAndCuisineTags[0]}

                <span className="badge bg-secondary rounded-pill">
                   
                </span>
             </div>
        </li>
    )
}
export default ApiListItem