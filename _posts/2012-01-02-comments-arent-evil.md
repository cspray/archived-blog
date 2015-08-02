---
layout: posts
title: comments aren't evil; comment your code
description: Why comments aren't necessarily a bad thing along with reasons why you should document your code
author: Charles Sprayberry
published: true
category: programming
redirect_from:
  - /2012/01/02/comments-arent-evil.html

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2012/01/02/comments-arent-evil
disqus_url: http://cspray.github.com/2012/01/02/comments-arent-evil.html
disqus_title: comments aren't evil; comment your code
---

<ul class="no-list-icon no-padding">
    <li>
        <p><b>Dissenter:</b> Charles, you <i>noob</i>!  Comments <b>are</b> evil.  They can muddy up
        your code, nobody keeps them up to date and they're completely unnecessary.  Write short, concise
        code and you don't need comments!</p>
    </li>
    <li>
        <p><b>Me:</b> You're absolutely right.  Comments can be evil.  But you're taking it too far!
        Not all comments are evil and the innocent are perishing in your genocide!</p>
    </li>
    <li>
        <p><b>Dissenter:</b> Hog-wallop!  All comments are evil.  You have simply not transcended to a
        higher level of programming.</p>
    </li>
    <li>
        <p><b>Me:</b> Perhaps.  But, comments are not inherently evil.  Their <i>intent</i>, the methods
        in which they are utilized, is the true evil!  Comments don't kill code, programmer's kill code.</p>
    </li>
</ul>

<p>That was the envisioned conversation when you saw my bait title and wanted to come tell the new guy
how comments are evil.  Well, now that's out of the way let's get to the post.  Comments, they aren't all
bad.</p>

<h3>stop blaming the comments for how <b>you</b> use them</h3>

<p>Let me start off by saying that I am <b>not</b> encouraging the use of comments everywhere in your
code.  Unnecessary comments really are bad for your codebase.  They're clutter, can be misleading and
are a pain to keep up to date, so nobody keeps them up to date.  And certainly if you're doing something like...</p>

{% highlight php linenos %}
<?php

$foo = 'foo';     // assign 'foo' to $foo
$foo .= 'bar';    // $foo is now 'foobar'

$foo = someMethod($foo);     // call someMethod() on $foo
{% endhighlight %}

<p>Please, <B>PLEASE</b>, stop doing this.  Please.</p>

<p>That being said this isn't the comments fault.  This is <b>our</b> fault.  We are the ones that
chose to put the comments there and create needless clutter.  Stop blaming the comments and start looking
in the mirror.</p>

<h3>doc-block all the things</h3>

<p>If it is a constant, class member, returns a value, takes a parameter, results in some side effect
or is in some way a major block of code it should be documented.</p>

<blockquote><b>Dissenter:</b> Charles you fool!  You want me to document <i>getters</i>?!  Excuse me while I
ignore you now.</blockquote>

<p>Wait!  Before you go, let me explain.  I don't mean add a description to a <code>getFoo()</code>
method that simply says "return $Foo".  That's just plain silly!  What you can do however is document
the <i>type</i> being returned.  This is highly important with a dynamically typed language, you don't
really ever know what type a variable is until you do some kind of test on it.  Here's an example of a,
<i>gasp</i>, documented getter.</p>

{% highlight php linenos %}
<?php
    // inside a class somewhere...

    /**
     * @return A Foo object that stores info about each doohickey
     */
    public function getFoo() {
        // some code is here...it returns something
    }
{% endhighlight %}

<p>See, that's not so bad is it?  You're not really adding a lot of clutter but you're giving users of
your API the knowledge that when I call <code>getFoo()</code> I'm gonna get an object, and that object
has the info about the doohickey I need.  In addition a lot of modern IDEs can parse this and return
useful auto-complete and documentation information based on these <a href="http://www.oracle.com/technetwork/java/javase/documentation/index-jsp-135444.html">JavaDoc</a>
style tags.</p>

<h3>finally, comment your cleverness</h3>

