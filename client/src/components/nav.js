import { useEffect } from 'react'

const Nav = props => {

    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props

    useEffect(() => {
        document.title = currentPage.name
    }, [currentPage])
    return (
        <nav>
            <ul className='flex-row'>
                {pages.map((Page) => (
                    <li
                    className={`${
                        currentPage.name === Page.name ? 'navActive' : 'navInactive'}`}
                    key={Page.name}
                    >
                        
                    <button
                        onClick={() => setCurrentPage(Page)}
                    >
                        {Page.name}
                    </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav