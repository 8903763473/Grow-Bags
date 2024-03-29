$(document).ready(function() {
    var rtlFlag = ($('body').hasClass('lang-rtl')) ? true : false;
    $('.reassurance-list').owlCarousel({
        nav: false,
        navText: [
            '<i class=\'fa fa-arrow-left\'></i>',
            '<i class=\'fa fa-arrow-right\'></i>'
        ],
        dots: true,
        loop: false,
        margin: 15,
        autoplay: true,
        rtl: rtlFlag,
        rewind: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });
    //BACK TO TOP JAVASCRIPT START
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#slidetop').fadeIn(500);
        } else {
            $('#slidetop').fadeOut(500);
        }
    });
    $('#slidetop').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    //BACK TO TOP JAVASCRIPT END

    //DISABLED ZOOM FOR VIDEO JAVASCRIPT START
    $(".product__media-item").click(function() {
        if ($(this).attr("data-media-type") == 'video') {
            $('.zoomContainer').hide();
        } else {
            $('.zoomContainer').show();
        }
    });
    //DISABLED ZOOM FOR VIDEO JAVASCRIPT END

    //DEFAULT COLLAPSE JAVASCRIPT START
    $(document).on("click", "[data-toggle='collapse']", function() {
        var parent = $(this).data("parent");
        var target = $(this).data("href");
        if ($(parent).length && $(parent).hasClass('panel-group')) {
            $(parent + " .panel").each(function() {
                var p = $(this).find("[data-toggle='collapse']");
                var t = p.data("href");
                if (t != target && p.attr("aria-expanded") == "true") {
                    $(t).slideUp().removeClass("in");
                    p.addClass("ishi-collapsed").attr("aria-expanded", "false");
                }
            });
        }
        if ($(this).attr("aria-expanded") == "false") {
            $(target).slideDown().addClass("in");
            $(this).removeClass("ishi-collapsed").attr("aria-expanded", "true");
        } else {
            $(target).slideUp().removeClass("in");
            $(this).addClass("ishi-collapsed").attr("aria-expanded", "false");
        }
    });
    //DEFAULT COLLAPSE JAVASCRIPT END

    //DEFAULT POPOVER JAVASCRIPT START
    $(document).on("click", "[data-toggle='popover']", function() {
        var target = $(this).data("href");
        if ($(this).attr("aria-expanded") == "false") {
            $(target).addClass("active");
            $(this).attr("aria-expanded", "true");
        } else {
            $(target).removeClass("active");
            $(this).attr("aria-expanded", "false");
        }
    });
    $(document).on("click", function(event) {
        if (!$(event.target).closest('#search-container-full').length && !$(event.target).closest('[data-href="#search-container-full"]').length) {
            if ($('[data-href="#search-container-full"]').attr("aria-expanded") == "true") {
                $("#search-container-full").removeClass("active");
                $('[data-href="#search-container-full"]').attr("aria-expanded", "false");
            }
        }

        if (!$(event.target).closest('#user-notification').length && !$(event.target).closest('[data-href="#user-notification"]').length) {
            if ($('[data-href="#user-notification"]').attr("aria-expanded") == "true") {
                $("#user-notification").removeClass("active");
                $('[data-href="#user-notification"]').attr("aria-expanded", "false");
                event.preventDefault();
            }
        }


        if (!$(event.target).closest('#HeaderCountryList').length && !$(event.target).closest('[data-href="#HeaderCountryList"]').length) {
            if ($('[data-href="#HeaderCountryList"]').attr("aria-expanded") == "true") {
                $("#HeaderCountryList").removeClass("active");
                $('[data-href="#HeaderCountryList"]').attr("aria-expanded", "false");
            }
        }

        if (!$(event.target).closest('#HeaderLanguageList').length && !$(event.target).closest('[data-href="#HeaderLanguageList"]').length) {
            if ($('[data-href="#HeaderLanguageList"]').attr("aria-expanded") == "true") {
                $("#HeaderLanguageList").removeClass("active");
                $('[data-href="#HeaderLanguageList"]').attr("aria-expanded", "false");
            }
        }

    });
    //DEFAULT POPOVER JAVASCRIPT END

    //DEFAULT TABS JAVASCRIPT START
    $(document).on("click", ".ishi-nav-link", function() {
        $(this).parents(".ishi-nav-tabs").find(".ishi-tab-item").removeClass("active");
        $(this).parents(".ishi-tab-item").addClass("active");

        $(this).parents(".ishi-product-tab").find(".ishi-tab-pane").removeClass("active");
        var target = $(this).data("href");
        $(target).addClass("active");
    });
    //DEFAULT TABS JAVASCRIPT END

    //DEFAULT PANEL JAVASCRIPT START
    $(document).on("click", '[data-action="ishi-panel"]', function() {
        var target = $(this).attr("aria-controls");
        $(this).parents(".ishi-panel-container").find(".ishi-panel-data").removeClass("active");
        $(target).addClass("active");
    });
    //DEFAULT PANEL JAVASCRIPT END

    //DEFAULT WISHLIST JS START  
    if ($(".add-in-wishlist-js").length != 0) {
        $(document).on("click", ".add-in-wishlist-js", function(event) {
            if ($(this).hasClass("added-wishlist")) return true;
            event.preventDefault();
            try {
                var id = $(this).data('href');
                if (getTheCookie("wishlist") == null) {
                    var str = id;
                } else {
                    if (getTheCookie("wishlist").indexOf(id) == -1) {
                        var str = getTheCookie("wishlist") + '__' + id;
                    }
                }
                setTheCookie("wishlist", str, 14);
                $('.loadding-wishbutton-' + id).show();
                $('.default-wishbutton-' + id).remove();
                setTimeout(function() {
                    $('.loadding-wishbutton-' + id).remove();
                    $('.added-wishbutton-' + id).show();

                }, 2000);
            } catch (err) {
                console.log("error reading wishlist cookies!");
            }
        });
    }
    setupWishlistButtons();
    //DEFAULT WISHLIST JS END

    //CART PAGE EDIT BUTTON JAVASCRIPT START
    $(document).on("click", ".js-edit-toggle", function() {
        $(this).parents("tr").toggleClass("cart__update--show");
        $(this).toggleClass("cart__edit--active");
    });
    //CART PAGE EDIT BUTTON JAVASCRIPT END

    //STOCK URGENCY START
    var stock = parseInt($("#variant-stock").html());
    var maxqty = parseInt($(".selected-variant").data("quantity"));
    if (stock == '' || stock <= 0) {
        $(".ishi-progress-content").addClass('hidden');
    }
    switch (stock) {
        case 9:
            $("#ishi-progress-bar span").css("width", "65%");
            break;
        case 8:
            $("#ishi-progress-bar span").css("width", "60%");
            break;
        case 7:
            $("#ishi-progress-bar span").css("width", "55%");
            break;
        case 6:
            $("#ishi-progress-bar span").css("width", "50%");
            break;
        case 5:
            $("#ishi-progress-bar span").css("width", "40%");
            break;
        case 4:
            $("#ishi-progress-bar span").css("width", "30%");
            break;
        case 3:
            $("#ishi-progress-bar span").css("width", "20%");
            break;
        case 2:
            $("#ishi-progress-bar span").css("width", "10%");
            break;
        case 1:
            $("#ishi-progress-bar span").css("width", "5%");
            break;
        default:
            $("#ishi-progress-bar span").css("width", "90%")
    }
    //STOCK URGENCY END

    //PRODUCT MEDIA CHANGE ON CLICK JAVASCRIPT START
    $(document).on("click", ".product__media-list .product__media-item", function() {
        if ($(this).data("media-type") != "model") $('#main-media-container').html($(this).clone());
    });
    if ($("#main-media-container").length && window.matchMedia("(min-width: 991px)").matches) {
        $("#main-media-container img").elevateZoom({
            zoomType: "inner",
            cursor: "crosshair"
        });
    }
    $(document).on("DOMSubtreeModified", "#main-media-container", function() {
        if (window.matchMedia("(min-width: 991px)").matches && $(this).find(".product__media-item").data("media-type") != "video") {
            $("#main-media-container img").elevateZoom({
                zoomType: "inner",
                cursor: "crosshair"
            });
        }
    });
    //PRODUCT MEDIA CHANGE ON CLICK JAVASCRIPT END

    //PRODUCT THUMBNAILS SLIDER INITIALIZE JAVASCRIPT START
    var rtlFlag = $('body').hasClass('lang-rtl') ? true : false;
    $('.product__media-list').owlCarousel({
        nav: true,
        navText: [
            '<i class=\'fa fa-angle-left\'></i>',
            '<i class=\'fa fa-angle-right\'></i>'
        ],
        dots: false,
        loop: false,
        margin: 15,
        rtl: rtlFlag,
        rewind: true,
        responsive: {
            0: {
                items: 3
            },
            544: {
                items: 4
            },
            768: {
                items: 3
            },
            992: {
                items: $('#shopify-section-Ishi_sidebar').length ? 3 : 4
            },
            1200: {
                items: 4
            }
        }
    });
    //PRODUCT THUMBNAILS SLIDER INITIALIZE JAVASCRIPT END

    //COLLECTION GRID-LIST JAVASCRIPT START
    $(document).on("click", ".collectiongrid-layout", function() {
        var id = $(this).data("id");
        setTheCookie("collectiongrid-layout", id, 14);
        setGridLayout();
    });
    setGridLayout();
    //COLLECTION GRID-LIST JAVASCRIPT END


    //CART BUTTONS SCRIPT START
    $(document).on("click", ".add-to-cart-js", function() {
        var variantID = this.getAttribute("data-variantid");
        $(this).addClass("loading");
        addToCartJS(1, variantID, this);
    });

    $(document).on("click", ".cart-remove-js", function() {
        var variantID = this.getAttribute("data-variantid");
        removeFromCartJS(variantID);
    });
    $(document).on("click", ".minicart-quantity__button", function() {
        var variantID = this.getAttribute("data-variantid");
        var quantity = $(this).parents(".quantity").find(".quantity__input").val();
        updateCartItemJS(quantity, variantID);
    });

    //CART BUTTONS SCRIPT END

    //QUICKVIEW SCRIPT START
    $(document).on("click", ".quick-view", function() {
        var handle = $(this).data("handle");
        loadQuickView(handle, $(this));
    });
    //QUICKVIEW SCRIPT END

    //SIDEBAR FILTERS SCRIPT START 
    if ($("#FacetFiltersFormSidebar [type='checkbox']:checked").length) {
        $("#FacetFiltersFormSidebar .clear-all").css("display", "inline-block");
    }
    //   $(document).on('change',"#SortBy", function() {
    //     $("#FacetFiltersFormSidebar [type='checkbox']:checked").each(function( index ) {
    //       $(this).parents("label").trigger("click");
    //     });
    //   }); 
    //SIDEBAR FILTERS SCRIPT END 

    // INITIALIZE JS START
    var rtlFlag = $('body').hasClass('lang-rtl') ? true : false;
    $(".owl-carousel.slider-with-options").each(function(index) {
        $(this).owlCarousel({
            lazyLoad: true,
            navText: [
                '<i class=\'fa fa-angle-left\'></i>',
                '<i class=\'fa fa-angle-right\'></i>'
            ],
            loop: ($(this).data("loop")) ? true : false,
            rewind: ($(this).data("rewind")) ? true : false,
            nav: ($(this).data("nav")) ? true : false,
            rtl: rtlFlag,
            autoplay: ($(this).data("autoplay")) ? true : false,
            dots: ($(this).data("dots")) ? true : false,
            autoplayTimeout: ($(this).data("autoplaytimeout")) ? $(this).data("autoplaytimeout") : 4000,
            smartSpeed: ($(this).data("smartspeed")) ? $(this).data("smartspeed") : 500,
            margin: ($(this).data("margin")) ? $(this).data("margin") : 0,
            responsive: {
                0: {
                    items: $(this).data("small")
                },
                544: {
                    items: $(this).data("mobile")
                },
                768: {
                    items: $(this).data("tablet")
                },
                992: {
                    items: $(this).data("laptop")
                },
                1200: {
                    items: $(this).data("desktop")
                }
            }
        });
    });
    // INITIALIZE JS END

    //COUNTDOWN TIMER START
    $('[data-deal="1"]').each(function(index) {
        setCountDownTimer($(this).data("counter"), this.querySelector(".countdowncontainer"));
    });
    //COUNTDOWN TIMER END

    //WRITE COMMENT JS START
    $(".write_comment").click(function(e) {
        $('.ishi-product-tab .ishi-nav-tabs a.review-tab').trigger('click');
        $('html, body').animate({
            scrollTop: $(".ishi-product-tab").offset().top - 50
        }, 2000);
    });
    //WRITE COMMENT JS END

    //fixed header
    adjustFixedHeader();
    $(window).scroll(function() {
        adjustFixedHeader();
    });


    var shopify_responsive_current_width = window.innerWidth;
    var shopify_responsive_min_width = 992;
    var shopify_responsive_mobile = shopify_responsive_current_width < shopify_responsive_min_width;

    if (shopify_responsive_mobile) {
        convertToMobile();
    }

    $(window).on('resize', function() {
        var _mw = shopify_responsive_min_width;
        var _w = window.innerWidth;
        var desktopContent = $("*[id^='_desktop_']").first().html().trim().length;
        var mobileContent = $("*[id^='_mobile_']").first().html().trim().length;
        if (_w < _mw && desktopContent) {
            convertToMobile();
        }
        if (_w >= _mw && mobileContent) {
            convertToDesktop();
        }
    });

    $('#menu-icon').on('click', function() {
        $("#mobile_top_menu_wrapper").animate({
            width: "toggle"
        });
        $('.mobile-menu-overlay').toggleClass("active");
    });

    $('#top_menu_closer svg').on('click', function() {
        $("#mobile_top_menu_wrapper").animate({
            width: "toggle"
        });
        $('.mobile-menu-overlay').toggleClass("active");
    });

    $('.mobile-menu-overlay').on('click', function() {
        $("#mobile_top_menu_wrapper").animate({
            width: "toggle"
        });
        $('.mobile-menu-overlay').toggleClass("active");
    });
    $('.cart-drawer-toggler').on('click', function() {
        openCartDrawer();
    });

    $('#cart-notification-closer svg').on('click', function() {
        closeCartDrawer();
    });

    $('.cart-overlay').on('click', function() {
        closeCartDrawer();
    });
});



