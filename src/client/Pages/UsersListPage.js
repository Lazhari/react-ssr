import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>Users List Application</title>
                    <meta
                        property="og:title"
                        content="Users List Application"
                    />
                </Helmet>
                <h2>Here's a big list of users</h2>
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(
        mapStateToProps,
        { fetchUsers }
    )(UsersListPage),
};
