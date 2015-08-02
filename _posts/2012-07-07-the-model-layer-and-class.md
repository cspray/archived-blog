---
layout: posts
title: the model, a layer and a class
description: The Model in the SprayFire framework, both a layer and a class
author: Charles Sprayberry
published: true
category: programming
references_sprayfire: true
redirect_from:
  - /2012/07/07/the-model-layer-and-class.html

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2012/07/07-the-model-layer-and-class.html
disqus_url: http://cspray.github.com/2012/07/07/the-model-layer-and-class
---

Lately I've been giving some thought to the Model in SprayFire and figured I would flesh out the concept as a blog post.  I'm going to discuss how my interpretation of this, most critical of layers, differs from many you may have already encountered or read about.  For starters, the Model, in OOP designed architecture, is actually two-headed; it is both a *layer* and a *class*.

### model as a layer

In most common usage the Model is a layer of services designed to accomplish some real world task, likely involving the use and manipulation of data.  This is the most important of the three letters in any MVC-like architecture, essentially this layer is your application.  It is most important that this layer stays isolated from the View/Responder and Controller.  Well designed Model layers can stand alone, independent from response related systems.

What services though?  That's a pretty broad term and can be interpreted to be, well, any object you create.  There are specific types of services the Model layer needs though.

#### data access

As I mentioned before, the Model layer involves some kind of use and/or manipulation of data.  The **data access service** provides the means for that to happen.  Note that I'm calling it data *access* and not data*base*.  A lot of the times you are accessing a database, but other times you aren't.  It might be a request to a web-based API or some other non-database service.

#### application logic

If the data access system is *how* you work with data then the application logic is  *what* you do with that data.  Algorithms and objects that determine if the request is valid, what should occur to data and what data should be returned in response to the request is your web application.  The application logic is basically the brains of the outfit.

#### data validation

I thought about leaving this in the application logic section.  However, I feel that this service can be sufficiently abstracted so that different Models can use the same service and simply pass in appropriate parameters.  Reasoning behind this is that web requests and data come in as a string, there's only so many different types of things you can do to a string.  This service ensures that the business logic gets fed data in the format it expects.

This may not necessarily be all the services that a Model needs.  Its hard to say for certain what any Model will need, each problem is different and you can solve that problem in a multitude of ways.  Depending on your design the Model layer may involve other services but chances are they'll at the very least use something similar to that described above.

### model as a class

You've built up this great Model layer that serves as an application solving some real world problem.  Now, you need a way to access and work with this layer from your response system.  This is where the Model as a class comes into play.  Think about it as the public API for the layer you just built.

This class is not a representation of a database or a database table.  It absolutely should not extend a database connection object.  It also shouldn't expose things related to CRUD functionality.  That's something delegated to the data access system; if your Model exposes this kind of functionality it is leaking an abstraction.  The API for this class should cleanly represent real world tasks that need to be carried out.

### in summary

The Model is the most critical of systems in any MVC-like architecture.  It should be able to stand independent from any response system, possibly serving more than one response system at a time.  The Model is really two-headed involving a layer to access and work with data and, in OOP architecture, a class to serve as a public API to the layer.

