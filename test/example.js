Object.assign(global, require('../../fff.js'));

/**
 * @description Async error handling used go & pipe + try-catch
 */


/**
 * @case Sync
 * @result 111
 */
const e1 = go(
  0,
  a => a + 1,
  a => a + 10,
  a => a + 100,
  log
);

/**
 * @case Sync - Error
 * @result { err: 'Error~~' }
 */
try {
  const e2 = go(
    0,
    a => { throw { err: 'Error~~'} },
    a => a + 1,
    a => a + 13,
    log
  );
} catch (err) {
  log(err);
}

/**
 * @case Async
 * @result 5
 */
(async () => {
  const t3 = await go(
    0,
    a => Promise.resolve(a + 1),
    a => a + 1,
    a => a + 3,
    log
  );
})();

/**
 * @case Async - Error
 * @result { err: 'Error~~' }
 */
(async () =>  {
  try {
    const t4 = await go(
      0,
      a => Promise.resolve(a + 1),
      a => Promise.reject({ err: 'Error~~' }),
      a => a + 3,
      log
    );
  } catch (err) {
    log(err);
  }
})();

go(
  Promise.resolve([Promise.resolve(1),2,3]),
  map(a => a + 10),
  filter(a => a%2 == 0),
  log
)