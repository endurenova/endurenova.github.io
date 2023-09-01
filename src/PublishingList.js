
function PublishingList() {
    const projectProps = [
        [
            'PINTJOB',
            './images/project-singletogether-main.png',
            'HTML　CSS　JavaScript　jQuery　Photoshop　Illustrator',
        ],
        ['BNSYSTEM', './images/project-bnsystem-main.png', 'HTML　CSS　JavaScript　Photoshop'],
        [
            'SINGLETOGETHER',
            './images/project-singletogether-main.png',
            'HTML　CSS　JavaScript　jQuery　Photoshop　Illustrator',
        ],
    ];
    return (
        <ul className="project-list">
            {projectProps.map((project, index) => (
                <li key={index}>
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
                    <div className="project-item">
                        <span>
                            <img src={project[1]} alt="" />
                        </span>
                        <span>
                            <h3>{project[0]}</h3>
                            <p>{project[2]}</p>
                        </span>
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
            ))}
        </ul>
    );
}
export default PublishingList;