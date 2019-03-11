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
  statRow: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
  },
  statElement: {
    flex: 1,
    borderColor: '#979797',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statElementLeft: {
    borderRightWidth: 0.5,
  },
  statElementRight: {
    borderLeftWidth: 0.5,
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 60,
    color: '#3F87F5',
  },
  statSign: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#53535F',
  },
  skills: {
    flex: 1,
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
  },
  skill: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#979797',
  },
  skillTag: {
    fontSize: 15,
    color: '#FFFFFF',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  skillVerified: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  bio: {
    margin: 15,
    alignItems: 'center',
  },
  whois: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#53535F',
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
    skills: [],
    bio: '',
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
        skills: [
          {
            id: 1,
            tag: 'Backend Developer',
            verified: 6,
          },
          {
            id: 2,
            tag: 'Frontend Developer',
            verified: 4,
          },
          {
            id: 3,
            tag: 'Product Manager',
            verified: 9,
          },
        ],
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      });
    } catch {
      alert('Error while fetching user data!');
    }
  };

  render() {
    const {
      pic,
      username,
      stat,
      skills,
      bio,
    } = this.state;
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
          <View>
            <View style={styles.statRow}>
              <View style={[styles.statElement, styles.statElementLeft]}>
                <Text style={styles.statNumber}>{stat.hackTotal}</Text>
                <Text style={styles.statSign}>Total hackathons</Text>
              </View>
              <View style={[styles.statElement, styles.statElementRight]}>
                <Text style={styles.statNumber}>{stat.hackWin}</Text>
                <Text style={styles.statSign}>Hackathon wins</Text>
              </View>
            </View>
            <View style={styles.statRow}>
              <View style={[styles.statElement, styles.statElementLeft]}>
                <Text style={styles.statNumber}>{stat.xp}</Text>
                <Text style={styles.statSign}>XP points</Text>
              </View>
              <View style={[styles.statElement, styles.statElementRight]}>
                <Text style={styles.statNumber}>{stat.coins}</Text>
                <Text style={styles.statSign}>Total tokens</Text>
              </View>
            </View>
          </View>
          <View style={styles.skills}>
            {
              skills.map(skill => (
                <View style={styles.skill} key={skill.id}>
                  <Text style={styles.skillTag}>{skill.tag}</Text>
                  <Text style={styles.skillVerified}>{skill.verified}</Text>
                </View>
              ))
            }
          </View>
          <View style={styles.bio}>
            <Text style={styles.whois}>#Whois</Text>
            <Text>{bio}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
