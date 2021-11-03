const generatePromise = (name, delay = 3000, isRandom = false) => {
  const wait = isRandom ? Math.floor(Math.random() * delay) : delay;

  return new Promise((resolve) => {
    setTimeout(() => resolve(name), wait);
  });
};

module.exports = generatePromise;
