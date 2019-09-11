import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue=(e)=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back=(e)=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { value, myChange }= this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter Personal Details'/>
                    <TextField
                    hintText='Enter Your Occupation'
                    floatingLabelText='Occupation'
                    onChange={myChange('occupation')}
                    defaultValue={value.occupation}
                    />
                    <br />
                    <TextField
                    hintText='Enter Your City'
                    floatingLabelText='City'
                    onChange={myChange('city')}
                    defaultValue={value.city}
                    />
                    <br />
                    <TextField
                    hintText='Enter Your Hobbies'
                    floatingLabelText='Hobbies'
                    onChange={myChange('hobbies')}
                    defaultValue={value.hobbies}
                    />
                    <br />
                    <TextField
                    hintText='Enter Your Bio '
                    floatingLabelText='Bio'
                    onChange={myChange('bio')}
                    defaultValue={value.bio}
                    />
                    <br />
                    <RaisedButton
                        label='Continue'
                        primary={true}
                        style={StyleSheet.button} 
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label='Back'
                        primary={false}
                        style={StyleSheet.button} 
                        onClick={this.back}
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

export default FormPersonalDetails
