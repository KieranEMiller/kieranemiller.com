import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import BaseComponent from './base_component.jsx';
import ContentContainer from '../content.jsx';
import { Routes } from '../constants.jsx';

class Index extends BaseComponent {

    navTo(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <ContentContainer>
                <div className="content_row">
                    <h2><Link href={Routes.INDEX}>Welcome</Link></h2>
                    <p>This site serves as the web presence and portfolio for Kieran E. Miller.</p>
                    <div className="clear_both"></div>
                </div>

                <div className="content_row">
                    <h2><Link to={Routes.PROJECTS}>Projects</Link></h2>
                    <p>Check out some of my <Link to={Routes.PROJECTS}>Projects</Link>; 
                    source is available on <a target="_blank" href="https://github.com/KieranEMiller">GitHub</a> at <a href="https://github.com/KieranEMiller">https://github.com/KieranEMiller</a>
                   </p>
                </div>

                <div className="content_row">
                    <h2><Link href={Routes.CONTACT}>Contact</Link></h2>
                    Contact me through any of the mediums <Link href={Routes.CONTACT}>shown here.</Link>
                    
                </div>
            </ContentContainer>
        );
    }
}

export default Index;