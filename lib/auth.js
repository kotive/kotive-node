export default class Auth {
  constructor(client){
    this.client = client;
  }
  login(f){
    return this.client.get('/login', true, f);
  }
  passwordReset(data, f){
    return this.client.post('/user/resetpassword', data, f);
  }
}
