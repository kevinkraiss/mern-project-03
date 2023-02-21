import { useState } from "react"
import { ADD_RECEIPT } from '../utils/mutations'
import { GET_USER } from '../utils/queries'
import { useMutation } from "@apollo/client"
import Auth from '../utils/auth'

import Ledger from "../components/ledger"


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
          spent: parseFloat(spent),
          purchaseDate,
          place
        },
        refetchQueries: [
          { query: GET_USER }, 
          'User'
        ]
      })

      
      console.log(data)

    }


    return (
      <>
      <Ledger />
        <div className="receipt">
            <form id= "receipt-form" onSubmit={handleSubmit}>
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
      </>
    )
}

export default User