import Login from '../pages/login'
import Home from '../pages/home'
import User from '../pages/user'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function Page({ currentPage, setCurrentPage }) {

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'User':
        return <User />;
      default:
        return <Login setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <section className='fix'>
        {renderPage()}
    </section>
  );
}
export default Page;
