#!/usr/bin/env node
var optimist = require('optimist');
var notify = require('..');

var basic = optimist.boolean(['help', 'verbose', 'version']);
var argv = basic.argv;

var full = basic
  .usage('Usage: osx-notifier [options]')
  .describe({
    type: 'type of icon to show; one of "info", "fail", or "pass"',
    title: 'title of the notification',
    subtitle: 'subtitle of the notification',
    message: 'message body of the notification',
    group: 'replace and be replaced by any notifications of the same group',
    remove: 'remove any notifications previously posted with this group (or ALL groups)',
    list: 'list notifications previously posted with this group (or ALL groups)',
    activate: 'bundle identifier of an application to be activated if the user clicks the notification',
    open: 'open a url / file / custom url scheme if the user clicks the notification',
    execute: 'execute a shell command if the user clicks the notification',

    help: 'print this help message',
    verbose: 'print extra output',
    version: 'print version',
  })
  .default({
    type: 'info',
    title: 'Terminal',
  })
  .demand('message');

if (argv.help) {
  full.showHelp();
  process.exit(0);
}

if (argv.version) {
  var package_json = require('../package');
  console.log(package_json.version);

  // var message = new Date().toString();
  var message = __filename.replace(process.env.HOME, '~');
  notify({
    type: argv.type,
    title: 'OS X Notifier',
    subtitle: 'Version ' + package_json.version,
    message: message,
    group: 'osx-notifier',
  });
}
else {
  argv = full.check(function(argv) {
    if (['fail', 'info', 'pass'].indexOf(argv.type) == -1) {
      throw new Error('Notification type "' + argv.type + '" is invalid');
    }
  }).argv;

  notify(argv);
}
