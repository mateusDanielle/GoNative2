import React, { Component } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '~/services/api';

import Header from '~/components/Header';
import Box from '~/components/Box';

import styles from './styles';

export default class Lista extends Component {
  state = {
    repository: '',
    repos: [],
    loading: false,
  };

  async componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const repos = await AsyncStorage.getItem('@Githuber:repos');

    this.setState({ repos: JSON.parse(repos) });
  };

  handleClickAdd = async () => {
    this.setState({ loading: true });
    const { repository } = this.state;

    const {
      data: {
        id,
        name,
        organization: { login: organization, avatar_url: avatar },
      },
    } = await api.get(`/repos/${repository}`);

    const myA = await AsyncStorage.getItem('@Githuber:repos');

    const data = [
      ...(myA !== null ? JSON.parse(myA) : []),
      {
        id,
        name,
        organization,
        avatar,
      },
    ];

    await AsyncStorage.setItem('@Githuber:repos', JSON.stringify(data));

    this.setState({ loading: false, repository: '' });

    this.loadData();
  };

  renderListItem = ({ item }) => <Box content={item} />;

  renderList = () => {
    const { repos } = this.state;

    return (
      <FlatList
        data={repos}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        contentContainerStyle={styles.list}
      />
    );
  };

  render() {
    const { repository, loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <View style={styles.content}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Adicionar novo repositório"
              underlineColorAndroid="transparent"
              value={repository}
              onChangeText={text => this.setState({ repository: text })}
            />
            <TouchableOpacity onPress={this.handleClickAdd}>
              <Icon name="plus" style={styles.addIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <View>{loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}</View>
        </View>
      </View>
    );
  }
}
