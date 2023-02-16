import Login from '../pages/login'
import Home from '../pages/home'
import User from '../pages/user'

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'Login':
        return <Login />;
      case 'Home':
        return <Home />;
      case 'User':
        return <User />;
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
