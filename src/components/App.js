import React, {Component} from 'react';
import Me from "./home/Me"
import Wrapper from './global/Wrapper';
import Linkslist from "./linkscomponent/Linkslist";
import Links from "./linkscomponent/Links";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                firstName: 'loading...'
            }
        };
    }

    componentDidMount() {
        window.API().then((data) => {
            console.log('got data', data);
            this.setState(() => ({
                data: data
            }))
        });
    }

    render() {
        return (
            <Wrapper>
                {/*<Me userDetails={this.state.data}/>*/}
                <Links />
            </Wrapper>
        );
    }
}

export default App;