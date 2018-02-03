#!/usr/bin/env node

const cnsl = require('commander');

cnsl
  .option('-s, --say [phrase]', 'Make cnsl speak')
  .parse(process.argv);

if (cnsl.say) console.log('%s', cnsl.say);
