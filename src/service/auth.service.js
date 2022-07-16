import axios from 'axios';

const API_URL = 'http://localhost:8091/api/v1/accounts';

class AuthService {
  login(account) {
    return axios
      .post(API_URL + 'login', {
        username: account.username,
        password: account.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('account', response.data.accessToken);
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('account');
  }

  register(account) {
    return axios.post(API_URL + 'register', {
      username: account.username,
      password: account.password,
      roles: [
          "user"
      ]
    });
  }
}

export default new AuthService();
