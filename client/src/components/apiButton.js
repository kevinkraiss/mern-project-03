const ApiButton = ({children,className="btn-secondary",...restOfProps})=>{
    return (

        <button className={`btn btn-secondary ${className}`}{...restOfProps}>
            {children}
        </button>
    )
}

export default ApiButton