//ISHI FUNCTIONS START

function convertToMobile() {
    //interchange sections

    $("*[id^='_desktop_']").each(function(index, element) {
        var target = $('#' + element.id.replace('_desktop_', '_mobile_'));
        swapElements($(this), target);
    });
}

function convertToDesktop() {
    //interchange sections

    $("*[id^='_mobile_']").each(function(index, element) {
        var target = $('#' + element.id.replace('_mobile_', '_desktop_'));
        swapElements($(this), target);
    });
    $("#main-media-container").length ? $("#main-media-container img").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair"
    }) : "";
}

function swapElements(source, destination) {
    var temp = destination.children().detach();
    destination.empty().append(source.children().detach());
    source.append(temp);
}


function adjustFixedHeader() {
    var headerHeight = $('#header').height();
    var navmenuHeightDesktop = $('.wrapper-nav .navfullwidth').height();
    var navfullwidthHeightDesktop = headerHeight + navmenuHeightDesktop;
    var navHeightMobile = $('#header').height();
    if (window.matchMedia('(min-width: 992px)').matches) {
        $('.mobile-width').removeClass('fixed-header');
        if ($(window).scrollTop() > navfullwidthHeightDesktop) {
            $('.navfullwidth').addClass('fixed-header');
        } else {
            $('.navfullwidth').removeClass('fixed-header');
        }
    }
    if (window.matchMedia('(max-width: 991px)').matches) {
        $('.navfullwidth').removeClass('fixed-header');
        if ($(window).scrollTop() > navHeightMobile) {
            $('.mobile-width').addClass('fixed-header');
        } else {
            $('.mobile-width').removeClass('fixed-header');
        }
    }
}

