#!/usr/bin/env node

import { Command } from 'commander'
import { spinnerError, stopSpinner } from './spinner';
import { widgets } from './widgets';
const program = new Command('Our New CLI');
program.option('-v, --verbose', 'verbose logging');
program.version('0.0.1');
program.addHelpCommand()
program.addCommand(widgets);

async function main() {
    await program.parseAsync();

}
console.log() // log a new line so there is a nice space
main(); 

process.on('unhandledRejection', function (err: Error) {
    const debug = program.opts().verbose;
    if(debug) {
        console.error(err.stack);
    }
    spinnerError()
    stopSpinner()
    program.error('', { exitCode: 1 });
})