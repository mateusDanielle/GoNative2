import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Box = ({ content }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Image style={styles.avatar} source={{ uri: content.avatar }} />
      <View style={styles.text}>
        <Text style={styles.name}>{content.name}</Text>
        <Text style={styles.organization}>{content.organization}</Text>
      </View>
    </View>
    <View>
      <Icon name="chevron-right" style={styles.addIcon} />
    </View>
  </View>
);

Box.propTypes = {
  content: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
  }).isRequired,
};

export default Box;
