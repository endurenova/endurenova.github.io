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
];
createProfile = () => {
  const experienceBox = document.querySelector('.list-box.experience');
  const educationBox = document.querySelector('.list-box.education');

  const experienceList = document.createElement('ol'),
    educationList = document.createElement('ol');

  experienceList.className = 'experience-list';
  educationList.className = 'education-list';

  experienceBox.appendChild(experienceList);
  educationBox.appendChild(educationList);

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

  fetch('/json/education.json')
    .then(res => res.json())
    .then(data =>
      data.forEach(e => {
        educationList.insertAdjacentHTML(
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

// 가로 스크롤
const wheelListener = event => {
  event.preventDefault();
  publishingBox.scrollLeft += event.deltaY;
};

createPublishing = () => {
  const publishingProject = [
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
            <li class="project-film" onclick="publishingDetail()" data-item-index="${idx}">
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
    if (idx === 0) {
      pagination += `
                <li class="active" data-page-index="${idx}"></li>
            `;
    } else {
      pagination += `
                <li data-page-index="${idx}"></li>
            `;
    }
  });
  publishingBox.innerHTML = `
        <div class="wrap">
            <h1>WEB PUBLISHING</h1>
            <div class="slide-box">
                <ul class="project-list">${publishing}</ul>
                <div class="pagination-box">
                    <ul class="pagination-list">${pagination}</ul>
                </div>
            </div>                    
            <span class="direction prev-left">&#10094;</span>
            <span class="direction next-right">&#10095;</span>
        </div>
    `;
};
createDesign = () => {
  const designProject = [
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
                <div class="swiper-pagination" >
            </div>
        </div>
    `;

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
    /* 
            document.querySelector(".head-title").addEventListener("mouseover", ()=>{
                document.querySelector(".bottom-contents").innerHTML = designProject[idx].contents;
            });
        */
    designModalLayer.innerHTML = designContent;
    designModalLayer.classList.add('active');
    document.body.style.overflow = 'hidden';
    designModalLayer.querySelector('.close').addEventListener('click', () => {
      designModalLayer.classList.remove('active');
      designModalLayer.innerHTML = '';
      document.body.style.overflow = 'unset';
    });
    designModalLayer.querySelector('.exit-layer').addEventListener('click', () => {
      designModalLayer.classList.remove('active');
      designModalLayer.innerHTML = '';
      document.body.style.overflow = 'unset';
    });

    const designSwiper = new Swiper('#design .swiper.slide-box', {
      on: {
        init: function () {
          console.log('swiper 초기화 될때 실행');
        },
        imagesReady: function () {
          // 모든 내부 이미지 로드후 이벤트 시작
          console.log('슬라이드 이미지 로드 후 실행');
        },
      },
      direction: 'horizontal',
      slidesPerView: 2,
      allowTouchMove: true,
      slidesPerView: 'auto',
      observer: true,
      observeParents: true,
      breakpoints: {
        1280: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  };
};

createIllustration = () => {
  // async function illustLoad() {
  //   let illust = '';
  //   await fetch('/json/illustration.json')
  //     .then(res => res.json())
  //     .then(data =>
  //       data.forEach((e, idx) => {
  //         illust += `
  //         <li class="swiper-slide">
  //             <div class="illust-item">
  //               <div class="illust-item__image">
  //                   <img src="/images/illust/${e.title[0]}/${e.mainImg}" alt="일러스트 이미지-${idx}" />
  //               </div>
  //               <div class="illust-item__description">
  //                 <div class="post">
  //                   <div class="post-wrap">
  //                     <h3>${e.title[1]}</h3>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //         </li>
  //     `;
  //       }),
  //     );
  //   await new Promise(() => {
  //     illustrationBox.innerHTML = `
  //       <div class="wrap">
  //           <h1>Illustration</h1>
  //           <div class="swiper slide-box" >
  //               <ul class="swiper-wrapper illust-list">${illust}</ul>
  //               <div class="swiper-pagination" >
  //           </div>
  //       </div>
  //     `;
  //     const illustSwiper = new Swiper('#illustration .swiper.slide-box', {
  //       on: {
  //         init: function () {
  //           console.log('swiper 초기화 될때 실행');
  //         },
  //         imagesReady: function () {
  //           // 모든 내부 이미지 로드후 이벤트 시작
  //           console.log('슬라이드 이미지 로드 후 실행');
  //         },
  //       },
  //       loop: true,
  //       direction: 'horizontal',
  //       slidesPerView: 1,
  //       allowTouchMove: true,
  //       slidesPerView: 'auto',
  //       observer: true,
  //       observeParents: true,
  //       effect: 'cube',
  //     });
  //   });
  // }
  // illustLoad();
  async function illustBookLoad() {
    let illust = '';
    let pageIdx = 0;
    let flagTop = 6;
    await fetch('/json/illustration.json')
      .then(res => res.json())
      .then(data =>
        data.forEach((e, idx) => {
          illust += `
            <li data-page-index="${pageIdx}" class="binder__page flipPageRight right">
              <div class="upper flag-tag" style="top:${flagTop}%; background-color: ${e.color[1]};">
                <span class="flag-tag__white"></span>
                <a href="#" class="flag-tag__name">
                  <p>${e.title[1]}</p>
                </a>
              </div>
              <div class="page upper page-odd">
                <div class="contents-color" style="background-color: ${e.color[0]};">
                  <div class="contents-title">
                    <h2>${e.title[1]}</h2>
                    <p></p>
                  </div>
                </div>
              </div>
              <div class="page page-even">
                <div class="page-main left">
                  <div class="page-main__image">
                    <img src="/images/illust/${e.title[0]}/${e.mainImg}" alt="${
            e.title[1]
          } 일러스트 목업 이미지-${idx}" />
                  </div>
                </div>
              </div>
            </li>
            <li data-page-index="${pageIdx + 1}" class="binder__page flipPageRight right">
              <div class="page upper page-odd">
                <div class="page-content">
                  <div class="page-content__image">
                    <img src="/images/illust/${e.title[0]}/${e.imgList[0]}" alt="${
            e.title[1]
          } 일러스트 이미지-${idx}" />
                  </div>
                </div>
              </div>
              <div class="page page-even">
                <div class="page-main left">
                  <div class="page-main__title">
                    <h1></h1>
                  </div>
                </div>
              </div>
            </li>
          `;
          flagTop += 8;
          pageIdx += 2;
        }),
      );
    await new Promise(() => {
      document.querySelector('.book-page-list').innerHTML = illust;
      const bookLayer = document.querySelector('.book-binder__box');
      const bookExit = bookLayer.querySelector('.exit-layer');
      const bookView = bookLayer.querySelector('.book-viewer');
      const bookBinder = bookLayer.querySelector('.book-binder');
      const bookCoverFr = bookBinder.querySelector('.book-cover.Fr');
      const bookCoverRr = bookBinder.querySelector('.book-cover.Rr');
      const bookCoverList = [bookCoverFr, bookCoverRr];
      const bookSideTp = bookBinder.querySelector('.book-side__face--top');
      const bookSideBt = bookBinder.querySelector('.book-side__face--bottom');
      const bookBinderList = Array.from(bookBinder.children).slice(1, undefined);
      const bookSide = bookBinder.querySelector('.book-side .cr-Side');
      const bookPageList = bookBinder.querySelector('.book-page-list');
      const bookPages = bookPageList.querySelectorAll('.binder__page');
      let bookLeftPages = [];
      let bookRightPages = [];
      let bookPageWidth = Number(
        getComputedStyle(document.documentElement).getPropertyValue('--book-page-width').split('vmin')[0],
      );
      let pageIndex;

      (() => {
        Array.from(bookPages).forEach((e, i) => {
          e.style.cssText = `z-index: ${bookBinderList.length - i};`;
        });
        const bookSideCount = getComputedStyle(document.documentElement).getPropertyValue(
          '--book-side-radius-face-count',
        );
        const bookSideDegree = 360 / bookSideCount;
        for (var i = 0; i < bookSideCount / 2; i++) {
          bookSide.insertAdjacentHTML('beforeend', `<span class="face side s${i}"></span>`);
        }

        let bookSideElement = bookSide.querySelectorAll('.side');
        Array.from(bookSideElement).forEach((e, i) => {
          if (i === 0) {
            e.style.cssText = `transform: rotateY(${
              -bookSideDegree / 2
            }deg) translate3D(0, 0, calc(var(--book-cover-thick)));`;
          } else {
            e.style.cssText = `transform: rotateY(${
              -i * bookSideDegree - bookSideDegree / 2
            }deg) translate3D(0, 0, calc(var(--book-cover-thick)));`;
          }
        });
      })();

      resetPageSequence = () => {
        // 오른편 페이지들 재정렬
        const children = Array.from(bookPageList.children);
        children.sort((a, b) => {
          const indexA = parseInt(a.dataset.pageIndex);
          const indexB = parseInt(b.dataset.pageIndex);
          return indexA - indexB;
        });
        children.forEach(child => bookPageList.appendChild(child));
        Array.from(bookPages).forEach(e => {
          e.querySelector('.page-odd').classList.add('upper');
          e.querySelector('.page-even').classList.remove('upper');
        });
      };

      closeCoverPages = () => {
        Array.from(bookPages).forEach((e, i) => {
          e.style.cssText = `
              z-index: ${bookPages.length - i};
              width: ${bookPageWidth}vmin;
              `;
        });
      };

      refreshRight = () => {
        // 오른편 페이지들 재정렬
        bookRightPages = document.querySelectorAll('.binder__page.right'); // 페이지 플립 후의 오른쪽 페이지 양
        Array.from(bookRightPages).forEach((e, i) => {
          e.style.cssText = `z-index: ${bookRightPages.length - i}; width: ${
            i * 0.2 + bookPageWidth - bookPages.length * 0.2
          }vmin;`;
        });
      };

      refreshLeft = () => {
        // 왼편 페이지들 재정렬
        bookLeftPages = document.querySelectorAll('.binder__page.left'); // 페이지 플립 후의 왼쪽 페이지 양
        Array.from(bookLeftPages).forEach((e, i) => {
          e.style.cssText = `z-index: ${i}; width: ${
            (bookLeftPages.length - i) * 0.2 + bookPageWidth - bookPages.length * 0.2
          }vmin;`;
        });
      };

      resetBook = () => {
        bookCoverFr.classList.remove('flipOpen');
        bookCoverRr.classList.remove('flipClose');
        bookBinder.classList.remove('open');
        bookLayer.classList.remove('open');
        bookCoverFr.removeEventListener(clickEventType, statusBookCover);
        bookCoverRr.removeEventListener(clickEventType, statusBookCover);
        Array.from(bookPages).forEach(e => {
          // 페이지 넘기는 함수
          if (e.classList.contains('left')) {
            e.classList.remove('flipPageLeft', 'left');
            e.classList.add('flipPageRight', 'right');
          }
        });
        resetPageSequence();
      };

      setTimeout(() => {
        bookExit.addEventListener(clickEventType, resetBook);
      }, 300);

      statusBookCover = () => {
        bookLeftPages = document.querySelectorAll('.binder__page.left');
        bookRightPages = document.querySelectorAll('.binder__page.right');
        if (bookLeftPages.length === 0) {
          // 앞 커버일 때
          if (bookCoverFr.classList.contains('flipOpen')) {
            // 앞 커버가 열려 있을 때
            bookCoverFr.classList.remove('flipOpen');
            bookBinder.classList.remove('open');
            closeCoverPages();
          } else {
            // 앞 커버가 닫혀 있을 때
            bookCoverFr.classList.add('flipOpen');
            bookBinder.classList.add('open');
            refreshRight();
          }
        } else if (bookRightPages.length === 0) {
          // 뒷 커버일 때
          if (bookCoverRr.classList.contains('flipClose')) {
            // 뒷 커버가 닫혀 있을 때
            bookCoverRr.classList.remove('flipClose');
            bookBinder.classList.remove('close');
            refreshLeft();
          } else {
            // 뒷 커버가 열려 있을 때
            bookCoverRr.classList.add('flipClose');
            bookBinder.classList.add('close');
            closeCoverPages();
          }
        }
      };
      let clickEventType = 'click';
      bookCoverFr.addEventListener('click', statusBookCover);
      bookCoverRr.addEventListener('click', statusBookCover);

      flipLeft = page => {
        // Left <- Right
        page.classList.add('flipPageLeft', 'left');
        refreshLeft();
        setTimeout(() => {
          page.classList.remove('flipPageRight', 'right');
          refreshRight();
          setTimeout(() => {
            if (page.querySelector('.flag-tag')) {
              page.querySelector('.flag-tag').classList.remove('upper');
            }
            page.querySelector('.page-odd').classList.remove('upper');
            page.querySelector('.page-even').classList.add('upper');
            bookRightPages.length < 1
              ? bookCoverRr.addEventListener(clickEventType, statusBookCover)
              : bookCoverRr.removeEventListener(clickEventType, statusBookCover);
          }, 50);
        }, 50);
      };
      flipRight = page => {
        // Left -> Right
        page.classList.add('flipPageRight', 'right');
        refreshRight();
        setTimeout(() => {
          page.classList.remove('flipPageLeft', 'left');
          refreshLeft();
          setTimeout(() => {
            if (page.querySelector('.flag-tag')) {
              page.querySelector('.flag-tag').classList.add('upper');
            }
            page.querySelector('.page-odd').classList.add('upper');
            page.querySelector('.page-even').classList.remove('upper');
            bookLeftPages.length < 1
              ? bookCoverFr.addEventListener(clickEventType, statusBookCover)
              : bookCoverFr.removeEventListener(clickEventType, statusBookCover);
          }, 50);
        }, 50);
      };

      Array.from(bookPages).forEach(e => {
        // 페이지 넘기는 함수
        e.addEventListener(clickEventType, event => {
          event.preventDefault();
          if (e.classList.contains('right')) {
            // 해당 페이지 위치가 오른쪽인지
            flipLeft(e);
            bookLeftPages = document.querySelectorAll('.binder__page.left');
          } else if (e.classList.contains('left')) {
            // 왼쪽 인지 확인
            flipRight(e);
            bookLeftPages = document.querySelectorAll('.binder__page.left');
          }
          console.log(bookLeftPages.length + 'left');
          console.log(bookRightPages.length + 'right');
        });
      });
    });
  }
  illustBookLoad();
};
const headerBar = document.querySelector('header');
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
      console.log(skillProgress);
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
  window.addEventListener('scroll', event => {
    event.preventDefault();
    const currentScrollPos = window.scrollY;
    if (prevScrollpos < currentScrollPos) {
      headerBar.classList.add('hidden');
    } else {
      headerBar.classList.remove('hidden');
    }
    if (!publishingBox.classList.contains('open')) {
      if (window.scrollY >= designOffsetTop + designBottom / 2) {
        if (skillToggle !== 1) {
          skillLoading();
          skillToggle = 1;
        }
      } else if (window.scrollY < designOffsetTop) {
        if (skillToggle !== 0) {
          skillLoadRemove();
          skillToggle = 0;
        }
      }
    }
    prevScrollpos = currentScrollPos;
  });
};

openPublishing = itemIdx => {
  const projectMain = [
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
                    <img src=${badgeList[5].tool} alt="툴 뱃지 이미지-${5}" />
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
  createProfile();
  createPublishing();
  createDesign();
  createIllustration();
  createSkill();
  $(document).ready(function () {
    let swipeItemWidth = document.querySelector('.web-publishing .project-film').clientWidth;

    // 슬라이드 최초 세팅
    $('.web-publishing .project-film').last().prependTo($('.web-publishing .project-list'));
    $('.web-publishing .project-list').css('left', -swipeItemWidth);

    $prevBtn = () => {
      // 이전 버튼 이벤트
      $('.web-publishing .project-list').animate({ left: '+=' + swipeItemWidth }, 'fast', function () {
        $('.web-publishing .project-film').last().prependTo($('.web-publishing .project-list'));
        $('.web-publishing .project-list').css('left', -swipeItemWidth);
      });
    };

    $nextBtn = () => {
      // 다음 버튼 이벤트
      $('.web-publishing .project-list').animate({ left: '-=' + swipeItemWidth }, 'fast', function () {
        $('.web-publishing .project-film').first().appendTo($('.web-publishing .project-list'));
        $('.web-publishing .project-list').css('left', -swipeItemWidth);
      });
    };

    // count 만큼 스와이프 해주는 함수
    const swipeItem = function (cur, prev) {
      if (cur > prev) {
        while (cur > prev) {
          $nextBtn();
          prev++;
        }
      } else if (cur < prev) {
        while (cur < prev) {
          $prevBtn();
          prev--;
        }
      }
    };

    // 슬라이드 버튼
    $('span.direction').on('click', function () {
      if ($(this).hasClass('prev-left')) {
        $prevBtn();
        paginateActive();
      } else if ($(this).hasClass('next-right')) {
        $nextBtn();
        paginateActive();
      }

      setTimeout(() => {
        document.querySelector('.web-publishing .project-list').children[0].classList.remove('fff');
        document.querySelector('.web-publishing .project-list').children[1].classList.add('fff');
        document.querySelector('.web-publishing .project-list').children[2].classList.remove('fff');
        itemIdx = document.querySelector('.project-film.fff').dataset.itemIndex;
        $('.web-publishing').css('backgroundImage', `url(../images/publishing-${itemIdx}.png)`);
      }, 300);
    });

    // 페이지 자동 액티브
    let itemIdx = document.querySelector('.web-publishing .project-list').children[2].dataset.itemIndex;
    function paginateActive() {
      itemIdx = document.querySelector('.web-publishing .project-list').children[2].dataset.itemIndex;
      $('.pagination-list li').siblings().removeClass('active');
      $('.pagination-list li').eq(itemIdx).addClass('active');
    }

    // 페이지네이션 버튼 이벤트
    $('.pagination-list li').on('click', function () {
      let pageIdx = $(this).index();
      let prevActive = document.querySelector('.pagination-list li.active').dataset.pageIndex;
      itemIdx = document.querySelector('.web-publishing .project-list').children[pageIdx].dataset.itemIndex;
      if (!$(this).hasClass('active')) {
        $('.pagination-list li').siblings().removeClass('active');
        $('.pagination-list li').eq(pageIdx).addClass('active');
        swipeItem(pageIdx, prevActive);
        $('.web-publishing').css('backgroundImage', `url(../images/publishing-${pageIdx}.png)`);
      }
    });
  });
};
document.addEventListener('DOMContentLoaded', () => {
  initPage();
});
document.addEventListener('resize', () => {
  createPublishing();
});

let projectIdx;
publishingDetail = () => {
  document.querySelector('aside').classList.add('detail-active'); // 디테일용 퀵메뉴 생성
  publishingBox.classList.add('open'); // 디테일 오픈 생성
  publishingBox.addEventListener('wheel', wheelListener); // 가로 휠 추가
  projectIdx = publishingBox.querySelector('.project-list').children[1].dataset.itemIndex;
  document.querySelector('header').style.display = 'none';
  document.querySelector('#profile').style.display = 'none';
  document.querySelector('#design').style.display = 'none';
  document.querySelector('#skill').style.display = 'none';
  openPublishing(projectIdx);
  enterProject = () => {
    const link = ['ROOM-3D', 'BNSYSTEM', 'SINGLETOGETHER', 'PINTJOB'];
    window.location.href = 'https://endurenova.github.io/PUBLISHING/' + link[projectIdx];
  };
};

recoveryHome = () => {
  document.querySelector('aside').classList.remove('detail-active'); // 퀵메뉴 원상복구
  publishingBox.classList.remove('open'); // 디테일 오픈 제거
  publishingBox.removeEventListener('wheel', wheelListener); // 가로 휠 제거
  document.querySelector('header').style.display = 'unset';
  document.querySelector('#profile').style.display = 'flex';
  document.querySelector('#design').style.display = 'flex';
  document.querySelector('#skill').style.display = 'flex';
  publishingBox.style.cssText = `background-image: ../images/publishing-${projectIdx}.png;`; // 퍼블리싱 백그라운드 패턴 원상복구
  initPage();
  window.scrollTo(0, publishingBox.getBoundingClientRect().top); // 퍼블리싱 섹션 위치로 이동
};
