var Counter = (function () {
  var instance;
  var counter = 0;

  var getCounter = function () {
    return counter;
  };

  var incrementCounter = function () {
    counter++;
  };

  function createInstance() {
    return { getCounter: getCounter, incrementCounter: incrementCounter };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

alert("Check console for pattern demos");
console.log("Singleton pattern demo");
console.log(Counter.getInstance().getCounter());
Counter.getInstance().incrementCounter();
console.log(Counter.getInstance().getCounter());
