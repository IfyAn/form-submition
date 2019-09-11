import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state={
        step: 1,
        firstName: ' ',
        lastName: ' ',
        occupation: ' ',
        email: ' ',
        city: ' ',
        hobby: ' ',
        bio: ' '
    }

    //Proceed to next step
    nextStep=()=>{
        const { step }=this.state;
        this.setState({
            step:step + 1
        })
    }
    //Previous step
    prevStep=()=>{
        const { step }=this.state;
        this.setState({
            step:step - 1
        })
    }

    //Handle Fields Change
    myChange=input=>e=>{
        this.setState({[input]:e.target.value});
    }
    render() {
        const { step }=this.state;
        const { firstName, lastName, occupation, email, city, hobbies, bio }=this.state;
        const value = { firstName, lastName, occupation, email, city, hobbies, bio }
       switch(step){
        case 1:
        return(
            <FormUserDetails 
            nextStep={this.nextStep}
            myChange={this.myChange}
            value={value}
            />
        )
        case 2:
                return(
                    <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    myChange={this.myChange}
                    value={value}
                    />
                )
        case 3:
                return(
                    <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    value={value}
                    />
                )
        case 4:
            return <Success
             />
       }
    }
}

export default UserForm
