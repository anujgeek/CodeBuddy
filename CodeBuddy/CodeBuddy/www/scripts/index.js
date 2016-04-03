var isDeviceReady = false;

var SUCCESS = "Success";
var FAILURE = "Failure";
var EXCEPTION = "Exception";

var app =
    {
        initialize: function ()
        {
            app.bindEvents();
            app.uiinit();
            app.applyKO();
        },
        bindEvents: function ()
        {
            document.addEventListener("deviceready", app.onDeviceReady, false);
        },
        onDeviceReady: function ()
        {
            isDeviceReady = true;

            app.test();
        },
        uiinit: function ()
        {
            $(function ()
            {
                $("[data-role='footer']").html("<h4 class='ui-title' role='heading' aria-level='1'>&copy; " + new Date().getFullYear() + "</h4>");
                $("body>[data-role='panel']").panel().enhanceWithin();
            });
        },
        applyKO: function ()
        {
            ko.applyBindings(appViewModel);
        },
        test: function ()
        {
            appViewModel.username("User");

            app.gotoHome();
        },
        openPanel: function ()
        {
            if (appViewModel.username() == null)
            {
                $("#leftpanel1").panel("open");
            }
            else
            {
                $("#leftpanel2").panel("open");
            }
        },
        gotoHome: function ()
        {
            $.mobile.changePage("#page_home", { transition: "slidedown", changeHash: false });
        },
        gotoCreate: function ()
        {
            $.mobile.changePage("#page_create", { transition: "slidefade", changeHash: false });
        },
        gotoLoad: function ()
        {
            $.mobile.changePage("#page_load", { transition: "slidefade", changeHash: false });
        }
    };

var appViewModel =
    {
        username: ko.observable(null),
        place: ko.observable(null),
        placeLink: ko.observable(null),
        page_recommendations_home_vsd: ko.observable(null),
        page_recommendations_home_ved: ko.observable(null),
        page_recommendations_home_custom_location: ko.observable(null),
        page_recommendations_home_custom_vsd: ko.observable(null),
        page_recommendations_home_custom_ved: ko.observable(null)
    };