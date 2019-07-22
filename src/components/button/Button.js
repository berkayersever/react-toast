import React, { Component } from 'react';
import Switch from 'react-switch';
import Chance from 'chance';

class Button extends Component {
    constructor(props){
        super(props);
        const chance = new Chance(Math.random);
        this.state = {
            firstName: chance.first(),
            lastName: chance.last(),
            country: chance.country({ full: true }),
            checked: true
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleOnClick = this.handleOnClick.bind(this);
        // console.log(JSON.stringify(this))
    }

    handleOnClick(color){
        if(color === "#A4D87C") {
            alert(this.state.firstName);
            // const someSpecialData = 'Clicked!';
            // const MyButton = ({ onClick }) => (
            //     <button onClick={() => onClick({ someSpecialData })}>
            //         Click Me
            //     </button>
            // );
        }
        else if(color === "#FD8F83") {
            alert("BAZINGA " + this.state.firstName.toUpperCase() + "!");
        }
    }

    buttonClicked() {
        console.log('Button was clicked!');
        alert(this.state.firstName);
    };

    handleChange(checked) {
        this.setState({ checked });
    }

    // handleChange = () => {
    //     this.setState({
    //         showComponent: !this.state.showComponent,
    //     });
    // };

    render() {
        return (<div>
            <p>Hello, {this.state.firstName}.</p>
            <p>You're from {this.state.country}.</p>
            <p>Toast Notifications are {this.state.toast ? "On" : "Off"}</p>
            <button onClick={() => {this.handleOnClick("#FD8F83")}}>Meet Someone New</button>
            {/*<label>*/}
                {/*<input*/}
                    {/*type="radio"*/}
                    {/*name="a"*/}
                    {/*onChange={this.handleChange}*/}
                    {/*checked={this.state.checked}*/}
                {/*/>{" "}*/}
                {/*Show{" "}*/}
            {/*</label>*/}
            {/*<label>*/}
                {/*<input*/}
                    {/*type="radio"*/}
                    {/*name="a"*/}
                    {/*onChange={this.handleChange}*/}
                    {/*checked={!this.state.checked}*/}
                {/*/>{" "}*/}
                {/*Hide{" "}*/}
            {/*</label>*/}
            {this.state.showComponent ? <div>Hello</div> : null}
            <label>
                <span>Switch with default style</span>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </label>
            {/*<input type='radio' name='a' onChange={this.handleChange} checked={!this.state.showComponent}/>*/}
            {/*<input type='radio' name='a' onChange={this.handleChange} checked={this.state.showComponent}/>*/}
        </div>)
    }
}

export default Button;