import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import './App.css';
// state is a keyword that is used to communicate from the two child components which are not related at all.
// state is an object whcih describes the application.
// const state={
// 	robots: robots,
// 	searchfield: ''
// }
//as soon as he sate of the weebsite chnages, ie the serach field and the robots, in the state,
// the, the javascript triggers the functions, and passes the robot's name as the prop.


class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''

		}
	}
// below part of react only henec , no arrow function.
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users=>this.setState({robots:users}))
		
	}

	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value })
		
	}
	render(){

		const filteredRobots = this.state.robots.filter(users=>{
			return users.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robots.length === 0){
			return <h1>Loading</h1>
		}else{
			return(
					<div className='tc'>
							<h1 className='f1'>RoboFriends</h1>
							<Searchbox searchChange={this.onSearchChange}/>
							<Scroll>
								<Cardlist robots={filteredRobots}/>
					        </Scroll>
					</div>	        

		         );

		}
		


	}
	
}
export default App;