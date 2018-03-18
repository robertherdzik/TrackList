import React from "react";
import { Text, View, Image } from "react-native";
import Track from "./index"; // TODO [🌶]: move Track somewhere else
import Card from "./Card";
import CardSection from "./CardSection";

/*
const TrackDetail = (props) => {
*/

const TrackDetail = ({ track }) => {

	const {artistName, trackName, thumbnail} = track;

	return (
		<Card> 
			<CardSection>	
				<Image style ={styles.image} 
					   source={{uri: thumbnail}}
      				   style={{width: 60, height: 60}} />

				<View sytle={styles.textContainer}>
					<Text style={styles.baseText}>{trackName}</Text>
					<Text style={styles.baseText}>{artistName}</Text>
				</View>
			</CardSection>
		</Card>
	);
}

export default TrackDetail;

const styles = {
  textContainer: {
    flexDirection: 'column',
   },
   baseText: {
    fontFamily: 'Cochin',
    fontSize: 20,
    marginLeft: 15,
   },
   image: {
   	insetRight: 10,
   }
};