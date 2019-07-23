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
            module: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({checked});
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

        // if(this.state.toast) {
        //     console.log(import('../toast/Toast.js'));
        //     const Toast = Swal.mixin({
        //         toast: true,
        //         position: 'top-end',
        //         showConfirmButton: false,
        //         timer: 3000
        //     }).then(module => {})
        //
        //     Toast.fire({
        //         type: 'success',
        //         title: 'Signed in successfully'
        //     })
        // }
    }

    render() {
        return (
            <div>
                <div>
                    <p><code>Hello {this.state.firstName} {this.state.lastName}, you're from {this.state.country}.</code></p>
                    <button className={"button"} onClick={() => {
                        if(this.state.checked) {
                            import('../toast/Toast.js').then(Toast => {
                                Toast.success();
                            });
                        }
                        else {
                            alert("Toast Notifications are Off");
                            // Toast.error();
                        }
                    }}>Toast!</button>
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