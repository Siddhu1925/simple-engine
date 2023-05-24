import "./App.css";
import Search from "./components/Search";
import React from "react";
import youtubeApi from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

export default class App extends React.Component {
  state = {
    videoMetaInfo: [],
    selectedVideoId: null
  };

  onVideoSelected = (videoId) => {
    this.setState({ selectedVideoId: videoId });
  };
  onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    });
  };
  render() {
    return (
      <>
      <div className="App">
        
        <div style={{fontWeight:"800" ,marginTop:"30px"}}>SIMPLE VEDIO SEARCH ENGINE  </div>
         <br/>
        <Search onSearch={this.onSearch} />
        <VideoList
          onVideoSelected={this.onVideoSelected}
          data={this.state.videoMetaInfo}
        />
        <VideoPlayer videoId={this.state.selectedVideoId} />
      </div>
      </>
    );
  }
}