---
layout: posts
title: why you should use DI
description: A post talking about dependency injection, how its use has benefited me and other reasons to embrace asking for things instead of looking for them.
author: Charles Sprayberry
published: true
category: programming
redirect_from:
  - /2012/01/24/why-you-should-use-DI.html

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2012/01/24/why-you-should-use-DI
disqus_url: http://cspray.github.com/2012/01/24/why-you-should-use-DI.html
---

[Dependency Injection](http://en.wikipedia.org/wiki/Dependency_injection) is all the rage
these days, particularly when you slap the word 'Container' in there somewhere.  Dependency Injection
is just a fancy term for passing dependencies to the object needing them instead of letting the object
create its own.  Hopefully, you've watched this [great Google Clean Code talk about dependency injection](http://googledata.org/google-testing/clean-code-talks-dependency-injection/) [Misko Hevery](http://misko.hevery.com/) where he talks about why you should ask for things instead of looking for them.

I'm gonna talk about some reasons to use DI beyond just those presented in the video.  Maybe you
don't unit test, although you really should, so the better testability argument doesn't really hold
weight for you.  Maybe you're skeptical about the "extra work" that is needed with injecting depedencies
instead of just creating them.  Maybe you just flat-out don't see the benefit.  Well, I'm here to show
you how **I've** benefited and, hopefully, convince you that you can reap these same rewards
by asking for things instead of looking for them.

<h3 id="helps-global-state">helps in the battle against global state</h3>

[Global variables are bad](http://c2.com/cgi/wiki?GlobalVariablesAreBad).  If you are
of the belief that global variables *aren't* bad, well...I disagree with you.  Global state can
lead to spaghetti code and is often used as a crutch for when the real problem isn't solved.  If something
is in the global state there better be a *really* good reason; most reasons aren't good.  By
using dependency injection we are plainly stating what we need to use and then use those dependencies
within the scope of the class; not the scope of all the things.

> Interested in learning more about how DI can win the good fight against global state?
> Check out a follow-up to this article, <a href="{% post_url 2012-01-29-DI-and-global-state %}">DI and global state</a>,
> for a more thorough explanation and code samples.

<h3 id="helps-your-design">it helps your design</h3>

If dependency injection doesn't make you really think about and evaluate your code you aren't doing
it right.  Using DI isn't just about moving objects created in your constructor to objects passed as
arguments to the constructor.  What I'm trying to say is, if your class is injecting a lot of different
objects you should be treating this as a big, flashing warning sign.  It's easier to rationalize a problem
not being there, or even just missing it completely, if there are no consequences for your actions.  In a
way DI adds a consequence to your actions; you can't simply create an object with dependencies whenever
you feel like it.  Instead you have to think about how the object is being used and what the object
needs to complete its responsibility.

Dependency Injection doesn't make bad code smell, it makes bad code *reek*.  Don't ignore
the putrid odor wafting about your IDE.  Find the source of the stench and remove it or fix it.  Ignoring
this stench is akin to wallowing in garbage all day and believing that a swipe of deodorant is sufficient.
In reality you need a shower and you actually smell quite bad.

<h3 id="helps-srp">especially single responsibility</h3>

I've found that DI really helps out with a core tenant of good object-oriented design,
the [single responsibility principle](http://en.wikipedia.org/wiki/Single_responsibility_principle).
I firmly believe that SRP is one of the most fundamental and most crucial aspects of a good object-oriented
solution.  This is the only way to attain modularity.  If your classes don't encapsulate and solve a single
responsibility, and only a single responsiblity, you are ultimately entangling problems.  This entangling of
problems is what leads to applications not being sustainable in the market because they aren't *maintainable*.

### wrapping it up

Dependency Injection isn't just a fancy fad to prove your programming hipness.  The strategy is
intended to solve a problem and, I think, impact the way you write code and design your applications.
It isn't enough to just blindly use a technique or pattern.  You have to understand *why* you
are using that technique and what kind of benefits you're supposed to gain from their use.  Only then
can the technique be used effectively to solve problems and grow as a developer.
