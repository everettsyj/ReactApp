import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Axios from 'axios';

export default class User extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentWillMount(){
        let $this = this;
    
        Axios.get('/api/user').then(response => {
            $this.setState({
                data: response.data
            })
        }).catch(error =>{
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.data.map((user,i)=>(
                        <tr>
                            <td>{ user.id }</td>
                            <td>{ user.name }</td>
                            <td>{ user.email }</td>
                            <td>
                                <a href="" className="btn btn-primary">Edit</a>
                                <a href="" className="btn btn-danger">Delete</a>
                            </td>
                        </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<User />, document.getElementById('app'));
