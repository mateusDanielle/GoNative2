import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Lista from '~/pages/Lista';
import Issues from '~/pages/Issues';

const Routes = createAppContainer(
  createSwitchNavigator({
    Lista,
    Issues,
  }),
);

export default Routes;
