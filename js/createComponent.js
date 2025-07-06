const publishingBox = document.querySelector('.web-publishing');
const designBox = document.querySelector('.design');
const illustrationBox = document.querySelector('.illustration');
const skillBox = document.querySelector('.skill-box');
const badgeList = [
  {
    // 0
    name: 'HTML5',
    tool: 'https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white',
    progress: 85,
  },
  {
    // 1
    name: 'CSS3',
    tool: 'https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white',
    progress: 90,
  },
  {
    // 2
    name: 'Sass',
    tool: 'https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white',
    progress: 85,
  },
  {
    // 3
    name: 'JavaScript',
    tool: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white',
    progress: 80,
  },
  {
    // 4
    name: 'PHP',
    tool: 'https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white',
    progress: 20,
  },
  {
    // 5
    name: 'MySQL',
    tool: 'https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white',
    progress: 30,
  },
  {
    // 6
    name: 'React',
    tool: 'https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white',
    progress: 20,
  },
  {
    // 7
    name: 'jQuery',
    tool: 'https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white',
    progress: 70,
  },
  {
    // 8
    name: 'Python',
    tool: 'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white',
    progress: 80,
  },
  {
    // 9
    name: 'Photoshop',
    tool: 'https://img.shields.io/badge/Photoshop-31A8FF?style=flat&logo=adobephotoshop&logoColor=white',
    progress: 85,
  },
  {
    // 10
    name: 'Illustrator',
    tool: 'https://img.shields.io/badge/Illustrator-FF9A00?style=flat&logo=adobeillustrator&logoColor=white',
    progress: 85,
  },
  {
    // 11
    name: 'Figma',
    tool: 'https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white',
    progress: 90,
  },
  {
    // 12
    name: 'Blender',
    tool: 'https://img.shields.io/badge/Blender-E87D0D?style=flat&logo=blender&logoColor=white',
    progress: 90,
  },
  {
    // 13
    name: 'Unity',
    tool: 'https://img.shields.io/badge/Unity-FFFFFF?style=flat&logo=unity&logoColor=black',
    progress: 90,
  },
];
createProfile = () => {
  const experienceBox = document.querySelector('.list-box.experience');
  const experienceList = document.createElement('ol'),
    educationList = document.createElement('ol');

  experienceList.className = 'experience-list';
  educationList.className = 'education-list';

  experienceBox.appendChild(experienceList);
  // educationBox.appendChild(educationList);

  fetch('/json/experience.json')
    .then(res => res.json())
    .then(data =>
      data.forEach(e => {
        experienceList.insertAdjacentHTML(
          'beforeend',
          `
            <li>
                <p>
                  <span>${e.period}</span>
                  <span>${e.subject}</span>
                </p>
                <strong>${e.institution}</strong>
            </li>
          `,
        );
      }),
    );
};

