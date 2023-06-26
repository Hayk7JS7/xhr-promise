const ajax = require('./CustomAjaxRequest')

// TestCases 

// 1. GET request with successful response: ✅
  ajax('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET' })
  .then(response => {
    console.log('GET Response:', response);
  })
  .catch(error => {
    console.error('GET Error:', error);
  });


// 2. GET request with error response:  ✅
/*
ajax('https://jsonplaceholder.typicode.com/nonexistent', { method: 'GET' })
  .then(response => {
    console.log('GET Response:', response);
  })
  .catch(error => {
    console.error('GET Error:', error);
  });
*/

// 3. POST request with successful response: ✅
/*ajax('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Test Post',
    body: 'This is a test post',
    userId: 1
  }),
})
  .then(response => {
    console.log('POST Response:', response);
  })
  .catch(error => {
    console.error('POST Error:', error);
  });
*/

// 4. POST request with error response: ✅
/*ajax('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Test Post',
    body: 'This is a test post',
  }),
})
  .then(response => {
    console.log('POST Response:', response);
  })
  .catch(error => {
    console.error('POST Error:', error);
  });*/

// 5. Invalid URL ✅
/*ajax('https://invalid-url', { method: 'GET' })
  .then(response => {
    console.log('GET Response:', response);
  })
  .catch(error => {
    console.error('GET Error:', error);
  });
*/

// 6. PUT request with successful response: ✅       
/*ajax('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    title: 'Updated Post',
    body: 'This is an updated post',
    userId: 1
  }),
})
  .then(response => {
    console.log('PUT Response:', response);
  })
  .catch(error => {
    console.error('PUT Error:', error);
  });
*/

// 7. DELETE request with successful response: ✅
/*ajax('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then(response => {
    console.log('DELETE Response:', response);
  })
  .catch(error => {
    console.error('DELETE Error:', error);
  });
*/

// 8. PATCH request with successful response: ✅
/*ajax('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'Updated Title'
  }),
})
  .then(response => {
    console.log('PATCH Response:', response);
  })
  .catch(error => {
    console.error('PATCH Error:', error);
  });
*/