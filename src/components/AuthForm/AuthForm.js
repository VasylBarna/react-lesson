import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import styles from './AuthForm.module.scss';

const WAKE_UP_OPTIONS = {
  BEFORE_NOON: 'BEFORE_NOON',
  AFTER_NOON: 'AFTER_NOON',
};

const SYRUP_OPTIONS = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export class AuthForm extends Component {
  state = {
    email: '',
    password: '',
    repeatPassword: '',
    checked: false,
    wakeUpTime: null,
    syrup: null,
  };
  handleChange = event => {
    const { checked, name, type, value } = event.target;

    if (type === 'checkbox') {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };
  // handleChange = event => {
  //   const { name, value, type, checked } = event.target;
  //   this.setState({
  //     [name]: type === 'checkbox' ? checked : value,
  //   });
  // };

  handleRadioChange = e => {
    this.setState({ wakeUpTime: e.target.value });
  };

  handleSelect = syrup => {
    this.setState({ syrup });
  };
  // handleEmailChange = e => {
  //   this.setState({ email: e.target.value });
  // };

  // handlePasswordChange = e => {
  //   this.setState({ password: e.target.value });
  // };

  // handleRepeatPasswordChange = e => {
  //   this.setState({ repeatPassword: e.target.value });
  // };

  // handleTermsAgreedChange = e => {
  //   this.setState({ checked: e.target.checked });
  // };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password, repeatPassword, checked, wakeUpTime, syrup } =
      this.state;
    return (
      <div className={styles.Wrapper}>
        <h2>Auth Form</h2>
        <form>
          <div className={styles.InputWrapper}>
            <TextField
              value={email}
              name="email"
              type="email"
              label="Enter your email"
              variant="outlined"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.InputWrapper}>
            <TextField
              value={password}
              name="password"
              type="password"
              label="Enter your password"
              variant="outlined"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.InputWrapper}>
            <TextField
              value={repeatPassword}
              type="password"
              name="repeatPassword"
              label="Repeat your password"
              variant="outlined"
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.InputWrapper}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  name="checked"
                  type="checkbox"
                  onChange={this.handleChange}
                  color="primary"
                />
              }
              label="Agreed with the terms of usage"
            />
          </div>
          <div className={styles.InputWrapper}>
            <label>
              BEFORE NOON
              <input
                type="radio"
                checked={wakeUpTime === WAKE_UP_OPTIONS.BEFORE_NOON}
                name="wukeUpTime"
                value={WAKE_UP_OPTIONS.BEFORE_NOON}
                onChange={this.handleRadioChange}
              />
            </label>
            <label>
              AFTER NOON
              <input
                type="radio"
                checked={wakeUpTime === WAKE_UP_OPTIONS.AFTER_NOON}
                name="wukeUpTime"
                value={WAKE_UP_OPTIONS.AFTER_NOON}
                onChange={this.handleRadioChange}
              />
            </label>
          </div>
          <div className={styles.SelectWrapper}>
            <Select
              value={syrup}
              onChange={this.handleSelect}
              options={SYRUP_OPTIONS}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
