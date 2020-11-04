import React, {Component} from 'react'
import './Alert.css'

export default function Alert(props){
  
  return (
    
      <div className='alert-window'>
        {props.msg}
      </div>
    
  ) 
}