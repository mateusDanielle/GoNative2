import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, AsyncStorage, ActivityIndicator, FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '~/services/api';

import Header from '~/components/Header';
import OrganizationItem from './OrganizationItem';

import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refresing: false,
  };

  async componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refresing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const { data } = await api.get(`/users/${username}/orgs`);

    this.setState({ data, loading: false, refresing: false });
  };

  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  renderList = () => {
    const { data, refresing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        contentContainerStyle={styles.columWrapper}
        numColumns={2}
        onRefresh={this.loadOrganizations}
        refreshing={refresing}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
