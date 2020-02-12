import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    renderTableData() {
        return this.state.users.map((user, index) => {
            const { id, name, age, email } = student;
            return (
                <tr key={id} scope="row">
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
        )
    }
}