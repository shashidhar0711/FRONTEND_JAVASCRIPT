// Implement caching and closure based caching mechanism
// window.cache can access by returned function.(this function coming as param)
function cachingFunction(complexCalculation) {
  // Modify this cache object and store data in the arg
  // also perform the complexCalculation on the arg
  window.cache = {};
  // Implement the closure-based caching mechanism here
  return function (arg) {
      if(cache[arg] != undefined) {
          return cache[args]
      }

      const result = complexCalculation(args)
      cache[args] = result
      return result
  };
}

