import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
      <DrawerNavigator>
        <Drawer.Screen
          name="Home"
          component={TabOneScreen}
          options={{title: 'Screen 1'}}
        />
        <Drawer.Screen
          name="More"
          component={TabTwoScreen}
          options={{title: 'Screen 2'}}
        />
      </DrawerNavigator>
    );
}