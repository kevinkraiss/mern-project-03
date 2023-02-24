import ApiButton from './apiButton'
import ApiInput from './apiInput'


const ApiFormInput =({searchCity, setSearchCity,handleSubmit})=>{

return(
    <form onSubmit={event =>{
        event.preventDefault()
        handleSubmit()

    }}>
        <div className="input-group ">
        <ApiInput
            value={searchCity}
            onChange={event=>setSearchCity(event.target.value)}
            name="search"
            className="form-control bg-dark text-light"
            placeholder="Search Restaurants By City"
            type="search"
            />
        <ApiButton disabled={!searchCity}>Search</ApiButton>

        </div>

    </form>
)

}

 export default ApiFormInput