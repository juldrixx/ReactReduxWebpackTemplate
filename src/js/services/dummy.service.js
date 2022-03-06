function get() {
  return new Promise((resolve, reject) => {
    fetch('https://baconipsum.com/api/?type=meat-and-filler')
      .then((result) => result.text())
      .then((result) => {
        resolve({ dummyResult: result });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default {
  get,
};
