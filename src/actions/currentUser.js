import axios from 'axios';

export const setUser = payload => dispatch => {
  axios.post('/user_token', {
    auth: {
      email: payload.email,
      password: payload.password
    }
  })
  .then(res => {
    console.log(res);
    dispatch('CURRENT_USER', res.json())
  })
  .catch(error => {
    console.log(error);
  });
}