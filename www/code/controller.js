var app = function(app) {

    app.makeController = function(stage, p, pages) {

        p.tabs.on("change", function() {
            zog("button = " + p.tabs.text);
            pages.go(p.page2, 'left'); //direction you are going to
        });

    }
    return app;
}(app || {});
