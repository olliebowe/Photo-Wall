import React from "react";
import { Component } from "react";
import Photo from "./Photo";

class PhotoWall extends Component{

    render(){
        return(
            <div className='photogrid' > 
              {this.props.posts.map((post, index) => <Photo  key={index} post={post} />)} 
            </div>


        )
    }
}

export default PhotoWall