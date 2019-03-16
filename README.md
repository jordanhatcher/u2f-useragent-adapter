# u2f-useragent-adapter

u2f-useragent-adapter is a browser extension for Firefox browsers that spoofs the user agent
for certain websites that restrict the use of hardware security keys, based on which browser is being used.

## Why
u2f hardware security keys, like the [Yubikey](), add a second layer of authentication when you log in
on websites. The Firefox and Chrome browsers both support these security keys, but some websites like
Facebook check the browser's user agent, and don't allow them to be used when logging in (they will instead
ask for alternative second factor methods, like TOTP). By pretending to be using a Chrome browser during the
login, it is possible to get around that restriction, and use the security key as usual.

## Installing
The add-on can be installed from the [Firefox add-on page](TODO).

## Licence
This code is licensed as CC0.
