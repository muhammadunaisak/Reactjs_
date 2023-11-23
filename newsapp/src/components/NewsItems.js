import React from 'react'
import './newsitems.css'




const NewsItems = ({title,description ,url,urlToImage}) => {
  return (
    <div className="news-app">
        <div className="news-item">
            <img className="news-img" src={urlToImage} alt={urlToImage}/>
            <h1><a href={url
            }>{title}</a></h1>
            <p>{description}</p>


        </div>

    </div>
  )
}

export default NewsItems