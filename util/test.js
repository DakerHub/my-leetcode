module.exports = {
  testMultiFn: (fns, ...args) => {
    res = fns.map((fn) => {
      return fn(...args);
    });

    res.reduce((a, b) => {
      if (a != b) {
        throw new Error('运行结果不一致: ' + res);
      }
      return b;
    }, res[0]);

    return res[0];
  },
};