createPublishing = () => {
  const publishingProject = [
    {
      title: 'DongYangMetal',
      imgSrc: './images/project-dym-main.png',
      toolText: 'HTML　CSS　JavaScript　Photoshop　Illustrator',
      contents: `
                <img src="./images/project-room3d-contents-1.png" alt="디자인 모달 달력 컨텐츠 이미지-1" /> 
                <img src="./images/project-room3d-contents-2.png" alt="디자인 모달 달력 컨텐츠 이미지-2" /> 
                <img src="./images/project-room3d-contents-3.png" alt="디자인 모달 달력 컨텐츠 이미지-3" /> 
            `,
    },
    {
      title: 'Collector 2030',
      imgSrc: './images/project-collector2030-main.png',
      toolText: 'HTML　CSS　JavaScript　jQuery　Photoshop　Illustrator',
      contents: `
                <img src="./images/project-room3d-contents-1.png" alt="디자인 모달 달력 컨텐츠 이미지-1" /> 
                <img src="./images/project-room3d-contents-2.png" alt="디자인 모달 달력 컨텐츠 이미지-2" /> 
                <img src="./images/project-room3d-contents-3.png" alt="디자인 모달 달력 컨텐츠 이미지-3" /> 
            `,
    },
    {
      title: 'ROOM-3D',
      imgSrc: './images/project-room3d-main.png',
      toolText: 'HTML　CSS　JavaScript',
      contents: `
                <img src="./images/project-room3d-contents-1.png" alt="디자인 모달 달력 컨텐츠 이미지-1" /> 
                <img src="./images/project-room3d-contents-2.png" alt="디자인 모달 달력 컨텐츠 이미지-2" /> 
                <img src="./images/project-room3d-contents-3.png" alt="디자인 모달 달력 컨텐츠 이미지-3" /> 
            `,
    },
    {
      title: 'BNSYSTEM',
      imgSrc: './images/project-bnsystem-main.png',
      toolText: 'HTML　CSS　JavaScript　Photoshop',
    },
    {
      title: 'SINGLETOGETHER',
      imgSrc: './images/project-singletogether-main.png',
      toolText: 'HTML　CSS　JavaScript　jQuery　Photoshop　Illustrator',
    },
  ];
  let publishing = '';
  let pagination = '';
  publishingProject.forEach((pub, idx) => {
    publishing += `
            <li class="swiper-slide" onclick="publishingDetail(${idx})" data-item-index="${idx}">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="project-item">
                    <div>
                        <img src=${pub.imgSrc} alt="웹퍼블리싱 프로젝트 이미지-${idx}" />
                    </div>
                    <div>
                        <h3>${pub.title}</h3>
                        <p>${pub.toolText}</p>
                    </div>
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </li>
        `;
  });
  publishingBox.innerHTML = `
        <div class="wrap">
            <h1>WEB PUBLISHING</h1>
            <div class="swiper slide-box">
                <ul class="swiper-wrapper project-list">${publishing}</ul>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    `;

  changePublishingBg = idx => {
    document.querySelector('#web-publishing').style.cssText = `background-image: url(../images/publishing-${idx}.png);`;
  };
  const publishingSwiper = new Swiper('#web-publishing .swiper.slide-box', {
    direction: 'horizontal',
    allowTouchMove: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    observer: true,
    loop: true,
    observeParents: true,
    mousewheel: {
      forceToAxis: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1480: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
    },
    on: {
      init: function () {
        // console.log('swiper 초기화 될때 실행');
      },
      imagesReady: function () {
        // console.log('슬라이드 이미지 로드 후 실행');
      },
      slideChangeTransitionEnd: index => {
        // console.log('now index :::', index.realIndex);
        changePublishingBg(index.realIndex);
      },
    },
  });
};
createDesign = () => {
  const designProject = [
    {
      title: '3D CHARACTER',
      mainImg: './images/design-character.jpg',
      toolList: `

                `,
      subject: '3D 캐릭터 디자인',
      description: '노마드스컬프를 사용한 캐릭터 3D 디자인',
      author: '회사 프로젝트',
      link: `
                `,
      contents: `
                    <img src="./images/design-character-contents-1.jpg" alt="3D CHARACTER 이미지 1" />
                    <img src="./images/design-character-contents-2.jpg" alt="3D CHARACTER 이미지 2" />
                    <img src="./images/design-character-contents-3.jpg" alt="3D CHARACTER 이미지 3" />
                    <img src="./images/design-character-contents-4.jpg" alt="3D CHARACTER 이미지 4" />
                    <img src="./images/design-character-contents-5.jpg" alt="3D CHARACTER 이미지 5" />
                    <img src="./images/design-character-contents-6.jpg" alt="3D CHARACTER 이미지 6" />
                    <img src="./images/design-character-contents-7.jpg" alt="3D CHARACTER 이미지 7" />
                    <img src="./images/design-character-contents-8.jpg" alt="3D CHARACTER 이미지 8" />
                    <img src="./images/design-character-contents-9.jpg" alt="3D CHARACTER 이미지 9" />
                    <img src="./images/design-character-contents-10.jpg" alt="3D CHARACTER 이미지 10"/>
                    <img src="./images/design-character-contents-11.jpg" alt="3D CHARACTER 이미지 11"/>
                    <img src="./images/design-character-contents-12.jpg" alt="3D CHARACTER 이미지 12"/>
                    <img src="./images/design-character-contents-13.jpg" alt="3D CHARACTER 이미지 13"/>
                    <img src="./images/design-character-contents-14.jpg" alt="3D CHARACTER 이미지 14"/>
                    <img src="./images/design-character-contents-15.jpg" alt="3D CHARACTER 이미지 15"/>

                `,
    },
    {
      title: '3D WORKS',
      mainImg: './images/design-3Dworks.png',
      toolList: `
                    <img src=${badgeList[12].tool} alt="툴 뱃지 이미지-${12}" />
                    <img src=${badgeList[13].tool} alt="툴 뱃지 이미지-${13}" />
                `,
      subject: 'VR게임 아바타 악세서리',
      description: '블렌더와 유니티를 이용한 VR게임 악세서리 모델링',
      author: '개인작업',
      link: `
                    <div class="link-box">
                        <a href='https://siru.booth.pm/' target='_blank'>
                            <span>작업물 보기</span>
                        </a>
                    </div>
                `,
      contents: `
                    <img src="./images/design-3Dworks-contents-1.png" alt="3Dworks 이미지 1" /> 
                    <img src="./images/design-3Dworks-contents-2.png" alt="3Dworks 이미지 2" /> 
                    <img src="./images/design-3Dworks-contents-3.png" alt="3Dworks 이미지 3" /> 
                    <img src="./images/design-3Dworks-contents-4.png" alt="3Dworks 이미지 4" /> 
                    <img src="./images/design-3Dworks-contents-5.png" alt="3Dworks 이미지 5" /> 
                    <img src="./images/design-3Dworks-contents-6.png" alt="3Dworks 이미지 6" /> 

                `,
    },
    {
      title: 'OVERTONES',
      mainImg: './images/design-overtones-mockup.png',
      toolList: `
                    <img src=${badgeList[11].tool} alt="툴 뱃지 이미지-${11}" />
                `,
      subject: '모바일 쇼핑몰 디자인',
      description: '피그마로 인터렉션 쇼핑몰 디자인 작업',
      author: '개인작업',
      link: `
                    <div class="link-box">
                        <a href='https://www.figma.com/file/RCtkhZYuzwpPOdVDnfnoXd/Overtones?type=design&node-id=0%3A1&mode=design&t=v0toPbXL14Uypsfc-1' target='_blank'>
                            <span>와이어프레임 바로가기</span>
                        </a>
                        <a href='https://www.figma.com/proto/RCtkhZYuzwpPOdVDnfnoXd/Overtones?node-id=1-187&starting-point-node-id=1%3A187&mode=design&t=Pnvr684Hra0KjVOu-1' target='_blank'>
                            <span>프로토타입 바로가기</span>
                        </a>
                    </div>
                `,
      contents: `
                    <img src="./images/design-overtones-contents-1.png" alt="오버톤즈 전체 컨텐츠 이미지" /> 
                `,
    },
    {
      title: 'DOTORISUP',
      mainImg: './images/design-dotorisup-mockup.png',
      toolList: `
                    <img src=${badgeList[11].tool} alt="툴 뱃지 이미지-${11}" />
                `,
      subject: '도토리숲 쇼핑몰 모작',
      description: '피그마로 도토리숲 쇼핑몰 인터렉션 모작 연습 작업',
      author: '개인작업',
      link: `
                    <div class="link-box">
                        <a href='https://www.figma.com/file/dsbjHyHbFKXqLlseWJ6uqY/Dotorisup?type=design&node-id=0%3A1&mode=design&t=FfSBRPctXg5GbtZP-1' target='_blank'>
                            <span>와이어프레임 바로가기</span>
                        </a>
                        <a href='https://www.figma.com/proto/dsbjHyHbFKXqLlseWJ6uqY/Dotorisup?node-id=57-2175&starting-point-node-id=57%3A2175&mode=design&t=I32VJIEY1rW9Vlaz-1' target='_blank'>
                            <span>프로토타입 바로가기</span>
                        </a>
                    </div>
                `,
      contents: `
                    <img src="./images/design-dotorisup-contents-1.png" alt="도토리숲 전체 컨텐츠 이미지" />
                `,
    },
    {
      title: 'TOTORO',
      mainImg: './images/design-totoro-mockup.png',
      toolList: `
                    <img src=${badgeList[0].tool} alt="툴 뱃지 이미지-${0}" />
                    <img src=${badgeList[1].tool} alt="툴 뱃지 이미지-${1}" />
                    <img src=${badgeList[7].tool} alt="툴 뱃지 이미지-${7}" />                    
                `,
      subject: '제이쿼리 애니메이션',
      description: '제이쿼리를 활용해 애니메이션 효과 만들기',
      author: '개인작업',
      link: '',
      contents: `
                    <iframe src="./images/totoro/totoro.html" ></iframe>
                `,
    },
    {
      title: 'HANATOUR',
      mainImg: './images/design-hanatour-mockup.png',
      toolList: `
                    <img src=${badgeList[9].tool} alt="툴 뱃지 이미지-${9}" />
                `,
      subject: '포토샵 기능 연습',
      description: '포토샵 기능을 활용한 다양한 효과 다루는 연습',
      author: '개인작업',
      link: '',
      contents: `
                    <img src="./images/design-hanatour-contents-1.png" alt="디자인 모달 하나투어 컨텐츠 이미지-1" /> 
                `,
    },
    {
      title: 'LEQUIPSHOP',
      mainImg: './images/design-lequipshop-mockup.png',
      toolList: `
                    <img src=${badgeList[9].tool} alt="툴 뱃지 이미지-${9}" />
                `,
      subject: 'UI/UX 디자인 연습',
      description: '실제 쇼핑몰을 참고하여 포토샵으로 UI/UX 배치 연습',
      author: '개인작업',
      link: '',
      contents: `
                    <img src="./images/design-lequipshop-contents-1.png" alt="디자인 모달 하나투어 컨텐츠 이미지-1" /> 
                `,
    },
  ];
  let design = '';
  designProject.forEach((deg, idx) => {
    design += `
            <li class="swiper-slide">
                <div class="project-item">
                    <div class="project-item__head">
                        <h3>${deg.title}</h3>
                        <span>${deg.toolList}</span>
                    </div> 
                    <div class="project-item__body">
                        <img src=${deg.mainImg} alt="디자인 프로젝트 이미지-${idx}" />
                    </div>
                    <button onclick="designModal()" class="design-modal-btn" data-design-index="${idx}">DETAIL</button>
                </div>
            </li>
        `;
  });
  designBox.innerHTML = `
        <div class="wrap">
            <h1>DESIGN</h1>
            <div class="swiper slide-box" >
                <ul class="swiper-wrapper project-list">${design}</ul>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    `;

  const designSwiper = new Swiper('#design .swiper.slide-box', {
    on: {
      init: function () {
        // console.log('swiper 초기화 될때 실행');
      },
      imagesReady: function () {
        // 모든 내부 이미지 로드후 이벤트 시작
        // console.log('슬라이드 이미지 로드 후 실행');
      },
    },
    direction: 'horizontal',
    allowTouchMove: true,
    grabCursor: true,
    slidesPerView: 'auto',
    observer: true,
    loop: true,
    observeParents: true,
    spaceBetween: 20,
    mousewheel: {
      forceToAxis: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1480: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
  const designModalLayer = document.querySelector('.designModal__layer');
  designModal = () => {
    let idx = event.target.dataset.designIndex;
    let designContent = `
            <div class="exit-layer"></div>
            <div class="designModal__window">
                <div class="window-body">
                    <img src=${designProject[idx].mainImg} alt="디자인 팝업 이미지-${idx}">
                    <div class="window__inner">
                        <div class="head-title">
                            <h2>${designProject[idx].title}</h2>
                            <span>${designProject[idx].toolList}</span>
                        </div>
                        <div class="middle-description">
                            <h3>${designProject[idx].subject}</h3>
                            <p>${designProject[idx].description}</p>
                            <span>${designProject[idx].author}</span>
                        </div>
                        <div class="bottom-contents">
                            ${designProject[idx].contents}
                            ${designProject[idx].link}
                        </div>
                    </div>
                </div>
            </div>
            <div class="designModal__tool">
                <span class="close">&times;</span>
            </div>
        `;
    designModalLayer.innerHTML = designContent;
    designModalLayer.classList.add('active');
    document.body.style.overflow = 'hidden';
    designModalLayer.querySelector('.close').addEventListener('click', () => {
      designModalLayer.classList.remove('active');
      designModalLayer.innerHTML = '';
      document.body.style.overflow = 'unset';
      mainSwiper.enable();
    });
    designModalLayer.querySelector('.exit-layer').addEventListener('click', () => {
      designModalLayer.classList.remove('active');
      designModalLayer.innerHTML = '';
      document.body.style.overflow = 'unset';
      mainSwiper.enable();
    });
    mainSwiper.disable();
  };
};

const designOffsetTop = document.querySelector('#design').offsetTop;
const designBottom = document.querySelector('#design').clientHeight;
let prevScrollpos = 0;
let skillToggle = 0;
createSkill = () => {
  const skillList = document.createElement('ol');
  skillList.className = 'skill-list';
  skillBox.appendChild(skillList);
  async function badgeLoad() {
    await fetch('/json/badgeList.json')
      .then(res => res.json())
      .then(data =>
        data.forEach((e, idx) => {
          skillList.insertAdjacentHTML(
            'beforeend',
            `
          <li>
            <img class="skill-badge" src=${e.tool} alt="툴 뱃지 이미지-${idx}" />
            <span class="skill-level">
              <span class="skill-level__progress"></span>
            </span>
            <span class="skill-percent">
              <span class="skill-percent__binder"></span>
            </span>
          </li>
        `,
          );
        }),
      );
    await new Promise(() => {
      const skillProgress = skillList.querySelectorAll('.skill-level__progress');
      const skillBinder = skillList.querySelectorAll('.skill-percent__binder');
      // 스킬 로딩 생성
      skillLoading = () => {
        fetch('/json/badgeList.json')
          .then(res => res.json())
          .then(data =>
            data.forEach((e, idx) => {
              const $counter = skillBinder[idx]; // 카운트를 적용시킬 요소
              const max = e.progress; // 목표 수치
              const progress = skillProgress[idx];
              setTimeout(() => {
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
              }, 1);
            }),
          );
      };

      // 스킬 로딩 제거
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
          const max = badgeList[i].progress; // 목표 수치
          const progress = e;
          setTimeout(() => counter($counter, max, progress), 1);
        });
      };
    });
  }
  badgeLoad();
};

