import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Here is another component in a componenet(this is a functional component)
const Entry = props => (
    <tr>
        <td> {props.entry.username} </td>
        <td> {props.entry.task} </td>
        <td> {props.entry.priority} </td>
        <td> {props.entry.date.substring(0,10)} </td>
        <td>
            <Link to={"/edit/"+props.entry._id}>edit</Link> | <button onClick={() => { props.deleteEntry(props.entry._id) }}>delete</button>
        </td>

    </tr>
)


//class component
export default class EntriesList extends Component {
    constructor(props) {
        super(props);

        this.deleteEntry = this.deleteEntry.bind(this);

        this.state = {entries: []};        
    }

    componentDidMount() {
        axios.get('http://localhost:4500/entries/')
            .then(res => {
                this.setState({ entries: res.data })
            })
            .catch(err =>  console.log(err));
       
    }

    deleteEntry(id) {
        axios.delete('http://localhost:4500/entries/'+id)
            .then(res => console.log(res.data));

        this.setState({
            entries: this.state.entries.filter(el => el._id !== id)
        })
    }

    entryList() {
        return this.state.entries.map(currententry => {
            return <Entry entry={currententry} deleteEntry={this.deleteEntry} key={currententry._id} />
        })
    }
    render(){
        return (
            <div>
                <h3>Logged Entry</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Task</th>
                            <th>Priority</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.entryList() }
                    </tbody>
                </table>
            </div>

        )
    }
}
