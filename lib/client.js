import unirest from 'unirest';
import Bluebird from 'bluebird';

import Auth from './auth';

export default class Client {
  constructor(...args){
    if (args.length === 2 || args.length === 3) {
      this.user = args[0];
      this.pass = args[1];
      this.test = false;
      if (args.length === 3){
        this.test = args[2];
      }
    }
    if (!this.user || !this.pass) {
      throw new Error('Could not construct a client with those parameters');
    }
    this.auth = new Auth(this);
    this.promises = false;
    if (this.test){
      this.url = 'http://127.0.0.1:8080';
    } else {
      this.url = 'https://webapp.kotive.com/api';
    }
  }
  usePromises() {
    this.promises = true;
    return this;
  }
  promiseProxy(f, req) {
    if (this.promises) {
      const callbackHandler = this.callback;
      return new Bluebird((resolve, reject) => {
        const resolver = (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        };
        req.end(r => callbackHandler(resolver, r));
      });
    } else {
      req.end(r => this.callback(f, r));
    }
  }
  put(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.put(this.url + endpoint)
      .auth(this.user, this.pass)
      .type('json')
      .send(data)
      .header('Accept', 'application/json')
      .header('Content-Type', 'application/json')
      .header('User-Agent', 'kotive-node-client/1.0.0')
    );
  }
  post(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.post(this.url + endpoint)
      .auth(this.user, this.pass)
      .type('json')
      .send(data)
      .header('Accept', 'application/json')
      .header('Content-Type', 'application/json')
      .header('User-Agent', 'kotive-node-client/2.0.0')
    );
  }
  get(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.get(this.url + endpoint)
      .auth(this.user, this.pass)
      .type('json')
      .query(data)
      .header('Accept', 'application/json')
      .header('Content-Type', 'application/json')
      .header('User-Agent', 'kotive-node-client/1.0.0')
    );
  }
  delete(endpoint, data, f) {
    return this.promiseProxy(f,
      unirest.delete(this.url + endpoint)
      .auth(this.user, this.pass)
      .type('json')
      .query(data)
      .header('Accept', 'application/json')
      .header('Content-Type', 'application/json')
      .header('User-Agent', 'kotive-node-client/2.0.0')
    );
  }
  callback(f, data) {
    if (!f) {
      return;
    }
    if (f.length >= 2) {
      const hasErrors = data.error || (data.body && data.body.type === 'error.list');
      if (hasErrors) {
        f(data, null);
      } else {
        f(null, data);
      }
    } else {
      f(data);
    }
  }
}
