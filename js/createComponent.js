
const publishingBox = document.querySelector(".web-publishing");
const designBox = document.querySelector('.design');
const skillBox = document.querySelector('.skill');
const badgeList = [
    { // 0
        name: "HTML5",
        tool: 'https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white',
        progress: 85
    },
    { // 1
        name: "CSS3",
        tool: 'https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white',
        progress: 90
    },
    { // 2
        name: "Sass",
        tool: 'https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white',
        progress: 85
    },
    { // 3
        name: "JavaScript",
        tool: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white',
        progress: 80
    },
    { // 4
        name: "React",
        tool: 'https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white',
        progress: 50
    },
    { // 5
        name: "jQuery",
        tool: 'https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white',
        progress: 70
    },
    { // 6
        name: "Python",
        tool: 'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white',
        progress: 80
    },
    { // 7
        name: "Photoshop",
        tool: 'https://img.shields.io/badge/Photoshop-31A8FF?style=flat&logo=adobephotoshop&logoColor=white',
        progress: 85
    }, 
    { // 8
        name: "Illustrator",
        tool: 'https://img.shields.io/badge/Illustrator-FF9A00?style=flat&logo=adobeillustrator&logoColor=white',
        progress: 85
    }, 
    { // 9
        name: "Figma",
        tool: 'https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white',
        progress: 90
    }
];
createProfile = () => {
    const experienceBox = document.querySelector('.list-box.experience');
    const educationBox = document.querySelector('.list-box.education');
    const experienceList = [
        {
            period: '2023.04 - 2023.07',
            institution: '비엔시스템',
            subject: '반응형 웹페이지 제작 및 Q.C',
        },
        {
            period: '2019.02 - 2022.04',
            institution: '티아이엠텍',
            subject: '자동차 A/S부품 공급용 3D카탈로그 제작 및 데이터 검토',
        },
        {
            period: '2014.05 - 2016.08',
            institution: '파워트로닉스',
            subject: 'Power Distribution Unit 생산 및 출하 과정 Q.C',
        },
    ];
    const educationList = [
        {
            period: '2022.10 - 2023.03 &#40;760h&#41;',
            institution: '대우직업능력개발원',
            subject: '반응형 웹퍼블리셔 양성과정&#40;스마트혼합훈련&#41; 수료',
        },
        {
            period: '2019.07 - 2019.08 &#40;96h&#41;',
            institution: '한백산업디자인학원',
            subject: '기계설계 2D/3D 실기 양성과정 수료',
        },
        {
            period: '2018.03 - 2018.06 &#40;72h&#41;',
            institution: '인덕대학교',
            subject: 'GOM 취업역량 Skill-up 아카데미 11기 심화반 이수',
        },
        {
            period: '2018.01 - 2018.01',
            institution: '인덕대학교',
            subject: '솔리드웍스 CSWA, CSWP 이수',
        },
        {
            period: '2017.12 - 2018.01 &#40;33h&#41;',
            institution: '인덕대학교',
            subject: 'GOM 취업역량 Skill-up 아카데미 11기 기초반 이수',
        },
        {
            period: '2017.01 - 2017.05 &#40;96h&#41;',
            institution: '한울귀금속공예전문학원',
            subject: '귀금속가공 향상과정 이수',
        },
        {
            period: '2016.09 - 2017.01 &#40;96h&#41;',
            institution: '가이아아카데미',
            subject: '가공화상품제작향상과정&#40;프리저브드&클레이플라워&#41; 이수',
        },
        {
            period: '2014.06 - 2014.06',
            institution: '로열핸즈가죽공방',
            subject: '미니켈리백 제작과정 이수',
        },
        {
            period: '2011.07 - 2011.12',
            institution: '한국꽃예술작가협회',
            subject: '동양 꽃꽂이 초급, 중급, 고급과정 수료',
        },
        {
            period: '2011.03 - 2012.01',
            institution: '아현산업정보학교',
            subject: '화훼조경디자인 수료',
        },
        {
            period: '2010.08 - 2010.12 &#40;94h&#41;',
            institution: '경복고등학교',
            subject: '음악영재학급 작곡 수료',
        },
    ];
    let experience = '';
    experienceList.forEach((exp, i) => {
        experience += `
            <li>
                <span>${exp.period}</span>
                <span>${exp.institution}</span>
                <span>${exp.subject}</span>
            </li>
        `;
    });

    let education = '';
    educationList.forEach((edu) => {
        education += `
            <li>
                <span>${edu.period}</span>
                <span>${edu.institution}</span>
                <span>${edu.subject}</span>
            </li>
        `;
    });
    experienceBox.insertAdjacentHTML('afterbegin', `
        <ol class="experience-list">
            ${experience}
        </ol>
    `);
    educationBox.insertAdjacentHTML('afterbegin', `
        <ol class="education-list">
            ${education}
        </ol>
    `);
};

