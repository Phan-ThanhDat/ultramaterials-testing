import { Switch, Route } from 'react-router-dom';

import EventPage from 'containers/EventPage/Loadable';
import Header from 'containers/Header/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ChallengesPage from 'containers/ChallengesPage/Loadable';
import ChallengePage from 'containers/ChallengePage/Loadable';
import DashboardPage from 'containers/DashboardPage/Loadable';
import PartnerPage from 'containers/PartnerPage/Loadable';
import VolunteeringPage from 'containers/VolunteeringPage/Loadable';
import ParticipantPage from 'containers/ParticipantPage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import PressMaterialPage from 'containers/PressMaterialPage/Loadable';
import CookiePolicyPage from 'containers/CookiePolicyPage/Loadable';
import PrivacyPolicyPage from 'containers/PrivacyPolicyPage/Loadable';
import TermsOfServicePage from 'containers/TermsOfServicePage/Loadable';

import React from 'react';
import { withStyles } from '@material-ui/core';

import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    minHeight: 'calc(100vh - 153px)',
  },
  content: {
    padding: theme.spacing.unit * 2,
  },
});

/* eslint-disable react/prefer-stateless-function */
class Content extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/challenges" component={ChallengesPage} />
          <Route exact path="/challenge" component={ChallengePage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/partner" component={PartnerPage} />
          <Route exact path="/volunteer" component={VolunteeringPage} />
          <Route exact path="/participate" component={ParticipantPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/press-material" component={PressMaterialPage} />
          <Route exact path="/cookie-policy" component={CookiePolicyPage} />
          <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route
            exact
            path="/terms-of-service"
            component={TermsOfServicePage}
          />
          <Route exact path="/event2019" component={EventPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
