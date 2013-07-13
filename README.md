# osx-notifier

Reduction of [node-osx-notifier](https://github.com/azoff/node-osx-notifier) to drive from the command line or directly from another node.js script, instead of an [express](http://expressjs.com/) server.

## Install

    npm install -g osx-notifier

## Usage

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

## `--type`

The Mac OS X Notification Center can only be accessed via signed apps,
and any message sent from an application must be accompanied by the icon for that application.

Three variations on the [terminal-notifier](https://github.com/alloy/terminal-notifier) are included with this app,
which are accessed via the different `--type` options:

* info
   ![info screenshot](https://raw.github.com/chbrown/osx-notifier/master/doc/screenshots/info.png)
* pass
   ![pass screenshot](https://raw.github.com/chbrown/osx-notifier/master/doc/screenshots/pass.png)
* fail
   ![fail screenshot](https://raw.github.com/chbrown/osx-notifier/master/doc/screenshots/fail.png)

## Credits

Thanks to [azoff](https://github.com/azoff/node-osx-notifier) for the prebuilt apps and the screenshots,
and to [alloy](https://github.com/alloy/terminal-notifier) for the great OS X application wrapper.

## License

Copyright © 2013 Christopher Brown. [MIT Licensed](LICENSE).
