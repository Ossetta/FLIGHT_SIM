import React from 'react'
import {useEffect} from 'react'
import Granim from "granim"
import styles from './styles.css'
//testing
const Background = () => {

    {useEffect (() => {
        new Granim({
          element:"#logo-canvas",
          direction:"left-right",
          opacity: [1,1],
          states:{
              "default-state":{
                  gradients:[
                      ["#ff9a9e","#ff9a9e"],
                      ["#ff9a9e","#ff9a9e"],
                      ["#ff7b59","#ff4d00"],
                      ["#8e44ad","#9b59b6"],
                      ["#ff4d00","#ff7b59"],
                      ["#ffdde1","#ff9a9e"],
                  ],
                  trasitionSpeed: 2000,
              },
          },
        });
      },[]);
    }
     
  return (
    <React.Fragment>
        <canvas id ="logo-canvas" className = "bloc-logo"/>
    </React.Fragment>
  )
}

export default Background
