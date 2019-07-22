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
        // this.handleOnClick = this.handleOnClick.bind(this);
        // console.log(JSON.stringify(this))
    }

    handleOnClick(color) {
        if (color === "#A4D87C") {
            alert(this.state.firstName);
            // const someSpecialData = 'Clicked!';
            // const MyButton = ({ onClick }) => (
            //     <button onClick={() => onClick({ someSpecialData })}>
            //         Click Me
            //     </button>
            // );
        }
        else if (color === "#FD8F83") {
            alert("BAZINGA " + this.state.firstName.toUpperCase() + "!");
        }
    }

    buttonClicked() {
        console.log('Button was clicked!');
        alert(this.state.firstName);
    };

    handleChange(checked) {
        this.setState({checked});
    }

    // handleChange = () => {
    //     this.setState({
    //         showComponent: !this.state.showComponent,
    //     });
    // };

    render() {
        return (
            <div>
                <div>
                    <p>Hello, {this.state.firstName}.</p>
                    <p>You're from {this.state.country}.</p>
                    {/*<p>Toast Notifications are {this.state.checked ? "On" : "Off"}</p>*/}
                    <button onClick={() => {
                        if(this.state.checked) {
                            import('../toast/Toast.js').then(module => {});
                        }
                        else {
                            alert("BAZINGA " + this.state.firstName.toUpperCase() + "!");
                        }
                        this.handleOnClick("#FD8F83")
                    }}>Wanna Try
                    </button>
                    {this.state.showComponent ? <div>Hello</div> : null}
                </div>
                <div>
                    <label>
                        <span>Toast Notifications are {this.state.checked ? "On " : "Off "}</span>
                        <Switch onChange={this.handleChange} checked={this.state.checked}/>
                    </label>
                </div>
            </div>)
    }
}

export default Button;