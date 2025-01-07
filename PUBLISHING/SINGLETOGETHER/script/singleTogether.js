$(document).ready(function () {
    var delay_sec = 200;
    $('.splash_logo_1')
        .delay(delay_sec)
        .animate({ opacity: 1 }, 1200, function () {
            $(this)
                .delay(delay_sec + 1000)
                .animate({ opacity: 0 }, 1200);
            $(this).parent().delay(delay_sec).animate({ backgroundColor: '#ffffff' }, 1200);
            $(this)
                .next()
                .delay(delay_sec + 800)
                .animate({ opacity: 1 }, 1800);
            $(this)
                .next()
                .delay(delay_sec)
                .animate({ opacity: 0 }, 1200, function () {
                    $(this).parents('#layer_splash').css({ display: 'none' });
                    $('#layer_main').css({ display: 'block' });
                });
        });
    var displayIndex = 0;
    var search_toggle_on = 0; // 0 = nomal mode, 1 = search mode
    var lightness_toggle_on = 0; // 0 = light mode, 1 = dark mode
    //
    //    extendBtn = function(){
    //        $(this).css({borderRadius: "66px", lineHeight: "66px", fontSize: "30px"});
    //        $(this).parent().css({height: "66px", width: "250px"});
    //    }
    //
    //
    /* 
    .my_page
    .area_quickMenu ul li span
    .scrollTop
    display: block;
    width: 70px;
    
    */
    function backGround_pattern() {
        if (lightness_toggle_on == 0) {
            for (countContents = 1; countContents <= 5; countContents++) {
                if (countContents === 3){
                    $('.area_contents.box_' + countContents).css({
                        backgroundColor: "rgb(237, 237, 237)"
                    });
                } else {
                    $('.area_contents.box_' + countContents).css({
                        backgroundImage: "url('../images/w_con_bg" + countContents + ".png')",
                        backgroundSize: '100%',
                    });
                }
            }
        } else {
            for (countContents = 1; countContents <= 5; countContents++) {
                if (countContents === 3){
                    $('.area_contents.box_' + countContents).css({
                        backgroundColor: "rgb(118, 118, 118)"
                    });
                } else {
                    $('.area_contents.box_' + countContents).css({
                        backgroundImage: "url('../images/d_con_bg" + countContents + ".png')",
                        backgroundSize: '100%',
                    });
                }
            }
        }
    }
    backGround_pattern();
    var seq_slide = 1;
    setInterval(function () {
        $('.imgDisplay')
            .animate({ height: '330px', width: '216px', backgroundSize: '80%' })
            .children('img')
            .animate({ height: '330px', width: '216px' }, function () {
                $('.imgDisplay').css({ zIndex: '-1', opacity: '0' });
                $('.area_con_imgSlide ul').animate({ right: '-246px' }, 'slow', function () {
                    $('.imgDisplay img').attr('src', '../images/con_slide' + seq_slide + '.png');
                    $('.area_con_imgSlide ul li').last().prependTo('.area_con_imgSlide ul');
                    $('.imgDisplay').css({ zIndex: '1', opacity: '1' });
                    $('.imgDisplay')
                        .animate({ height: '660px', width: '432px', backgroundSize: '100%' })
                        .children('img')
                        .animate({ height: '552px', width: '360px' });
                    $('.area_con_imgSlide ul').css({ right: '0' });
                });
                if (seq_slide < 5) {
                    seq_slide++;
                } else {
                    seq_slide -= 4;
                }
            });
    }, 2000);

    var total_people = $('.review').length;
    for (countPeople = 0; countPeople < total_people; countPeople++) {
        document.querySelector('.balloon.p' + countPeople).style.backgroundImage =
            "url('../images/con_balloon" + countPeople + ".png')";
        $('.balloon.p' + countPeople)
            .parent('.review')
            .append("<img src='../images/con_people" + countPeople + ".png' alt=''>");
    }

    const total_idx = $('.my_page').length;
    function init_quick_icon() {
        for (count_idx = 0; count_idx < total_idx; count_idx++) {
            $('.my_page.s' + count_idx)
                .children('img')
                .attr('src', '../images/g_ic' + count_idx + '.png');
        }
    }

    var $my_page = $('.my_page').on('click', function () {
        init_quick_icon();
        var idx = $my_page.index(this);
        $(this)
            .children('img')
            .attr('src', '../images/c_ic' + idx + '.png');
        document.getElementById('quickBar').style.right = '0px';
    });
    $('.quick_close').click(function () {
        init_quick_icon();
        document.getElementById('quickBar').style.right = '-280px';
    });

    var c3_toggle = 0;
    var c4_toggle = 0;
    var c5_toggle = 0;
    window.addEventListener('scroll', function () {
        let scroll = window.scrollY;
        var ap_time = 1000;
        if (scroll >= 2000) {
            if (c3_toggle == 0) {
                c3_toggle++;
                $('.box_3 img').animate({ top: '0px', opacity: 1 }, ap_time);
            }
            if (scroll >= 2900) {
                if (c4_toggle == 0) {
                    c4_toggle++;
                    $('.box_4 img').animate({ top: '0px', opacity: 1 }, ap_time);
                }
                if (scroll >= 3700) {
                    if (c5_toggle == 0) {
                        c5_toggle++;
                        $('.box_5 img').animate({ top: '0px', opacity: 1 }, ap_time);
                    }
                }
            }
        }

        if (scroll < 3700) {
            if (c5_toggle == 1) {
                c5_toggle--;
                $('.box_5 img').animate({ top: '50px', opacity: 0 }, ap_time);
            }
        }

        if (scroll < 2900) {
            if (c4_toggle == 1) {
                c4_toggle--;
                $('.box_4 img').animate({ top: '50px', opacity: 0 }, ap_time);
            }
        }
        if (scroll < 2000) {
            if (c3_toggle == 1) {
                c3_toggle--;
                $('.box_3 img').animate({ top: '50px', opacity: 0 }, ap_time);
            }
        }
    });

    function dark_mode() {
        $('body').css({ backgroundColor: '#222222' });
        $('#area_header').css({ backgroundColor: '#222222'});
        $('#area_search').css({ backgroundColor: '#222222'});
        $('.header_logo a').css({ color: '#ffffff' });
        $('.header_logo img').attr('src', '../images/dark_logo.png');
        $('#header_toggle .lightness_toggle_icon img').attr('src', '../images/light_mode_icon.png');

        $('.search_box').removeClass('sb_light');
        $('.search_box').addClass('sb_dark');
        $('.search_input .search_icon').removeClass('si_light');
        $('.search_input .search_icon').addClass('si_dark');
        $('.search_text').removeClass('st_light');
        $('.search_text').addClass('st_dark');
        $('.download_btn a').removeClass('db_light');
        $('.download_btn a').addClass('db_dark');

        $('.header_menu ul li a').removeClass('light_menu');
        $('.header_menu ul li a').addClass('dark_menu');
        $('#header_toggle .toggle_lightness').removeClass('light_toggle_icon');
        $('#header_toggle .toggle_lightness').addClass('dark_toggle_icon');        
        $('#header_toggle .toggle_search').removeClass('light_toggle_icon');
        $('#header_toggle .toggle_search').addClass('dark_toggle_icon');

        $('p').not('ul.faq_list li .answer p').css({ color: '#ffffff' });
        $('ul.faq_list li .answer p').css({ color: '#eeeeee' });
        $('footer').css({ backgroundColor: '#767676' });
        $('h5').css({ color: '#ffffff' });
        $('#quickBar').css({ backgroundColor: '#3b3b3b' });
        $('.scrollTop, span').css({ color: '#fefefe' });
        //        document.querySelector(".area_contents.box_1").style.backgroundImage = `url(${"images/d_con_bg1.png"})`;
        //        document.querySelector(".area_contents.box_2").style.backgroundImage = `url(${"images/d_con_bg2.png"})`;
        //        document.querySelector(".area_contents.box_3").style.backgroundImage = `url(${"images/d_con_bg3.png"})`;
        //        document.querySelector(".area_contents.box_4").style.backgroundImage = `url(${"images/d_con_bg4.png"})`;
        //        document.querySelector(".area_contents.box_5").style.backgroundImage = `url(${"images/d_con_bg5.png"})`;
    }

    function light_mode() {
        $('body').css({ backgroundColor: '#ffffff'});
        $('#area_header').css({ backgroundColor: '#ffffff'});
        $('#area_search').css({ backgroundColor: '#ffffff'});
        $('.header_logo a').css({ color: '#31AF79' });
        $('.header_logo img').attr('src', '../images/light_logo.png');
        $('#header_toggle .lightness_toggle_icon img').attr('src', '../images/dark_mode_icon.png');

        $('.download_btn a').removeClass('db_dark');
        $('.download_btn a').addClass('db_light');
        $('.search_box').removeClass('sb_dark');
        $('.search_box').addClass('sb_light');
        $('.search_text').removeClass('st_dark');
        $('.search_text').addClass('st_light');
        $('.header_menu ul li a').removeClass('dark_menu');
        $('.header_menu ul li a').addClass('light_menu');
        $('.search_input .search_icon').removeClass('si_dark');
        $('.search_input .search_icon').addClass('si_light');

        $('#header_toggle .toggle_lightness').removeClass('dark_toggle_icon');
        $('#header_toggle .toggle_lightness').addClass('light_toggle_icon');
        $('#header_toggle .toggle_search').removeClass('dark_toggle_icon');
        $('#header_toggle .toggle_search').addClass('light_toggle_icon');

        $('p').not('.balloon p, p.copyright, ul.faq_list li .answer p').css({ color: '#222222' });
        $('ul.faq_list li .answer p').css({ color: '#555555' });
        $('footer').css({ backgroundColor: '#ededed' });
        $('h5').css({ color: '#333333' });
        $('#quickBar').css({ backgroundColor: '#fefefe' });
        $('.scrollTop, span').css({ color: '#3b3b3b' });
    }

    setBackgroundColor = function (bgColor) {
        $('#nav_header').css({ backgroundColor: bgColor });
    };

    var menuTextColor = '#222222';
    $('#header_toggle .toggle_lightness').click(function () {
        var dark_mode_bg = '#222222';
        var light_mode_bg = '#ffffff';
        if (lightness_toggle_on != 1) {
            dark_mode();
            menuTextColor = '#ffffff';
            setBackgroundColor(dark_mode_bg);
            lightness_toggle_on++;
        } else {
            light_mode();
            menuTextColor = '#222222';
            setBackgroundColor(light_mode_bg);
            lightness_toggle_on--;
        }
        checkCurrentMode();
        backGround_pattern();
    });

    function checkCurrentMode() {
        if (lightness_toggle_on == 0 && search_toggle_on == 0) {
            displayIndex = 0;
        } else if (lightness_toggle_on == 1 && search_toggle_on == 0) {
            displayIndex = 1;
        } else if (lightness_toggle_on == 0 && search_toggle_on == 1) {
            displayIndex = 2;
        } else {
            displayIndex = 3;
        }

        $('input[name=searchWord]').keydown(function (key) {
            if (key.keyCode == 13) {
                $('.frank').fadeIn();
            }
        });
        $('.area_pop a').click(function () {
            $('.frank').fadeOut();
        });
        switch (displayIndex) {
            case 0:
                document.querySelector('#header_toggle .search_toggle_icon img').src = '../images/light_search_icon.png';
                //                $(".toggle_search img").attr("src", "images/light_search_icon.png");
                break;
            case 1:
                document.querySelector('#header_toggle .search_toggle_icon img').src = '../images/dark_search_icon.png';
                //                $(".toggle_search img").attr("src", "images/dark_search_icon.png");
                break;
            case 2:
                document.querySelector('#header_toggle .search_toggle_icon img').src = '../images/light_close_icon.png';
                //                $(".toggle_search img").attr("src", "images/light_close_icon.png");
                break;
            case 3:
                document.querySelector('#header_toggle .search_toggle_icon img').src = '../images/dark_close_icon.png';
                //                $(".toggle_search img").attr("src", "images/dark_close_icon.png");
                break;
        }
    }

    $('.toggle_search').click(function () {
        if (search_toggle_on != 1) {
            $('#nav_header').css({ height: '480px' });
            $('#area_search').css({ top: '80px' });
            search_toggle_on++;
        } else {
            $('#nav_header').css({ height: '80px' });
            $('#area_search').css({ top: '-80px' });
            search_toggle_on--;
        }
        checkCurrentMode();
        backGround_pattern();
    });

    //컨텐츠3,4 스크롤 따라 이미지 페이드인
    $(window).scroll(function () {
        $('.box_34_img').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ opacity: '1' }, 700);
            }
        });
    });

    //푸터 아코디언 메뉴
    var faq_toggle_on = 0;
    $('.faq_list>li>h5').click(function () {
        $(this).next('.answer').children('p').slideToggle(200);
        $(this).parent('li').siblings('li').children('.answer').children('p').slideUp(200);
        if (faq_toggle_on != 1) {
            $(this).slideDown(200);
            $(this).css({ backgroundPosition: 'right top' });
            faq_toggle_on++;
        } else {
            $(this).slideDown(200);
            $(this).css({ backgroundPosition: 'right bottom' });
            faq_toggle_on--;
        }
    });
});
