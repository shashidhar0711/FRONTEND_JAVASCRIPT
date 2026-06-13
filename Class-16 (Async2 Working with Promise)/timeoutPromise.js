function timeoutPromise(delay) {
  // write solution here ============
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${delay} milliseconds`);
    }, delay);
  });
}
