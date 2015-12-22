export default class People{
  constructor(client){
    this.client = client;
  }
  list(id, f){
    return this.client.get('/group/' + id + '/people', true, f);
  }
  create(data, f){
    return this.client.post('/people', data, f);
  }
}
