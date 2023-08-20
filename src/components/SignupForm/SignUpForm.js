import { Component } from "react";
import { signUp } from '../../../utilities/users-service';
import styles from './SignUpForm.module.scss'
import Footer from "../Footer/Footer";
export default class SignUpForm extends Component {
state = {
  username: '',
  email: '',
  password: '',
  confirm: '',
  error: ''
};

handleChange = (evt) => {
  this.setState({
    [evt.target.name]: evt.target.value,
    error: ''
  });
};

handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
    const formData = {...this.state};
    delete formData.confirm;
    delete formData.error;

    const user = await signUp(formData);
    
    this.props.setUser(user);
  } catch {
 
    this.setState({ error: 'Sign Up Failed - Try Again' });
  }
};

render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <div>
        <h1 className={styles.title}>Looped</h1>
      <div className={styles.signUp}>
        <form autoComplete="off" onSubmit={this.handleSubmit} className={styles.signUpForm}>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required  className={styles.inputText}/>
          <label>Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required  className={styles.inputText}/>
          <label className={styles.password}>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required  className={styles.inputText}/>
          <label>Confirm</label>
          <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required className={styles.inputText} />
          <button type="submit" disabled={disable} className={styles.submit}>SIGN UP</button>
        </form>
      </div>
      <p className={styles.errorMessage}>&nbsp;{this.state.error}</p>
      <Footer />
    </div>
  );
}
}