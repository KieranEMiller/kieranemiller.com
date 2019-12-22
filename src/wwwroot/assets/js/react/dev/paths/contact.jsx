import React from 'react';
import ReactDOM from 'react-dom';

import BaseComponent from './base_component.jsx';
import ContentContainer from '../content.jsx';

class Contact extends BaseComponent {
    render() {
        return (
            <ContentContainer>
                <div className="content_row">
                    <h2>Contact</h2>
                    <p>How to contact me:</p>
                    <br/>
                    <ul>
                        <li><label>Employment Opportunities:</label><a href="mailto:jobs@kieranemiller.com">jobs@kieranemiller.com</a></li>
                        <li><label>LinkedIn: </label><a href="https://linkedin.com/in/KieranEMiller">https://linkedin.com/in/KieranEMiller</a></li>
                    </ul>
                </div>
            </ContentContainer>
        );
    }
}

export default Contact;