import React from 'react';
import ReactDOM from 'react-dom';

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
                    <h2>Welcome</h2>
                    <p>This site serves as the web presence and portfolio for Kieran E. Miller.</p>
                    <div className="clear_both"></div>
                </div>

                <div className="content_row">
                    <h2>Projects</h2>
                    <p>Check out some of my projects, src available on <a target="_blank" href="https://github.com/KieranEMiller">GitHub.</a>
                   </p>
                    <input className="button-size-medium" type="button"
                        value="Login to Your Account"
                        onClick={() => this.navTo(Routes.LOGIN)}
                    />
                </div>

                <div className="content_row">
                    <h2>Contact</h2>
                    
                </div>
            </ContentContainer>
        );
    }
}

export default Index;