// 가로 스크롤
const wheelListener = (event) => {
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
            `
        },
        {
            title:'BNSYSTEM',
            imgSrc: './images/project-bnsystem-main.png',
            toolText:'HTML　CSS　JavaScript　Photoshop'
        },
        {
            title: 'SINGLETOGETHER',
            imgSrc: './images/project-singletogether-main.png',
            toolText: 'HTML　CSS　JavaScript　jQuery　Photoshop　Illustrator',
        },
        {
            title: 'PINTJOB',
            imgSrc: './images/project-pintjob-main.png',
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
                        <p>${pub.tool}</p>
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
                title: 'CALENDAR',
                mainImg: './images/design-calendar-main.png', 
                toolList: `
                    <img src=${badgeList[7].tool} alt="툴 뱃지 이미지-${7}" /> 
                    <img src=${badgeList[8].tool} alt="툴 뱃지 이미지-${8}" />                  
                `,
                subject: "달력 만들기",
                description: "창작한 캐릭터로 일러스트레이터를 활용해 드로잉하고 포토샵으로 목업을 한 작업",
                author: "개인작업",
                contents: `
                    <img src="./images/design-calendar-contents-1.png" alt="디자인 모달 달력 컨텐츠 이미지-1" /> 
                    <img src="./images/design-calendar-contents-2.png" alt="디자인 모달 달력 컨텐츠 이미지-2" /> 
                    <img src="./images/design-calendar-contents-3.png" alt="디자인 모달 달력 컨텐츠 이미지-3" /> 
                `
            },
            {
                title: 'OVERTONES',
                mainImg:  './images/design-overtones-mockup.png', 
                toolList: `
                    <img src=${badgeList[9].tool} alt="툴 뱃지 이미지-${9}" />
                `,
                subject: "모바일 쇼핑몰 디자인",
                description: "피그마로 인터렉션 쇼핑몰 디자인 작업",
                author: "개인작업",
                contents: `                
                    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FRCtkhZYuzwpPOdVDnfnoXd%2FOvertones%3Fnode-id%3D1-187%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A187%26mode%3Ddesign%26t%3DCqoSILLQRChvbxjp-1" allowfullscreen></iframe>
                    <iframe src="https://docs.google.com/gview?url=https://endurenova.github.io//images/Overtones.pdf&embedded=true" style="width:100%; height:500px;" frameborder="0"></iframe>
                `
            },
            {
                title: 'DOTORISUP',
                mainImg: './images/design-dotorisup-mockup.png', 
                toolList: `
                    <img src=${badgeList[9].tool} alt="툴 뱃지 이미지-${9}" />
                `,
                subject: "도토리숲 쇼핑몰 모작",
                description: "피그마로 도토리숲 쇼핑몰 인터렉션 모작 연습 작업",
                author: "개인작업",
                contents: `
                    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdsbjHyHbFKXqLlseWJ6uqY%2FDotorisup%3Fnode-id%3D57-2175%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D57%253A2175%26mode%3Ddesign%26t%3Dq0YGCuGxVd88nXSH-1" allowfullscreen></iframe>
                    <iframe src="https://docs.google.com/gview?url=https://endurenova.github.io//images/Dotorisup.pdf&embedded=true" style="width:100%; height:500px;" frameborder="0"></iframe>
                `
            },
            {
                title: 'TOTORO',
                mainImg: './images/design-totoro-mockup.png', 
                toolList: `
                    <img src=${badgeList[0].tool} alt="툴 뱃지 이미지-${0}" />
                    <img src=${badgeList[1].tool} alt="툴 뱃지 이미지-${1}" />
                    <img src=${badgeList[3].tool} alt="툴 뱃지 이미지-${3}" />
                    <img src=${badgeList[5].tool} alt="툴 뱃지 이미지-${5}" />                    
                `,
                subject: "제이쿼리 애니메이션",
                description: "제이쿼리를 활용해 애니메이션 효과 만들기",
                author: "개인작업",
                contents: `
                    <iframe src="./images/totoro/totoro.html" ></iframe>
                `
            },
            {
                title: 'HANATOUR',
                mainImg: './images/design-hanatour-mockup.png',
                toolList: `
                    <img src=${badgeList[7].tool} alt="툴 뱃지 이미지-${7}" />
                `,
                subject: "포토샵 기능 연습",
                description: "포토샵 기능을 활용한 다양한 효과 다루는 연습",
                author: "개인작업",
                contents: `
                    <img src="./images/design-hanatour-contents-1.png" alt="디자인 모달 하나투어 컨텐츠 이미지-1" /> 
                `
            },
            {
                title: 'LEQUIPSHOP',
                mainImg: './images/design-lequipshop-mockup.png',
                toolList: `
                    <img src=${badgeList[7].tool} alt="툴 뱃지 이미지-${7}" />
                `,
                subject: "UI/UX 디자인 연습",
                description: "실제 쇼핑몰을 참고하여 포토샵으로 UI/UX 배치 연습",
                author: "개인작업",
                contents: `
                    <img src="./images/design-lequipshop-contents-1.png" alt="디자인 모달 하나투어 컨텐츠 이미지-1" /> 
                `
            }
    ];
    let design = '';
    designProject.forEach((deg, idx) => {
        design += `
            <li>
                <div class="project-item">
                    <div>
                        <h3>${deg.title}</h3>
                        <span>${deg.toolList}</span>
                    </div>
                    <div>
                        <img src=${deg.mainImg} alt="디자인 프로젝트 이미지-${idx}" />
                    </div>
                    <div>
                        <button onclick="designModal()" class="design-modal-btn" data-design-index="${idx}">DETAIL</button>
                    </div>
                </div>
            </li>
        `;
    });
    designBox.innerHTML = `
        <div class="wrap">
            <h1>DESIGN</h1>
            <div class="slide-box">
                <ul id="drag-element" class="project-list">${design}</ul>
            </div>
        </div>
    `;

    const designModalLayer = document.querySelector(".designModal__layer");
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
                        </div>
                    </div>
                </div>
            </div>
            <div class="designModal__tool">
                <span class="close">&times;</span>
            </div>
        `
        /* 
            designModalLayer.innerHTML = designContent;
            designModalLayer.classList.add("active");
            document.body.style.overflow = "hidden";
            document.querySelector(".head-title").addEventListener("mouseover", ()=>{
                document.querySelector(".bottom-contents").innerHTML = designProject[idx].contents;
            });
        */
        designModalLayer.querySelector(".close").addEventListener('click', () => {
            designModalLayer.classList.remove("active");
            designModalLayer.innerHTML = "";
            document.body.style.overflow = "unset"; 
        });
        designModalLayer.querySelector(".exit-layer").addEventListener('click', () => {
            designModalLayer.classList.remove("active");
            designModalLayer.innerHTML = "";
            document.body.style.overflow = "unset"; 
        });
    };
};

