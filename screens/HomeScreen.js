import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native';

import { 
  Header_Component,
  BottomTabs_Component,
  NewTodo_Component,
  DoneTodo_Component,
  CreateTask_Component
  } from '../components/index';

class HomeScreen extends React.Component {
  // const [tabNavigation,setTabNavigation] = useState(1);
  // const [modalVisible,setmodalVisible] = useState(false);
  // const [todoTasks,settodoTasks] = useState([]);

  constructor(props){
    super(props)
    this.state = {
      tabNavigation : 1,
      modalVisible : false,
      todoTasks : [],
      doneTasks : [],
    }
  }

  filterTodoArray = (valuetoremove,identifier) =>{
    const state = this.state;
    const filterArray = state.todoTasks.filter((item) => {
      return item.taskId !== valuetoremove;
    })

    if(identifier === "delete"){
      this.setState({todoTasks : filterArray});
    }else{

      const filterValue = state.todoTasks.find((item) => {
        return item.taskId === valuetoremove;
      })
      this.setState({todoTasks : filterArray});
      this.setState({doneTasks:state.doneTasks.concat(filterValue)});
    }
  }

  filterDoneTaskArray = (valuetoremove) => {
    const state = this.state;
    const filterArray = state.doneTasks.filter((item) => {
      return item.taskId !== valuetoremove;
    })

    const filterValue = state.doneTasks.find((item) => {
      return item.taskId === valuetoremove;
    })
    
      this.setState({todoTasks : state.todoTasks.concat(filterValue)});
      this.setState({doneTasks:filterArray});
  }

 
 render(){
   const { tabNavigation, modalVisible, todoTasks,doneTasks} = this.state;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style = {{ flex:1, backgroundColor:"white"}}>

       <Header_Component />

       { tabNavigation === 1 ?
       <NewTodo_Component todotasksArray = {todoTasks}
       deleteValue ={(value) => this.filterTodoArray(value,"delete")}
       taskdone = {(value) => this.filterTodoArray(value,"taskdone")}/>
       : 
       <DoneTodo_Component doneTasksArray = {doneTasks}
       taskUndo = {(value) => this.filterDoneTaskArray(value)}/>
       }

       { modalVisible === true &&
        <CreateTask_Component modalVisible = {modalVisible}
        modalVisibility = {(value) => this.setState({modalVisible:value})}
        newTask = {(value) => this.setState({todoTasks: todoTasks.concat(value)})}
        todotasksArrayval = {todoTasks}/> 
        }

       <BottomTabs_Component tabSelect = {(value) => this.setState({tabNavigation : value})}
       modalVisibility = {(value) => this.setState({modalVisible:value})}
       selectedTab = {tabNavigation}/>

      </SafeAreaView>
    </>
  );
 }
  
};

const styles = StyleSheet.create({

});

export default HomeScreen;
