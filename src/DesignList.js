function DesignList() {
    const projectProps = [
        ['CALENDAR', './images/design-calendar.png', 'Photoshop　Illustrator'],
        ['OVERTONES', './images/design-overtones-main.png', 'Figma'],
        ['DOTORISUP', './images/design-dotorisup-main.png', 'Figma'],
        [
            'Totoro',
            './images/design-totoro.png',
            'HTML　CSS　JavaScript　jQuery',
        ],
        ['HANATOUR', './images/design-hanatour-main.png', 'Photoshop'],
        ['LEQUIPSHOP', './images/design-lequipshop-main.png', 'Photoshop'],
    ];
    return (
        <ul className="project-list">
            {projectProps.map((project, index) => (
                <li key={index}>
                    <div className="project-item">
                        <span>
                            <h3>{project[0]}</h3>
                            <p>{project[2]}</p>
                        </span>
                        <span>
                            <img src={project[1]} alt="" />
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}
export default DesignList;
