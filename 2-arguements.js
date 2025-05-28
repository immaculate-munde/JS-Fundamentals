const args = process.argv.slice(2); // Get command-line arguments (excluding 'node' and file name)

if (args.length === 0) {
  console.log('0 argument');
} else if (args.length === 1) {
  console.log('1 argument');
} else {
  console.log(`${args.length} arguments`);
}
