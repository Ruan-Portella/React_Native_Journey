import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const AppNavigator = createStackNavigator({
    Search: SearchScreen,
  }, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search',
  }
});

export default createAppContainer(AppNavigator);