scrollEvent = () =>{
    const skillList = skillBox.querySelector('.skill-list');
    // 스킬 로딩 생성
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
            const max = badgeList[i].progress; // 목표 수치
            const progress = e;
            setTimeout(() => counter($counter, max, progress), 1);
        });
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
}

createSkill = () => {
    let badges = '';
    Array.from(badgeList).forEach((badge, idx) => {
        badges += `
            <li>
                <img class="skill-badge" src=${badge.tool} alt="툴 뱃지 이미지-${idx}" />
                <span class="skill-level">
                    <span class="skill-level__progress"></span>
                </span>
                <span class="skill-percent">
                    <span class="skill-percent__binder"></span>
                </span>
            </li>
        `;
    });
    skillBox.innerHTML = `
        <div class="wrap">
            <h1>SKILL</h1>
            <div class="skill-box">
                <ol class="skill-list">${badges}</ol>
            </div>
        </div>
    `;
    scrollEvent();
};

openPublishing = (itemIdx) => {
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
                percent: '100%'
            },
            {
                description: "transform3D를 활용한 페이지로 라이브러리 없이 제작하였습니다.",
                contents: `
                    <img src="./images/project-room3d-contents-1.png" alt="퍼블리싱 디테일 ROOM-3D 컨텐츠 이미지-1" /> 
                    <img src="./images/project-room3d-contents-2.png" alt="퍼블리싱 디테일 ROOM-3D 컨텐츠 이미지-2" /> 
                    <img src="./images/project-room3d-contents-3.png" alt="퍼블리싱 디테일 ROOM-3D 컨텐츠 이미지-3" /> 
                `
            }
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
                    <img src=${badgeList[7].tool} alt="툴 뱃지 이미지-${7}" />
                `,
                percent: '100%',
            },
            {
            }
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
                    <img src=${badgeList[7].tool} alt="툴 뱃지 이미지-${7}" />
                    <img src=${badgeList[8].tool} alt="툴 뱃지 이미지-${8}" />
                `,
                percent: '100%',
            },
            {
            }
        ],
        [
            {
                title: 'PINTJOB',
                period: '2023.01 - 2023.01',
                mainImg: './images/project-pintjob-main.png',            
                toolList: `
                    <img src=${badgeList[0].tool} alt="툴 뱃지 이미지-${0}" />
                    <img src=${badgeList[1].tool} alt="툴 뱃지 이미지-${1}" />
                    <img src=${badgeList[3].tool} alt="툴 뱃지 이미지-${3}" />
                    <img src=${badgeList[5].tool} alt="툴 뱃지 이미지-${5}" />
                    <img src=${badgeList[7].tool} alt="툴 뱃지 이미지-${7}" />
                    <img src=${badgeList[8].tool} alt="툴 뱃지 이미지-${8}" />
                `,
                percent: '50%',
            },
            {
            }
        ]
    ];

    let detailMain ='';
    Array.from(projectMain[itemIdx]).forEach((e, i) =>{
        if (i === 0) { // 메인 디스크립션 (기본)
            detailMain += `
                    <div class="publishing-detail-box">
                        <div class="description">
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
                        <div class="description">
                            <div class="wrap">
                                <h3 class="subject">PORTFOLIO - WEB PUBLISHING</h3>
                                <p class="description">${projectMain[itemIdx][i].description}</p>
                            </div>
                        </div>
                        <div class="contents-image">
                            ${projectMain[itemIdx][i].contents}
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
    publishingBox.style.cssText = `background-image: unset;`    
};


initPage = ()=>{
    createProfile();
    createPublishing();
    createDesign();
    createSkill();
    $(document).ready(function(){
        let swipeItemWidth = document.querySelector(".web-publishing .project-film").clientWidth;
        
        // 슬라이드 최초 세팅
        $(".web-publishing .project-film").last().prependTo($(".web-publishing .project-list"));
        $(".web-publishing .project-list").css("left", (-swipeItemWidth));

        $nextBtn = () => { // 이전 버튼 이벤트
            $(".web-publishing .project-list").animate({left:"-=" + swipeItemWidth},"fast", function(){
                $(".web-publishing .project-film").first().appendTo($(".web-publishing .project-list"));
                $(".web-publishing .project-list").css("left", (-swipeItemWidth));
            });
        }

        $prevBtn = () => { // 다음 버튼 이벤트
            $(".web-publishing .project-list").animate({left:"+=" + swipeItemWidth},"fast", function(){
                $(".web-publishing .project-film").last().prependTo($(".web-publishing .project-list"));
                $(".web-publishing .project-list").css("left", (-swipeItemWidth));
            });
        }

        // count 만큼 스와이프 해주는 함수
        const swipeItem = function (cur, prev) {
            if (cur > prev) {
                while (cur > prev){
                    $nextBtn();
                    prev++;
                }
            } else if (cur < prev) {
                while (cur < prev){
                    $prevBtn();
                    prev--;
                }
            }
        }

        // 슬라이드 버튼
        $("span.direction").on("click",function(){
            itemIdx = document.querySelector(".web-publishing .project-list").children[2].dataset.itemIndex;
            if ($(this).hasClass("prev-left")) {
                $prevBtn();
                paginateActive();                
            } else if ($(this).hasClass("next-right")) {
                $nextBtn();
                paginateActive();
            }        
        });
        
        // 페이지 자동 액티브
        let itemIdx = document.querySelector(".web-publishing .project-list").children[2].dataset.itemIndex;
        function paginateActive() {
            itemIdx = document.querySelector(".web-publishing .project-list").children[2].dataset.itemIndex;
            $(".pagination-list li").siblings().removeClass("active");
            $(".pagination-list li").eq(itemIdx).addClass("active");
            $(".web-publishing").css("backgroundImage", `url(../images/publishing-${itemIdx}.png)`);
        }

        // 페이지네이션 버튼 이벤트
        $(".pagination-list li").on("click",function(){
            let pageIdx = $(this).index();
            let prevActive = document.querySelector(".pagination-list li.active").dataset.pageIndex;
            itemIdx = document.querySelector(".web-publishing .project-list").children[pageIdx].dataset.itemIndex;
            if(!$(this).hasClass("active")) {
                $(".pagination-list li").siblings().removeClass("active");
                $(".pagination-list li").eq(pageIdx).addClass("active");
                swipeItem(pageIdx, prevActive);
                $(".web-publishing").css("backgroundImage", `url(../images/publishing-${pageIdx}.png)`);
            } 
        });
    });

    let checkScrollLeft = 0;
    const designWheelListener = (event) => {
        event.preventDefault();
        designList.scrollLeft += event.deltaY;
        checkScrollLeft = designList.scrollLeft + event.deltaY;
        if (checkScrollLeft === designList.scrollLeft + event.deltaY) {
            designBox.querySelector(".slide-box").removeEventListener("wheel", designWheelListener);
            setTimeout(() => {
                designBox.querySelector(".slide-box").addEventListener("wheel", designWheelListener); // 가로 휠 추가
            }, 1000);
        }
        

    };
    designBox.querySelector(".slide-box").addEventListener("wheel", designWheelListener); // 가로 휠 추가

}; initPage();

const headerBar = document.querySelector('header');
const mainBottom = document.querySelector("main").getBoundingClientRect().bottom;
const profileBottom = document.querySelector("#profile").getBoundingClientRect().bottom;
const publishingBottom = document.querySelector("#web-publishing").getBoundingClientRect().bottom;
const designBottom = document.querySelector("#design").getBoundingClientRect().bottom;
const designList = designBox.querySelector(".project-list");
let prevScrollpos = 0;
let skillToggle = 0;

window.addEventListener('scroll', event => {
    event.preventDefault();
    const currentScrollPos = window.scrollY;
    if(prevScrollpos < currentScrollPos){
        headerBar.classList.add('hidden');
    }
    else{
        headerBar.classList.remove('hidden');
    }    
    if (!publishingBox.classList.contains("open")) {
        if (window.scrollY >= mainBottom - designBottom / 2 && skillToggle === 0) {
            skillLoading();
            skillToggle = 1;
        } else if (window.scrollY < mainBottom - designBottom / 2 && skillToggle === 1) {
            skillLoadRemove();
            skillToggle = 0;
            designBox.querySelector(".slide-box").addEventListener("wheel", designWheelListener); // 가로 휠 추가
        }
    }
    prevScrollpos = currentScrollPos;
});

let projectIdx;
publishingDetail = () =>{
    document.querySelector("aside").classList.add("detail-active"); // 디테일용 퀵메뉴 생성
    publishingBox.classList.add("open"); // 디테일 오픈 생성
    publishingBox.addEventListener("wheel", wheelListener); // 가로 휠 추가
    projectIdx = publishingBox.querySelector(".project-list").children[1].dataset.itemIndex;
    document.querySelector("header").style.display = "none";
    document.querySelector("#profile").style.display = "none";
    document.querySelector("#design").style.display = "none";
    document.querySelector("#skill").style.display = "none";
    openPublishing(projectIdx);
    enterProject = () => {
        const link = [
            "ROOM-3D",            
            "BNSYSTEM",
            "SINGLETOGETHER",
            "PINTJOB",
        ];
        window.location.href="https://endurenova.github.io/PUBLISHING/" + link[projectIdx];
    };
};


recoveryHome = () => {    
    document.querySelector("aside").classList.remove("detail-active"); // 퀵메뉴 원상복구
    publishingBox.classList.remove("open"); // 디테일 오픈 제거
    publishingBox.removeEventListener("wheel", wheelListener); // 가로 휠 제거    
    document.querySelector("header").style.display = "unset";
    document.querySelector("#profile").style.display = "flex";
    document.querySelector("#design").style.display = "flex";
    document.querySelector("#skill").style.display = "flex";
    publishingBox.style.cssText = `background-image: ../images/publishing-${projectIdx}.png;` // 퍼블리싱 백그라운드 패턴 원상복구
    initPage();
    window.scrollTo(0, publishingBox.getBoundingClientRect().top);  // 퍼블리싱 섹션 위치로 이동
};
