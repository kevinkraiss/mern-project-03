import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'

import { setContext } from '@apollo/client/link/context'
import { useState } from 'react'
import Auth from './utils/auth'
import Header from "./components/header"

import Footer from "./components/footer"

import Container from './components/Container'
import Page from './components/page'
import Nav from './components/nav'

// create and import components
// console.log(process.env,`${process.env.REACT_APP_TRIPADVISOR_API_KEY}`)
// console.log('process.env code:',process.env.REACT_APP_TRIPADVISOR_API_KEY) 

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

const pageNames = ['Home', 'User', 'Login']

function App() {



  const [currentPage, setCurrentPage] = useState(pageNames)

  return (
    <ChakraProvider>

      <ApolloProvider client={client}>
      <div className="body">
        <Header />
        <Container>
        <Nav
          pages={pageNames}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          />

        <main>
            <Page 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            ></Page>
        </main>
          </Container>
        <Footer />
        </div>
      </ApolloProvider>

    </ChakraProvider>
  );
}

export default App;
