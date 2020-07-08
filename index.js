import { registerRootComponent } from 'expo';

import App from './App';
import UIComponent from './UIComponent'
import ButtonTest from './ButtonTest';
import SwitchTest from './SwitchTest';
import PickerTest from './PickerTest';
import SliderTest from './SliderTest';
import AlertTest from './AlertTest'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

// registerRootComponent(App);
// registerRootComponent(UIComponent)
// registerRootComponent(ButtonTest)
// registerRootComponent(SwitchTest)
// registerRootComponent(PickerTest)
// registerRootComponent(SliderTest)

registerRootComponent(AlertTest);
