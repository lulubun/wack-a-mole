import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Icon from './Icon';
import './App.css';

 const generateNumber = () => {  
        return Math.floor(Math.random() * (5 - 1) + 1); 
    }


class MoleGroup extends Component {
    state = {
        pop: generateNumber(),
        lastPopped: null,
        x: null,
    };

   

    handleChange = (event) => {
        if (event.target.value == this.state.pop.toString()) {
            let newPop = generateNumber();
            if (newPop === this.state.lastPopped) {
                newPop = newPop + 1;
            }
            this.setState({ pop: newPop, x: null, lastPopped: this.state.pop })
            this.props.scorePoint();
        } else {
            this.setState({x: event.target.value})
        }
    };

    randomButton = (val) => {
        if (((val === this.state.pop) || !this.props.playing )) { return <Radio icon={<Icon size={50} type="mole" />} /> };
        if (val == this.state.x) { return <Radio style={{color: 'red'}} /> };
         return <Radio />;
    };

    render(){
       return (
            <FormControl component="fieldset">
                <RadioGroup row aria-label="moles" name="moles1" value={this.state.lastPopped} onChange={this.handleChange} className="mole-group">
                    <FormControlLabel value="1" control={this.randomButton(1)} />
                    <FormControlLabel value="2" control={this.randomButton(2)} />
                    <FormControlLabel value="3" control={this.randomButton(3)} />
                    <FormControlLabel value="4" control={this.randomButton(4)} />
                    <FormControlLabel value="5" control={this.randomButton(5)} />
                </RadioGroup>
            </FormControl>
        )
    };
}

export default MoleGroup