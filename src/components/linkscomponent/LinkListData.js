import React, {Component} from 'react';

class LinkedListData extends Component {

    constructor(props) {
        super(props);

    };

    render() {
        let myColor;
        let deferByTime = this.props.linkdata.deferBy;
        let milliseconds = (new Date).getTime();
        let timeLeft;

        let timeFrom = parseInt(deferByTime) - milliseconds;

        let minutesFrom = Math.floor(timeFrom / (1000 * 60 ));

        if(this.props.linkdata.status == "Done" || this.props.linkdata.status === ""){
            myColor = "#1aff1a";
            timeLeft = 0;
        }else{

            if(minutesFrom > 0){
                timeLeft = Math.abs(minutesFrom);
            }
            if(minutesFrom > 0 && Math.abs(minutesFrom) < 5){
                timeLeft = Math.abs(minutesFrom);
                myColor = "orange";
            }else if(minutesFrom > 0 && Math.abs(minutesFrom) > 5){
                myColor = "white";
            }
        }
        if(this.props.linkdata.status === "Expired"){
            myColor = "red";
        }


        let divStyle = {
            backgroundColor: myColor,
            mx:10
        };



        return (
            <div>
                <div style={divStyle}>
                    <a href={this.props.linkdata.link}>{this.props.linkdata.link}</a>
                    <p>Minutes Left : {timeLeft}</p>
                    <button class="btn">Done</button>
                </div>

            </div>

        )
    }
}

export default LinkedListData