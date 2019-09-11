import React, { Component } from 'react'
import ContentData from './content.json';

class Content extends Component {
  
  render() {
    return(
      <div>
        {ContentData.map((data, index) => {
          return <div key={data.id}> 
            <h1>{data.title}</h1>
            <p >{data.paragraph}</p>
          </div>
        })}

      </div>
    )
  }
}
console.log(ContentData[0].id)

export default Content;