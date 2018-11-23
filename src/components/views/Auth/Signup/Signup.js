import React, { PureComponent } from 'react';
import { Form, Field } from 'redux-form';
import { CircularProgress, Button } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import styles from './styles.css';

class Signup extends PureComponent {
  handleSubmit(data) {
    const { signUp } = this.props;
    signUp({ data });
  }

  render() {
    const { handleSubmit, inProgress, error } = this.props;

    return (
      <div>
        <Form
          autocComplete="off"
          type="dialog"
          onSubmit={handleSubmit(data => this.handleSubmit(data))}
          className="auth-form"
        >
          {error != null && <span>{error.message}</span>}
          <Field component="input" name="username" placeholder="Username" className="auth-input" />
          <Field component="input" name="password" placeholder="Password" className="auth-input" />

          {inProgress ? (
            <CircularProgress />
          ) : (
            <Button
              color="primary"
              type="submit"
              variant="contained"
              className="auth-button"
              // disabled={invalid || inProgress}
            >
              Sign up
            </Button>
          )}
        </Form>
      </div>
    );
  }
}

export default Signup;
