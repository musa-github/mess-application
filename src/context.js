import React, { Component } from "react";
import { auth, db } from "./firebase";
const Store = React.createContext();
export default class StoreProvider extends Component {
  state={
   memberInfo: [] ,
   totalMembersMill:[],
   loading:true,
   currentUser:"",
   userDetails:{},
   marketing:[],
   totalMarketing:[]
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
             return doc.data().mills.totalMill
        })})});

     db.collection("marketing").orderBy("date","asc").onSnapshot(snapshot=>{
        this.setState({
          marketing: snapshot.docs.map(doc=>{
            return {id:doc.id, marketing:doc.data()}
          })
        })
     })


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
       }}>
        {this.props.children}
      </Store.Provider>
    );
  };
}
const Consumer = Store.Consumer;
export { StoreProvider, Consumer, Store };

