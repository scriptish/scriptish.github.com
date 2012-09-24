---
layout: main
title: Scriptish 0.1.8 Released!
tags: release
author:
    name: Erik Vold
    website: http://erikvold.com/
    twitter: erikvold
    email: erikvvold@gmail.com
---

[Scriptish 0.1.8 was uploaded to AMO today](https://addons.mozilla.org/firefox/addon/scriptish/)!

## Changes

If you'd like to see a full feature list then you should check out the [version
history] wiki page.

### Fennec

Fennec has changed, the older version has been replaced by what we call now
Native Fennec.  So all of the old code, that had a few bugs, is no longer
useful.  So support for Fennec has been temporarily removed.

### Firefox Sync

Thanks to [Greg], it is now possible to have Scriptish preferences synced by
Firefox Sync.  This
feature is opt-in, so you must use the Scriptish options window to enable it.

### Issue Tracker

I've switched back to the Github issue tracker.  Lighthouse has many
advantages, but it wasn't working out for this project, so it is no longer
going to be used.  So a few links within the add-on had to be updated.

### Memory Leak

There was a memory leak in the last version when using `GM_registerMenuCommand`
in a second window, such that if the second window was closed it would leak
because of the associated menu command.  So this was resolved.

Firefox 17 introduces a new `Cu.nukeSandbox` method which does what it says, so
I am now using this when windows are destroyed.

### Compatibility Updates

A few apis were breaking due to [`__exposedProps__`].
Also `console.log`/`GM_log` updates were made by [Nils].

### GM_safeHTMLParser

[Greg] added a new argument, `aBaseURL`, which allows authors to specify a
base URL to be used when resolving partials.

[version history]:https://github.com/scriptish/scriptish/wiki/Version-History
[Greg]:https://github.com/supahgreg
[Nils]:https://github.com/nmaier
[__exposedProps__]:https://developer.mozilla.org/en-US/docs/XPConnect_wrappers#__exposedProps__
[switching to the SDK]:http://scriptish.org/news/2011/11/21/Moving-to-addon-sdk.html
