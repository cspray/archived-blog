---
layout: posts
title: writing better commits with github
description: How to make better commits with github by committing frequently, consistently formatting your messages and documenting what you want to do.
author: Charles Sprayberry
published: true
category: programming
references_sprayfire: true
is_stale: true
redirect_from:
  - /2011/12/31/writing-better-commits-with-github.html

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2011/12/31/writing-better-commits-with-github
disqus_url: http://cspray.github.com/2011/12/31/writing-better-commits-with-github.html
---

<p>As the development of SprayFire progresses I'm constantly evaluating what I'm doing, how I'm doing it
and what tools I'm using.  Lately I've been thinking about the way I use <strong>git</strong>, my
version control software of choice.  Looking through some of the commits for SprayFire I can tell that
my commit strategy needs some work.  Commit messages are sometimes lengthy or don't really convey what
the commit is doing.  What are some things that I can do to improve my commits and make for a more maintainable project?</p>

<h3>commit, commit, commit</h3>
<p>Well, the first thing is to simply commit more often.  Too often I find myself making a series of
small refactors and never commiting my changes between refactors.  Next thing I know I've found myself
making a single commit where the entire file has changed and instead I should have made three or four
smaller commits changing a fragment of the file at a time.</p>
<p>While small, simple classes can make this easy to get away with it can bite you when your classes
become more complex.  It is important to establish a "muscle memory" if you will.  What you do with
your small, simple classes will wind up translating over into the bigger, complex classes.  If you
<em>always</em> commit early and often then you never wind up finding yourself refactoring an entire file
between commits.</p>

<h3>thou shalst format thy commits</h3>
<p>Please, for all that is good and right in this world, have a consistent format for commit messages.
While my own messages could certainly use some work in this regard one of the things I do adhere to
is a 3 letter prefix on every commit that tells me what I'm doing.  Here's a list of my prefixes
and what they mean:</p>

<div class="highlight">
    <pre>
---------------------------------------------------------------------------------
| Prefix                    |       Meaning                                     |
---------------------------------------------------------------------------------
|   ADD                     | I have created a new file that did not previously |
|                           | exist in the repository.                          |
---------------------------------------------------------------------------------
|   UPD                     | I have updated a file that already exists in the  |
|                           | repository.                                       |
---------------------------------------------------------------------------------
|   DEL                     | I have removed a file from the repository.        |
---------------------------------------------------------------------------------
|   DEL & ADD               | I have renamed or moved a file                    |
---------------------------------------------------------------------------------
    </pre>
</div>

<p>This makes it easy to look through commits and tell at a glance what I've done.  It also makes looking
for commits with <code>git log</code> extremely easy.  Wanna know about any deleted files?  As simple as:</p>

<p><code>git log --grep=DEL</code></p>

<p>Although I have a prefix strategy after that it has been pretty much free-for-all.  Perhaps instead
I should have a concrete format for commits.  Maybe something that looks like:</p>

<p><code><i>prefix</i> class_or_file message [<i>issue link</i>]</code></p>

<h3>use github's resources</h3>
<p>The wonderful thing about github is the simple, flexible, open-source tools they make available to you.
This blog for example is powered by <a href="https://github.com/mojombo/jekyll">github's very own Jekyll</a>.  Not
only that but they provide you with issue/milestone tracking and a simple wiki.  Certainly for larger projects
these tools may not be sufficient but for intermediate use these are wonderful tools to help manage your
project.</p>

<p><strong>Write an issue for everything you want to do.</strong></p>

<p>Yea, that's right.  If it is an important part of your application, and let's face it what isn't,
or needs to be done write up an issue.  Tag a label onto it, assign it to somebody.  Assign it to a milestone,
a concrete goal for what you want your application to do. The reasons to do this go beyond just making clean
commits but helps guide you to a better application.  You're much more likely to rewrite a flawed design
typed up as an issue as compared to if you actually took the time to implement that flawed design.  This has
already saved me countless times with SprayFire.  You also get the satisfaction of closing issues and seeing
actual progress with your application.</p>

<p>But, I started to ramble.  How does that impact our github commit messages?  Well, remember those wonderful
tools that github provides for you?  Part of that is referencing issues and milestones from within commits.
Does the commit you just made have an issue associated with it?  At the end of the commit message add
something that looks like: <code>cspray/SprayFire#1</code>, replacing your github username, repository name
and issue number as appropriate.  You automatically get a link to that issue in your commit and, even
cooler, the commit shows up when you look at the issue!  This can be an incredibly handy tool to easily
get the documentation needed for a given issue or commit.</p>

<p>
Even cooler, as detailed at the <a href="https://github.com/blog/831-issues-2-0-the-next-generation">github blog</a>, you can actually <strong>close</strong> issues
with commit messages!  Awesome!  Just prefix your issue number or link with any of the below words:
<ul style="list-style-position:inside;">
<li>fixes</li>
<li>fixed</li>
<li>fix</li>
<li>closes</li>
<li>closed</li>
<li>close</li>
</ul>
</p>

<h3>wrapping it up</h3>

<p>Well, now that I've talked about making better git commits I think I'm gonna go make some of my
own.  Happy committing.</p>