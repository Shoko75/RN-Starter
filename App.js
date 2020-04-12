import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageSreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorSreen from './src/screens/ColorScreen';
import SquareSreen from './src/screens/SquareScreen';
import TextSreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageSreen,
    Counter: CounterScreen,
    Color: ColorSreen,
    Square: SquareSreen,
    Text: TextSreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
