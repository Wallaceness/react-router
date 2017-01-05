'use strict';

import React, { Component } from 'react';
import SongsContainer from '../containers/SongsContainer';

module.exports =class Album extends Component{ 
  constructor(props){
  	super(props);
  	console.log(props);
  }
  componentDidMount () {
  const albumId = this.props.routeParams.albumId;
  const selectAlbum = this.props.selectAlbum;

  selectAlbum(albumId);
}
  render(){
  (<div className="album">
    <div>
      <h3>{ selectedAlbum.name }</h3>
      <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
    </div>
    <SongsContainer songs={selectedAlbum.songs} />
  </div>);
  }
}