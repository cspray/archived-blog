---
layout: posts
title: you decided to write a framework anyway
description: If you're gonna write your own PHP framework here are some tips to help you get a good start and the best bang for your development buck.
author: Charles Sprayberry
published: true

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2014/01/09-you-decided-write-framework-anyway.html
disqus_url: http://cspray.github.com/2014/01/09/you-decided-write-framework-anyway.html
references_sprayfire: true
category: programming
---

In case you missed my post [you shouldn't write a framework](http://cspray.github.io/2013/03/05/you-shouldnt-write-framework.html) I'm not a huge proponent of writing your own PHP framework. This may sound contradictory coming from a guy who has devoted a not-insignificant amount of time working on [his own framework](https://github.com/cspray/labrador). Regardless of all the reasons why you shouldn't write your own framework you're probably going to anyway; it almost seems to be a rite of passage in the PHP community. I'm not here to convince you of the folly in doing so but instead give you some advice for your own framework creation. I've always thought if you're gonna do something stupid you might as well do it as smartly as you can.

### write apps with it

Seems like this article is just gonna be laced with hypocrisy. In the previous article one of the major negatives in building your own framework is that you really shouldn't build apps with it. However, if you really want to build a good framework that *other developers* will want to use you need to, ya know, **use it**. Frameworks are apps just like any other piece of software. In the case of a framework the end user is a developer and your app's job is to help easily create other apps.

What I'm trying to say is that if you don't ever use your framework to build apps you won't find the pitfalls and pain points and places the design fails. No amount of unit tests or design or brainstorming will yield a design so failproof that users won't find a way to punch holes into it. And your users are the kind of people that **love** punching holes into things. It would be great if you could find other people to build apps with your framework. But, good luck with that. PHP frameworks are a dime a dozen and you better have something pretty different to warrant a lot of constructive attention and feedback. Build your own personal apps with it, preferably ones that aren't public facing or wouldn't contain any really sensitive content. Take what you learn building apps with your framework to make it not suck as much. It will also help you figure out the documentation you need to write to let people know how easy it is to get up and running.

### experiment with crazy ideas

Your journey must be viewed as an educational experience intended to let you learn new things. To learn new things you have to actually do new things. If you're creating your framework just to reimplement exactly the same thing as existing frameworks then you're doing it wrong. You should be doing something *different* and experimenting with new ideas.

Early in your framework's life span is the greatest time to experiment. You'll likely not have many users that require support so you're able to change things quickly and drastically. Take advantage of this by implementing new ideas, experimenting with them to see if they work and adjusting the design as necessary. In the early volatile time for your framework do new, crazy stuff. If it works keep it in; if it doesn't rip it back out.

### design modular from the get go

SprayFire has always been intended to be a modular framework that takes different standalone modules and uses them together to make a working web development framework. Even with this goal being there since day 1 the initial design of the framework was a single, monolithic repo and directory structure. This, in hindsight, was a big mistake. Now, as I'm ripping each module into its own repo I've spent a lot of time doing so and have found some drawbacks to certain aspects of the design. Quite a few of the things I've found so far would have been caught in the initial planning phase if I had been forced to design modular from the get go. If you design components of your framework to be modular you'll find that these standalone libraries can be more easily integrated into other projects and the overall quality of the codebase increases.

### wrapping up - tl;dr

I think something that was missed in my last article was that I do believe there are benefits to writing your own framework. I think a lot of that value is primarily in learning about PHP and software architecture. I've taken a break from SprayFire recently as I've started a new job but I am starting to get to a point I'll be picking back up development on the project. As I look back over the project these are the things I wish I had done more of earlier in the framework's development.
