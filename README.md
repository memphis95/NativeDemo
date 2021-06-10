# React Native Navigation Example

Simple example of how navigation works in react native application.

## Getting Started

The project aim is to understand how to navigate between screens in react native applications.

### Prerequisites
The project is created with REACT NATIVE CLI QUICKSTART with macOS as Development OS and Android as a Target OS

### Installing

A step by step instructions that tell you how to get a development env running

#### Installing Dependencies 

###### Node and Watchman
```
brew install node
brew install watchman
```

###### Java Development kit

```
brew cask install adoptopenjdk/openjdk/adoptopenjdk8
```
###### Android Studio

1. Install Android Studio
2. Install the Android SDK

###### Creating a new application

```
npx react-native init projectName
```
###### Starting application

```
npx react-native run-android
```

## Demo Images

Image 1: Intial screen : Login page 

![Screenshot_2020-08-27-22-56-00-494_com lexdemo](https://user-images.githubusercontent.com/14840428/91480441-9e92b100-e8c0-11ea-8198-896d803584af.jpg)

Image 2: Home Screen

![Screenshot_2020-08-27-22-56-05-298_com lexdemo](https://user-images.githubusercontent.com/14840428/91480624-e1548900-e8c0-11ea-9c8c-1fb5ccffe845.jpg)



## Working

Importing createStackNavigator from react-navigation-stack library.
```
import {createStackNavigator} from react-navigation-stack;

```
Combining the components in a single navigational stack for navigation.

```
const MainNavigation = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
});
```
Importing the appContainer for the combined navigational component from react-navigation
```
import {createAppContainer} from 'react-navigation';
```
Exporting the navigation stack to the index.js
```
export default createAppContainer(MainNavigation);
```


## Built With

* [ReactJS](https://reactjs.org/docs/getting-started.html) - The JavaScript Library used
* [NPM](https://www.npmjs.com/get-npm) - Package Manager
* [Visual Code Studio](https://code.visualstudio.com) - IDE


## Authors

* **Ankit Goel**  




