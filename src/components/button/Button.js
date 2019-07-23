import React, {Component} from 'react';
import Switch from 'react-switch';
import Chance from 'chance';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        const chance = new Chance(Math.random);
        this.state = {
            firstName: chance.first(),
            lastName: chance.last(),
            country: chance.country({full: true}),
            checked: true,
            toast: false,
            module: null,
            title: 'Click!'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({checked});
    }

    handleToast(toast) {
        this.setState({toast});
    }

    toastAlert() {
        const myPromise = new Promise((resolve, reject) => {
            if (import('../toast/Toast.js')) {
                console.log('resolving the promise ...');
                resolve('Hello, Promises!');
                if(this.state.toast) {
                    console.log(import('../toast/Toast.js'));
                }
            }
            reject(new Error('In 10% of the cases, I fail. Miserably.'));
        });

        // Two functions
        const onResolved = (resolvedValue) => console.log(resolvedValue);
        const onRejected = (error) => console.log(error);

        myPromise.then(onResolved, onRejected);

        // Same as above, written concisely
        myPromise.then((resolvedValue) => {
            console.log(resolvedValue);
            console.log(this.state.module);
        }, (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div>
                    <p><code>Hello {this.state.firstName} {this.state.lastName}, you're from {this.state.country}.</code></p>
                    <button className={"button"} onClick={() => {
                        if(this.state.checked) {
                            import('../toast/Toast.js').then(Toast => {
                                this.handleToast(true);
                                Toast.success();
                            });
                        }
                        else if(this.state.toast) {
                            import('../toast/Toast.js').then(Toast => {
                                Toast.warning();
                            });
                        }
                        else {
                            alert("Toast Notifications are Off");
                        }
                    }}>{this.state.title}</button>
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