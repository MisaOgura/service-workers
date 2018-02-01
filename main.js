var worker = new Worker('doWork.js');

worker.addEventListener('message', function(e) {
  console.log('Worker said: ', e.data);
}, false);

worker.postMessage({ message: 'Hello this is a service worker! What can I do for you?'});
