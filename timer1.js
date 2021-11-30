const input = process.argv.slice(2) 

const beep = () => {
  process.stdout.write('\x07');
}

let timer = (delay) => {
  delay = Number(delay);
  if (!isNaN(delay) && delay > 0) {
    setTimeout (beep, delay * 1000)
  }
}

for (const numbers of input) {
    timer(numbers)
}

