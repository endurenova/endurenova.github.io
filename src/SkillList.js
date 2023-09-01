function SkillList() {
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
    return (
        <ul className="skill-list">
            {badgeList.map((badge, index) => (
                <li key={index}>
                    <img className="skill-badge" src={badge} alt=''/>
                    <span className="skill-level">
                        <span className="skill-level__progress"></span>
                    </span>
                    <span className="skill-percent">
                        <span className="skill-percent__binder"></span>
                    </span>
                </li>
            ))}
        </ul>
    );
}
export default SkillList;
