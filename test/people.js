import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('people', () => {
  it('get a list of people', done => {
    nock('https://webapp.kotive.com/api').get('/group/246/people').basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(200);
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.people.list(246).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('create a new person', done => {
    nock('https://webapp.kotive.com/api').post('/people', {person: {email: 'jenkins.daniel.02@gmail.com', username: 'jenkins.daniel.02@gmail.com', firstname: 'Daniel', lastname: 'Jenkins', mobile: '', password: '123456', groupId: '246'}}).basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(200);
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.people.create({person: {email: 'jenkins.daniel.02@gmail.com', username: 'jenkins.daniel.02@gmail.com', firstname: 'Daniel', lastname: 'Jenkins', mobile: '', password: '123456', groupId: '246'}}).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
