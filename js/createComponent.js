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
createPublishing = () => {
    const publishingBox = document.querySelector('.web-publishing .slide-box');
    const publishingProject = [
        {
            title:'BNSYSTEM',
            imgSrc: './images/project-bnsystem-main.png',
            tool:'HTML　CSS　JavaScript　Photoshop'
        },
        {
            title: 'SINGLETOGETHER',
            imgSrc: './images/project-singletogether-main.png',
            tool: 'HTML　CSS　JavaScript　jQuery　Photoshop　Illustrator',
        },
        {
            title: 'PINTJOB',
            imgSrc: './images/project-pintjob-main.png',
            tool: 'HTML　CSS　JavaScript　jQuery　Photoshop　Illustrator',
        },
    ];
    let publishing = '';
    publishingProject.forEach((pub, idx) => {
        publishing += `
            <li class="project-film" data-item-index="${idx}">
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
                        <img src=${pub.imgSrc} alt="" />
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
    });
    publishingBox.insertAdjacentHTML('afterbegin', `<ul class="project-list">${publishing}</ul>`);
};
createDesign = () => {
    const designBox = document.querySelector('.design .slide-box');
    const designProject =[
            {
                title: 'CALENDAR',
                imgSrc: './images/design-calendar.png', 
                tool: 'Photoshop　Illustrator'
            },
            {
                title: 'OVERTONES',
                imgSrc: './images/design-overtones-main.png', 
                tool: 'Figma'
            },
            {
                title: 'DOTORISUP',
                imgSrc: './images/design-dotorisup-main.png', 
                tool: 'Figma'
            },
            {
                title: 'Totoro',
                imgSrc: './images/design-totoro.png', 
                tool: 'HTML　CSS　JavaScript　jQuery'
            },
            {
                title: 'HANATOUR',
                imgSrc: './images/design-hanatour-main.png', 
                tool: 'Photoshop'
            },
            {
                title: 'LEQUIPSHOP',
                imgSrc: './images/design-lequipshop-main.png', 
                tool: 'Photoshop'
            }
    ];
    let design = '';
    designProject.forEach((deg) => {
        design += `
            <li>
                <div class="project-item">
                    <div>
                        <h3>${deg.title}</h3>
                        <p>${deg.tool}</p>
                    </div>
                    <div>
                        <img src=${deg.imgSrc} alt="" />
                    </div>
                </div>
            </li>
        `;
    });
    designBox.insertAdjacentHTML('afterbegin', `<ul id="drag-element" class="project-list">${design}</ul>`);
};
createSkill = () => {
    const skillBox = document.querySelector('.skill .skill-box');
    const badgeList = [
        'https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white',
        'https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white',
        'https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white',
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white',
        'https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white',
        'https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white',
        'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white',
        'https://img.shields.io/badge/Photoshop-31A8FF?style=flat&logo=adobephotoshop&logoColor=white',
        'https://img.shields.io/badge/Illustrator-FF9A00?style=flat&logo=adobeillustrator&logoColor=white',
        'https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white',
    ];
    let badges = '';
    badgeList.forEach((badge) => {
        badges += `
            <li>
                <img class="skill-badge" src=${badge} alt="" />
                <span class="skill-level">
                    <span class="skill-level__progress"></span>
                </span>
                <span class="skill-percent">
                    <span class="skill-percent__binder"></span>
                </span>
            </li>
        `;
    });
    skillBox.insertAdjacentHTML('afterbegin', `<ol class="skill-list">${badges}</ol>`);
};

createProfile();
createPublishing();
createDesign();
createSkill();
