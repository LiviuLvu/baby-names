import React, { Component } from 'react';
import './App.css';
import NamesList from './components/NamesList';
import Credit from './components/Credit';
import Search from './components/Search';
import ShortList from './components/ShortList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      favourites: []
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  addFavourite(id) {
    if(this.state.favourites.indexOf(id) === -1) {
      const favList = this.state.favourites.concat([id]);
      this.setState({
        favourites: favList
      });
    }
  }

  removeFavourite(id) {
    if(this.state.favourites.indexOf(id) >= 0) {
      const favList = this.state.favourites;
      const willBeDeleted = favList.indexOf(id);
      favList.splice(willBeDeleted, 1);
      this.setState({
        favourites: favList
      });
    }
  }

  render() {
    return(
      <div>
        <Search
          filterUpdate={this.filterUpdate.bind(this)} 
          filterText={this.state.filterText} />
        <main>
          <ShortList 
            favourites={this.state.favourites}
            data={this.props.data}
            removeFavourite={this.removeFavourite.bind(this)}
          />
          <NamesList 
            filterText={this.state.filterText}
            addFavourite={this.addFavourite.bind(this)} 
            data={this.props.data}
          />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
