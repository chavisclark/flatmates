import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createOuting, findUserOutings } from '../state/actions/outings';
import { fetchUser, onEntryChange, logOut } from '../state/actions/users';
import MainWrapper from '../components/MainWrapper';
import RequestBox from '../components/RequestBox';
import Activity from '../components/Activity';
import Loading from '../components/Loading';
import ControlPanel from '../components/ControlPanel';
import ActivityListContainer from './ActivityListContainer';
import ProfileContainer from './ProfileContainer';
import ProfileEditContainer from './ProfileEditContainer';

class ScenesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOpenPopup = this.handleOpenPopup.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
    this.handleExpire = this.handleExpire.bind(this);
    this.handleViewScene = this.handleViewScene.bind(this);
    this.handleViewProfileEdit = this.handleViewProfileEdit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.state = {
      isPopupOpen: false,
      currentScene: 'request',
      currentSettingsView: 'profile',
      loading: true
    }
  }

  componentDidMount() {
    const {fetchUser} = this.props;
    fetchUser().then(function(user) {
      if (user)
        this.setState({ loading: false })
    }.bind(this));
  }

  handleLogOut() {
    const { logOut } = this.props;
      logOut({null});
  }

  handleOpenPopup() {
      this.setState({
          isPopupOpen: true
      });
  }

  handleClosePopup() {
      this.setState({
        isPopupOpen: false
      });
  }

  handleExpire(n) {
    this.setState({
      isPopupOpen: false
    });
    this.submitForm(n);
  }

  handleViewScene(scene) {
    this.setState({
      currentScene: scene
    })
  }

   handleOptionChange(event) {
    this.setState({
      currentSettingsView: event.target.value
    });
  }

  handleOnSubmit(data) {
      return this.setState({ isPopupOpen: true, formData: data})
  }

  handleViewProfileEdit(edit) {
    this.setState({
      currentSettingsView: edit
    })
  }

  submitForm(n) {
    const { createOuting } = this.props;
    let data = this.state.formData;
    this.setState({
      currentScene: 'single-activity'
    })
    return createOuting(data, n);
  }

  renderSettings() {
    const { currentSettingsView, loading } = this.state;
    if (loading)
      return <Loading />
    if (currentSettingsView == 'controls')
      return ( <ControlPanel logOut={this.handleLogOut}/> )
    if (currentSettingsView == 'profile')
      return ( <ProfileContainer viewProfileEdit={this.handleViewProfileEdit} /> )
  }
  
  handleOptionChange(event) {
    this.setState({
      currentSettingsView: event.target.value
    });
  }

  renderScene() {
    const { currentScene } = this.state;
    if (currentScene == 'request') 
      return (
        <MainWrapper currentScene={currentScene} viewScene={this.handleViewScene}>
          <RequestBox handleOnSubmit={this.handleOnSubmit}
              OnExpire={this.handleExpire}
              closePopup={this.handleClosePopup}
              openPopup={this.handleOpenPopup}
              isOpen={this.state.isPopupOpen} />                
          </MainWrapper> 

      );

    if (currentScene == 'settings')
      return (
        <div>
         { this.state.currentSettingsView == 'profile-edit' ? <ProfileEditContainer viewProfileEdit={this.handleViewProfileEdit} /> :
          <MainWrapper currentSettingsView={this.state.currentSettingsView} switchSettings={this.handleOptionChange} currentScene={currentScene} viewScene={this.handleViewScene}>
             {this.renderSettings()}              
            </MainWrapper>
          }        
        </div>


      );

    if (currentScene == 'activities')
      return (
          <MainWrapper currentScene={currentScene} viewScene={this.handleViewScene}>
              <ActivityListContainer />
            </MainWrapper>
      );

    if (currentScene == 'single-activity') 
      return (
        <div>
          { this.props.outing.current ? <Activity closeScene={() => this.handleViewScene('request')} thisOuting={this.props.outing.current} />
            : <Loading />
          }
        </div>
      );
  }

  render() {
    return (
      <div>
        {this.renderScene()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    outing: state.outing
  };
}

export default connect(mapStateToProps, { createOuting, findUserOutings, logOut, onEntryChange, fetchUser })(ScenesContainer);

