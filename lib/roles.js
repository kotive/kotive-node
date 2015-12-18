export default class Roles{
  constructor(client){
    this.client = client;
  }
  get(groupId, personId, f){
    return this.client.get('/group/' + groupId + '/personRoles', 'personId=' + personId, f);
  }
  assign(data, f){
    return this.client.post('/personRoles', data, f);
  }
}
