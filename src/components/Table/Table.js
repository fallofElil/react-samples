import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends Component {
    PropTypes = {
        users: PropTypes.object
    }

    renderTableHeader() {
        let header = Object.keys(this.props.users[0]);
        header.push('action');
        return (header.map((key, index) => {
            return <th key={index} scope="col">{key.toUpperCase()}</th>
        }));
    }

    renderTableData() {
        return this.props.users.map((user, index) => {
            const { id, name, age, email } = user;
            return (
                <tr key={index} scope="row">
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td><button type="button" class="btn btn-primary">edit</button></td>
                </tr>
            )
        })
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="table-wrapper container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default Table;