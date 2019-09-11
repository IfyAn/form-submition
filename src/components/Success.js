import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    continue=(e)=>{
        e.preventDefault();
        //Process Form
        this.props.nextStep();
    }
    back=(e)=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
              return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Success' />
                        <h1>Thanks For Your Submission</h1>
                        <p>You will Get an email with further instruction</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