<p>Sometimes, regardless of how well we name our variables and how elegant our code is we simply <b>must</b>
have in-line comments.  A lot of articles about writing comments will say this but then they never actually
give a real-life example of a situation where you might need to write an in-line comment.  Well, don't worry,
I'm gonna give you what you need.</p>

<p>Below is a closure I use as an error handler before I can set up a more robust class-based error handler.
It doesn't do much but trap errors and store the information in an array.  Anyway, here's the closure, without
any comments:</p>

{% highlight php linenos %}
<?php
$errors = array();

$errorCallback = function($severity, $message, $file = null, $line = null, $context = null) use (&$errors) {

    $normalizeSeverity = function() use ($severity) {
        $severityMap = array(
            E_WARNING => 'E_WARNING',
            E_NOTICE => 'E_NOTICE',
            E_USER_ERROR => 'E_USER_ERROR',
            E_USER_WARNING => 'E_USER_WARNING',
            E_USER_NOTICE => 'E_USER_NOTICE',
            E_USER_DEPRECATED => 'E_USER_DEPRECATED',
            E_RECOVERABLE_ERROR => 'E_RECOVERABLE_ERROR',
            E_DEPRECATED => 'E_DEPRECATED'
        );
        if (\array_key_exists($severity, $severityMap)) {
            return $severityMap[$severity];
        }
        return 'E_UNKOWN_SEVERITY';
    };

    $index = \count($errors);
    $errors[$index]['severity'] = $normalizeSeverity();
    $errors[$index]['message'] = $message;
    $errors[$index]['file'] = $file;
    $errors[$index]['line'] = $line;

    $unhandledSeverity = array(E_RECOVERABLE_ERROR);
    if (\in_array($severity, $unhandledSeverity)) {
        return false;
    }

};

\set_error_handler($errorCallback);
{% endhighlight %}

<blockquote>This closure is also stored as a <a href="https://gist.github.com/1542873">github gist</a>.  Please
feel free to fork and make changes or improvements.  If you make a really cool improvement let me know!</blockquote>

<p>The closure is pretty simple really.  It takes the appropriate arguments needed to satisfy the
<a href="http://www.php.net/manual/en/function.set-error-handler.php"><code>set_error_handler()</code></a> callback.
It also uses an array-by-reference outside of the closure to store the errors so we can access them later.  I
added a bit of severity normalization so error info doesn't have seemingly random integers in them.  What may be "tricky",
particularly to a new developer on the project, is the last little bit involving the <code>$unhandledSeverity</code>.  What
is that?  Anybody can see that for <code>E_RECOVERABLE_ERROR</code> we're returning false and internal
PHP error handling continues.  But, why?  Let's go ahead and take that out.  I mean its a recoverable
error, right?  So, we should probably be doing something with it.</p>

<p><b>Wrong.</b></p>

<p>That little chunk of code is there for a very specific, very important reason.  Did you know that
if an improper type is passed to a function an <code>E_RECOVERABLE_ERROR</code> is raised?  If we simply
trapped that error we'd allow <b>any</b> data type to be stored where only a specific type should be.  This
certainly doesn't seem like a recoverable error to me.  We need that line of code or else countless
errors will occur later.</p>

<p>Comment it!</p>

{% highlight php linenos %}
<?php
    // ...

    // this is here to return errors on improper type passed as argument
    $unhandledSeverity = array(E_RECOVERABLE_ERROR);
    if (\in_array($severity, $unhandledSeverity)) {
        return false;
    }
};
{% endhighlight %}

<p style="margin-top:1em;">I would definitely say that the added "clutter" is far outweighed by the <b>extremely, useful information</b> that
the comment conveys and would be difficult to say in code.  You won't find many in-line comments in my
code but anytime I think something looks a little too clever or isn't <i>perfectly clear</i> as to what
is going on I'll throw a simple comment for explanation.</p>

<h3>wrapping it up</h3>

<p>I hope you look at your code and see where maybe some documentation should be added, or even taken
away.  Remember that comments are available to us for a reason.  Any tool can be utilized effectively
to provide benefit, just as that same tool can be used for evil.</p>