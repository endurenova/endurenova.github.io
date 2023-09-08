
const headerBar = document.querySelector("header");
var headerGap = headerBar.clientHeight;
const headerMain = document.querySelector(".header-main");
const headerMainMenu = document.querySelector(".header-menu-main");
var headerMainLink;
const headerSub = document.querySelector(".header-sub");
const headerSubMenu = document.querySelector(".header-menu-sub");
const headerSubLinkList = document.querySelectorAll(".menu-sub__link");
const headerSearch = document.querySelector(".header-search");

const quickSideBar = document.querySelector(".quick-sidebar");
const footerBar = document.querySelector("footer");

const surveySectionList = document.querySelectorAll(".survey__section");


// 공용
const rootCSS = document.querySelector(":root");
const headerLogo = document.querySelector(".header-logo__img");
const quickMenuToggle = document.querySelector(".quick-sidebar-menu__toggle");
const quickMenuListBox = document.querySelector(".quick-sidebar__menu-list");
const quickMenuItems = document.querySelectorAll(".quick-menu");
const quickMenuList = document.querySelectorAll(".quick-menu__btn");
const quickMenuIcon = document.querySelectorAll(".quick-menu__btn img");
const themeToggle = document.querySelector(".theme_toggle");
const themeIcon = document.querySelector(".theme_toggle-icon");
const survey2 = document.querySelector(".survey2");
const survey3 = document.querySelector(".survey3");
const survey3CardList = document.querySelectorAll(".survey3-card");

var carouselWidth;
var carouselSin;
var carouselSinWidthRate;
var carouselSinWidthGap;
var autoResize = () => {
    headerGap = headerBar.clientHeight;
    headerMainLink = document.querySelector(".menu-main__link a");
    document.querySelector("main").firstElementChild.style.cssText = `
        transform: translateY(${headerGap}px);
        -webkit-transform: translateY(${headerGap}px);
        -moz-transform: translateY(${headerGap}px);
        height: calc(100vh - ${headerGap}px);
    `
    Array.from(surveySectionList).forEach((e) =>{
        e.style.cssText = `
            top: ${headerGap}px;
        `
    });
    headerSubMenu.style.width = ` ${headerMainMenu.clientWidth}px;`; 
    headerSearch.style.width = `${headerMainMenu.clientWidth}px;`; 
    
    Array.from(headerSubLinkList).forEach((e) =>{
        e.style.cssText = `
            width: calc(${headerMainLink.clientWidth}px);
            font-size: ${headerMainLink.style.fontSize}px;
        `
    });
    // var a = getComputedStyle(rootCSS).getPropertyValue("--carousel-wh");

    if (window.innerWidth  > window.innerHeight) {
        carouselWidth = Math.round(window.innerWidth / 4) / 2;
    } else {
        carouselWidth = Math.round(window.innerHeight / 3) / 2.5;
    }
    carouselSin = Math.round(carouselWidth / 2 * Math.sqrt(3));
    carouselSinWidthGap = carouselWidth - carouselSin;
    carouselSinWidthRate = Math.round(carouselSinWidthGap * carouselSin / carouselWidth);
    rootCSS.style.setProperty("--carousel-wh", `${carouselWidth}px`);
    rootCSS.style.setProperty("--carousel-sin", `${carouselSin}px`);
    
    if (window.innerWidth  > window.innerHeight) {
        rootCSS.style.setProperty("--carousel-offsetX", `${carouselSinWidthGap * 2}px`);
        rootCSS.style.setProperty("--carousel-offsetY", `${carouselSinWidthRate * 2.6}px`);
        
        Array.from(survey3CardList).forEach((e) =>{
            e.classList.remove("mobile");
            e.classList.add("web");
        });
    } else {
        rootCSS.style.setProperty("--carousel-offsetX", `${carouselSinWidthGap * 1.3}px`);
        rootCSS.style.setProperty("--carousel-offsetY", `${carouselSinWidthRate * 2.6}px`);
        Array.from(survey3CardList).forEach((e) =>{
            e.classList.remove("web");
            e.classList.add("mobile");
        });
        
    }



}

