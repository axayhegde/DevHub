import React, {Component} from 'react';
import Linkslist from "./Linkslist";
import CreateLinkForm from './CreateLinkForm'

class Links extends Component {


    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    "link": "www.facebook.com",
                    "tags": [ "whatAreYouDoingInLife", "socialMedia"],
                    "deferBy": ""
                }, {
                    "link": "www.github.com",
                    "tags": [ "coding", "stuff"],
                    "deferBy": ""
                }, {
                    "link": "www.wanker.com",
                    "tags": [ "australian", "dontPervOnMe"],
                    "deferBy": ""
                }, {
                    "link": "www.youneedjesus.com",
                    "tags": [ "youKnowWhatItIs", "yeahThatThing"],
                    "deferBy": ""
                }]
        };


    };

    handler = (links) =>  {
        // console.log(updatedLinks)

        this.setState(() => {
            // console.log(updatedLinks);
            return {data: [...this.state.data, links]}
        })

    };




    render() {
        return (
            <div>
                <Linkslist linkdata={this.state.data} /><br/><br/>
                <CreateLinkForm linkdata={this.state.data} handler={this.handler}/>
            </div>
        );
    }


}

export default Links;