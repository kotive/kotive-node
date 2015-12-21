export default class Taskflow{
  constructor(client){
    this.client = client;
  }
  list(id, f){
    return this.client.get('/group/' + id + '/taskflowReports', true, f);
  }
  getTemplate(groupId, processId, f){
    return this.client.get('/group/' + groupId + '/process/' + processId + '/blank', true, f);
  }
  startInstance(groupId, data, f){
    return this.client.post('/group/' + groupId + '/process', data, f);
  }
  submit(groupId, processId, data, f){
    return this.client.post('/group/' + groupId + '/process/' + processId + '/activity', data, f);
  }
  next(groupId, processId, f){
    return this.client.get('/group/' + groupId + '/process/' + processId + '/next', true, f);
  }
}
