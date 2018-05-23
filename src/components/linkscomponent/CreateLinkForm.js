import React, {Component} from 'react';

class CreateLinkForm extends Component {


    constructor(props) {
        super(props);


        this.state = {
            link: '',
            tags: '',
            defertime: ''
        }
    };


    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    handleOnSubmit = (e) => {
       e.preventDefault();
       console.log(this.props.linkdata);

        this.props.handler(this.state);
    } ;

    render() {

        return (
            <div>
                <form>
                    <input type="text" name="link" value={this.state.link} placeholder="link" onChange={event => this.handleInputChange(event)}/><br/>
                    <input type="text" name="tags" value={this.state.tags} placeholder="tags" onChange={event => this.handleInputChange(event)}/><br/>
                    <input type="text" name="defertime" value={this.state.defertime} placeholder="defer time" onChange={event => this.handleInputChange(event)}/><br/>
                    <button value="submit" onClick={event => this.handleOnSubmit(event)}>create</button>
                </form>
            </div>
        )
    }


}

export default CreateLinkForm;