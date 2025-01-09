import React from 'react'
import WomanCollection from './WomanCollection'

const WomanCollectionPage = (props) => {
  const{title,image1,image2,image3,image4,image5,image6,name1,name2,name3,name4,name5,name6} = props.ladiesFashion
  
return (
  <div className='menPage'>
    <h1 className='menPageTitle'><i className='fas fa-user' style={{marginRight:'10px',color:'#333'}}></i>Woman's Collection</h1>
    <div className='menPageImages'>
  <div className="pageImageWrapper" ><img src={image1} alt={title}/> <p>{name1}</p></div>
  <div className="pageImageWrapper" ><img src={image2} alt={title}/><p>{name2}</p></div>
  <div className="pageImageWrapper" ><img src={image3} alt={title}/><p>{name3}</p></div>
  <div className="pageImageWrapper" ><img src={image4} alt={title}/><p>{name4}</p></div>
  <div className="pageImageWrapper" ><img src={image5} alt={title}/><p>{name5}</p></div>
  <div className="pageImageWrapper" ><img src={image6} alt={title}/><p>{name6}</p></div>
  </div>
    
  </div>
  )
}

export default WomanCollectionPage
