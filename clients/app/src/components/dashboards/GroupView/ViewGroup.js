import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SimpleCard from '../../SimpleCard';
import { Container, Row, Col } from 'react-grid-system';
import GroupDetais from './GroupDetais';
import { Typography, Divider } from '@material-ui/core';
import TopButtons from './TopButtons';
import CardHeading from './CardHeading';
import CardPairs from './CardPairs';
import YourClique from './YourClique';
import FeedList from './FeedList';
import MembersList from './MembersList';
import SmallCalendar from './SmallCalendar';
import Plea from './Plea';

const styles = theme => ({
  btnContainer: {
    display: 'flex'
  },
  button: {
    marginLeft: 'auto',
    marginTop: 10,
    margin: 20
  }
});

class ViewGroup extends Component {
  handleChange = e => {
    this.setState({
      plea: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log('your plea ' + this.state.plea + ' was submitted');
    this.setState({
      plea: ''
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Row>
          <Col md={8}>
            <TopButtons />
            <CardHeading title="Some title" subTitle="Some subTitle" />
            <CardPairs />
            <CardHeading title="Your Clique" subTitle="Some subTitle" />
            <YourClique />
            <CardHeading title="Group Details" subTitle="Some subTitle" />
            <GroupDetais />
            <CardHeading title="Group Members" subTitle="Some subTitle" />
            <MembersList />
          </Col>

          <Col md={4}>
            <SimpleCard noPadding={true}>
              <SmallCalendar />
              <Divider />
              <FeedList />
            </SimpleCard>

            <Plea />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(ViewGroup);