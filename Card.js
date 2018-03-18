import React from 'react';
import { View } from 'react-native';

const Card = (props) => {

	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);

};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	}
}

export default Card;
 
/*
<Card> 
	<Text>{props.track.trackName}</Text> 
</Card>

const Card() = (props) => {

	return (
		<View style={styles.containerStyle}>
		// this method puts content from  <Card> <Text>{props.track.trackName}</Text> </Card>
			{ props.children } // this is equal to <Text>{props.track.trackName}</Text>
		</View>
	);

};

*/
