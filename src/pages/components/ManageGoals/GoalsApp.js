import React, { Component } from 'react';
import GoalItem from  './GoalItem'
import AddGoal from  './AddGoal'
import firebase from 'firebase'

const goalsCollection = []; 
class GoalsApp extends React.Component {

	constructor(props){
	super(props)

	this.state = {
	  		goals: [],
	  		name:["aaaaaaa", "ssssss"]
		}


		this.getUserData = this.getUserData.bind(this)
	}	

	
	getUserData() {
		
		var firebaseConfig = {
		apiKey: process.env.REACT_APP_FIREBASE_apiKey,
		authDomain: process.env.REACT_APP_FIREBASE_authDomain,
		databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
		projectId: process.env.REACT_APP_FIREBASE_projectId,
		storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
		messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
		appId: process.env.REACT_APP_FIREBASE_appId
		};

		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
		
		
		var db = firebase.firestore();
		// Get a reference to the database service
		db.collection("goals").where("userId", "==", "6sz6jbppFs8s10MA7jqm")
		.get()
		.then(function(querySnapshot) {
		    querySnapshot.forEach(function(doc) {
		        // doc.data() is never undefined for query doc snapshots
		        //goalsCollection.push(doc.get("goalTitle"));
		        goalsCollection.push(doc);

		       // this.setState({ goals: [...this.state.goals, doc.get("goalTitle")]})
		        
		    });

	    	
		})
		.catch(function(error) {
		    console.log("Error getting documents: ", error);
		});

		//this.setState({ goals:[...this.state.goals, goals});

		this.setState({
		  goals: [goalsCollection]
		})

	}


	componentWillMount() {
	  this.getUserData();
	}


	
	 render(){
	  const { goals } = this.state
	  return (
	  		<div className="row" >
				
	  			<AddGoal/>
			
				{goals.map(function(d, idx){
			         return (<GoalItem key={idx} goalTitle={d.goalTitle}/>)
			       })}
			</div>
	  	);

	}
}
export default GoalsApp;
