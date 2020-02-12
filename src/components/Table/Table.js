import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends Component {
    PropTypes = {
        users: PropTypes.object
    }

    renderTableHeader() {
        let header = Object.keys(this.props.users[0]);
        return header.map((key, index) => {
        return <th key={index} scope="col">{key.toUpperCase()}</th>
        })
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
                </tr>
            )
        })
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table table-dark table-dynamic">
                <thead>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
        )
    }
}

export default Table;