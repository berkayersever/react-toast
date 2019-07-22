import React from 'react';
import Chance from 'chance';

class Button extends React.Component {
    buttonClicked() {
        console.log('Button was clicked!')
    }

    render() {
        const chance = new Chance(Math.random);
        return (<div>
            <p>Hello, {chance.first()}.</p>
            <p>You're from {chance.country({ full: true })}.</p>
            <button onClick={this.buttonClicked}>Meet Someone New</button>
        </div>);
    }
}

export default Button;