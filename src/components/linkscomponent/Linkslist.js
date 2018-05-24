import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkListData from './LinkListData'


class Linkslist extends Component {

    constructor(props){
        super(props);


    };

    render(){

        return (
            <div class="border border-primary rounded mx-auto">

                {this.props.linkdata.map((data) => {return (
                        <LinkListData linkdata = {data}/>
                )
                    })
                }
                <p>Green = Done</p>
                <p>White and Time = 0 = No Time specified</p>
                <p>Red = Expired</p>
                <p>Orange = Expires in 5 mins</p>

            </div>

        )
    }
}


export default Linkslist;