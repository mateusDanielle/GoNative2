import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligthter,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  flatList: {
    paddingBottom: 20,
  },
});

export default styles;
