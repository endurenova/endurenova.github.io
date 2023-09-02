const quickSideBar = document.querySelector(".quick-sidebar");
const themeToggle = quickSideBar.querySelector(".qtheme-toggle");
const topToggle = quickSideBar.querySelector(".qTop-toggle");

topToggle.addEventListener('mouseup', (event) =>{
    event.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
})

themeToggle.addEventListener('change', () => {  // 테마 상태 체크
    const rootCSS = document.querySelector(":root");
    if (themeToggle.checked) {  // dark mode
        rootCSS.style.setProperty("--grayScale-n5", "#111111");
        rootCSS.style.setProperty("--grayScale-n4", "#2b2b2b");
        rootCSS.style.setProperty("--grayScale-n2", "#d5d5d5");
        rootCSS.style.setProperty("--grayScale-n1", "#efefef");
    } else {  // light mode
        rootCSS.style.setProperty("--grayScale-n5", "#efefef");
        rootCSS.style.setProperty("--grayScale-n4", "#d5d5d5");
        rootCSS.style.setProperty("--grayScale-n2", "#2b2b2b");
        rootCSS.style.setProperty("--grayScale-n1", "#111111");
    }
});

