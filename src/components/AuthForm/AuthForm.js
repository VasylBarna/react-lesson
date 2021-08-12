import { Component } from 'react';
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
    termsAgreed: false,
    wakeUpTime: WAKE_UP_OPTIONS.AFTER_NOON,
    syrup: null,
  };
}
