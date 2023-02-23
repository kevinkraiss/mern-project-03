import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

import { GET_USER } from '../utils/queries'
import { DELETE_RECEIPT } from '../utils/mutations'
import { useQuery, useMutation } from '@apollo/client'
import Auth from '../utils/auth'
import moment from 'moment'


const Ledger = props => {
    
    const { loading, error, data} = useQuery(GET_USER, {
        variables: {
            id: Auth.getLoggedInUser()._id
        }
    })
    const userReceipts = data?.user?.receipts
    // console.log(userReceipts)
    const [deleteReceipt, { data: receiptData }] = useMutation(DELETE_RECEIPT)
  
    return(
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Last Recorded Transaction</TableCaption>
                <Thead>
                <Tr>
                    <Th>Date</Th>
                    <Th>Location</Th>
                    <Th isNumeric>Spent</Th>
                    <Th>Delete</Th>
                </Tr>
                </Thead>
                <Tbody>
                {userReceipts
                    ?.map((receipt) => (
                        <Tr
                        key={receipt._id}
                        >
                            <Td>{
                            moment((receipt.purchaseDate), 'x').add(6, 'h').format("MM/DD/YYYY")}</Td>
                            <Td>{receipt.place}</Td>
                            <Td isNumeric
                                className='spent'
                            >${(Math.round(receipt.spent * 100) / 100).toFixed(2)}</Td>
                            <Td>
                                <button
                                className='deleteBtn'
                                onClick={
                                    () => {
                                        deleteReceipt({
                                            variables: { _id: receipt._id},
                                            refetchQueries: [{query: GET_USER}, 'User']
                                })}
                                }
                                >
                                    Delete
                                </button>
                            </Td>
                        </Tr>
                    ))
                }
                </Tbody>
                <Tfoot>

                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default Ledger