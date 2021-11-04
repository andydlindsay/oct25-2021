const myPromise = new Promise((resolve, reject) => {
  // do something
  // if everything is happy path
  // resolve({ users: [] })

  // if something goes wrong
  reject({ err: 'something bad happened'});
});

myPromise
  .then((users) => { console.log('happy path output:', users) })
  .catch((err) => { console.log('bad stuff:', err) });
