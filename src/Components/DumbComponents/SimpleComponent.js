import React,{Component} from 'react'

export const SimpleComponent = ({name}) =>  {
        
        const notify = () => {
                alert("event attached ");
        }

        return(
                <div>   
                        <h1>This is a dumb component</h1>
                        <button onClick =  {() => notify()} >{name}</button>
                </div>
        )
}