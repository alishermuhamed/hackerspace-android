import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toolbar from '../../components/toolbar';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'stretch',
  },
  profile: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  pic: {
    marginTop: 20,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#3F87F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#53535F',
  },
  stat: {
    marginTop: 15,
  },
  statRow: {
    flexDirection: 'row',
  },
  statElement: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 60,
    color: '#3F87F5',
  },
  statSign: {
    fontWeight: 'bold',
    color: '#53535F',
  },
  statSeparator: {
    borderWidth: 0.5,
    borderColor: '#979797',
  },
});

export default class Profile extends React.Component {
  state = {
    pic: '',
    username: '',
    stat: {
      hackTotal: 0,
      hackWin: 0,
      xp: 0,
      coins: 0,
    },
  };

  componentDidMount = () => {
    try {
      this.setState({
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZrso0k5v46JAtHbC2kl2Vw9E9rMHkq_xdUlYrx8BmVA7RJ40',
        username: 'John Wick',
        stat: {
          hackTotal: 6,
          hackWin: 4,
          xp: 300,
          coins: 617,
        },
      });
    } catch {
      alert('Error while fetching user data!');
    }
  };

  render() {
    const { pic, username, stat } = this.state;
    return (
      <View style={styles.view}>
        <Toolbar title="Profile" />
        <ScrollView contentContainerStyle={styles.profile}>
          {pic ? (
            <Image source={{ uri: pic }} style={styles.pic} />
          ) : (
            <View style={styles.pic}>
              <Icon name="user" size={100} color="#FFFFFF" />
            </View>
          )}
          <Text style={styles.username}>{username}</Text>
          <View style={styles.stat}>
            <View style={styles.statRow}>
              <View style={styles.statElement}>
                <Text style={styles.statNumber}>{stat.hackTotal}</Text>
                <Text style={styles.statSign}>Total hackathons</Text>
              </View>
              <View style={styles.statSeparator} />
              <View style={styles.statElement}>
                <Text style={styles.statNumber}>{stat.hackWin}</Text>
                <Text style={styles.statSign}>Hackathon wins</Text>
              </View>
            </View>
            <View style={styles.statRow}>
              <View style={styles.statElement}>
                <Text style={styles.statNumber}>{stat.xp}</Text>
                <Text style={styles.statSign}>XP points</Text>
              </View>
              <View style={styles.statSeparator} />
              <View style={styles.statElement}>
                <Text style={styles.statNumber}>{stat.coins}</Text>
                <Text style={styles.statSign}>Total tokens</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
