---
layout: posts
title: stop calling them getters and setters
description: Looking at why I won't be calling them getters and setters anymore and how you can fix boilerplate style getters/setters.
author: Charles Sprayberry
published: true
category: programming
redirect_from:
  - /2012/05/13/stop-calling-them-getters-setters.html

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2012/05/19-stop-calling-them-getters-setters.html
disqus_url: http://cspray.github.com/2012/05/13/stop-calling-them-getters-setters
---

I was having a talk with a fellow programmer and he said something to the effect that if
a class property is commonly used it might as well just be public because it is easier to
work with.  I rebutted that you should just use getters and setters and, of course, the discussion
turned toward the validity of getters and setters and whether they break encapsulation.  Having
had some time to chew on the information I've come to a couple conclusions, the foremost
being that we should stop calling them getters and setters and the second being that the use
of these mutator and accessor methods does not break encapsulation.

### why getters and setters is bad terminology

A lot of people think of, and use, getters and setters like the following class.

{% highlight php %}
<?php

class Person {

    protected $name;

    protected $height;

    protected $weight;

    protected $age;

    // you can replace the default values with values suitable for your requirements
    public function __construct($name, $height = 0, $weight = 0, $age = 0) {
        $this->name = $name;
        $this->height = $height;
        $this->weight = $weight;
        $this->age = $age;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name= $name;
    }

    public function getHeight() {
        return $this->height;
    }

    public function setHeight($height) {
        $this->height = $height;
    }

    public function getWeight() {
        return $this->weight;
    }

    public function setWeight($weight) {
        $this->weight = $weight;
    }

    public function getAge() {
        return $this->age;
    }

    public function setAge($age) {
        $this->age = $age;
    }

}

?>
{% endhighlight %}

In fact, a lot of IDEs will go ahead and auto-generate this boilerplate code for you.  Of
course, I'm not a big fan of having my IDEs make code API decisions for me but the feature is
available and people do take advantage of it.  However, this is really bad code; effectively as
bad as if we had just declared the properties public to begin with.  Any calling code can
change the state of our class to anything they want just by using the available setter methods.
Chances are if your classes look like this you're doing it wrong.

More importantly I will stop using the getter/setter terminology exactly because the
common perception is similar to this code and this code is **bad**.  It also isn't good OOP
practice; you really shouldn't be *setting* the internal state of an object from calling
code...you should be mutating it.

### how to make "setter" code good?

First, let's discuss encapsulation for a minute.  After all, its one of the primary
benefits of OOP and probably the hardest to achieve properly.  Encapsulation is not simply
locking the internal state of an object so that it can't be manipulated.  That's counter-productive
and probably the opposite of what you want.  You probably want to work with and do something
to the data stored by an object.  Encapsulation is providing a clear, concise, restricted
way to work on the data, or state, of a class.

Clearly, the above code is not well encapsulated.  The methods may be clear, although I
would argue different, and concise they are most certainly not restricted.  I mean,
you could set the age to 'gobbledy-gook' and no one would be the wiser.  Some might "solve"
this problem by *only* doing some kind of data check on the setters so that a weight can't be
set to anything but a numerical data type or a name must be a string.  However, I don't feel
that provides any real encapsulation and working with the class can be made better.

The real way to encapsulate would be to determine how you expect the data to be used by
calling code.  Then implement methods that enable you to easily work with the data in the
expected way.  Let's just dive right into fixing the above <code>Person</code> class.

{% highlight php %}
<?php
class Person {

    protected $name;

    protected $height;

    protected $weight;

    protected $age;

    // you can replace the default values with values suitable for your requirements
    public function __construct($name, $height = 0, $weight = 0, $age = 0) {
        $this->name = $name;
        $this->height = $height;
        $this->weight = $weight;
        $this->age = $age;
    }

    public function getName() {
        return $this->name;
    }

    public function changeName($name) {
        $regex = '/[^A-Za-z]/';
        $name = (string) $name;
        $name = preg_replace($regex, '', $name);
        if (empty($name)) {
            return false;
        }
        $this->name = $name;
        return true;
    }

    public function getHeight() {
        return $this->height;
    }

    // we assume here that you're in the US and you store the height as inches
    public function growTaller($inches) {
        $this->height += (int) $inches;
    }

    public function getWeight() {
        return $this->weight;
    }

    public function gainWeight($pounds) {
        $this->weight += (float) $pounds;
    }

    public function loseWeight($pounds) {
        $this->weight -= (float) $pounds;
    }

    public function getAge() {
        return $this->age;
    }

    public function growYearOlder() {
        $this->age++;
    }

}
?>
{% endhighlight %}

This is a much better encapsulated class.  The ways to work with the data are much more clear;
you can change a person's name, have them grow taller, gain weight, lose weight
and become a year older...the normal things you'd expect a person to do or be capable of.  It
also lets our calling code know that this is the way we expect you to work with the class's
internal state.

More importantly we aren't simply setting the internal state to whatever the calling code
thinks it should be.  We're allowing a restricted set of *mutations*, or state changes,
**not** any ol' arbitrary value.  We also have a much more expressive API, in my opinion,
with these new methods.

### conclusion

Terminology is not just some minor technicality.  The words that we choose to communicate
our ideas and thoughts are **important**.  Thinking about them as getters and setters,
particularly setters, in the auto-IDE generated fashion leads to poor design.  Think about
how your classes state should be mutated and accessed; provide methods that facilitate those
changes in a clear, concise, restricted way.
