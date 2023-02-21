import { useState } from "react"
import { ADD_RECEIPT } from '../utils/mutations'
import { useMutation } from "@apollo/client"
import Auth from '../utils/auth'


const User = () => {
    const user = Auth.getLoggedInUser()
 //   console.log(user)

    const [spent, setSpent] = useState('')
    const [purchaseDate, setPurchaseDate] = useState('')
    const [place, setPlace] = useState('')
  
    const [addReceipt, { loading, error }] = useMutation(ADD_RECEIPT)
  

    const handleSubmit = async e => {
      e.preventDefault()
      const { data } = await addReceipt({
        variables: {
          user: user._id,
          spent: parseFloat(spent),
          purchaseDate,
          place
        }
      })

      
      console.log(data)

      setPlace('')
      setSpent('')
      setPurchaseDate('')

    }


    return (
      <section>
<div className="table">
      <table class="table table-striped table-bordered">
      <thead class="thead-dark">
          <tr height="70px">
              <th scope="col" width="12%">Date</th>
              <th scope="col" width="12%">Amount</th>
              <th scope="col" width="62%">Place</th>
          </tr>
      </thead>
      <tbody>
          <tr>
            
              <th scope="row">{purchaseDate} </th>
              <td>{spent}</td>
              <td>{place}</td>
            
          </tr>
      </tbody>
  </table>
  </div>  
 <div className="receipt">
    <form id= "receipt-form" onSubmit={handleSubmit}>
    <h2>Add Receipt Information</h2>
        <label>Location</label>
            <input
            name="place"
            value={place}
            onChange={e => setPlace(e.target.value)}
            placeholder= "location"
            />
        <label>Amount Spent</label>
            <input
            name="spent"
            value={spent}
            onChange={e => setSpent(e.target.value)}
            placeholder= "0.00"
            />
        <label>Date</label>
            <input
            name="purchaseDate"
            value={purchaseDate}
            onChange={e => setPurchaseDate(e.target.value)}
            placeholder= "00/00/2023"
            />
        <button>Sumbit</button>
    </form>
 </div>
 </section>
    )
}

export default User