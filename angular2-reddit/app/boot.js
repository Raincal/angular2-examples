System.register(['angular2/platform/browser', './reddit.component'], function(exports_1) {
    var browser_1, reddit_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (reddit_component_1_1) {
                reddit_component_1 = reddit_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(reddit_component_1.RedditApp);
        }
    }
});
//# sourceMappingURL=boot.js.map