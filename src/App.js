import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#1E1E1E'
}
let fakeServerData = {
  user: {
    name: 'Julia',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name:'Wild World', duration: 193},
          {name: 'Beat It', duration: 173},
          {name: 'Your Song', duration: 203}]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name: 'Lean on Me', duration: 187},
          {name: 'Heart of Gold', duration: 211},
          {name: 'Accross 110th Street', duration: 166}]
      },
      {
        name: 'Revival',
        songs: [
          {name: 'Thunders Truck', duration: 159},
          {name: 'Single Lady', duration: 223},
          {name: 'Hey Jude!', duration: 191}]
      },
      {
        name: 'Workout',
        songs: [
          {name: 'Candy Shop', duration: 189},
          {name: 'Umbrella', duration: 170},
          {name: 'Stronger!', duration: 198}]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return(
      <div  style={{...defaultStyle, width: '50%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}
class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylists) =>{
      return songs.concat(eachPlaylists.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSongs) => {
      return sum + eachSongs.duration
    }, 0)
    return(
      <div  style={{...defaultStyle, width: '50%', display: 'inline-block'}}>
        <h2>{Math.round(totalDuration / 3600)} Hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div style={{defaultStyle}}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, display: 'inline-block', width: '25%'}}>
        <img/>
        <h3>Playlist</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1500);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size': '2em'}}>
            {this.state.serverData.user.name}'s Playlist
          </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          </div> : <h1>'Loading...'</h1>
        }
      </div>
    );
  }
}

export default App;
