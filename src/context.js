import React, { Component } from "react";
import { auth, db } from "./firebase";
const Store = React.createContext();
export default class StoreProvider extends Component {
  state={
   memberInfo: [] ,
   totalMembersMill:[],
   loading:true,
   currentUser:"",
   userDetails:{}
  }
  //getData
  componentDidMount() {
      auth.onAuthStateChanged(user=>{
        db.collection("memberInfo").doc(user.uid).onSnapshot(snapshot=>{
          this.setState({
            userDetails:snapshot.data()
          })})
            this.setState({currentUser:user })

        if(user){
          this.setState({loading:true})
        db.collection("memberInfo").onSnapshot(snapshot=>{
           this.setState({memberInfo:snapshot.docs.map(doc=> {
             return {id:doc.id, memberInfo:doc.data()}
          }),
           totalMembersMill:snapshot.docs.map(doc=>{
             return doc.data().totalMill
        })})});
              this.setState({loading:false})
        }else{
          this.setState({memberInfo:[]});   
        }  
      })     
}
  render() {
    
    return (
      <Store.Provider value={{
         ...this.state,
      getSingleMemInfo:this.getSingleMemInfo }}>
        {this.props.children}
      </Store.Provider>
    );
  };
}
const Consumer = Store.Consumer;
export { StoreProvider, Consumer, Store };

