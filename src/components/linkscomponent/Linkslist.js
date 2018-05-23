import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Linkslist extends Component {

    constructor(props){
        super(props);


    };



    render(){

        return (
            <div>


                {this.props.linkdata.map((data) => {return (
                    <div class="jumbotron">
                        <a href={data.link}>{data.link}</a><button >Done</button>
                    </div>
                )
                    })
                }
            </div>

        )
    }
}


export default Linkslist;