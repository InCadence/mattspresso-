import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { CurrentUser, UserList } from './components'

import { Switch, HashRouter, Route } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { clearError } from './actions';

const home = () => (
  <CurrentUser userkey="c9449e43-5e2c-4874-8900-55d5708f2005" />
) 

class App extends React.PureComponent {

  clearError = () => {
    this.props.clearError();
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/users" component={UserList} />
          </Switch>
        </HashRouter>
        <Dialog
          open={this.props.error !== undefined}
          onClose={this.clearError}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          PaperProps={{ style: { width: '100%' } }}
          maxWidth={this.props.maxWidth}
        >
          <DialogTitle id="scroll-dialog-title">Error Message</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.error}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              label="Close"
              color='primary'
              onClick={this.clearError}>OK</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  };
}

const mapStateToProps = state => ({
  clearError: PropTypes.func.isRequired,
  error: state.common.error
})

export default connect(mapStateToProps, { clearError })(App);
