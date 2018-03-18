import React from "react";
import { 
        AppRegistry, 
        StyleSheet,
        View,
        ActivityIndicator,
        FlatList,
        Text,
        Navigator
     } from "react-native";
import TrackDetail from "./TrackDetail";

class AppsList extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      trackList: [new Track("", "", "", "")], // solve this problem, it should be null
      message: ''
    };
  }

  componentWillMount() {
    var param = this.props.urlParam;
    this.setState({isLoading: true});

    APIManager.fetchSongs(
      param, 
      json => this._handleResponse(json),
      error => {
      this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
      })
    });
  }

  render() {
    var param = this.props.urlParam 
    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;
    const msg = (this.state.message.length > 0) ? <Text> {this.state.message} </Text> : null;
    
    return (
      <View style={styles.scene}>
         {this._renderList()}
         {spinner}
         {msg}
      </View>
    );
  }

  _renderList() {

    var trackList = this.state.trackList;
    if (trackList.length > 1) {
      return <FlatList
                data = {this.state.trackList}
                renderItem = {({item}) => <TrackDetail track={item}/> }
                keyExtractor={(item, index) => index}
               />
    }

    return null
  }

  _handleResponse = (response) => {

    var trackList = TrackParser.parse(response)
    this.setState({ 
      isLoading: false , 
      message: '',
      trackList: trackList
    });
  };

}

class APIManager {

  static fetchSongs(author, responseCallback, errorCallback) {
    var query = 'https://itunes.apple.com/search?term=' + author
    fetch(query)
    .then(response => response.json())
    .then(responseCallback)
    .catch(errorCallback);
  }
}

class Track {

  // thumbnail = artworkUrl100
  constructor(trackId, artistName, trackName, thumbnail) {
    this.trackId = trackId
    this.artistName = artistName;
    this.trackName = trackName;
    this.thumbnail = thumbnail;
  }

}

export default Track;


class TrackParser {

  static parse(jsonData) {
    var trackList = [];
   
    var results = jsonData.results;
    for (i = 0; i < results.length; i++) {
      var result = results[i]
      var track = new Track(
        result.trackId,
        result.artistName, 
        result.trackName, 
        result.artworkUrl100
        );
      trackList.push(track);
    }

    return trackList;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ffff"
  },
  highScoresTitle: {
    fontSize: 15,
    textAlign: "center",
    margin: 10
  },
  scene: {
    paddingTop: 60 // TODO it shouldn't be fixed value
  }
});

// Module name
AppRegistry.registerComponent("AppsList", () => AppsList);


