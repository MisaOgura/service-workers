self.addEventListener('message', function(e) {
  self.postMessage(e.data.message);
}, false);
