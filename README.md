# kotive-node
> Official Node bindings to the Kotive API

## Installation

```bash
npm install kotive-client
```

## Testing

```bash
npm test
```

## Running the code locally

Compile using babel:

```bash
gulp babel
```

Require Kotive:

```node
var Kotive = require('./dist/index');
```

## Usage

Require Kotive:

```node
var Kotive = require('kotive-client');
```

Create a client:

```node
var client = new Kotive.Client('username', 'password');
```

## Callbacks

This client library supports two kinds of callbacks:

```node
client.users.list(function (d) {
  // d is the response from the server
});

// Or

client.users.list(function (err, d) {
  // err is an error response object, or null
  // d is a successful response object, or null
});
```

## Promises

This client library also supports using Promises instead of callbacks by calling `usePromises` on the client object:

```node
let client = new Client('foo', 'bar').usePromises();
client.users.create({ email: 'foo@bar.com' }).then(function (r) {
  // ...
});
```
