---
layout: posts
title: when and why to use Value Objects
description: Taking a look at when and why to use Value Objects
author: Charles Sprayberry
published: true
references_sprayfire: true
category: programming
redirect_from:
  - /2012/06/30/when-why-use-value-objects.html

disqus_enabled: true
disqus_shortname: ramblingsofaphpenthusiast
disqus_identifier: /2012/06/30-when-why-use-value-objects.html
disqus_url: http://cspray.github.com/2012/06/30/when-why-use-value-objects
---

Recently I've dived back into SprayFire and one of the things that I have been working on is making use of [Value Objects](http://martinfowler.com/bliki/ValueObject.html).  I have given some thought to when should I use a Value Object and when should I just use an associative array.  After all, PHP is not a purely object-oriented language, there are many paths to your destination, and arrays in PHP are extremely powerful and useful.  But, then again, so are objects.  When should you use a value object over an array?  *Why* should you use a Value Objects?

### when to use value objects over arrays

The true answer, like most subjective things in software development, boils down to proper analysis of your application and making good decisions based on that analysis.  There is no single, this is the right way 100% of the time, answer.  Do what is best for you and makes sense.

Going beyond that though there are guidelines that I use to help me make that decision.  The first guideline is to **remember the power of arrays in PHP**.  There's all kinds of cool things that you can do with [array functions](http://php.net/manual/en/ref.array.php) that objects don't easily allow.  Also remember that arrays are less resource intensive then objects.  If you're planning on creating a large number of items then arrays might be the better choice.

After I've reasoned that in common use cases the potential Value Object wouldn't need any of those array functions then I look to see if it is a confined, limited and/or known set of key/value pairs that I'll be working with.  I think a big part of the value, pun intended, with Value Objects is that they are more *expressive*.  This expressiveness means that a Value Object should represent a distinct set of data, that your average developer can deduce simply by look at the name of the object.  If the data in the array is widely dynamic or a numerically indexed list of data then obviously this doesn't make it easy to keep our set of data relational.

A great example of when to use a Value Object would be a data source login.  Perhaps something like...

{% highlight php %}
<?php

class DataAccessCredentials {

    protected $user;
    protected $password;
    protected $server;
    protected $sourceName;
    protected $port;

    public function __construct($user, $password, $server = 'localhost', $sourceName = '', $port = 80) {
        $this->user = (string) $user;
        $this->password = (string) $password;
        $this->server = (string) $server;
        $this->sourceName = (string) $sourceName;
        $this->port = (int) $port;
    }

    public function getUser() {
        return $this->user;
    }

    public function getPassword() {
        return $this->password;
    }

    public function getServer() {
        return $this->server;
    }

    public function getSourceName() {
        return $this->sourceName;
    }

    public function getPort() {
        return $this->port;
    }

    public function equals($Credentials) {
        if (!($Credentials instanceof $this)) {
            return false;
        }

        // compare fields here to determine equality
    }

}
?>
{% endhighlight %}

This implementation has a couple things going for it.  It is immutable, once the object is constructed there's no changing the values.  The object supplies a method to check equality, allowing us to compare two Value Objects the way they should be compared.  Finally, the data belongs together.  All of those properties are perfectly reasonable to be a part of this object and relate to one another.

On the opposite end of that, something like a result set from a call to the data access object using those credentials should probably be returned as an array.  The results are likely to be varied, highly dynamic and quite possibly very large.  All these things definitely make the array way more attractive.

### why you should use Value Objects

<div class="value-object-pro">
    **Expressiveness and Type Hinting**
    Obviously one of the biggest pros to a Value Object is the parameter type hinting that is now allowed and the expressiveness of your code.  It is far more clear, or can be if you have good naming practices, what a Value Object is as compared to an array, again, particularly in type hints.
</div>

<div class="value-object-pro">
    **Cleaner code, fewer errors**
    The Value Object is an abstraction.  One that allows us to supply a needed value, or at the very least a default one.  We don't need to run any isset checks or any boilerplate array checking, all that's taken care of for us.  Just take a look at the two example constructors below; one with an array and one with a Value Object.

{% highlight php %}
<?php

public function __construct(array $credentials) {
    $this->server = isset($credentials['server']) ? $credentials['server'] : 'localhost';
    $this->user = isset($credentials['user']) ? $credentials['users'] : 'root';
    $this->password = isset($credentials['password']) ? $credentials['password'] : '';
    $this->sourceName = isset($credentials['sourceName']) ? $credentials['sourceName'] : '';
    $this->port = isset($credentials['port']) ? $credentials['port'] : 80;
}

public function __construct(DataAccessCredentials $credentials) {
    $this->server = $credentials->getServer();
    $this->user = $credentials->getUser();
    $this->password = $credentials->getPassword();
    $this->sourceName = $credentials->getSourceName();
    $this->port = $credentials->getPort();
}

?>
{% endhighlight %}

I don't know about you, but I know which one I'd rather come across in calling code and
it isn't the one accepting an array.
</div>

<div class="value-object-pro">
    **Immutability**
    For me this is a really big win.  The immutability of objects is very important to me.  When I'm storing certain sets of data that could be used in a Value Object I probably don't want that data to be manipulated.  A good way to attain this immutability is to simply provide no setters to protected/private properties and only accept the values in the <code>__construct()</code> of the object.  This ensures that every time we call on a value we're sure it is going to be the one we expect.  With arrays there is simply no assurance of this immutability.
</div>

### wrapping it all up

I use an array when:

- The data set is varied or widely dynamic.
- Use cases involve using those array functions.
- Creating a lot of value sets and don't want to take an object creation hit.

I'll use an object when:

- Data set is confined and relational to one another.
- Probably won't need to use array functions.
- Likely not creating a large number of value sets.

All in all Value Objects can add a lot of, well, value to your code base.  **If** used properly.  They should not simply replace associative arrays.  With everything in software development there is a price and a reward.  It is up to you to determine if the rewards of the Value Object are worth the price.

