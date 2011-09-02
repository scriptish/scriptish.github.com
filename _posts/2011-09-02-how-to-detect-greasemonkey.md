---
layout: main
title: How-to Detect Greasemonkey
keywords: pii personal information security
author:
    name: Erik Vold
    website: http://erikvold.com/
    twitter: erikvold
    email: erikvvold@gmail.com
---

If you are a Greasemonkey user, then you may be surprised to know that
Greasemonkey is informing every page that you visit that you are a Greasemonkey
user.

Since Greasemonkey is a add-on that not every Firefox user has installed, that
is [personally identifiable information](http://en.wikipedia.org/wiki/Personally_identifiable_information),
and **a potential security risk**, so that is why Scriptish was made to be
completely stealth.

Anyhow, if you are curious how to detect Greasemonkey as a webdev, well here's
how you do it:

## Option 1

    if (Components.interfaces.gmIGreasemonkeyService) {
      alert("I smell a monkey!");
    }

## Option 2

    <script type="text/javascript" src="resource://greasemonkey/addons4.js"></script>
    <script type="text/javascript">
    if (typeof GM_addonsStartup !== "undefined") {
      alert("I smell a monkey!");
    }
    </script>
