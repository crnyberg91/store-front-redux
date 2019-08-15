import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from './actions/usersActions';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarPage from './components/NavBar/navbar';
import LandingPage from './pages/LandingPage/landingPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  onUpdateUser = () => {
    this.props.onUpdateUser('sammy');
  }
  render() {

    console.log(this.props)
    return (
      <>
        <NavbarPage />
        <LandingPage />
        {/* <input {} /> */}
        <div onClick={this.onUpdateUser}>UPDATE</div>
        {this.props.user}
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});
const mapActionsToProps = {
  onUpdateUser: updateUser
}
export default connect(mapStateToProps, mapActionsToProps)(App);
