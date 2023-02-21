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
import { useQuery } from '@apollo/client'
import Auth from '../utils/auth'


const Ledger = props => {
    
    const { loading, error, data} = useQuery(GET_USER, {
        variables: {
            id: Auth.getLoggedInUser()._id
        }
    })
    const userReceipts = data?.user?.receipts
    // console.log(userReceipts)
  
    return(
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Last Recorded Transaction</TableCaption>
                <Thead>
                <Tr>
                    <Th>Date</Th>
                    <Th>Location</Th>
                    <Th isNumeric>Spent</Th>
                </Tr>
                </Thead>
                <Tbody>
                {userReceipts
                    ?.map((receipt) => (
                        <Tr>
                            <Td>{receipt.purchaseDate}</Td>
                            <Td>{receipt.place}</Td>
                            <Td isNumeric
                                className='spent'
                            >{(Math.round(receipt.spent * 100) / 100).toFixed(2)}</Td>
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