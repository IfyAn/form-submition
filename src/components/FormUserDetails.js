import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue=(e)=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { value, myChange }= this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter User Details'/>
                    <TextField
                    hintText='Enter Your First Name'
                    floatingLabelText='First Name'
                    onChange={myChange('firstName')}
                    defaultValue={value.firstName}
                    />
                    <br />
                    <TextField
                    hintText='Enter Your Last Name'
                    floatingLabelText='Last Name'
                    onChange={myChange('lastName')}
                    defaultValue={value.lastName}
                    />
                    <br />
                    <TextField
                    hintText='Enter Your Email '
                    floatingLabelText='Email'
                    onChange={myChange('email')}
                    defaultValue={value.email}
                    />
                    <br />
                    <RaisedButton
                        label='Continue'
                        primary={true}
                        style={StyleSheet.button} 
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles={
    button:{
        margin: 15
    }
}

export default FormUserDetails
