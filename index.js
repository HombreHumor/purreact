#!/usr/bin/env node

const execa = require('execa');
const Listr = require('listr');
const commander = require('commander');

const pjson = require('./package.json');

const program = new commander.Command();

const commands = require('./commands');

program
  .name(pjson.name)
  .version(pjson.version)
  .description(pjson.description)

program
  .command('new [projectName]')
  .description('Initialize new react project')
  .option('--typescript', 'Init with typescript')
  .action(commands.new);


program.parse(process.argv);
