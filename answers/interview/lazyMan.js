/**
 * @description
 * 实现一个LazyMan，可以按照以下方式调用：
 * LazyMan(“Hank”)
 * 输出：Hi! This is Hank!
 * LazyMan(“Hank”).sleep(10).eat(“dinner”)
 * 输出: Hi! This is Hank!
 * 等待10秒..
 * Wake up after 10
 * Eat dinner~
 * LazyMan(“Hank”).eat(“dinner”).eat(“supper”)
 * 输出：Hi! This is Hank!
 * Eat dinner~
 * Eat supper~
 * LazyMan(“Hank”).sleepFirst(5).eat(“supper”)
 * 输出：等待5秒
 * Wake up after 5
 * Hi! This is Hank!
 * Eat supper
 * 以此类推。
 *
 * @param {string} name 名字
 */
function LazyMan(name, output) {
  const queue = [];

  queue.push(() => {
    output(`Hi! This is ${name}!`);
    return Promise.resolve();
  });

  this.sleep = function(time) {
    queue.push(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          output(`Wake up after ${time}`);
          resolve();
        }, time * 1000);
      });
    });

    return this;
  };

  this.eat = function(food) {
    queue.push(() => {
      output(`Eat ${food}~`);
      return Promise.resolve();
    });

    return this;
  };

  this.sleepFirst = function(time) {
    queue.unshift(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          output(`Wake up after ${time}`);
          resolve();
        }, time * 1000);
      });
    });

    return this;
  };

  setTimeout(async () => {
    for (const fn of queue) {
      await fn();
    }
  }, 0);

  return this;
}

module.exports = {
  LazyMan
};
