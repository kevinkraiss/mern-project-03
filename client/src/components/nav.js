import { useEffect } from 'react'
import auth from '../utils/auth'
import Auth from '../utils/auth'

const Nav = props => {
    const loggedIn = Auth.loggedIn()

    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props

    useEffect(() => {
        document.title = currentPage
    }, [currentPage])

    return (
        <nav>
            <ul className='flex-row'>
                {pages
                    .filter((page) => {
                        return page !== 'Login' || !loggedIn 
                    })
                    .map((page) => (
                        <li
                        className={`${
                            currentPage === page ? 'navActive' : 'navInactive'}`}
                        key={page}
                        >
                            
                            <button
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))
                }
                {loggedIn && (
                    <li>
                        
                        <button
                            onClick={() => {
                                Auth.logout()
                                setCurrentPage('Login')
                            }}
                        >
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav