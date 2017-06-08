import React from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginActions from '../../actions/login'

class LoginView_ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { actions } = this.props
    const { email, password } = this.state
    actions.submitLoginValue(email, password)
  }

  render() {
    const { login } = this.props
    return (
      <div className="col-md-4 col-md-offset-3 container">
        <h2 className="text-center">{ login.isLogin ? `Logged user: ${login.email}` : 'Login to Your Account' }</h2>
        <Form className='formLogin'>
          <FormGroup controlId="formHorizontalEmail">
            <FormControl value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <FormControl value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" placeholder="Password" />
          </FormGroup>
          <FormGroup className="text-center">
            <Button onClick={this.handleSubmit} bsStyle="primary" bsSize="large" block type="submit">
              Login
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({ login }) => {
  return { login }
}

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(LoginActions, dispatch) })

export const LoginView = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView_)
