---
layout: posts
title: you shouldn't write a framework
description: Discussing why you should but mostly shouldn't write a PHP framework
author: Charles Sprayberry
published: true

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2013/03/05-you-shouldnt-write-framework.html
disqus_url: http://cspray.github.com/2013/02/12/you-shouldnt-write-framework
category: programming
references_sprayfire: true
---

It is almost a rite of passage in the PHP community. If you've ever done any serious object oriented PHP you've probably created, or at least used, a framework of some kind. There are literally thousands of shitty frameworks out there that will never get used for anything. Mine is SprayFire.

My framework started as a learning experience. I had gotten into the internals for some of the more popular frameworks and realized that I could probably do what they were doing, what I was doing with the mainstream frameworks at the time was pretty simple stuff. Soon SprayFire turned into something that I spent quite a bit of my spare time developing. It has been an interesting experience and has provided me with quite a few theoretical benefits and, maybe, some more tangible benefits as well.

But I'm not sure writing your own framework is a smart move. You probably shouldn't, but maybe should, write your own PHP framework.

### you shouldn't write a framework because&hellip;

#### it is highly unproductive

Chances are you won't be getting paid to write your framework. Chances are also pretty good that you won't ever use your framework to create an application that generates revenue. It just isn't smart to use a homebrewed solution for a lot of things just because there's so many other frameworks out there that are battle hardened and handle problems you don't even know exist yet. There's a high probability that code you write implementing your own framework is a complete waste of your time...from a financial perspective.

Build something else instead. Solve some problem that isn't already solved. Build a mobile app and create a PHP powered back-end. Launch your own small business creating websites using already existing frameworks. There's a slew of things you can do with PHP that are financially productive. **Writing a framework is very rarely one of them.**

#### you're gonna want to build applications with it

Nobody is going to put forth the time and effort needed to build even a semi-useable framework and just throw it all away. You're gonna want to use your creation for something. It's only natural. The problem is that you probably shouldn't use it for anything serious. As you go through using your framework for applications you're gonna realize where your framework is lacking something fundamental. Then you have to make a decision, hack around the limitations of your still fledgling framework or put your revenue-making project on hold to go implement the changes in your framework. Your framework will also probably introduce all kinds of vulnerabilities and unforeseen problems that other frameworks have already solved because they've already experienced them.

### you should write a framework because&hellip;

#### you'll learn stuff about *PHP*, not a framework

For the most part if you use a framework you'll be learning the framework and not PHP. That isn't to say you won't learn PHP at all. You'll learn the proper syntax and how to make PHP and your framework do things. There's nothing necessarily wrong with that. Doing things is pretty damn important and is a large part of the reason why you're a developer, to make computers do things. But, in depth knowledge of the language you're utilizing isn't necessarily a bad thing either. There's quirks and traps in the language that you'll never know unless you slavishly follow PHP internals, bugs and mailing lists and have a near photographic memory or you experience them. Writing your own framework forces you to get closer to all those warts on PHP.

#### it is a tangible code base you can put in your portfolio

Even if the framework is never used for anything chances are it'll grow to be a somewhat substantial codebase if you've put forth serious effort into development. You can use this in your portfolio to show potential employers, "Hey, this is some code I've written and how I solve problems."

Your mileage may vary in the value of this but for students, beginners and people just starting out having *something* that you can point to as an example of how you write code is hugely important. You might be a great developer but suck at business skills and just can't land clients. Whatever your reason for needing to do so a framework is definitely something you can put in your portfolio and it helps. I've gotten 2 job interviews, in some part, thanks to SprayFire. One of those interviews landed me my current job.

That being said, an actual **application** is a tangible code base you can put in your portfolio too so this is really a weak argument. I really couldn't come up with another reason beyond learning more about PHP for writing your own framework.

### but really, don't write a framework

If I had to suggest a fresh PHP developer just starting down the programming career path I would recommend them to **not write their own framework**. It is hugely unproductive, is only beneficial if you plan to stick with the language for an extended period of time and can be a huge time sink where productivity goes to die. Write a useful app instead that solves a personal problem or you can make a living off of.

That being said I'm gonna keep on developing SprayFire. Clearly I'm a masochist.
