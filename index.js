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

/** escape any existing double quotes in value and then wrap in double quotes */
function escapeArgument(value) {
  return '"' + value.replace(/"/g, '\\"') + '"';
}

module.exports = function(opts) {
  var app = 'terminal-notifier-' + opts.type + '.app';
  var file = path.join(__dirname, 'osx', app, 'Contents', 'MacOS', 'terminal-notifier');
  var args = [];
  cli_args.forEach(function(arg) {
    if (opts[arg]) args.push('-' + arg, escapeArgument(opts[arg]));
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
