import React from 'react';
import {
  StyleSheet,
  View,
  Picker,
  ScrollView,
} from 'react-native';
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

  changeStatus = status => this.setState({ status });

  componentDidMount = () => {
    try {
      this.setState({
        events: [
          {
            id: 1,
            title: 'Hack.Moscow',
            city: 'Moscow',
            dateStart: '2019-04-20T15:00:00.000Z',
          },
          {
            id: 2,
            title: 'Local Hack Day',
            city: 'Moscow',
            dateStart: '2018-07-13T15:00:00.000Z',
          },
          {
            id: 3,
            title: 'HackUps',
            city: 'Barcelona',
            dateStart: '2018-02-13T15:00:00.000Z',
          },
          {
            id: 4,
            title: 'Hackathon 1',
            city: 'New York',
            dateStart: '2018-01-24T15:00:00.000Z',
          },
        ],
      });
    } catch {
      alert('Error while loading events!');
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
