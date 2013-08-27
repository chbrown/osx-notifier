'use strict'; /*jslint es5: true, node: true, indent: 2 */
var fs = require('fs');
var path = require('path');
var child_process = require('child_process');

var cli_args = [
  'title',
  'subtitle',
  'message',
  'group',
  'remove',
  'list',
  'activate',
  'open',
  'execute',
];

function appBinPath(type) {
  return path.join(__dirname, 'osx', 'terminal-notifier-' + type + '.app', 'Contents', 'MacOS', 'terminal-notifier');
}

module.exports = function(opts) {
  var file = appBinPath(opts.type);
  var args = [];
  cli_args.forEach(function(arg) {
    if (opts[arg]) args.push('-' + arg, opts[arg]);
  });

  if (opts.verbose) {
    console.log(file, args);
  }
  child_process.execFile(file, args, {}, function(err, stdout, stderr) {
    if (err) {
      console.error('execFile(' + file + ')');
      if (stdout) {
        console.log(stdout);
      }
      if (stderr) {
        console.error(stderr);
      }
      throw err;
    }
    else {
      if (stdout && opts.verbose) {
        console.log(stdout);
      }
      if (stderr && opts.verbose) {
        console.error(stderr);
      }
    }
  });
};