$(function() {
    // Current Ajax request.
    var currentAjaxRequest = null;
    // Grabbing all search forms on the page, and adding a .search-results list to each.
    var searchForms = $('form[action="/search"]').css('position', 'relative').each(function() {
        // Grabbing text input.
        var input = $(this).find('input[name="q"]');
        // Adding a list for showing search results.
        var offSet = input.position().top + input.innerHeight();
        $('<ul class="search-results"></ul>').css({
            'position': 'absolute',
            'left': '0px',
            'top': offSet
        }).appendTo($(this)).hide();
        // Listening to keyup and change on the text field within these search forms.
        input.attr('autocomplete', 'off').bind('keyup change', function() {
            // What's the search term?
            var term = $(this).val();
            // What's the search form?
            var form = $(this).closest('form');
            // What's the search URL?
            var searchURL = '/search?type=product&q=' + term;
            // What's the search results list?
            var resultsList = form.find('.search-results');
            // If that's a new term and it contains at least 3 characters.
            if (term.length > 3 && term != $(this).attr('data-old-term')) {
                // Saving old query.
                $(this).attr('data-old-term', term);
                // Killing any Ajax request that's currently being processed.
                if (currentAjaxRequest != null) currentAjaxRequest.abort();
                // Pulling results.
                currentAjaxRequest = $.getJSON(searchURL + '&view=json', function(data) {
                    // Reset results.
                    resultsList.empty();
                    // If we have no results.
                    if (data.results_count == 0) {
                        // resultsList.html('<li><span class="title">No results.</span></li>');
                        // resultsList.fadeIn(200);
                        resultsList.hide();
                    } else {
                        // If we have results.
                        $.each(data.results, function(index, item) {
                            var link = $('<a></a>').attr('href', item.url);
                            link.append('<span class="thumbnail"><img src="' + item.thumbnail + '" /></span>');
                            link.append('<span class="type">' + item.type + '</span>');
                            link.append('<span class="title">' + item.title + '</span>');
                            link.append('<span class="price">' + item.price + '</span>');
                            link.wrap('<li></li>');
                            resultsList.append(link.parent());
                        });
                        // The Ajax request will return at the most 10 results.
                        // If there are more than 10, let's link to the search results page.
                        if (data.results_count > 10) {
                            resultsList.append('<li><span class="title"><a href="' + searchURL + '">See all results (' + data.results_count + ')</a></span></li>');
                        }
                        resultsList.fadeIn(200);
                    }
                });
            }
        });
    });
    // Clicking outside makes the results disappear.
    $('body').bind('click', function() {
        $('.search-results').hide();
    });
});

