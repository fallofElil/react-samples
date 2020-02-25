import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ModalEdit.css';

class ModalEdit extends Component {
    constructor(props) {
        super(props);
    }

    PropTypes = {
        user: PropTypes.object
    }

    render() {
        return (
            <section className="modal_overlay">
                <article className="modal_window">
                    <header className="modal_header">
                        <h3>Редактирование строки</h3>
                        <button type="button" className="btn btn-primary">&times;</button>
                    </header>
                    <section className="modal_content">
                        <p style={{ margin: 0 }}>some text content to show...</p>
                    </section>
                </article>
            </section>
        )
    }
}

export default ModalEdit;