import React,{Component} from 'react'

export const SimpleComponent2 = ({name}) =>  {
        return(
                <div>   
                        <h1>This is a dumb component</h1>
                        <strong dangerouslySetInnerHTML={{ __html: name}}></strong>
                </div>
        )
}