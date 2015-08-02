---
layout: posts
title: saying goodbye to SprayFire
description: An explanation on why SprayFire is no more and what I'm working on instead.
author: Charles Sprayberry
published: true
category: programming
---

If you've read my blog before you know about a project I worked on called SprayFire.
It was my homebrewed framework. It taught me a lot about design patterns, the need
for modular libraries, and helped get me a job. Some time ago I deleted the project.
This post talks about why I deleted the project&hellip; and what took its place.

## why it had to go

I started to use SprayFire and realized it had a critical flaw for how I like to
structure and build applications. I've come to the belief that small, hyper-specific
libraries wired together is a better solution than one, monolithic architecture.
There's a lot of really great libraries already out there that do what individual
SprayFire components did, only better.

The project, while useful, simply wasn't how I believe applications should be built
after lessons learned from experience. Instead of restructuring the framework for
what would be a 4th time I decided to simply start completely fresh with a brand
new project.

While SprayFire, and its replacement, is an educational experience I also *want*
other people to build an application on top of my framework. Knowing that the
project wasn't something I believed in or supported I removed it from GitHub
instead of allowing it to exist. Sometimes programmers can develop an emotional
attachment with their code; no such attachment existed here. The code didn't
serve its purpose and was removed.

I've went back through all my old posts that reference SprayFire and have removed
links along with putting up a disclaimer where the project was mentioned.

## what I've been up to

Besides work-related coding, which has taken over more of the time I spend developing
software, I still contribute to other open source projects and write my own
libraries. Some of the cooler things include:

<div class="github-repo-card">
  <h3 class="github-repo-card--name">Labrador</h3>
  <p class="github-repo-card--description">
    A microframework for PHP7 that ties together a DI Container, an event emitter,
    and a plugin system to facilitate building small-to-medium sized PHP applications.
  </p>
  <a href="https://github.com/cspray/labrador">https://github.com/cspray/labrador</a>
</div>

<div class="github-repo-card">
  <h3 class="github-repo-card--name">Telluris</h3>
  <p class="github-repo-card--description">
    A library that allows you to manage your application's environment. Includes
    the ability to have environment specific configurations and initializers.
    Also includes the ability to keep your production configurations secret.
  </p>
  <a href="https://github.com/cspray/telluris">https://github.com/cspray/telluris</a>
</div>

<div class="github-repo-card">
  <h3 class="github-repo-card--name">Delegatus</h3>
  <p class="github-repo-card--description">
    A library that allows you to delegate method calls on an object to dependencies
    or anonymous functions.
  </p>
  <a href="https://github.com/cspray/delegatus">https://github.com/cspray/delegatus</a>
</div>

<div class="github-repo-card">
  <h3 class="github-repo-card--name">CodeAnvil</h3>
  <p class="github-repo-card--description">
    An object-oriented API to generate PHP7 code. Includes support for scalar
    type hints, return types and several other PHP7 features.
  </p>
  <a href="https://github.com/cspray/code-anvil">https://github.com/cspray/code-anvil</a>
</div>

<div class="github-repo-card">
  <h3 class="github-repo-card--name">Platelets</h3>
  <p class="github-repo-card--description">
    A native templating library that encourages the use of composition to build
    `Renderers` as simple or as powerful as you need.
  </p>
  <a href="https://github.com/cspray/platelets">https://github.com/cspray/platelets</a>
</div>
