import * as React from 'react';

export default class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {stylePath: 'dark.css'};
    }

    handleButtonClick(){
        this.setState({stylePath: 'light.css'});
    }

    render(){
        return (
            <div>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
                <button type="button" onClick={this.handleButtonClick.bind(this)}>Click to update stylesheet</button>
            </div>
        )
    }
};