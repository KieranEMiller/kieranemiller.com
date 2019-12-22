import React from 'react';
import ReactDOM from 'react-dom';

import BaseComponent from './base_component.jsx';
import ContentContainer from '../content.jsx';

class About extends BaseComponent {
    render() {
        return (
            <ContentContainer>
                <div className="content_row">
                    <h2>About</h2>
                    <p>This site serves as the web presence and portfolio for Kieran E. Miller.  I am a software engineer working in the NJ/NYC metro area.</p>
                </div>

                <div className="content_row">
                    <h2>Resume/CV</h2>
                    <p>Is <a target="blank" href="/assets/resume/Resume_KieranEMiller_20191127_web.pdf">available here.</a></p>
                </div>

                <div className="content_row">
                    <h2>This Site</h2>
                    <p>Built with React and static content running on AWS.</p>
                </div>
            </ContentContainer>
        );
    }
}

export default About;