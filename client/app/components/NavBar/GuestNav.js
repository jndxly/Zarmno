import React from 'react';
import Auth from 'containers/Auth';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import AuthBtnUl from 'components/NavBar/AuthBtnUl';
import CloseIcon from 'material-ui/svg-icons/content/clear';
class GuestNav extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      authType: 'Sign Up',
    };
    this.onClickSignUp = this.onClickSignUp.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleAuthType = this.toggleAuthType.bind(this);
  }

  onClickSignUp(e) {
    e.preventDefault();
    this.setState({
      modalIsOpen: true,
      authType: 'Sign Up',
    });
  }

  onClickLogin(e) {
    e.preventDefault();
    this.setState({
      modalIsOpen: true,
      authType: 'Login',
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  toggleAuthType() {
    if (this.state.authType === 'Sign Up') {
      this.setState({
        authType: 'Login',
      });
    } else {
      this.setState({
        authType: 'Sign Up',
      });
    }
  }

  render() {
    const { modalIsOpen, authType } = this.state;
    return (
      <AuthBtnUl>
        <li><RaisedButton label="SIGN UP" onClick={this.onClickSignUp} primary /></li>
        <li style={{ marginLeft: 20 }}><RaisedButton label="LOG IN" onClick={this.onClickLogin} secondary /></li>
        <Dialog
          title={authType}
          modal
          open={modalIsOpen}
          onRequestClose={this.closeModal}
          contentStyle={{ width: 500 }}
          autoScrollBodyContent
        >
          <Auth authType={authType} toggleAuthType={this.toggleAuthType}/>
          <IconButton onClick={this.closeModal} style={{ position: 'absolute', top: -10, right: -50 }}>
            <CloseIcon color="#ffffff" />
          </IconButton>
        </Dialog>
      </AuthBtnUl>
    );
  }
}

export default GuestNav;
