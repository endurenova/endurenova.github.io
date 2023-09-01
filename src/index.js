import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfileList from './ProfileList';
import PublishingList from './PublishingList';
import DesignList from './DesignList';
import SkillList from './SkillList';

const profileBox = ReactDOM.createRoot(
    document.querySelector('.profile .article-box'),
);
const publishingBox = ReactDOM.createRoot(
    document.querySelector('.web-publishing .slide-box'),
);
const designBox = ReactDOM.createRoot(
    document.querySelector('.design .slide-box'),
);
const skillBox = ReactDOM.createRoot(
    document.querySelector('.skill .skill-box'),
);

profileBox.render(<ProfileList />);
publishingBox.render(<PublishingList />);
designBox.render(<DesignList />);
skillBox.render(<SkillList />);
