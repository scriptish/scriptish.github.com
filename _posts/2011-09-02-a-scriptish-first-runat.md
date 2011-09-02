---
layout: main
title: A Scriptish First: @run-at
keywords: @run-at, runat, run at, document-start, metadata
author:
    name: Erik Vold
    website: http://erikvold.com/
    twitter: erikvold
    email: erikvvold@gmail.com
---

This is actually a funny story.  Way back when [Google Chrome announced that it
would support user scripts natively](http://blog.chromium.org/2010/02/40000-more-extensions.html)
there was [this lonely and sparse page of documentation provided](https://sites.google.com/a/chromium.org/dev/developers/design-documents/user-scripts)
which described a new feature, `@run-at`.

From reading this documentation one was lead to believe that adding a
`@run-at document-start` metadata key/value pair, then their user script would
be executed when a page begins loading, before the default point at which user
scripts are loaded (ie: the DOM loaded event).

There was a bunch of talk about implementing this in Greasemonkey for a long
time, and this became one of the features that I felt I must have for my Firefox
experience, so it became one of many reasons why I decided to finally fork
Greasemonkey and make Scriptish last year.

When I finally got around to implementing the feature I wanted to test things
out and see if there were are discernible differences between Scriptish's
`@run-at` and Google Chrome's.  This is when I realized that Google Chrome's
`@run-at` wasn't working as advertised if at all, so I created [Google
Chrome bug 61856](http://code.google.com/p/chromium/issues/detail?id=61856)
in which I learned it hadn't actually been implemented at all.

So Scriptish was the first user script engine to implement `@run-at`.

Finally though Google Chrome has implemented the feature, and recently
Greasemonkey started to support the feature as well, so things are looking up
for the community!
