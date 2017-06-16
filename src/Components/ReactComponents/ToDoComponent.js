import React,{Component} from 'react'

export default class ToDoComponent   {
        
        notify = () => {
                alert("event attached ");
        }

        return(
                <div>   
                        <h1>This is a dumb component</h1>
                        <button onClick =  {() => this.notify()} >{name}</button>
                </div>
        )
}