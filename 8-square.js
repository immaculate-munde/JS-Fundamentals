#!/usr/bin/node

const size = Number(process.argv[2]);

if (isNaN(size)) {
  console.log('Nop');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
