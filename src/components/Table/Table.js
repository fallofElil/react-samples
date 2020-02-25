import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

import ModalEdit from '../ModalEdit/ModalEdit';

class Table extends Component {
    constructor(props) {
        super(props);
        this.onModalCall = this.onModalCall.bind(this);
    }

    PropTypes = {
        users: PropTypes.object
    }

    onModalCall(user) {
        console.log(`User id: ${user.id} | user name: ${user.name}`);
        return (<ModalEdit user={user}/>)
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
                    <td><button type="button" className="btn btn-primary" onClick={() => this.onModalCall(user)}>edit</button></td>
                </tr>
            )
        })
    }

    componentDidMount() {
        console.log('Table component did mount');
    }

    componentWillUnmount() {
        console.log('Table component will unmount');
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