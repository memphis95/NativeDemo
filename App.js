import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';
import { Constants } from 'react-native-unimodules';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

//  for  Stack Navigation
import LoginScreen from './StackNavigation/LoginScreen';
import HomeScreen from './StackNavigation/HomeScreen';

const MainNavigation = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
});
export default createAppContainer(MainNavigation);





// export default class App extends React.Component {
// render() {
//   var data = [
//     {
//       title: 'Client Side',
//       data: ['React JS', 'Angular', 'Ember JS', 'Knockout JS'],
//     },
//     { title: 'Server Side', data: ['Node.js', 'Express.js'] },
//   ];
//   return (
//     <View style={styles.container}>
//       <SectionList
//         renderItem={({ item, index }) => (
//           <View style={styles.itemContainer}>
//             <Text key={index}>{item}</Text>
//           </View>
//         )}
//         renderSectionHeader={({ section: { title } }) => (
//           <View style={styles.itemHeader}>
//             <Text style={{ fontWeight: 'bold' }}>{title}</Text>
//           </View>
//         )}
//         sections={data}
//         keyExtractor={(item, index) => item + index}
//       />
//     </View>
//   );
// }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 50,
//   },
//   itemHeader:{
//     backgroundColor:'steelblue'
//   },
//   itemContainer:{
//     backgroundColor:'skyblue'
//   }
// });


// export default class App extends React.Component {
//   render() {
//     var data = [
//       {framework: 'React JS'},
//       {framework: 'Angular JS'},
//       {framework: 'Ember JS'},
//       {framework: 'Knockout JS'},
//       {framework: 'Polymer JS'},
//       {framework: 'Node JS'},
//       {framework: 'Express JS'},
//     ];
//     return (
//       <View style={styles.container}>
//         <FlatList
//         data={data}
//         keyExtractor={(item,index)=>index}
//         renderItem = {({item, index}) => (
//           <View style={styles.itemContainer}>
//             <Text>{item.framework}</Text>
//             </View>
//         )}
//           />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   conatiner: {
//     flex: 1,
//     paddingTop: Constants.statusBarHeight,
//   },
//   itemContainer :{
//     height:100,
//     backgroundColor:'skyblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius:5,
//     borderColor: 'black',
//     borderWidth:1,
//     margin:25
//   }
// })

// export default function App() {
//   // var data =[
//   //   {framework : 'React Js'},
//   //   {framework : 'Angular Js'},
//   //   {framework : 'Ember Js'},
//   //   {framework : 'Knockout Js'},
//   //   {framework: 'Polymer Js'},
//   //   {framework: 'Node Js'},
//   //   {framework: 'Express Js'},
//   // ];
//   // return (
//   //   // <View 
//   //   // style={styles.container}>
//   //   //   <View style={styles.box}>
//   //   //       <Text>Text with Yellow background</Text>
//   //   //     </View>
//   //   // </View>
//   //   <View style={styles.container}>
//   //   <FlatList 
//   //     data={data}
//   //     keyExtractor={(item,index)=> index}
//   //     renderItem={({ item,index }) => (
//   //       <View style={styles.box} key={index}>
//   //         <Text style={{textAlign:"center"}}>{item.framework}</Text>
//   //       </View>
//   //     )}
//   //   />
//   // </View>

//   //  Break-Point for SectionList

//   var data = [
//     {
//       title: 'Client Side',
//       data : ['React JS', 'Angular', 'Ember JS', 'Knockout JS'],
//     },
//     { 
//       title:'server-side', 
//       data: ['Node JS', 'Express JS']}

//   ];
//   return(
//     <View style={styles.container}>
//       <SectionList style={styles.box}
//       renderItem={({item, index}) => (
//         <View>
//           <Text key={index}>{item}</Text>
//         </View>
//       )}
//       renderSectionHeader={({section:{title}}) => (
//         <View style={styles.header} >
//           <Text>{title}</Text>
//         </View>
//       )}
//       sections={data}
//       keyExtractor = {(item,index)=> item + index}
//       />

      
//     </View>
//   )    
      
  
  
//   }
  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height:100,
//     alignItems: "center",
//     justifyContent :"center",
//     padding: 10

//     // padding:130
//   },
//   box: {
//     width: 300,
//     height:100,
//     borderRadius: 12,
//     borderWidth: 2,
//     backgroundColor: 'lightblue',
//     margin:5
    
   
//   },
//   header:{
//     width: 300,
//     height:20,
//     backgroundColor:"yellow"

//   }
// });