// 퀵메뉴 메뉴 토글
quickMenuToggle.addEventListener('change', (event) => {
    quickMenuToggle.disabled = true;
    if (event.target.checked) {
        quickMenuListBox.style.display = "flex";
        setTimeout(() => {
            Array.from(quickMenuItems).forEach((qm, i) => {
                qm.style.cssText = `
                    top: -${50 * i}%;
                    transform: translate(-50%, -${((i + 1) * 110)}%);
                    -webkit-transform: translate(-50%, -${((i + 1) * 110)}%);
                    -moz-transform: translate(-50%, -${((i + 1) * 110)}%);
                    margin: 10% 0;
                `
            });
        }, 100);
    } else {
        Array.from(quickMenuItems).forEach((qm) => {
            qm.style.cssText = `
                display: flex;
                top: 0%;
                transform: translate(-50%, 0%);
                -webkit-transform: translate(-50%, 0%);
                -moz-transform: translate(-50%, 0%);
                margin: 0;
            `
        });
        setTimeout(() => {
            quickMenuListBox.style.display = "none";
        }, 300);
    }
    setTimeout(() => {
        quickMenuToggle.disabled = false;
    }, 300);                     
});
// 퀵메뉴 테마 토글
themeToggle.addEventListener("change", (event) => {
    checkThemeStatus(event.target);
});

const checkThemeStatus = (event) => {  // 테마 상태 체크
    var quickMenuIconText;
    if (event.checked) {
        quickMenuIconText = "b";  // dark mode
        rootCSS.style.setProperty("--color-white-head", "#040214");
        rootCSS.style.setProperty("--color-white", "#000000");
        rootCSS.style.setProperty("--color-black", "#ffffff");
        rootCSS.style.setProperty("--color-n1", "#efefef");
        rootCSS.style.setProperty("--color-navy", "#efefef");
        rootCSS.style.setProperty("--color-n2", "#cccccc");
        rootCSS.style.setProperty("--color-n4", "#505050");
        rootCSS.style.setProperty("--color-n5", "#040214");
    } else {
        quickMenuIconText = "w";  // light mode
        rootCSS.style.setProperty("--color-white-head", "#ffffff");
        rootCSS.style.setProperty("--color-white", "#ffffff");
        rootCSS.style.setProperty("--color-black", "#000000");
        rootCSS.style.setProperty("--color-n1", "#171717");
        rootCSS.style.setProperty("--color-navy", "#040214");
        rootCSS.style.setProperty("--color-n2", "#505050");
        rootCSS.style.setProperty("--color-n4", "#cccccc");
        rootCSS.style.setProperty("--color-n5", "#efefef");
    }    
    iconFileChanger(quickMenuIconText);
}
const iconFileChanger = (themeValue) => {  // 테마에 따른 아이콘 자동 변경
    (Array.from(quickMenuIcon)).reverse().forEach((ic, i) => {  // 퀵메뉴 리스트
        ic.src = `./img/quick_ic_${themeValue}${i + 1}.png`;
    });
    themeIcon.src =`./img/theme_icon_${themeValue}.svg`;  // 테마 토글 아이콘
    quickMenuToggle.style.backgroundImage = `url(./img/logo_ic_${themeValue}.png)`;
    headerLogo.src =`./img/main_logo_${themeValue}.svg`;  // 헤더 로고
}

var untilFooter = (document.body.clientHeight - (document.querySelector("footer").clientHeight) - window.innerHeight);
var prevScrollpos = window.scrollY;
var headerBottom = headerBar.offsetTop + headerBar.offsetHeight;
var quickMenuOn = 0;
var carouselSpreadOn = 0;
const carouselCardListLeft = document.querySelector(".carousel__list.cl_1").querySelectorAll(".carousel-card");
const carouselCardListRight = document.querySelector(".carousel__list.cl_2").querySelectorAll(".carousel-card");
const carouselSet = [carouselCardListLeft, carouselCardListRight];
const survey1Height = document.querySelector(".survey1").clientHeight;
const survey2Height = document.querySelector(".survey2").clientHeight;

