const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding(`utf8`)

const beep = () => {
  process.stdout.write('\x07');
  console.log('beep')
}

stdin.on('data', (key) => {
  
  if (key === 'b') {
    return beep();
  };

  if(key >= 1 && key <= 9) {
      setTimeout (beep, key * 1000)
    }
    
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!\n');
    process.exit();
  }
  
}); 