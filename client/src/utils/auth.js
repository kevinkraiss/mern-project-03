import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }
  
  login(token) {
    localStorage.setItem(lsKey, token)
    // const decoded = decode(token)
    // const { _id } = decoded?.data
    // window.location.assign(`/user/${_id}`)


  }

  logout() {
    localStorage.removeItem(lsKey)
    // window.location.assign(`/`)
  }
}

export default new AuthService();
