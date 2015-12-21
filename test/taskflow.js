import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('taskflows', () => {
  it('list live taskflows', done => {
    nock('https://webapp.kotive.com/api').get('/group/246/taskflowReports').basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(200);
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.taskflow.list(246).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('get a taskflow template', done => {
    nock('https://webapp.kotive.com/api').get('/group/246/process/798/blank').basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(200);
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.taskflow.getTemplate(246, 798).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('start a taskflow instance', done => {
    nock('https://webapp.kotive.com/api').post('/group/246/process', {id_process: 0, id_t: 798, id_owning_process: -1, fields: []}).basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(200);
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.taskflow.startInstance(246, {id_process: 0, id_t: 798, id_owning_process: -1, fields: []}).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('submit taskflow', done => {
    nock('https://webapp.kotive.com/api').post('/group/246/process/340/activity', {id_process: 0, id_t: 799, id_owning_process: -1, fields: [{id: '-1_799_1120', value: ''}, {id: '-1_799_1127', value: ''}]}).basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(200);
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.taskflow.submit(246, 340, {id_process: 0, id_t: 799, id_owning_process: -1, fields: [{id: '-1_799_1120', value: ''}, {id: '-1_799_1127', value: ''}]}).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('get next taskflow', done => {
    nock('https://webapp.kotive.com/api').get('/group/246/process/340/next').basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(200);
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.taskflow.next(246, 340).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
