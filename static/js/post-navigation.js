/*  Super Search
    Author: Kushagra Gour (http://kushagragour.in)
    MIT Licensed
*/

(function () {
    // wrap markdown-toc in navbar div
    $('#markdown-toc').wrapAll('<nav id="post-nav" class="navbar post-nav">');

    // add scrollspy to post navigation
    // $('body').scrollspy({ target: "#post-nav", offset: 50 });

    // format toc objects with classes for custom scrollspy
    $('#markdown-toc').addClass('nav justify-content-center');
    $('#markdown-toc li').addClass('nav-item');
    $('#markdown-toc a').addClass('nav-link');

    // capitalize headings - because I do not in markdown
    $('#markdown-toc a').css({ "text-transform": "capitalize" });

    // loop thru toc list, get headings
    // pad each heading to clear post-nav when linked
    $('#markdown-toc li a').each(function (index) {
        heading = $(this).attr('id');
        // remove auto pre text from toc id
        heading = heading.replace("markdown-toc-", "")
        $("#" + heading).css({ "padding-top": "80px" });
    });

    // fix post navbar on scroll past
    var distanceFromTop = $('#post-nav').offset().top;
    var menuItemClassSelector = ".nav-link";
    var classActiveMenu = "active";

    $(window).scroll(function () {
        var currentScroll = $(window).scrollTop();

        if (currentScroll >= distanceFromTop) {
            $('#post-nav').addClass('fixed-top');
            setTimeout(setActiveNavigationMenu, 200);
        } else {
            $('#post-nav').removeClass('fixed-top');
        }

        setProgressBar();
    });

    function setProgressBar() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;

        document.getElementById("myBar").style.width = scrolled + "%";
    }

    function setActiveNavigationMenu() {
        var scrollPosition = $(document).scrollTop();
        var navigationItems = $(menuItemClassSelector);
        var scrolledItem;

        if (scrollPosition > 0 && navigationItems) {
            navigationItems.each(function (index, element) {
                var subMenu = $(element);

                if (shouldBeHightSubMenuItem(subMenu)) {
                    scrolledItem = subMenu;
                }
            });

            if (scrolledItem) {
                setActiveForCurrentSubMenu(scrolledItem);

                return;
            }
        }
    }

    function setActiveForCurrentSubMenu(activeSubMenu) {
        $(menuItemClassSelector).removeClass(classActiveMenu);
        activeSubMenu.addClass(classActiveMenu);
    }

    function shouldBeHightSubMenuItem(subMenu) {
        var extraHeight = 2;
        var sectionTargetSelector = subMenu.attr('href');
        var sectionTarget = $(sectionTargetSelector);
        var fromTop = $(document).scrollTop() + extraHeight;

        if (!sectionTarget.offset()) {
            return false;
        }

        return sectionTarget.offset().top < fromTop;
    }
})();
