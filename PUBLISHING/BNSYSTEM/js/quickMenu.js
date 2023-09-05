const quickSideBar = document.querySelector(".quick-sidebar");
const quickMenuToggle = document.querySelector(".quick-sidebar-menu__toggle");
const themeToggle = document.querySelector(".theme_toggle");
const themeIcon = document.querySelector(".theme_toggle-icon");

var quickMenuHover = (event) => {
    event.style.cssText = `opacity: 1;`;
    event.querySelector("img").style.cssText = `transform: translateY(0%);`;
    event.querySelector("span").style.cssText = `display: block; opacity: 1;`;
}

var quickMenuLeave = (event) => {
    event.style.cssText = `opacity: 0.75;`;
    event.querySelector("img").style.cssText = `transform: translateY(20%);`
    event.querySelector("span").style.cssText = `display: hidden; opacity: 0;`;
}

const themeModeHover = (event) => {        
    if (!themeToggle.checked) {
        themeIcon.style.cssText = `right: 7%;`;
    } else {
        themeIcon.style.cssText = `left: 7%;`;
    }
}

const themeModeLeave = (event) => {    
    if (!themeToggle.checked) {
        themeIcon.style.cssText = `right: 56%;`;
    } else {
        themeIcon.style.cssText = `left: 56%;`;
    }
}

const quickMenuStatus = (event) => {  // 퀵메뉴 토글
    const quickMenuItems = document.querySelectorAll(".quick-menu");
    const quickMenuList = document.querySelector(".quick-sidebar__menu-list");
    quickMenuToggle.disabled = true;
    if (event.checked) {
        quickMenuList.style.display = "flex";
        setTimeout(() => {
            Array.from(quickMenuItems).forEach((qm, i) => {
                console.log(qm,i)
                qm.style.cssText = `
                    top: -${50 * i}%;
                    transform: translate(-50%, -${((i + 1) * 110)}%);
                    margin: 15% 0;
                `
            });
        }, 100);
    } else {
        Array.from(quickMenuItems).forEach((qm, i) => {
            qm.style.cssText = `
                display: flex;
                top: 0%;
                transform: translate(-50%, 0%);
                margin: 0;
            `
        });
        setTimeout(() => {
            quickMenuList.style.display = "none";
        }, 300);
    }
    setTimeout(() => {
        quickMenuToggle.disabled = false;
    }, 300);                     
};

themeToggle.addEventListener('change', () => {  // 테마 상태 체크
    var quickMenuIconText;
    const rootCSS = document.querySelector(":root");
    if (themeToggle.checked) {
        quickMenuIconText = "b";  // dark mode
        rootCSS.style.setProperty("--color-white", "#000000");
        rootCSS.style.setProperty("--color-black", "#ffffff");
        rootCSS.style.setProperty("--color-n1", "#efefef");
        rootCSS.style.setProperty("--color-navy", "#efefef");
        rootCSS.style.setProperty("--color-n5", "#040214");
    } else {
        quickMenuIconText = "w";  // light mode
        rootCSS.style.setProperty("--color-white", "#ffffff");
        rootCSS.style.setProperty("--color-black", "#000000");
        rootCSS.style.setProperty("--color-n1", "#171717");
        rootCSS.style.setProperty("--color-navy", "#040214");
        rootCSS.style.setProperty("--color-n5", "#efefef");
    }    
    iconFileChanger(quickMenuIconText);
});

const iconFileChanger = (themeValue) => {  // 테마에 따른 아이콘 자동 변경
    const headerLogo = document.querySelector(".header-logo__img");
    const quickMenuIcon = document.querySelectorAll(".quick-menu__btn img");
    Array.from(quickMenuIcon).forEach((ic, i) => {  // 퀵메뉴 리스트
        ic.src = `./img/quick_ic_${themeValue}${i + 1}.png`;
    });
    themeIcon.src =`./img/theme_icon_${themeValue}.svg`;  // 테마 토글 아이콘
    quickMenuToggle.style.backgroundImage = `url(./img/logo_ic_${themeValue}.png)`;
    headerLogo.src =`../img/main_logo_${themeValue}.svg`;  // 헤더 로고
}

