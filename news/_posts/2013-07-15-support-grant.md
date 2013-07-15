---
layout: main
title: Scriptish Finally Supports @Grant!
keywords: issues, greasemonkey, @grant
author:
    name: Erik Vold
    website: http://erikvold.com/
    twitter: erikvold
    email: evold@mozilla.com
---

[Greasemonkey implemented `@grant` last year](http://www.greasespot.net/2012/08/greasemonkey-10-release.html),
and Scriptish fell behind.. that sucked.  The feature is a good one that adds a little more security to
userscripts, and we should have supported this feature sooner, alias it not happen until this weekend.

There is a very important difference between
[Greasemonkey's `@grant` implementation](http://wiki.greasespot.net/@grant)
and
Scriptish's `@grant` implementation](https://github.com/scriptish/scriptish/wiki/Manual:-Metadata-Block#grant)
which is that Greasemonkey attempts to auto determine which `GM_` apis the script needs, and Scriptish
will not.  Which means a lot of user scripts may break in the coming upgrade.  I'm doing this
to force userscript authors to fix their scripts though, and they've had a year to do this so
it is about time they got around to it.

Good job Greasemonkey for pushing userscripts forward again!
