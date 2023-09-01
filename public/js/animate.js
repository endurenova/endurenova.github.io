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
skillLoading();
