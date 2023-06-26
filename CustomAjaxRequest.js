const XMLHttpRequest = require('xhr2');
const MyPromise = require('./MyPromise');

function ajax(url, config) {
  return new MyPromise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(config.method || 'GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log('Response Text:', xhr.responseText);
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch (error) {
            console.error('JSON Parsing Error:', error);
            reject(error);
          }
        } else {
          reject(xhr.statusText);
        }
      }
    };
    xhr.onerror = function() {
      reject(xhr.statusText);
    };
    xhr.send(config.body);
  });
}

module.exports = ajax;