openPublishing = itemIdx => {
  const projectMain = [
    [
      {
        title: 'DongYangMetal',
        period: '2025.03 - 2025.06',
        mainImg: './images/project-dym-main.png',
        toolList: `
                    <img src=${badgeList[0].tool} alt="툴 뱃지 이미지-${0}" />
                    <img src=${badgeList[1].tool} alt="툴 뱃지 이미지-${1}" />
                    <img src=${badgeList[3].tool} alt="툴 뱃지 이미지-${3}" />
                    <img src=${badgeList[9].tool} alt="툴 뱃지 이미지-${9}" />
                    <img src=${badgeList[10].tool} alt="툴 뱃지 이미지-${10}" />
                `,
        percent: '100%',
      },
      {
        contents: `
                    <div class="col">                        
                        <img src="./images/project-dym-contents-1.gif" alt="퍼블리싱 디테일 DongYangMetal 컨텐츠 이미지-1" /> 
                        <p>양식기 업체다운 깔끔한 레이아웃</p>
                    </div>
                    <div class="col">
                        <img src="./images/project-dym-contents-2-1.png" alt="퍼블리싱 디테일 DongYangMetal 컨텐츠 이미지-2-1" /> 
                        <img src="./images/project-dym-contents-2-2.png" alt="퍼블리싱 디테일 DongYangMetal 컨텐츠 이미지-2-2" /> 
                        <img src="./images/project-dym-contents-2-3.png" alt="퍼블리싱 디테일 DongYangMetal 컨텐츠 이미지-2-3" /> 
                        <p>패턴별 상세정보를 팝업으로 볼 수 있게 JavaScript 코딩</p>
                    </div>
                `,
      },
    ],
    [
      {
        title: 'Collector 2030',
        period: '2023.12 - 2024.03',
        mainImg: './images/project-collector2030-main.png',
        toolList: `
                    <img src=${badgeList[0].tool} alt="툴 뱃지 이미지-${0}" />
                    <img src=${badgeList[1].tool} alt="툴 뱃지 이미지-${1}" />
                    <img src=${badgeList[3].tool} alt="툴 뱃지 이미지-${3}" />
                    <img src=${badgeList[7].tool} alt="툴 뱃지 이미지-${5}" />
                    <img src=${badgeList[9].tool} alt="툴 뱃지 이미지-${9}" />
                    <img src=${badgeList[10].tool} alt="툴 뱃지 이미지-${10}" />
                `,
        percent: '100%',
      },
      {
        contents: `
                    <div class="col">                        
                        <img src="./images/project-collector2030-contents-1.gif" alt="퍼블리싱 디테일 COLLECTOR2030 컨텐츠 이미지-1" /> 
                        <p>캐릭터 회사다운 인터랙션</p>
                    </div>
                    <div class="col">
                        <img src="./images/project-collector2030-contents-2-1.png" alt="퍼블리싱 디테일 COLLECTOR2030 컨텐츠 이미지-2-1" /> 
                        <img src="./images/project-collector2030-contents-2-2.png" alt="퍼블리싱 디테일 COLLECTOR2030 컨텐츠 이미지-2-2" /> 
                        <img src="./images/project-collector2030-contents-2-3.png" alt="퍼블리싱 디테일 COLLECTOR2030 컨텐츠 이미지-2-3" /> 
                        <p>그림의 치수를 입력하면 가상으로 걸어보는 JavaScript 코딩</p>
                    </div>
                `,
      },
    ],
    [
      {
        title: 'ROOM-3D',
        period: '2023.07 - 2023.08',
        mainImg: './images/project-room3d-main.png',
        toolList: `
                    <img src=${badgeList[0].tool} alt="툴 뱃지 이미지-${0}" />
                    <img src=${badgeList[1].tool} alt="툴 뱃지 이미지-${1}" />
                    <img src=${badgeList[3].tool} alt="툴 뱃지 이미지-${3}" />
                `,
        percent: '100%',
      },
      {
        contents: `
                    <div class="col">                        
                        <img src="./images/project-room3d-contents-1.png" alt="퍼블리싱 디테일 ROOM-3D 컨텐츠 이미지-1" /> 
                        <p>라이브러리나 목업 없이 CSS스타일로 형성한 모니터</p>
                    </div>
                    <div class="col">
                        <img src="./images/project-room3d-contents-2-1.png" alt="퍼블리싱 디테일 ROOM-3D 컨텐츠 이미지-2-1" /> 
                        <p>책 넘기는 효과를 구현한 JavaScript</p>
                        <img src="./images/project-room3d-contents-2-2.png" alt="퍼블리싱 디테일 ROOM-3D 컨텐츠 이미지-2-2" /> 
                    </div>
                `,
      },
    ],
    [
      {
        title: 'BNSYSTEM',
        period: '2023.06 - 2023.06',
        mainImg: './images/project-bnsystem-main.png',
        toolList: `
                    <img src=${badgeList[0].tool} alt="툴 뱃지 이미지-${0}" />
                    <img src=${badgeList[1].tool} alt="툴 뱃지 이미지-${1}" />
                    <img src=${badgeList[3].tool} alt="툴 뱃지 이미지-${3}" />
                    <img src=${badgeList[9].tool} alt="툴 뱃지 이미지-${9}" />
                `,
        percent: '100%',
      },
      {
        contents: `
                    <div class="col">
                        <img src="./images/project-bnsystem-contents-1-1.png" alt="퍼블리싱 디테일 BNSYSTEM 컨텐츠 이미지-1-1" /> 
                        <p>헤더 메뉴에 상황에 따른 레이아웃</p>
                        <img src="./images/project-bnsystem-contents-1-2.png" alt="퍼블리싱 디테일 BNSYSTEM 컨텐츠 이미지-1-2" />                         
                    </div>
                    <div class="col">
                        <img src="./images/project-bnsystem-contents-2-1.png" alt="퍼블리싱 디테일 BNSYSTEM 컨텐츠 이미지-2-1" /> 
                        <p>테마 토글 기능으로 라이트/다크 모드</p>
                        <img src="./images/project-bnsystem-contents-2-2.png" alt="퍼블리싱 디테일 BNSYSTEM 컨텐츠 이미지-2-2" />                         
                    </div>
                    <div class="col">
                        <img src="./images/project-bnsystem-contents-3-1.png" alt="퍼블리싱 디테일 BNSYSTEM 컨텐츠 이미지-3-1" /> 
                        <p>입체적 인터렉션과 정규식을 활용한 문의 모달창</p>
                        <img src="./images/project-bnsystem-contents-3-2.png" alt="퍼블리싱 디테일 BNSYSTEM 컨텐츠 이미지-3-2" />                         
                    </div>
                    <div class="row">
                        <img src="./images/project-bnsystem-contents-4-1.png" alt="퍼블리싱 디테일 BNSYSTEM 컨텐츠 이미지-4-1" /> 
                        <p>반응형 레이아웃</p>
                        <img src="./images/project-bnsystem-contents-4-2.png" alt="퍼블리싱 디테일 BNSYSTEM 컨텐츠 이미지-4-2" />                         
                    </div>
                `,
      },
    ],
    [
      {
        title: 'SINGLETOGETHER',
        period: '2023.01 - 2023.01',
        mainImg: './images/project-singletogether-main.png',
        toolList: `
                    <img src=${badgeList[0].tool} alt="툴 뱃지 이미지-${0}" />
                    <img src=${badgeList[1].tool} alt="툴 뱃지 이미지-${1}" />
                    <img src=${badgeList[3].tool} alt="툴 뱃지 이미지-${3}" />
                    <img src=${badgeList[7].tool} alt="툴 뱃지 이미지-${5}" />
                    <img src=${badgeList[9].tool} alt="툴 뱃지 이미지-${9}" />
                    <img src=${badgeList[10].tool} alt="툴 뱃지 이미지-${10}" />
                `,
        percent: '100%',
      },
      {
        contents: `
                    <div class="col">
                        <img src="./images/project-singletogether-contents-1-1.gif" alt="퍼블리싱 디테일 SINGLETOGETHER 컨텐츠 이미지-1-1" /> 
                        <p>초기 스플래쉬 레이아웃 표현</p>
                    </div>
                    <div class="col">
                        <img src="./images/project-singletogether-contents-2-1.png" alt="퍼블리싱 디테일 SINGLETOGETHER 컨텐츠 이미지-2-1" /> 
                        <p>테마 토글 기능으로 라이트/다크 모드</p>
                        <img src="./images/project-singletogether-contents-2-2.png" alt="퍼블리싱 디테일 SINGLETOGETHER 컨텐츠 이미지-2-2" />                         
                    </div>
                    <div class="col">
                        <img src="./images/project-singletogether-contents-3-1.png" alt="퍼블리싱 디테일 SINGLETOGETHER 컨텐츠 이미지-3-1" /> 
                        <p>검색창 기능 구현과 테마에 따른 변화 표현</p>
                        <img src="./images/project-singletogether-contents-3-2.png" alt="퍼블리싱 디테일 SINGLETOGETHER 컨텐츠 이미지-3-2" />                         
                    </div>
                `,
      },
    ],
  ];
  // <div class='drp-selected' set-></div>
  let detailMain = '';
  Array.from(projectMain[itemIdx]).forEach((e, i) => {
    if (i === 0) {
      // 메인 디스크립션 (기본)
      detailMain += `
                    <div class="publishing-detail-box">
                        <div class="main-description">
                            <div class="wrap">
                                <h3 class="subject">PORTFOLIO - WEB PUBLISHING</h3>
                                <h1 class="title">${projectMain[itemIdx][i].title}</h1>
                                <ul>
                                    <li>
                                        <span>제작기간</span>
                                        <span>${projectMain[itemIdx][i].period}</span>
                                    </li>
                                    <li>
                                        <span>사용 툴</span>
                                        <span>${projectMain[itemIdx][i].toolList}</span>
                                    </li>
                                    <li>
                                        <span>기여도</span>
                                        <span>${projectMain[itemIdx][i].percent}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="main-image">
                            <img src=${projectMain[itemIdx][i].mainImg} alt="">
                        </div>
                    </div>
                </div>
            `;
    } else {
      detailMain += `
                    <div class="publishing-detail-box">
                        <div class="small-description">
                            <div class="wrap">
                                <div class="contents">
                                    ${projectMain[itemIdx][i].contents}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }
  });
  publishingBox.innerHTML = `
        <span id="project-first"></span>
        ${detailMain}
    `;
  publishingBox.style.cssText = `background-image: unset;`;
  publishingBox.scrollLeft = publishingBox.getBoundingClientRect().left;
};

initPage = () => {
  createPublishing();
  createDesign();
};
document.addEventListener('DOMContentLoaded', () => {
  createProfile();
  createPublishing();
  createDesign();
  createSkill();
});

publishingDetail = projectIdx => {
  publishingBox.classList.add('open'); // 디테일 오픈 생성
  openPublishing(projectIdx);
  enterProject = () => {
    const link = ['DYM', 'COLLECTOR2030', 'ROOM-3D', 'BNSYSTEM', 'SINGLETOGETHER', 'PINTJOB'];
    console.log(link[projectIdx]);
    if (link[projectIdx] == 'COLLECTOR2030') {
      window.location.href = 'https://col2030.cafe24.com/index_backup.html';
    } else if (link[projectIdx] == 'DYM') {
      window.location.href = 'https://dongyangmetal.com/';
    } else {
      window.location.href = 'https://endurenova.github.io/PUBLISHING/' + link[projectIdx];
    }
  };
  document.querySelector('aside').classList.add('detail-active'); // 디테일용 퀵메뉴 생성
  $.fn.hasScrollBar = function () {
    return (
      (this.prop('scrollWidth') == 0 && this.prop('clientWidth') == 0) ||
      this.prop('scrollWidth') > this.prop('clientWidth')
    );
  }; // 좌우 스크롤이 있는지 없는지 여부 검사
  function wheel(name) {
    $(name).on('mousewheel', function (e) {
      var hasScroll = $(this).hasScrollBar();
      if (!hasScroll) {
        //스크롤이 없으면 그냥 일반 스크롤
      } else {
        //있으면 아래 스크롤 받는값을 없애고 좌우스크롤
        e.preventDefault();
        var wheelDelta = e.originalEvent.wheelDelta;
        if (wheelDelta > 0) {
          $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        } else {
          $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        }
      }
    });
  }
  $(function () {
    wheel('#web-publishing');
  });
  recoveryHome = () => {
    publishingBox.classList.remove('open'); // 디테일 오픈 제거
    publishingBox.style.cssText = `background-image: ../images/publishing-${projectIdx}.png;`; // 퍼블리싱 백그라운드 패턴 원상복구
    initPage();
    mainSwiper.enable();
    document.querySelector('aside').classList.remove('detail-active'); // 디테일용 퀵메뉴 생성
  };
  mainSwiper.disable();
};

var mainSwiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  slidesOffsetAfter: 0,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    reachEnd: function () {
      skillLoading();
      this.isAtEnd = true;
    },
    slideChange: function () {
      if (this.isAtEnd && this.activeIndex < this.slides.length - 1) {
        skillLoadRemove();
        this.isAtEnd = false;
      }
    },
  },
});
