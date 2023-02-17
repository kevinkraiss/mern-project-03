import Login from '../pages/login'
import Home from '../pages/home'
import User from '../pages/user'
import Signup from '../pages/signup'

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'Login':
        return <Login />;
      case 'Home':
        return <Home />;
      case 'User':
        return <User />;
      case 'Signup':
        return <Signup />
      default:
        return <Login />;
    }
  };

  return (
    <section>
        {renderPage()}
    </section>
  );
}
export default Page;
