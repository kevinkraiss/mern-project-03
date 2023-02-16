import React from 'react' 
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useState } from 'react'
import Auth from './utils/auth'

// import Home from './pages/home'
// import User from './pages/user'
// import Login from './pages/login'

import Page from './components/page'
import Nav from './components/nav'

// create and import components
 
const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token =  Auth.getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {

  const [pages] = useState([
    {name: 'Login'},
    {name: 'Home'},
    {name: 'User'}
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
 

        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          />
        <main>
          <Page currentPage={currentPage}>
          
          </Page>
        </main>

      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
