---
layout: posts
title: SprayFire and MVC design pattern
description: A look at the Model-View-Controller design pattern and the way the pattern is implemented in SprayFire
author: Charles Sprayberry
published: true
category: programming
references_sprayfire: true
redirect_from:
  - /2012/01/03/sprayfire-and-mvc-design-pattern.html

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2012/01/03/sprayfire-and-mvc-design-pattern
disqus_url: http://cspray.github.com/2012/01/03/sprayfire-and-mvc-design-pattern.html
disqus_title: SprayFire and MVC design pattern
---
MVC must be one of the most over-used acronyms in the PHP framework community.  In SprayFire docs
and source code I've made a concerted effort to avoid use of the term MVC, except where appropriate.  Too
many people have their preconceived notions on how this design pattern should work and often anything that
diverges from the traditional implementation is treated as some form of abomination, a code pariah to be
dumped as soon as possible.  Reading this article, and the other articles talking about SprayFire's interpretation of
the pattern, I ask that you open your mind.  Drop your preconceived notions.  There is nothing wrong with new
ideas, even if you don't agree with them.  If an idea winds up not working, it won't survive.  If it does wind
up working it might just make things better.  To not even consider the idea, I believe, would be folly.

### web MVC is **not** desktop MVC

The first thing to do is get rid of this silly notion that for some reason a design pattern for
desktops must be implemented the exact same way on the web.  Why?  They are two completey different ways
of running software.  Desktop software does not equal web software, regardless of how close the two have
appeared to merge to the user.  To the *developer* many of the technologies used for web development have
been around for years, it is simply the way in which we are using them that has changed.  Remember, MVC
is a *design* pattern, free to be changed and iterpreted differently.  It is not a concrete set-in-stone
checklist for writing quality software.

### MVC, the right kind, does work on the web

You hear it all the time.  MVC doesn't work on the web.  Sure, your attempt to sledge hammer a desktop
design pattern onto the web doesn't work.  That doesn't mean MVC on the web is a bad idea.  MVC is simply
a way to separate the concerns of your application.  This is a **good** thing.  That's the end
goal; to separate the responsibilities of your application in such a way that it is easily maintained, portable and
modular.  If you accomplish these things, with clean, unit-tested code, does it really matter if your application's
interpretation of MVC is unorthodox?  I think no.

### Model is your application

The Model is not just an object to make querying a database easier.  It isn't even an object or single
class at all.  Think of the Model as a layer of your app that is responsible for the *real life problem*
you are attempting to solve.  Maybe your app is complicated and you need multiple Model layers to accomplish all
of the different functionality.  But, ultimately the Model makes use of a variety of objects related to data
persistence, validation, and whatever else your app needs to provide the appropriate data.  Ultimately the
Model should be able to exist entirely independent of the View and Controller.

### View is really Responder

I've never much cared for the name of the middle initial in MVC, at least not in the context of web apps.  It
simply doesn't make much sense.  We are not sending a Graphical User-Interface to the user.  We are sending, ultimately, a
string of text to the user.  The browser, or a scripting language in that browser, then interprets the text
into a fancy display.  On the backend we shouldn't think of what we are sending back to a user's request as a
graphic view, because it **isn't**.  Even if you're of the philosophy that HTML ultimately results in a
graphical interface and thus can be considered a View you're completely disregarding other types of web response
data, like JSON and XML.  How does a JSON object returned for an AJAX request really represent a "view" of something?
I don't believe that it does.

We need to break away from tradition.  What is the View *really* doing?  What is it truly responsible for?
Well, in SprayFire the "View" is responsible for generating a **response**, based on data gathered by
the Controller from the Model.  Since sending HTTP headers is so directly tied to sending output we also delegate that
responsibility to the "View" as well.  If you boil away all the extra stuff you wind up coming to the realization that the
"View" is really generating and sending a response.  This sounds to me more like a **Responder** and not something
that is a View.

An obvious example of a Responder would be <code>HtmlResponder</code>.  It would take data from the Controller, put that
data into some kind of HTML template system and then output the resulting HTML.  Pretty simple stuff really.  A <code>JsonResponder</code>
would be pretty similar.  Except sending JSON instead of HTML.  It would take the data from the controller, turn it into an appropriate JSON object,
and  then send the response along with the appropriate headers for that response type.  Its pretty easy to see from here that you might also
create a <code>XmlResponder</code> or maybe even a <code>RssResponder</code>.  Ultimately though, regardless of the type of
data, its all just a *response*.

### Controller talks to Model for the Responder

We have a layer to gather the appropriate data for a response, Model.  We have a layer to generate that response and send it to the user,
Responder.  Now we need a way to get that data from the Model to the Responder.  This is where Controller comes in, think of it
as a translator of sorts.  The Model and Responder are two foreign dignitaries that must work together but don't speak each
other's language.  The Controller is there to facilitate this communication.  A request comes in, the Controller talks to the Model, gets
the appropriate data and then "translates" it into something a Responder can use.  Ultimately, that's all the Controller is responsible for.
Getting data from the Model to the Responder.

### there's more to web MVC than the M, the <del>V</del> R, and the C

Much like other frameworks SprayFire uses other objects to help facilitate the interaction of the three primary layers.  I won't go into
much detail about these objects here but I will list some of them.  Other articles will come that discusses their role in **MRC**,
SprayFire's interpretation of the MVC design pattern.

- Front Controller
- Router
- Components
- Behaviors
- Helpers

### tl;dr

- Model === Your app
- Model !== database storage
- View === Responder
- View !== HTML
- Controller === Mediator

### wrapping it up

If you got this far, thanks for reading my article.  I hope it, at the very least, was thought provoking.
Important to take away though is that design patterns are *guides* for solving a problem.  They are
not set-in-stone processes that must be followed blindly simply because somebody else did it that way.  Innovation
does not happen in the status quo.