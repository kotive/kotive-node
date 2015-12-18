export default class People{
  constructor(client){
    this.client = client;
  }
  list(id, f){
    return this.client.get('/group/' + id + '/people', true, f);
  }
}
