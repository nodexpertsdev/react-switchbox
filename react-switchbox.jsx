// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See react-switchbox-tests.js for an example of importing.
export const name = 'react-switchbox';

import React, { Component } from 'react';

// import './style.css';

export default class SwitchBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leftBox: this.props.leftBox || [],
      rightBox: this.props.rightBox || [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      leftBox: nextProps.leftBox,
      rightBox: nextProps.rightBox,
    });
  }


  handleRightButton = () => {
    const leftBox = this.state.leftBox;
    const rightBox = this.state.rightBox;
    const tempObjArray = [];
    const tempValue = [];

    leftBox.map((value, index) => {
      const name = `leftoption${index}`;
      if (this[name].selected) {
        const tempObj = {
          value: this[name].value,
          label: this[name].label,
        };
        tempValue.push(this[name].value);
        tempObjArray.push(tempObj);
        this[name].selected = false;
      }
    });

    const tempLeftBox = leftBox.filter((value) => {
      return tempValue.indexOf(value.value) === -1;
    });

    const tempRightBox = rightBox.concat(tempObjArray);

    this.setState({
      leftBox: tempLeftBox,
      rightBox: tempRightBox,
    });
  }

  handleLeftButton = () => {
    const leftBox = this.state.leftBox;
    const rightBox = this.state.rightBox;
    const tempObjArray = [];
    const tempValue = [];
    rightBox.map((value, index) => {
      const name = `rightoption${index}`;
      if (this[name].selected) {
        const tempObj = {
          value: this[name].value,
          label: this[name].label,
        };
        tempValue.push(this[name].value);
        tempObjArray.push(tempObj);
        this[name].selected = false;
      }
    });

    const tempRightBox = rightBox.filter((value) => {
      return tempValue.indexOf(value.value) === -1;
    });
    const tempLeftBox = leftBox.concat(tempObjArray);
    this.setState({
      leftBox: tempLeftBox,
      rightBox: tempRightBox,
    });
  }

  renderOption(optionObj, name) {
    return optionObj.map((value, index) => {
      let refName = `${name}option${index}`;
      return (<option value={value.value} ref={c => { this[refName] = c; }}>{value.label}</option>);
    });
  }

  render() {
    const leftBox = this.props.leftBox;
    const rightBox = this.props.rightBox;
    return (
      <div className="switchBox">
        <div className="left-box ">
          <label>{this.props.leftBoxLabel}</label>
          <select
            className="leftControl form-control"
            multiple
          >
            {this.renderOption(this.state.leftBox, 'left')}
          </select>
        </div>
        <div className="leftRightBtn">
          <a onClick={this.handleRightButton} className="rightBtn"><i className="fa fa-arrow-right"></i></a>
          <a onClick={this.handleLeftButton} className="leftBtn"><i className="fa fa-arrow-left"></i></a>
        </div>
        <div className="right-box">
          <label className="text-center">{this.props.rightBoxLabel}</label>
          <select
            className="rightControl form-control"
            ref={
              c => {
                this.rightBox = c;
              }
            }
            multiple
          >
            {this.renderOption(this.state.rightBox, 'right')}
          </select>
        </div>
      </div>
    );
  }

}