//QUICKVIEW FUNCTIONS START

var variantAvailability = [];
var variantFeaturedImg = [];
var variantIndexIdMapping = [];
var currentVariants = {};
var availableVariants = [];
var variantCompareAtPrice = [];
var variantPrice = [];

function loadQuickView(handle, btn) {
    variantAvailability = [];
    variantFeaturedImg = [];
    variantIndexIdMapping = [];
    currentVariants = {};
    availableVariants = [];
    variantCompareAtPrice = [];
    variantPrice = [];
    $("#qv-variants").html('');

    jQuery.getJSON('/products/' + handle + '.js', function(product) {
        $("#qv-productname").html(product.title);
        $("#qv-productdescription").html(product.description);
        if (product.description.length < 300) {
            $(".more-description").css("display", "none");
        } else {
            $(".more-description").css("display", "block");
        }
        $("#qv-product-cover img").attr("src", product.featured_image);
        var reviews = $('[data-handle="' + handle + '"]').parents(".card-wrapper").find(".spr-badge").clone();
        $("#qv-spr-badge").html(reviews.html());

        //prepare thumbnails
        prepareQvThumbnails(product.images);

        if (product.variants.length > 1) {
            //prepare swatches
            var colorNameList = "color,colour,couleur,colore,farbe,색,色,färg,farve";
            colorNameList = colorNameList.split(",");
            $(product.options).each(function(i, option) {
                var name = option.name;
                var includesColor = colorNameList.includes(name.toLowerCase());
                var swatchWrapper = $('<div class="swatch-wrapper" data-index="' + option.position + '"></div>');
                var optionValues = $('<div class="option-values product-form__input ' + name.toLowerCase() + '"></div>');
                swatchWrapper.append('<div class="option-label"><label>' + name + '</label></div>')
                $(option.values).each(function(i, value) {
                    var checked = '';
                    if (i == 0) checked = 'checked';
                    optionValues.append('<input id="' + name + '-' + i + '" type="radio" value="' + value + '" name="' + name + '"' + checked + '>');
                    var className = (includesColor || value.length < 3) ? "square" : "label";
                    if (includesColor) {
                        var dummyImg = "//fashionist-ishi-2.myshopify.com/cdn/shop/files/dummy?47377";
                        var dummyImgURL = dummyImg.substr(0, dummyImg.indexOf('dummy'));
                        var dummyImgVersion = dummyImg.substr(dummyImg.indexOf('?'));
                        var imgURL = "background-color:" + value + "; background-image: url('" + dummyImgURL + value + ".png" + dummyImgVersion + "')";
                        optionValues.append('<label style="' + imgURL + '" for="' + name + '-' + i + '" class="' + className + '" data-index="' + i + '"></label>');
                    } else {
                        optionValues.append('<label for="' + name + '-' + i + '" class="' + className + '" data-index="' + i + '">' + value + '</label>');
                    }

                });
                swatchWrapper.append(optionValues);
                $("#qv-variants").append(swatchWrapper);
            });

            //prepare dropdown
            $(product.options).each(function(i, option) {
                var name = option.name;
                var selectWrapper = $('<div class="dropdown-wrapper"></div>');
                var optionValues = $('<div class="option-values product-form__input"></div>');
                var selectBoxWrapper = $('<div class="select"></div>');
                var selectBox = $('<select id="select-option' + option.position + '" name="options[' + option.position + ']" class="select__select"></select>');
                selectWrapper.append('<div class="option-label"><label>' + name + '</label></div>')
                $(option.values).each(function(i, value) {
                    var selected = '';
                    if (i == 0) selected = 'selected';
                    selectBox.append('<option value="' + value + '" ' + selected + '>' + value + '</option>');
                });
                selectBoxWrapper.append(selectBox);
                optionValues.append(selectBoxWrapper);
                selectWrapper.append(optionValues);
                $("#qv-variants").append(selectWrapper);
            });

            $(product.variants).each(function(index, variant) {
                var variantsList = variant.title.split("/");
                var variantsKeyVal = {};
                for (var i = 0; i < variantsList.length; i++) {
                    variantsKeyVal["select-option" + (i + 1)] = variantsList[i].trim();
                }
                variantIndexIdMapping.push(variant.id);
                availableVariants.push(variantsKeyVal);
                variantAvailability.push(variant.available);
                variantFeaturedImg.push(variant.featured_image.src);
                variantCompareAtPrice.push(variant.compare_at_price);
                variantPrice.push(variant.price);
            });
            loadCurrentQvVariants();
            updateQvVariantDetails();
        } else {
            var variant = product.variants[0];
            $("#qv-variantid").val(variant.id);
            if (variant.available) {
                $("#qv-add-to-cart").removeClass("sold-out");
            } else {
                $("#qv-add-to-cart").addClass("sold-out");
            }
            if (variant.compare_at_price != null && variant.compare_at_price > variant.price) {
                $("#qv-compareatprice").html(convertToMoney(variant.compare_at_price));
                $("#qv-price").html(convertToMoney(variant.price));
            } else {
                $("#qv-compareatprice").html('');
                $("#qv-price").html(convertToMoney(variant.price));
            }
        }
        $('.qv-wrapper').removeClass('loading');
    });
}


