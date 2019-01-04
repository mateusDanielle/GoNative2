import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginTop: metrics.baseMargin,
    width: metrics.screenWidth - metrics.basePadding * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: metrics.baseMargin,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  organization: {
    fontSize: 12,
  },
});

export default styles;
