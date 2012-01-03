---
layout: main
title: Search Engine Manager
tags: addon-sdk
author:
    name: Erik Vold
    website: http://erikvold.com/
    twitter: erikvold
    email: erikvvold@gmail.com
---

Well I've been doing some work on some modules to help [port Scriptish to use
the add-on sdk](http://scriptish.org/news/2011/11/21/Moving-to-addon-sdk.html),
and I have finally got a extension to show off some of my work!

## Search Engine Manager

The [Search Engine Manager](https://addons.mozilla.org/en-US/firefox/addon/search-engine-manager)
will display your installed search engines in the Extension Manager
[about:addons](about:addons).

I wrote this extension for two reasons.  First, I hate the existing manager for
search engines, and the second reason was a simple one, I needed to test my
[addon provider jetpack module](https://github.com/erikvold/addonprovider-jplib).

This new module will be used by Scriptish eventually to display user scripts
in the Extension Manager, just as it always has; of course this module will
need some more work to fully support Scriptish's feature set, but it is a
good step forward.
