import React from "react";
import SearchInput from "./SearchInput";
import Axios from "axios";
import ImageList from './ImageList';

class App extends React.Component {
state = { images: [] };

onSearchSubmit = async (entry) => {
    const response = await axios.get(
    `https://pixabay.com/api/?key=21823917-055f54577f53afd5b79052b01&q=${entry}&image_type=photo`
    );
    this.setState({ images: response.data.hits });
};
render() {
    return (
    <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        we have {this.state.images.length} photos
        <ImageList />
    </div>
    );
}
}
export default App;
