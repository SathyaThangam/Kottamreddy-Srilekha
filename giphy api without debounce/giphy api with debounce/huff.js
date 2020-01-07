function refresh() {
  var spinner = document.querySelector(".loader");
  spinner.classList.add("spin");
  performFakeCall();

  function performFakeCall() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 3000);
    });
  }

  performFakeCall().then(function(result) {
    spinner.classList.remove("spin");
  });
}
