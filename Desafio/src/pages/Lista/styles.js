import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligthter,
  },
  content: {
    marginTop: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: metrics.screenWidth * 0.7,
    marginRight: metrics.baseMargin,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
    borderWidth: 2,
    borderColor: colors.regular,
  },
  addIcon: {
    fontSize: 25,
  },
  line: {
    marginTop: metrics.baseMargin * 2,
    borderWidth: 1,
    borderColor: colors.regular,
    width: metrics.screenWidth - metrics.basePadding * 2,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  list: {
    marginTop: metrics.baseMargin * 2,
    paddingBottom: 20,
  },
});

export default styles;
