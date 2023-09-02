const headerBar = document.querySelector('header');
let prevScrollpos = window.scrollY;
let currentScrollPos;
window.addEventListener('scroll', event => {
    event.preventDefault();
    currentScrollPos = window.scrollY;
    prevScrollpos <= currentScrollPos ? headerBar.classList.add('hidden') : headerBar.classList.remove('hidden');
    prevScrollpos = currentScrollPos;
});

const skillList = document.querySelector('.skill-list');
const skillLevelList = [85, 90, 85, 80, 50, 70, 80, 85, 85, 90];



skillLoading = () => {
    const counter = ($counter, max, progress) => {
        var i = 0;
        progress.style.setProperty('width', `${max}%`);
        setTimeout(() => {
            const handle = setInterval(() => {
                if (i <= max) {
                    $counter.innerHTML = `<span>${Math.ceil(i)}</span><span>&#37;</span>`;
                    i++;
                } else {
                    clearInterval(handle); // 목표수치에 도달하면 정지
                }
            }, 20);
        }, 300);
    };
    Array.from(skillList.querySelectorAll('.skill-level__progress')).forEach((e, i) => {
        const $counter = skillList.querySelectorAll('.skill-percent__binder')[i]; // 카운트를 적용시킬 요소
        const max = skillLevelList[i]; // 목표 수치
        const progress = e;
        setTimeout(() => counter($counter, max, progress), 1);
    });
};
skillLoadRemove = () => {
    const counter = ($counter, max, progress) => {
        var i = 0;
        progress.style.setProperty('width', `${0}%`);
        const handle = setInterval(() => {
            if (i <= max) {
                $counter.innerHTML = `<span>${Math.ceil(max - i)}</span><span>&#37;</span>`;
                i++;
            } else {
                clearInterval(handle); // 목표수치에 도달하면 정지
            }
        }, 20);
    };
    Array.from(skillList.querySelectorAll('.skill-level__progress')).forEach((e, i) => {
        const $counter = skillList.querySelectorAll('.skill-percent__binder')[i]; // 카운트를 적용시킬 요소
        const max = skillLevelList[i]; // 목표 수치
        const progress = e;
        setTimeout(() => counter($counter, max, progress), 1);
    });
};

let skillToggle = 0;
checkSkillActive = () => {
    if (skillToggle === 0) {
        skillLoading();
        skillToggle = 1;
        document.querySelector(".skill").removeEventListener("mouseover", checkSkillActive);
        document.querySelector(".skill").addEventListener("mouseleave", checkSkillActive);
    } else {
        skillLoadRemove();
        skillToggle = 0;
        document.querySelector(".skill").removeEventListener("mouseleave", checkSkillActive);
        document.querySelector(".skill").addEventListener("mouseover", checkSkillActive);
    }
}
document.querySelector(".skill").addEventListener("mouseover", checkSkillActive);
document.querySelector(".skill").addEventListener("mouseleave", checkSkillActive);
