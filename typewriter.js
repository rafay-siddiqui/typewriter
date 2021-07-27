const sentence = "hello there from lighthouse labs";
let n = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, n)
  n += 50;
};
 setTimeout(() => {
   console.log();
 },n);