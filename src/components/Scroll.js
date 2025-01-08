import React from 'react';
// prop.children are used too create components that wrap other componenets.
// Here, the scroll componenet wrpas the carlist component, altough there aren't any props passed to the Scroll tab explicitly 
// yet, it can be called as, props.children(here,children is the cradlist.)

const Scroll=(props)=>{
	return(
		<div style={{overflowY:'scroll',border:'1px solid black' ,height:'500px'}}>
			{props.children}
		</div>
		)


}
export default Scroll;