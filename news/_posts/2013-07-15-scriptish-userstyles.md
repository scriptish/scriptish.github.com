---
layout: main
title: Improved GM_addStyle and a new @css header
keywords: issues, lighthouse, github, issue tracker, scriptish
author:
    name: Erik Vold
    website: http://erikvold.com/
    twitter: erikvold
    email: evold@mozilla.com
---

Over the weekend I did some work on Scriptish!

One of the features I'm most happy about finally adding is
[the new `@css` header](https://github.com/scriptish/scriptish/wiki/Manual:-Metadata-Block#css-new-is-scriptish)
(introduced by and currently exclusively in Sriptish!),
which effectively adds all of the
power of [Stylish](https://addons.mozilla.org/firefox/addon/stylish/) to Scriptish ;)
This was [Issue #70](https://github.com/scriptish/scriptish/issues/70).

The format is different than Stylish though, it is far easier.
[With Stylish a designer had to learn about how to scope styles](https://github.com/JasonBarnabe/stylish/wiki/Applying-styles-to-specific-sites)
to pages with crud like `@moz-document` which is not only ugly,
but also nowhere near as expressive as the `@match` pattern or
`@include` and `@exclude` patterns which Scriptish provides
for userscripts (consider the TLD aspect).

So with Scriptish all a developer needs to do is write css
as they normally would, without any extra special nonsense, and point
to it with a userscript using this new `@css` header.

This feature was necessary I think because I've seen far too many userscripts
using `GM_addStyle` which (before now) had major issues like:

1. Exposed the userscripts existence to the page (making it easier to identify a user if a web dev was evil).
2. Made writing css hard because one would typically wrap the css in strings literals.
3. Lead userscript developers to often suggest installing a userstyle in combination with a userscript.

The first I fixed this weekend too, using the same underlying code that I used
to implement `@css`, the second wasn't necessay but required a developer to use
`@resource` in combination with `GM_addStyle` which brought the first issue
back in to play, and the 3rd issue was just making me sad, as a user of my
own dog food I hated having to perform these multiple steps.

Well the dog food has never tasted sweeter than now with `@css`!
