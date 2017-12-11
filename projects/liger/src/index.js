import React, { Component} from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import "./style/style.css";
// import Nav from "./components/Nav";

const API_KEY = "AIzaSyAJgipeXEFSU4mXL2HqfH_fJ82sdIFCSik";



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("4 dangerous kayaking");
  }

videoSearch(term) {
  YTSearch({key: API_KEY, term: term},(videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
     });
  });
}

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 750);
    return (
      <div>

        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML
// and put it on the page (in the DOM).
ReactDOM.render(<App/>, document.querySelector('#root'));
