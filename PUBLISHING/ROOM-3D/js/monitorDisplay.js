const standSide = document.querySelectorAll('.stand-base-cr');
const standSideCount = getComputedStyle(document.documentElement).getPropertyValue(
  '--monitor-stand-radius-corner-count',
);
const standSideDegree = 360 / standSideCount;

Array.from(standSide).forEach(e => {
  for (var i = 0; i < standSideCount; i++) {
    e.insertAdjacentHTML(
      'beforeend',
      `<span class="face side s${i}" 
        style="transform: translateX(-50%)  rotateY(${i * standSideDegree}deg) translateZ(var(--monitor-stand-border-radius));"></span>`,
    );
  }
});

const hingeSide = document.querySelector('.monitor-hinge--pillar');
const hingeSideCount = getComputedStyle(document.documentElement).getPropertyValue(
  '--monitor-hinge-radius-corner-count',
);
const hingeSideDegree = 360 / hingeSideCount;

for (var i = 0; i < hingeSideCount; i++) {
  hingeSide.insertAdjacentHTML(
    'beforeend',
    `<span class="face side s${i}" 
        style="background-color: var(--monitor-main); transform: translate(0, 100%) rotateY(90deg) rotateX(${i * standSideDegree}deg) translateZ(calc(0.5 * var(--monitor-display-thick)));"></span>`,
  );
}

const resume = document.querySelector('#resume');
const resumeHeader = resume.querySelector('.resume-header');
const resumeLogo = resumeHeader.querySelector('.logo-area');
const aboutBox = resume.querySelector('.about-box');
const experienceBox = resume.querySelector('.experience-box');
const educationBox = resume.querySelector('.education-box');
const skillBox = resume.querySelector('.skill-box');
var prevScrollpos = resume.scrollTop;
var currentScrollPos;
var skillLoadStatus = 0;

resumeScrollEvent = () => {
  currentScrollPos = resume.scrollTop;
  prevScrollpos < currentScrollPos ? resumeHeader.classList.add('hidden') : resumeHeader.classList.remove('hidden');
  prevScrollpos = currentScrollPos;
  if (currentScrollPos >= 0.6 * (aboutBox.clientHeight + experienceBox.clientHeight + educationBox.clientHeight)) {
    if (skillLoadStatus === 0) {
      skillLoading();
      skillLoadStatus = 1;
    }
  } else {
    if (skillLoadStatus === 1) {
      skillLoadRemove();
      skillLoadStatus = 0;
    }
  }
};

const monitorViewer = document.querySelector('.monitor-viewer');
const monitorExit = document.querySelector('.monitor-display > .exit-layer');

const monitorViewExit = () => {
  room.classList.remove('monitorActive');
  resume.removeEventListener('scroll', resumeScrollEvent);
};
const monitorViewEnter = () => {
  room.classList.add('monitorActive');
  resume.addEventListener('scroll', resumeScrollEvent);
  resumeLogo.addEventListener(clickEventType, monitorViewExit);
  monitorExit.addEventListener(clickEventType, monitorViewExit);
};
monitorViewer.addEventListener(clickEventType, monitorViewEnter);

const skillList = document.querySelector('.skill-list');
const skillLevelList = [85, 90, 80, 75, 80, 70, 80, 85, 85, 90, 75];

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
