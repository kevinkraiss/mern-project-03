import { useState } from "react"
import { ADD_RECEIPT } from '../utils/mutations'
import { useMutation } from "@apollo/client"
import Auth from '../utils/auth'


const User = () => {
    const user = Auth.getLoggedInUser()

    const [spent, setSpent] = useState(10)
    const [purchaseDate, setPurchaseDate] = useState('')
    const [place, setPlace] = useState('')
  
    const [addReceipt, { loading, error }] = useMutation(ADD_RECEIPT)
  

    const handleSubmit = async e => {
      e.preventDefault()
      const { data } = await addReceipt({
        variables: {
          user: user._id,
          spent: parseInt(spent),
          purchaseDate,
          place
        }
      })

      
      console.log(data)

    }


    return (
 <div className="receipt">
    <form id= "receipt-form" onSubmit={handleSubmit}>
        <label>Location: </label>
        <br></br>
            <input
            name="place"
            value={place}
            onChange={e => setPlace(e.target.value)}
            placeholder= "location"
            />
            <br></br>
        <label>Amount Spent: </label>
        <br></br>

            <input
            name="spent"
            value={spent}
            onChange={e => setSpent(e.target.value)}
            placeholder= "0.00"
            />
            <br></br>
        <label>Date: </label>
        <br></br>
            <input
            name="purchaseDate"
            value={purchaseDate}
            onChange={e => setPurchaseDate(e.target.value)}
            placeholder= "00/00/2023"
            />
        <br></br>
        <button>Submit</button>
    </form>
 </div>
    )
}

export default User