import React, { Component } from 'react';
import { connect } from 'react-redux';
// import thunk from 'redux-thunk';
import { updateUser } from './actions/usersActions';
import { bindActionCreators } from 'redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarPage from './components/NavBar/navbar';
import LandingPage from './pages/LandingPage/landingPage';
import Footer from './components/Footer/footer';

class App extends Component {

  onUpdateUser = (event) => {
    this.props.onUpdateUser(event.target.value);
  }
  render() {

    console.log(this.props)
    return (
      <>
        <NavbarPage />
        <LandingPage />
        <Footer />
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(props);

  return {
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.aRandomProps}`
  };
};
const mapActionsToProps = (dispatch, props) => {
  console.log(props)
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch)
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps)
  return {};
}

export default connect(mapStateToProps, mapActionsToProps)(App);
