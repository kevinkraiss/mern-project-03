import { useState, useEffect } from "react"
import { ADD_RECEIPT } from '../utils/mutations'
import { GET_USER } from '../utils/queries'
import { useMutation } from "@apollo/client"
import Auth from '../utils/auth'
import moment from 'moment'

import Ledger from "../components/ledger"


const User = () => {
    const user = Auth.getLoggedInUser()

    const [spent, setSpent] = useState('')
    const [purchaseDate, setPurchaseDate] = useState(moment().format('YYYY-MM-DD'))
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

      setPlace('')
      setSpent('')
      setPurchaseDate('')
    }

    useEffect(() => {
      if (!Auth.loggedIn()) {
        alert('You must be logged in to use this function!');
        window.location.href = '/login';
      }
    }, []);

    return (
      <>
      <Ledger />
        <div className="receipt">
            <form id= "receipt-form" onSubmit={handleSubmit}>
            <label>Date: </label>
                    <input
                    name="purchaseDate"
                    value={purchaseDate}
                    type="date"
                    onChange={e => {setPurchaseDate(e.target.value)
                    console.log(e.target.value)
                    }}
                    placeholder={moment().format('MM/DD/YYYY')}
                    />
                <label>Location: </label>
                    <input
                    name="place"
                    value={place}
                    onChange={e => setPlace(e.target.value)}
                    placeholder= "location"
                    />
                <label>Spent: </label>
                    <input
                    name="spent"
                    value={spent}
                    onChange={e => setSpent(e.target.value)}
                    placeholder= "0.00"
                    />
                <button>Sumbit</button>
            </form>
        </div>
      </>
    )
}

export default User