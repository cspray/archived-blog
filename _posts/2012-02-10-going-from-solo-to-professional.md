---
layout: posts
title: going from solo to professional
description: How I think I went from a solo, amateur developer to a paid professional.
author: Charles Sprayberry
published: true

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2012/02/10/going-from-solo-to-professional
disqus_url: http://cspray.github.com/2012/02/10/going-from-solo-to-professional.html
category: programming
---

As I alluded to in my <a href="{% post_url 2012-02-06-why-I-quit-school-what-it-would-take-to-stay %}">previous post about leaving school and the state of the modern CIS program</a>,
I recently got a job!  I'm really excited about this opportunity and wanted to take a look at it from a
different kind of light.  What I didn't really talk about much in the previous post was what it took
for a solo amateur developer to join the ranks of the paid professionals.  Maybe you're in the same
boat and want to become a developer in one of the most awesome industries ever.  Well, this is how **I**
did it; maybe some of the stuff I learned can help you in your own journey.

### this is what I think&hellip;

There's no way anyone can really know, short of just asking, <em>why</em> they were hired by a particular
company.  I really have no idea why I was hired by my new employer.  I can take stabs at some reasons why,
but I really have no clue.  This is just some of the reasons I <em>think</em> they noticed me out of
the masses and gave me a chance&hellip;even without a formal education.

### actually writing code

This was definitely the key, essential ingredient in my career cake; the flour to your normal confectionary
delight.  Note, I didn't say actually publishing an app, although I have this really killer idea I'm
working on and have some others in the pipeline.  I also think publishing your software is really important
and something I plan on doing.  But, I haven't actually published any live application yet.  I can't
rightly say that *publishing* code as software got me my job.  But writing code sure did.

I have several repositories on [my github account](http://www.github.com/cspray) and will likely have
several more being created in the coming months as my ideas start to become reality.  The important
thing though is that I've written, relatively, a decent amount of code.  Enough for a person to get a
feel for my coding style and problem solving process.  This is the important part; get enough of your code
that somebody can have a general idea for how you do things and get that code out into the open.

### documenting my code

I make no secrets in <a href="{% post_url 2012-01-02-comments-arent-evil %}">my feelings on code comments</a>
and take great pride in the consistency of my documentation.  I attempt to stick to explaining why
a piece of code exists instead of explaining what it does.  I would hope the code itself is descriptive
enough to tell you *what* it is doing.  More often then not you look at code and you don't know
*why* it is doing the thing it is doing.  This is the part you can't tell about the code by
reading it; this is the part you need to be putting into documentation.

I see so much code that has seemingly no documentation whatsoever.  If you're of the belief that documentation
should be kept to a bare minimum then at least give me a class and method doc-block.  Regardless of
how beautiful *you* think your code is I may not be able to immediately grasp its elegance.
What I can grasp is English.  Give me just a little bit of that so I can know why your code exists
and shouldn't be removed when it's decided 6 months from now to refactor that part of the code base.

### unit testing my code

Oh man, I **love** unit testing.  It's just a blast.  I like the confirmation that my code works.
I was doing it before but just not automated and in a structured fashion.  You know what I mean.  Popping
a few <code>var_dump()</code> throughout your code, refreshing the browser, making some changes, refreshing the
browser again.  Don't lie; we've all done it.  Well, unit testing changes all that; no more inadvertently
dumping that entire object onto the production code because some <strike>bonehead</strike>developer
didn't catch that last <code>var_dump</code> before pushing to production.

If you're a solo developer and you think your projects are too small for unit testing, well you're wrong.
Go back and unit test your code, yea even if it already exists.  It tells the people that are looking
that you **actually care**.  Having managed people in the real world, not in the programming
industry but in a pizzeria, I can tell you first hand that the hardest thing to find is a person who
cares enough to actually try.  If you care enough to actually try chances are you're gonna figure it
out if you keep getting back up.  There's nothing wrong with showing that you care and your passioniate
for a subject; in my opinion, as a solo developer unit-testing is a great way of doing this.

Oh, and it makes your code way better.  There's that too.

### reading books

Yea, that's right.  You better work that noggin and read some books.  You can pretty much
<a href="/my.so-archive/100-most-influential-programming-books.html">start with this list</a>
and when you're finished you'll have read some of the most influential and
timely works on software creation ever published.  For me there were 2 books in particular that really
stuck and had a drastic influence on how I go about writing code.  The first being [Clean Code](http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?ie=UTF8&qid=1328925273&sr=8-1)
by Robert Martin and the second being [PHP In Action](http://www.amazon.com/PHP-Action-Objects-Design-Agility/dp/1932394753/ref=sr_1_1?s=books&ie=UTF8&qid=1328925296&sr=1-1) by
Dagfinn Reiersol, Marcus Baker, and Chris Shiflett.  Of course, you should read what is most relevant
to you but chances are if you read some of the books in the list you'll learn quite a bit of useful information.

### get involved; find support

Chances are in this day and age there's some kind of community online to support your development
needs.  I found mine at [Stack Overflow](http://www.stackoverflow.com), [Programmers](http://programmers.stackexchange.com/),
[Code Review](http://codereview.stackexchange.com/) and [Careers](http://careers.stackoverflow.com/).
Through these [Stack Exchange](http://stackexchange.com/) sites I've found all kinds of awesome reference material,
help on coding problems, a place to find honest, critical reviews of my work, and my employer.  As a solo
developer these tools are extremely invaluable and should be taken advantage of as much as possible;
if you're willing to do the work it's almost like your own little Stack Overflow University.

Find some support in that community.  Doing this kind of thing on your own can be mentally challening.
How do you know if you've gotten it right?  How do you know if anything you're doing even makes sense?
Find somebody that knows what they're doing to provide support.  Fortunately, I found that support in the
Stack Overflow [PHP chat room](http://chat.stackoverflow.com/rooms/11/php).  One user in
particular though, [edorian](http://stackoverflow.com/users/285578/edorian), really
provided the kind of problem-solving help and motivation that a budding developer needs to get
past those rough spots.  Sometimes just knowing that somebody out there cares enough to help
you and is watching can really make you strive to put forth your best effort.  If you can
find your own mentor then definitely hold on to that as long as possible and learn
as much as you can from the person.

### wrapping it up

It was certainly an unorthodox approach to getting a job: write a bunch of documented, unit-tested
code that never gets published, join a Q&A site, find some great support, and back it up with real-life
job experience in other industries.  Maybe perhaps not the best approach one could take but it still
got me to my destination none the less.

Besides the things that I talk about here I believe the most important thing to possess is
<a href="{% post_url 2012-01-06-how-to-be-great-at-x %}">passion for the subject</a>
.  I'm extremely passionate about programming; without this passion that drives me there's no way I
do the things that I talk about in this post.  There's no way I spend so much time over the past 2&frac12;
years to get to where I am.  If you're passionate about what you're doing and you're willing to learn
you will be great at what you do.  If you're passionate about programming and are flying solo then I
hope these bits of advice help get you to where you need to be.
