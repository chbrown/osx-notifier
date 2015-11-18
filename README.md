# osx-notifier

Reduction of [node-osx-notifier](https://github.com/azoff/node-osx-notifier) to drive from the command line or directly from another node.js script, instead of an [express](http://expressjs.com/) server.


## Command line install & usage

```bash
npm install -g osx-notifier
```

**Usage** (`osx-notifier --help`):

```bash
osx-notifier
  --type      type of icon to show;
              one of "info", "fail", or "pass" [default: "info"]

  --title     title of the notification [default: "Terminal"]
  --subtitle  subtitle of the notification
  --message   message body of the notification [required]

  --group     replace and be replaced by any notifications of the same group

  --remove    remove any notifications previously posted with this group
              (or ALL groups)

  --list      list notifications previously posted with this group
              (or ALL groups)

  --activate  bundle identifier of an application to be activated
              if the user clicks the notification

  --open      open a url / file / custom url scheme
              if the user clicks the notification

  --execute   execute a shell command
              if the user clicks the notification

  --help      print this help message
  --verbose   print extra output
  --version   print version
```


## API install & usage

```bash
npm install osx-notifier
```

Or in your package.json:

```json
{
  "dependencies": {
    "osx-notifier": "*"
  }
}
```

**Usage**:

```javascript
var notify = require('osx-notifier');

var duration = 45;
notify({
  type: 'pass',
  title: 'Taskdoer Report',
  subtitle: 'Task completed',
  message: 'Took ' + duration + ' seconds.',
  group: 'taskdoer',
});
```


## --type

The Mac OS X Notification Center can only be accessed via signed apps,
and any message sent from an application must be accompanied by the icon for that application.

Three variations on [terminal-notifier](https://github.com/alloy/terminal-notifier) are included with this app,
which are accessed via the different `--type` options:

| `--type` | sample |
|:----:|:-----------|
| `info` | ![info screenshot](https://raw.github.com/chbrown/osx-notifier/master/doc/screenshots/info.png) |
| `pass` | ![pass screenshot](https://raw.github.com/chbrown/osx-notifier/master/doc/screenshots/pass.png) |
| `fail` | ![fail screenshot](https://raw.github.com/chbrown/osx-notifier/master/doc/screenshots/fail.png) |


## Winston integration

You can use this functionality from within [winston](https://github.com/flatiron/winston) (a popular logging library) as a "Transport" via my [`winston-notification-center`](https://github.com/chbrown/winston-notification-center) plugin package (available from npm).

**Example:**

```javascript
var winston = require('winston');
var NotificationCenterTransport = require('winston-notification-center');
winston.add(NotificationCenterTransport);
winston.info('Hello world.');
```

See the [winston-notification-center](https://github.com/chbrown/winston-notification-center) project page for more options.


## Credits

Thanks to [azoff](https://github.com/azoff/node-osx-notifier) for the prebuilt apps and the screenshots,
and to [alloy](https://github.com/alloy/terminal-notifier) for the great OS X application wrapper.


## License

Copyright 2013 Christopher Brown. [MIT Licensed](http://chbrown.github.io/licenses/MIT/#2013).
