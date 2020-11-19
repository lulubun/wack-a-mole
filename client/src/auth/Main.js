import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

 const generateNumber = () => {  
        return Math.floor(Math.random() * (5 - 1) + 1); 
    }


class SignIn extends Component {
    state = {
        user: null,
        pw: null,
    };

    render(){
       return (
           <div style={{display: 'flex', flexDirection: 'column', maxWidth: 200, width: '50vw', 'align-items': 'center'}}>
                <TextField id="standard-basic" label="Name" />
                <TextField id="standard-basic" label="Password" />
            </div>
        )
    };
}

export default SignIn