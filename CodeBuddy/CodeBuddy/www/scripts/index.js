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

            $('#selectaction').change(function ()
            {
                switch ($("#selectaction").val())
                {
                    case "0":
                        {
                            $('#cartoontext').text("Select an action");
                            break;
                        }
                    case "1":
                        {
                            $('#cartoontext').text("Variables work like containers to hold numbers, phrases, or other important stuff.");
                            break;
                        }
                    case "2":
                        {
                            $('#cartoontext').text("Perform different actions based on a logical condition.");
                            break;
                        }
                    case "3":
                        {
                            $('#cartoontext').text("Repeat a sequence of actions until a certain condition is reached.");
                            break;
                        }
                    case "4":
                        {
                            $('#cartoontext').text("Display a message.");
                            break;
                        }
                    case "5":
                        {
                            $('#cartoontext').text("You know the basic math, right?");
                            break;
                        }
                    case "6":
                        {
                            $('#cartoontext').text("You know the basic math, right?");
                            break;
                        }
                    case "7":
                        {
                            $('#cartoontext').text("You know the basic math, right?");
                            break;
                        }
                    case "8":
                        {
                            $('#cartoontext').text("You know the basic math, right?");
                            break;
                        }
                }
            });

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
        gotoLearn: function ()
        {
            $.mobile.changePage("#page_learn", { transition: "slidefade", changeHash: false });
        },
        gotoLearnContent: function ()
        {
            $.mobile.changePage("#page_learn_content", { transition: "slidefade", changeHash: false });
        },
        gotoLoad: function ()
        {
            $.mobile.changePage("#page_load", { transition: "slidefade", changeHash: false });
        },
        gotoShow: function ()
        {
            $.mobile.changePage("#page_show", { transition: "slidefade", changeHash: false });
        },
        gotoCode: function ()
        {
            $.mobile.changePage("#page_code", { transition: "slidefade", changeHash: false });
        },
        AddAction: function ()
        {
            $("#selectaction").val(0).change();
            $("#actiontext").val("");
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