function prepareQvThumbnails(images) {
    var rtlFlag = $('body').hasClass('lang-rtl') ? true : false;
    var thumbnailContainer = $('#qv-thumbnails');
    var thumbnailSliderWrapper = $('<div class="owl-carousel"></div>')
    $(images).each(function(i, src) {
        thumbnailSliderWrapper.append('<div class="thumb-item item"><img data-src="' + src + '" alt="qv-img" class="lazyload"></div>');
    });
    thumbnailContainer.html(thumbnailSliderWrapper);
    thumbnailSliderWrapper.owlCarousel({
        nav: true,
        navText: [
            '<i class=\'fa fa-angle-left\'></i>',
            '<i class=\'fa fa-angle-right\'></i>'
        ],
        dots: false,
        loop: false,
        margin: 15,
        rtl: rtlFlag,
        rewind: true,
        responsive: {
            0: {
                items: 3
            },
            544: {
                items: 4
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });

}

function loadCurrentQvVariants() {
    //load current variants
    $('#qv-variants .dropdown-wrapper').each(function(index) {
        currentVariants["select-option" + (index + 1)] = $(this).find('select.select__select').val();
    });
}

function updateQvVariantDetails() {
    var index = 0;
    var available = false;
    for (var i = 0; i < availableVariants.length;) {
        if (matchArray(availableVariants[i], currentVariants)) {
            index = i;
        }
        if (matchArray(availableVariants[i], currentVariants) && variantAvailability[i]) {
            available = true;
            break;
        }
        i++;
    }

    $("#qv-variantid").val(variantIndexIdMapping[index]);

    if (available) {
        $("#qv-add-to-cart").removeClass("sold-out");
    } else {
        $("#qv-add-to-cart").addClass("sold-out");
    }

    $("#qv-product-cover img").attr("src", variantFeaturedImg[index]);

    var price = variantPrice[index];
    var compare_at_price = variantCompareAtPrice[index];
    if (compare_at_price != null && compare_at_price > price) {
        $("#qv-compareatprice").html(convertToMoney(compare_at_price));
        $("#qv-price").html(convertToMoney(price));
    } else {
        $("#qv-compareatprice").html('');
        $("#qv-price").html(convertToMoney(price));
    }
}

function matchArray(a, b) {
    var match = true;
    for (var key in a) {
        if (a[key] != b[key]) {
            match = false;
        }
    }
    return match;
}

$(document).on("change", "#qv-variants .select__select", function() {
    loadCurrentQvVariants();
    updateQvVariantDetails();
});

$(document).on("click", ".swatch-wrapper label", function() {
    var selectorIndex = $(this).parents(".swatch-wrapper").data("index");
    var selector = "#select-option" + selectorIndex + " option";
    var index = $(this).data("index");
    $(selector).eq(index).prop('selected', true).trigger('change');
});

$(document).on("click", ".thumb-item", function() {
    $("#qv-product-cover img").attr("src", $(this).find("img").attr("src"))
});

$(document).on("click", "#qv-add-to-cart", function() {
    if ($(this).hasClass("sold-out")) return false;
    var variantId = $("#qv-variantid").val();
    var qty = $("#qv-quantity-selector input").val();
    $(this).addClass("loading");
    addToCartJS(qty, variantId, this);
    $("#ModalClose-quick-view").trigger("click");
});

//QUICKVIEW FUNCTIONS END



//ISHI FUNCTIONS END