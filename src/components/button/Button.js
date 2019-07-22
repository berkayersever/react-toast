import React, {Component} from 'react';
import Switch from 'react-switch';
import Chance from 'chance';

class Button extends Component {
    constructor(props) {
        super(props);
        const chance = new Chance(Math.random);
        this.state = {
            firstName: chance.first(),
            lastName: chance.last(),
            country: chance.country({full: true}),
            checked: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({checked});
    }

    render() {
        return (
            <div>
                <div>
                    <p><code>Hello {this.state.firstName}, you're from {this.state.country}.</code></p>
                    <button onClick={() => {
                        if(this.state.checked) {
                            import('../toast/Toast.js').then(module => {});
                        }
                        else {
                            alert("Toast Notifications are Off");
                        }
                    }}>Wanna Try
                    </button>
                    {this.state.showComponent ? <div>Hello</div> : null}
                </div>
                <div>
                    <label>
                        <span><code>Toast Notifications are {this.state.checked ? "On " : "Off "}</code></span>
                        <Switch onChange={this.handleChange} checked={this.state.checked}/>
                    </label>
                </div>
            </div>)
    }
}

export default Button;