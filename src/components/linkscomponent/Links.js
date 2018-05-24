import React, {Component} from 'react';
import Linkslist from "./Linkslist";
import CreateLinkForm from './CreateLinkForm'
import 'bootstrap/dist/css/bootstrap.min.css';

class Links extends Component {


    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    "link": "www.facebook.com",
                    "tags": [ "whatAreYouDoingInLife", "socialMedia"],
                    "deferBy": "1527094119447",
                    "status": "Done"
                }, {
                    "link": "www.github.com",
                    "tags": [ "coding", "stuff"],
                    "deferBy": "1527384119447",
                    "status": "Not Done"
                }, {
                    "link": "www.wanker.com",
                    "tags": [ "australian", "dontPervOnMe"],
                    "deferBy": "1527284119447",
                    "status": "Expired"
                }, {
                    "link": "www.youneedjesus.com",
                    "tags": [ "youKnowWhatItIs", "yeahThatThing"],
                    "deferBy": "",
                    "status":""
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
            <div class="container">
                <Linkslist linkdata={this.state.data} /><br/><br/>
                <CreateLinkForm linkdata={this.state.data} OnNewLinkAdded={this.handler}/>
            </div>
        );
    }


}

export default Links;