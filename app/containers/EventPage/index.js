/**
 *
 * EventPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import makeSelectEventPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import img from '../../images/event-head.jpg';
import speaker1 from '../../images/speakers/speaker-1.jpg';
import speaker2 from '../../images/speakers/speaker-2.jpg';
import speaker3 from '../../images/speakers/speaker-3.jpg';

const styles = theme => ({
  root: {
    width: 'inherit',
    color: '#fff',
  },
  bannerHead: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: '0.5',
  },
  banner: {
    backgroundImage: `url(${img})`,
    height: '500px',
    width: '100%',
    backgroundPosition: '50% 80%',
  },
  title: {
    position: 'absolute',
    zIndex: '2',
    top: '50px',
    width: '100%',
    padding: '30px 20%',
  },
  titleTop: {
    left: '20%',
  },
  titleSub: {
    fontSize: '2rem',
    textAlign: 'left',
    letterSpacing: '-0.1rem',

    '@media screen and (min-width: 992px)': {
      fontSize: '2.125rem',
    },
  },
  titleIntro: {
    fontSize: '3rem',
    marginTop: '1.5rem',

    '@media screen and (min-width: 992px)': {
      fontSize: '4.5rem',
    },
  },
  grid: {
    maxWidth: 1280,
    margin: '0 auto',
  },
  gridContainer: {
    marginTop: '2rem',
    padding: '0px 8px',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  box: {
    paddingTop: 0,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },

  sectionTitle: {
    marginTop: '5rem',
    marginBottom: '2rem',
    color: '#CF3141',
  },

  speakerName: {
    color: '#CF3141',
    fontSize: '2rem',
  },

  speakerRank: {
    fontSize: '1.5rem',
  },

  speakerAva: {
    height: 300,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage:
      'url("http://www.digitized.gr/images/speakers/speaker-adrien.jpg")',
  },

  schedules: {
    marginBottom: '5rem',
  },

  schedule: {
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
    display: 'flex',
    position: 'relative',
  },

  scheduleTexts: {
    paddingLeft: '2rem',
  },

  scheduleIndicator: {
    '& > div:first-child': {
      boxSizing: 'border-box',
      height: '2rem',
      width: '2rem',
      border: '0.5rem solid #fff',
      borderRadius: '50%',
    },
    '& > div:last-child': {
      boxSizing: 'border-box',
      height: '72%',
      width: '0.125rem',
      border: '0.125rem solid #fff',
      margin: '0.5rem 0 0.5rem 0.9rem',
      position: 'absolute',
    },
  },

  scheduleTitle: {
    fontSize: '2rem',
    lineHeight: 1,
    marginBottom: '1rem',
  },

  sponsors: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

    '@media screen and (min-width: 992px)': {
      justifyContent: 'initial',
    },

    '& > img': {
      marginLeft: '0.5rem',
      marginTop: '0.5rem',
    },
  },

  register: {
    marginTop: '8rem',
    marginBottom: '8rem',
    textAlign: 'center',

    '& > button': {
      color: '#CF3141',
      borderColor: '#CF3141',
      fontSize: '1.5rem',
    },
  },
});

/* eslint-disable react/prefer-stateless-function */
export class EventPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.bannerHead}>
          <div className={classes.title}>
            <div className={classes.titleTop}>
              <Typography className={classes.titleSub} variant="h4">
                Hacker Ethical Conference.
              </Typography>
              <Typography className={classes.titleSub} variant="h4">
                November 20-21, 2019.
              </Typography>
            </div>
            <Typography className={classes.titleIntro} variant="h3">
              The best stories, experience, you have ever had.
            </Typography>
          </div>
          <div className={classes.overlay} />
          <div className={classes.banner} />
        </div>
        <div className={classes.grid}>
          <div className={classes.gridContainer}>
            <Typography variant="h3" className={classes.sectionTitle}>
              Our speakers
            </Typography>
            <div>
              <Grid container spacing={16}>
                <Grid item sm={4} xs={12}>
                  <div className={classes.speaker}>
                    <div
                      className={classes.speakerAva}
                      style={{
                        backgroundImage: `url("${speaker1}")`,
                      }}
                    />
                    <Typography className={classes.speakerName}>
                      Jane Mira
                    </Typography>
                    <Typography className={classes.speakerRank}>
                      Hacker Freelancer
                    </Typography>
                  </div>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <div className={classes.speaker}>
                    <div
                      className={classes.speakerAva}
                      style={{
                        backgroundImage: `url("${speaker2}")`,
                      }}
                    />
                    <Typography className={classes.speakerName}>
                      Jonh Mohan
                    </Typography>
                    <Typography className={classes.speakerRank}>
                      Chief Security Super Bank
                    </Typography>
                  </div>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <div className={classes.speaker}>
                    <div
                      className={classes.speakerAva}
                      style={{
                        backgroundImage: `url("${speaker3}")`,
                      }}
                    />
                    <Typography className={classes.speakerName}>
                      James King
                    </Typography>
                    <Typography className={classes.speakerRank}>
                      Data Analyst
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
            <Typography variant="h3" className={classes.sectionTitle}>
              Schedule
            </Typography>
            <div className={classes.schedules}>
              <div className={classes.schedule}>
                <div className={classes.scheduleIndicator}>
                  <div />
                  <div />
                </div>
                <div className={classes.scheduleTexts}>
                  <Typography className={classes.scheduleTitle}>
                    Open door - Cover the event
                  </Typography>
                  <Typography className={classes.scheduleDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </Typography>
                </div>
              </div>
              <div className={classes.schedule}>
                <div className={classes.scheduleIndicator}>
                  <div />
                  <div />
                </div>
                <div className={classes.scheduleTexts}>
                  <Typography className={classes.scheduleTitle}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem
                  </Typography>
                  <Typography className={classes.scheduleDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </Typography>
                </div>
              </div>
              <div className={classes.schedule}>
                <div className={classes.scheduleIndicator}>
                  <div />
                  <div />
                </div>
                <div className={classes.scheduleTexts}>
                  <Typography className={classes.scheduleTitle}>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam,
                  </Typography>
                  <Typography className={classes.scheduleDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </Typography>
                </div>
              </div>
              <div className={classes.schedule}>
                <div className={classes.scheduleIndicator}>
                  <div />
                  <div hidden />
                </div>
                <div className={classes.scheduleTexts}>
                  <Typography className={classes.scheduleTitle}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem
                  </Typography>
                  <Typography className={classes.scheduleDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </Typography>
                </div>
              </div>
            </div>
            <Typography variant="h3" className={classes.sectionTitle}>
              Sponsors
            </Typography>
            <div className={classes.sponsors}>
              <img
                src="https://ultrahack.org/images/logo-op-216x168.png"
                alt="OP"
              />
              <img
                src="https://ultrahack.org/images/logo-rteco-216x168.png"
                alt="RTECO"
              />
              <img
                src="https://ultrahack.org/images/logo-vtt2-216x168.png"
                alt="VTT"
              />
              <img
                src="https://ultrahack.org/images/logo-tkoaly-216x168.png"
                alt="TKO Äly"
              />
              <img
                src="https://ultrahack.org/images/logo-fmi-216x168.png"
                alt="FMI"
              />
              <img
                src="https://ultrahack.org/images/logo-helsinkithinkcompany-216x168.png"
                alt="Helsinki Think Company"
              />
              <img
                src="https://ultrahack.org/images/logo-cams-216x168.png"
                alt="Copernicus Atmosphere Monitoring Service"
              />
              <img
                src="https://ultrahack.org/images/logo-eumetsat-216x168.png"
                alt="Eumetsat"
              />
              <img
                src="https://ultrahack.org/images/logo-receipthero-216x168.png"
                alt="ReceiptHero"
              />
              <img
                src="https://ultrahack.org/images/logo-until-216x168.png"
                alt="UNTIL"
              />
              <img
                src="https://ultrahack.org/images/logo-aaltouniversity-216x168.png"
                alt="Aalto University"
              />
              <img
                src="https://ultrahack.org/images/logo-ibm-216x168.png"
                alt="CGI"
              />
            </div>
            <div className={classes.register}>
              <Button variant="outlined">Register Now</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  eventPage: makeSelectEventPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'eventPage', reducer });
const withSaga = injectSaga({ key: 'eventPage', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(EventPage);
