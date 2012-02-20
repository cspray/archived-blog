/**
 * A jQuery plugin to easily gather data from the Twitter API for a given user.
 */

(function($) {

    /**
     * The default settings for the user to gather information about
     */
    var settings = {
        screen_name: "twitterapi",
        user_id: null,
        since_id: null,
        count: 5,
        trim_user: true
    };

    var baseApiUrl = "http://api.twitter.com/1/";

    var getAjaxData = function() {
        var data = {};
        $.each(settings, function(index, value) {
            if (value == null) {
                return;
            }
            data[index] = encodeURIComponent(value);
        });
        return data;
    };


    /**
     * The various methods that may be invoked
     */
    var actions = {
        /**
         * @param options object Should have key/value pairs as described in module-level docs
         * @return object Settings TweetFire will use to query the data
         */
        initialize: function(options) {
            if (typeof options != "object") {
                options = {};
            }
            return settings = $.extend(settings, options);
        },
        timeline: function() {
            var url = baseApiUrl + "statuses/user_timeline";
            var errorCallback = function(jqHr, status, error) {
                console.log(status);
            };
            var successCallback = function(data, status, jqHr) {
                console.log(data);
            };

            var ajaxData = getAjaxData();

            var ajaxOptions = {
                url: url,
                data: ajaxData,
                scriptCharset: "utf-8",
                dataType: "jsonp",
                type: "GET",
                error: errorCallback,
                success: successCallback,
                crossDomain: true
            };

            $.ajax(ajaxOptions);
            return ajaxOptions;
        }
    };

    $.fn.TweetFire = function(action) {

        if (actions[action] && action != "initialize") {
            return actions[action].apply(this, {});
        }

        if (typeof action === "object" || !action) {
            return actions.initialize.apply(this, arguments);
        }

        return {
            errors:
            [
                {
                    message: "The action, " + action + ", is not supported by TweetFire.",
                    code: 1
                }
            ]

        };

    };

}(jQuery));
