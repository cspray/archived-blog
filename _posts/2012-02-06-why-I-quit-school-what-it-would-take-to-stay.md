---
layout: posts
title: why I quit school and what it would take to stay
description: Recently faced the decision--stay in school or take the job you're going to school for?
author: Charles Sprayberry
published: true

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2012/02/06/why-I-quit-school-what-it-would-take-to-stay
disqus_url: http://cspray.github.com/2012/02/06/why-I-quit-school-what-it-would-take-to-stay.html
category: tech-and-society
---
About three years ago I moved to the upstate New York area as a start to "rebooting" my life.  I
had entered the full-time work force after graduation and 10 years later, while the resume looked ok,
there was a huge void.  I was just kinda floundering at my job and going through the motions.  I knew
if I stayed where I was I would only continue to flounder.  A change was needed, so I moved.

One of the many reasons I made this decision was a job with the [Monks of New Skete](http://www.newskete.com).
Unfortunately in January of 2011 they were forced to lay me off due to the economy.  In their graciousness
the brothers decided to assist me in attending school and really pushed me to enroll in classes.  Determined
to become a web developer I searched for schools that I felt would teach me the right kind of information
to get a job as such.  I found the school and started attending classes.

Recently the second semester of college started.  Soon after though I found myself facing a tough decision.
A company spotted my resume and gave me a phone interview, then another phone interview, then a live interview.
Then a **formal job offer**.  A job doing the kind of work I was going to school for in
the first place.  Oh yea, also *twice as much money as I've ever made in my whole, 28-year long
life.*  What do I do?  Take the job or stick with school and get my degree?

It was a little disheartening how easy it was to come to the decision to quit school.

Now I know I'll get a few of you out there who are moaning right now, cursing at the young whipper-snapper
who just doesn't know any better and should really stay in school and get a degree.  Before you get
too red in the face and run out of breath let me tell you some of the reasons why I decided to leave
the academic program and start gaining real-life work experience.

### outdated and/or flawed information

The best example I can show of this is my HTML class.  The professor mentioned [browser sniffing](https://www.google.com/#sclient=psy-ab&hl=en&source=hp&q=browser+sniffing&pbx=1&oq=browser+sniffing&aq=f&aqi=g4&aql=&gs_sm=e&gs_upl=1703l4091l0l4361l16l11l0l0l0l0l946l2724l0.3.5-1.2l6l0&bav=on.2,or.r_gc.r_pw.r_cp.,cf.osb&fp=862141011cc102a&biw=1280&bih=729)
as a means to detect the browser being used and create different pages to target the different browsers.
When I heard this uttered by an authority figure in a place of learning I had to do a double-take and make
sure I wasn't really in some sort of nightmare.  Clearly by now the web development community has decided
[progressive enhancement](http://www.alistapart.com/articles/understandingprogressiveenhancement)
is the future of web development and the best means to provide rich content to capable devices.

Now, I'm certainly aware that in certain cases detecting the browser agent may be necessary.  But to
teach this to a beginner level class that doesn't know any better is damn near negligent.  That string is *arbitrary,
unsafe* data that should not be trusted unless you know what you're doing.  At the very least if you
are going to discuss information like this tell the whole story; that the data is coming from the user and
can be set to anything they want and you're creating a user experience nightmare that we should be avoiding, not encouraging.

Another rage-worthy moment is a [recent comment](http://stackoverflow.com/questions/9121654/why-would-this-regex-return-an-error#comment11462449_9121654)
I happened across on one of my favorite sites, [Stack Overflow](http://www.stackoverflow.com).
In it, the user commented that the head of the Computer Science department was teaching him how to parse
HTML with regex.

&hellip;

This sounds incredibly, well, stupid.  I definitely do not agree with parsing HTML with regex and
certainly don't believe that it is worthy of being taught as a module in any education system.  It is
incredibly frustrating to know this type of material is being taught by "higher learning".

### niche subjects should not be core requirements

Part of my web development program included a course on [Flash](http://en.wikipedia.org/wiki/Adobe_Flash),
[Dreamweaver](http://en.wikipedia.org/wiki/Dreamweaver), and [Fireworks](http://en.wikipedia.org/wiki/Adobe_Fireworks).
I vehemently disagree that these subjects should be part of the core
requirements for a degree.  Although Flash is still prevalent on the web, it is [also dying](http://www.forbes.com/sites/josephhargett/2011/11/09/steve-jobs-vindicated-adobe-reportedly-abandoning-mobile-flash-plug-in/)
and I have very strong feelings on developing with Flash; to make a long story short I'm not gonna
develop in Flash.  I don't like the technology and everytime I require its use for a website I cry a little inside.
I'm not gonna do something to others that I know makes me feel that way.

An entire semester of using a WYSIWYG editor would be akin to some kind of sick twisted game; not
an educational lesson I would take with me the rest of my life.  I stopped using these types of HTML-producing
monstrosities shortly after Geocities.  I have no intention of going back to using them no matter how
advanced they may have gotten.  I can type just fine, thank you very much, and wouldn't work for any
company that forced me to use an editor of this type to make web applications.

So far, &frac23; of the class would be completely useless to me and not something that I would use
in my actual career plans.  Why should I have this hoisted onto my calendar and my wallet?  Classes
like these should be turned into electives; if you're interested in pursuing Flash development get into
the class, otherwise give me the opportunity to learn something I may use in my career.  You may also
find that the money for that class could be better spent elsewhere as the enrollment drops off because
that isn't where the demand and the future is.  It's where the past is.

### teach things that you only give lip service to

In each of my classes I would hear faint echoes of words like "version control" and "testing" but
they never stuck around long and didn't warrant any intellectual conversation.  These are
crucial aspects of being a professional developer.  These topics certainly are extremely important in
real-life, this-is-how-you-actually-do-it world.  Don't just mention them in passing; *teach*
me about them.

There are a couple things that I feel are ridiculously important to creating **sustainable, quality**
software.  These things should absolutely be taught in every college degree program that intends to produce
software engineers/developers.

#### version control

Version control is so extremely important and necessary in application development that it should be a
101, first-semester course.  The great thing about version control is that it transcends programming, you
can really use it for all kinds of things.  But, the important part here is that you will never create
any kind of professional software that doesn't use version control of some kind.  This subject absolutely
must be taught.  If you are past the first-semester of a degree pursuing some kind of software development
and you haven't commited to a repository yet [please go do so now](http://git-scm.com/).

#### unit testing

Having recently gotten into unit testing I'm really enjoying it.  I'm also seeing how testing is a
requirement for robust, maintainable software.  If you don't have unit tests for your code it will
wind up turning into a mess.  Unit testing is an art in and of itself; an art within the art of programming.
Knowing how to unit test properly and what your unit tests should be accomplishing would be tremendously
valuable information.  Information that, I'd be willing to bet, my future employers would love that I had.

#### documenting, naming conventions and formatting

I've seen some pretty awful code submissions.  No formatting, erratic spacing, nondescriptive variables,
and seemingly no consistency in the code base.  Pretty awful stuff to look at really.  Ultimately this is
highly important stuff; how easy your code is to *read after it's written* is gonna play a big
role in *how easy that code is to maintain*.  Software that can't be read can't be maintained; software that
can't be maintained can't be sustained.

### wrapping it up

Some of this may sound like a rant; because maybe it kind of is.  I'm frustrated.  Honestly, I hope
there are others out there who are just as frustrated.  That our time, money and hard work is being
wasted on wrong, outdated or unuseful information.

The real problem though is that ultimately information being taught like this is bad for our future.
We're not preparing our young people to handle the problems of tomorrow.  The techniques and practices,
particularly in regards to programming, being taught in schools just don't match up with what I feel
is the direction the software world is taking.

Perhaps in my journey through life I'll come across a time when I feel school is worth the time and effort.
However, how does one find the right school?  How do you discover what is being taught before it is taught to
you?  How can you effectively gauge whether the school will bring you value until you've already expended
the time and energy?

It is unfortunate that these problems must plague society today.  I sincerely hope that the American
education system is able to rise from the muck it has sunk down into.  Education is highly important to
a society's health and well-being.  We must get it right, or so many things will go wrong.