window.addEventListener("scroll", (event) => {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
        headerBar.style.cssText = `top: 0px;`;
    } else {
        headerBar.style.cssText = `top: -${headerGap}px;`;
        if (headerSub.classList.contains("active")) {
            headerSub.classList.remove("active");
        }
    }

    prevScrollpos = currentScrollPos;
    
    if (scrollY > 0) {
        if(quickMenuOn === 0) {
            quickSideBar.style.cssText = `display: flex;`
        }
        quickMenuOn = 1;
        if (scrollY >= survey1Height / 2) {
            if (carouselSpreadOn === 0){
                surveyCarouselRotate();            
            }
            carouselSpreadOn = 1;
            autoQuickPosition();
        }
    } else {
        if(quickMenuOn === 1) {
            quickSideBar.style.cssText = `display: none;`
        }
        quickMenuOn = 0;
    }
});
autoQuickPosition = () => {
    if (scrollY >= untilFooter) {
        quickSideBar.style.cssText = `
            display: flex;
            transform: translateY(-${scrollY - untilFooter}px);
            -webkit-transform: translateY(-${scrollY - untilFooter}px);
            -moz-transform: translateY(-${scrollY - untilFooter}px);
        `;
    } else if(scrollY < untilFooter) {
        quickSideBar.style.cssText = `
            display: flex;
            transform: translateY(unset);
            -webkit-transform: translateY(unset);
            -moz-transform: translateY(unset);
        `;
    }
}
surveyCarouselRotate = () => {
    document.querySelector(".survey2-titile__spread").classList.add("active");
    const carouselTransDefault = [
        "transform: translate(calc(0.5 * var(--carousel-wh) + var(--carousel-offsetX)), calc(-1 * var(--carousel-wh) / 2));",
        "transform: translate(calc(1 * var(--carousel-offsetX)), calc(-50% - var(--carousel-sin) - var(--carousel-offsetY)));",                        
        "transform: translate(calc(-1 * var(--carousel-wh) - var(--carousel-offsetX)), calc(-50% - var(--carousel-sin) - var(--carousel-offsetY)));",
        "transform: translate(calc(-1.5 * var(--carousel-wh) - var(--carousel-offsetX)), calc(-1 * var(--carousel-wh) / 2));",
        "transform: translate(calc(-1 * var(--carousel-wh) - var(--carousel-offsetX)), calc(-50% + var(--carousel-sin) + var(--carousel-offsetY)));",
        "transform: translate(calc(1 * var(--carousel-offsetX)), calc(-50% + var(--carousel-sin) + var(--carousel-offsetY)));"
    ];
    setTimeout(() => {
        carouselSet.forEach((ca) => {
            Array.from(ca).forEach((e)=>{
                e.style.display = 'block';
                let carouselTransValue = Array.from(carouselTransDefault);
                setInterval(() => {
                    var transOne = carouselTransValue[0];
                    carouselTransValue.shift(); // 맨 앞 요소 제거
                    carouselTransValue.push(transOne); // 맨 뒤에 요소 추가
                    setTimeout(() => {
                        ca.forEach((e,i) => {
                            e.style.cssText = carouselTransValue[i];
                        });
                    }, 1);
                }, 1500);
            });
        });
    }, 1);
}
const webSurvey3CardList = document.querySelectorAll(".survey3-card");
const mobileSurvey3CardList = document.querySelectorAll(".survey3-card.mobile");
Array.from(webSurvey3CardList).forEach((e) =>{
    e.addEventListener('mouseover', (event)=>{ 
        event.preventDefault();       
        Array.from(survey3CardList).forEach((ee) =>{
            ee.classList.remove("active");
        });
        e.classList.add("active");
        e.addEventListener('mouseleave', (event)=>{ 
            event.preventDefault();
            e.classList.remove("active");
        });
    });
});
Array.from(mobileSurvey3CardList).forEach((e) =>{
    e.addEventListener('touchend', (event)=>{
        if (e.classList.contains("active")) {
            e.classList.remove("active");
        } else {
            Array.from(mobileSurvey3CardList).forEach((ee) =>{
                ee.classList.remove("active");
            });
            e.classList.add("active");
            event.stopPropagation();
        }
    });
});
// 디바이스 체크
function detectMobileDevice(agent) {
    const mobileRegex = [
        /Android/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    return mobileRegex.some(mobile => agent.match(mobile));
}
// document.querySelector(".mobile-sidebar__area").classList.add("active");
// document.querySelector(".mobile-sidebar").classList.add("active");
// document.querySelector(".mobile-sidebar").classList.add("active");
const isMobile = detectMobileDevice(window.navigator.userAgent);

if (window.innerWidth <= 1024) { console.log('current device is mobile');
    const mobileToggle = document.querySelector(".mobile-menu__toggle");
    const mobileMenu = document.querySelector(".mobile-sidebar__area");
    const mobileSidebarList = [mobileToggle, mobileMenu];
    const mobileSidebar = document.querySelector(".mobile-sidebar");
    const mobileMenuList = document.querySelectorAll(".mobile-menu__button");

    // 모바일 메뉴 조작
    mobileStatus = (tar) =>{
        if (tar.classList.contains("active")) {
            document.body.style.overflow = "visible";
            mobileSidebarList.forEach((e) => {
                e.classList.remove("active");
            }); 
            setTimeout(()=> {
                mobileSidebar.classList.remove("active");
            }, 300);
        } else {
            document.body.style.overflow = "hidden";
            mobileSidebar.classList.add("active");
            setTimeout(()=> {
                mobileSidebarList.forEach((e) => {
                    e.classList.add("active");
                }); 
            }, 1);            
        }
    }

    // 모바일 메뉴 토글
    mobileToggle.addEventListener("click", (event) => {
        event.preventDefault;
        mobileStatus(event.target);
    });
    // 모바일 메뉴 나가기
    mobileSidebar.querySelector(".exit-layer").addEventListener("click", (event) => {
        event.preventDefault;
        mobileStatus(mobileToggle);
    });

    // 모바일 퀵메뉴
    quickMenuList.forEach((e) => {
        e.classList.add("active");
        e.querySelector("img").classList.add("active");
        e.querySelector("span").classList.add("active");
    });
    
    // 모바일 메뉴 드롭
    Array.from(mobileMenuList).forEach((e)=>{
        e.addEventListener('click', (event) => {
            event.preventDefault();
            if (!e.classList.contains("active")) {
                Array.from(mobileMenuList).forEach((ee)=>{
                    ee.classList.remove("active");
                    ee.nextElementSibling.classList.remove("active");
                });
                e.classList.add("active");
                e.nextElementSibling.classList.add("active");             
            } else {
                e.classList.remove("active");
                e.nextElementSibling.classList.remove("active");
            }  
        });
    });
} else { console.log('current device is not mobile');

    // 헤더메뉴
    const mainMenuList = document.querySelector(".menu-main__list");
    mainMenuList.addEventListener('mouseenter', () => {
        headerSub.classList.add("on");
        headerSubMenu.classList.add("active");
        headerSearch.classList.remove("active");
        setTimeout(()=> {
            headerSub.classList.add("active");
        }, 50);
        headerMain.addEventListener('mouseleave', () => {
            headerSub.addEventListener('mouseleave', () => {
                headerSub.classList.remove("active");
                setTimeout(()=> {
                    headerSub.classList.remove("on");
                }, 300);
            });
        });
    });
    // 검색창
    const searchOn = document.querySelector(".utility__search");
    const searchInput = document.querySelector(".search-input");
    searchOn.addEventListener('click', () => {
        headerSub.classList.add("on");
        headerSearch.classList.add("active");
        headerSubMenu.classList.remove("active");
        setTimeout(()=> {
            headerSub.classList.add("active");
            searchInput.focus();
        }, 50);
    });
    // 퀵메뉴
    quickMenuList.forEach((e) => {
        e.addEventListener('mouseenter', (event) => {
            event.target.classList.add("active");
            event.target.querySelector("img").classList.add("active");
            event.target.querySelector("span").classList.add("active");
            event.target.addEventListener('mouseleave', () => {
                event.target.classList.remove("active");
                event.target.querySelector("img").classList.remove("active");
                event.target.querySelector("span").classList.remove("active");
            });
        });
    });

    // 퀵메뉴 테마 호버
    const themeLabel = document.querySelector(".switch_label");
    themeLabel.addEventListener('mouseenter', (event) => {
        themeIcon.classList.add("active");
        event.target.addEventListener('mouseleave', () => {
            themeIcon.classList.remove("active");
        });
    });
}


window.addEventListener('load', () =>{
    document.querySelectorAll(".main-title__upper h2")[0].classList.add("active");
    document.querySelectorAll(".main-title__upper h2")[1].classList.add("active");
    document.querySelector(".main-title__upper h5").classList.add("active");    
    document.querySelector(".main-title__lower h3").classList.add("active");
    document.querySelector(".main-title__lower h1").classList.add("active");
    document.querySelectorAll(".main-title__lower h5")[0].classList.add("active");
    document.querySelectorAll(".main-title__lower h5")[1].classList.add("active");
});
window.addEventListener("resize", () => {
    autoResize();
    autoQuickPosition();
});
(() => {
    autoResize();
    autoQuickPosition();
})();
