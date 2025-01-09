import React from 'react'
import { useNavigate } from 'react-router-dom'

const Collections = (props) => {
  const{title,image1,image2,image3,image4,image5,image6,name1,name2,name3,name4,name5,name6} = props.gentsFashion

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/men')
  }
  return (
    <div className='collectionSection'>
      <h2 className='titleWithBox'><i className='fas fa-user-tie' style={{marginRight:'10px',color:'#333'}}></i>{title}</h2>
      <div className='menImages'>
    <div className="imageWrapper" onClick={handleClick}><img src={image1} alt={title}/> <p>{name1}</p></div>
    <div className="imageWrapper" onClick={handleClick}><img src={image2} alt={title}/><p>{name2}</p></div>
    <div className="imageWrapper" onClick={handleClick}><img src={image3} alt={title}/><p>{name3}</p></div>
    <div className="imageWrapper" onClick={handleClick}><img src={image4} alt={title}/><p>{name4}</p></div>
    <div className="imageWrapper" onClick={handleClick}><img src={image5} alt={title}/><p>{name5}</p></div>
    <div className="imageWrapper" onClick={handleClick}><img src={image6} alt={title}/><p>{name6}</p></div>
    </div>
    </div>
  )
}

export default Collections
