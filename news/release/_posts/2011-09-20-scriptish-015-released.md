---
layout: main
title: Scriptish 0.1.5 Released!
tags: release
author:
    name: Erik Vold
    website: http://erikvold.com/
    twitter: erikvold
    email: erikvvold@gmail.com
---

[Scriptish 0.1.5 was released on AMO today](https://addons.mozilla.org/firefox/addon/scriptish/)!

## Changes

If you'd like to see a full feature list then you should check out the [version
history] wiki page.

### Supporting Fennec

The biggest change is that [this release is the first to support Fennec](http://scriptish.org/news/2011/09/05/scriptish-supports-fennec.html),
which is the mobile version of Firefox for Android.  So you can now
user script the mobile web!

I spent a lot of time over the last month or so getting this out there for you
all, so I do hope that you enjoy it! but sadly I did not implement everything
that I wanted, and a crucial feature is still missing, which is user scripts
updates.  So needless to say I will be working hard on that one for a coming
release, I promise!

### Scratchpad Integration

Greg Parris has been putting in a bunch of work integrating Scriptish with
Scratchpad, which I think is a excellent idea, and I have been really enjoying
seeing this work progress.  At the moment a user can save a Scratchpad as a user
script, or use the Scratchpad as a user script editor, which is awesome because
you can easily test parts of your script against a content document with
Scratchpad!

In the next release I plan to have added a user script context to Scratchpad
so that one can easily test the parts of their user script that use the
Greasemonkey API which Scriptish implements.

So big thanks to Greg for his work on this!

[version history]:https://github.com/scriptish/scriptish/wiki/Version-History
[Greg Parris]:https://github.com/supahgreg
[Nils Maier]:https://github.com/nmaier
