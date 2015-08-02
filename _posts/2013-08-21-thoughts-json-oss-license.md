---
layout: posts
title: thoughts on JSON and OSS licensing
description: My 2 cents on the latest PHP drama involving JSON.org's software license
author: Charles Sprayberry
published: true
category: programming
redirect_from:
  - /2013/08/21/thoughts-json-oss-license.html

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2013/08/21-thoughts-json-oss-license.html
disqus_url: http://cspray.github.com/2013/08/21-thoughts-json-oss-license.html
---

If you're not aware, recently there's been some PHP drama about [PHP "losing" JSON support](http://philsturgeon.co.uk/blog/2013/08/fud-cracker-php-55-never-lost-json-support). Obviously this isn't the case and it turns out some people, getting their PHP through certain distributions, weren't getting the JSON extension by default. It all boils back to [this "bug" reported to PHP](https://bugs.php.net/bug.php?id=63520).

By now I'm sure if you're reading my blog about PHP you already know about [JSON.org's license](http://www.json.org/license.html) amendment to the normal MIT license:

> The Software shall be used for Good, not Evil.

Ultimately this clause caused certain distributions to stop supporting PHP's internal JSON implementation because it relies on JSON.org code. PHP's maintainers have decided they will continue to support the implementation, even if certain maintainers don't.

Ok, now that everybody's all settled down here let's get to the actual important part of this story.

### subjective shit in software licenses is stupid

Douglas Crockford is clearly a smart man and knows more about computer programming in his big toe than I possess in my entire body&hellip;but this was a bone-headed move to make. The concept of good and evil is entirely subjective and can't be proven, without significant resources, in a court of law. This one clause makes the entire license legally ambiguous; ultimately it winds up becoming a problem where software developers already have enough: legal issues.

For an open source software that is attempting to, and did, set a web standard this is just a silly thing to perpetuate. Crockford and JSON.org have already stated they don't see anything wrong with the license and they just don't care about the legal quandary it creates. Which is a shame because it brings about the type of situation where bloggers are talking about license minutiae instead of solving problems and software development. Oh, it also impacts real life companies conducting business in software development.

### leave the subjective wording at the door

There's another license that takes this clause to extremes, the [Don't Be A Dick Public License](http://www.dbad-license.org/). The entire premise of this license is ridiculous and what's even more ridiculous is that software is being released under it. These licenses make it harder for software developers, not easier. Your attempts to be funny are better served not in a legal document. Because that's exactly what any license is, a legal document.

Dealing with legal issues is a fact of life in the software development industry. I just wish that software developers didn't actively muddy the legal waters with their work. It only makes things harder for your fellow programmers.
