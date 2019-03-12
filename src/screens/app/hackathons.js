import React from 'react';
import {
  StyleSheet,
  View,
  Picker,
  ScrollView,
} from 'react-native';
import { events as hackathons } from '../../server';
import Toolbar from '../../components/toolbar';
import HackathonPreview from '../../components/hackathon-preview';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'stretch',
  },
  status: {
    backgroundColor: '#53535F',
    color: '#FFFFFF',
  },
  hackathons: {
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
});

export default class Hackathons extends React.Component {
  state = {
    status: 'open',
    events: [],
  };

  getEvents = async () => {
    const { status } = this.state;
    try {
      const events = await hackathons.getEventsByStatus(status);
      this.setState({ events });
    } catch (error) {
      alert(error);
    }
  };

  changeStatus = status => this.setState(() => ({ status }), this.getEvents);

  componentDidMount = async () => {
    try {
      await this.getEvents();
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const { status, events } = this.state;
    return (
      <View style={styles.view}>
        <Toolbar title="Hackathons" />
        <Picker
          selectedValue={status}
          onValueChange={this.changeStatus}
          style={styles.status}
        >
          <Picker.Item label="Open" value="open" />
          <Picker.Item label="Applied" value="applied" />
          <Picker.Item label="Won" value="won" />
          <Picker.Item label="Participated" value="participated" />
          <Picker.Item label="Confirmed" value="confirmed" />
          <Picker.Item label="Activated" value="activated" />
        </Picker>
        <ScrollView contentContainerStyle={styles.hackathons}>
          {
            events.map(event => (
              <HackathonPreview key={event.id} {...event} />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}
