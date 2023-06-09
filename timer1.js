let args = process.argv.slice(2);

const timer = (args) => {

  for (let i = 0; i < args.length; i++) {

    let delay = args[i];

    if (args[i] < 0 || isNaN(Number(args[i]))) {
      continue;
    }

    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay * 1000);

  }
};

timer(args);

