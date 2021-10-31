export function fuzzSleep(base: number, fuzz: number = 500) {
  const time = Math.abs(base + Math.floor(Math.random() * fuzz * 2 + 1 - fuzz));
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Fuzz sleep for ${time} ms.`)
      resolve("wakeup");
    }, time);
  });
}
