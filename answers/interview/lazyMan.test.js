const { LazyMan } = require("./lazyMan");

describe("LazyMan", () => {
  test(`
    LazyMan(“Hank”)
    =>
    输出：Hi! This is Hank!
`, () => {
    const output = [];

    LazyMan("Hank", value => output.push(value));

    setTimeout(() => {
      expect(output).toEqual(["Hi! This is Hank!"]);
    }, 50);
  });

  test(`
    LazyMan(“Hank”).sleep(1).eat(“dinner”)
    =>
    输出: Hi! This is Hank!
    // 等待1秒..
    Wake up after 1
    Eat dinner~
`, done => {
    const output = [];

    LazyMan("Hank", value => output.push(value))
      .sleep(1)
      .eat("dinner");
    setTimeout(() => {
      expect(output).toEqual(["Hi! This is Hank!", "Wake up after 1", "Eat dinner~"]);
      done();
    }, 1050);
  });

  test(`
    LazyMan(“Hank”).eat(“dinner”).eat(“supper”)
    输出：Hi! This is Hank!
    Eat dinner~
    Eat supper~
`, done => {
    const output = [];

    LazyMan("Hank", value => output.push(value))
      .eat("dinner")
      .eat("supper");
    setTimeout(() => {
      expect(output).toEqual(["Hi! This is Hank!", "Eat dinner~", "Eat supper~"]);
      done();
    }, 50);
  });

  test(`
    LazyMan(“Hank”).sleepFirst(5).eat(“supper”)
    输出：等待5秒
    Wake up after 5
    Hi! This is Hank!
    Eat supper
`, done => {
    const output = [];

    LazyMan("Hank", value => output.push(value))
      .sleepFirst(1)
      .eat("supper");
    setTimeout(() => {
      expect(output).toEqual(["Wake up after 1", "Hi! This is Hank!", "Eat supper~"]);
      done();
    }, 1050);
  });
});
