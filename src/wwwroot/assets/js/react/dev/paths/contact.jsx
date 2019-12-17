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
                    <ul>
                        <li>Employment opportunities: <a href="mailto:jobs@kieranemiller.com">jobs@kieranemiller.com</a></li>
                        <li>LinkedIn: <a href="https://linkedin.com/KieranEMiller">https://linkedin.com/KieranEMiller</a></li>
                    </ul>
                </div>
            </ContentContainer>
        );
    }
}

export default Contact;