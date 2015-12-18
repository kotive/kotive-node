import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('people', () => {
  it('get a list of people', function (done) {
    nock('https://webapp.kotive.com/api').get('/group/246/people').basicAuth({user: 'jenkins.daniel.02@gmail.com', pass: '123456'}).reply(200);
    const client = new Client('jenkins.daniel.02@gmail.com', '123456').usePromises();
    client.people.list(246).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
