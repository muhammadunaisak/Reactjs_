import React,{useState,useEffect} from 'react'
import NewsItems from './NewsItems'
import axios from 'axios'

const NewsList = () => {
    const [articles, setArticles] =useState([])


    useEffect(() => {
        const getArticles = async () => {
            const response =  await axios.get('https://newsapi.org/v2/everything?q=smartphone&apiKey=d7b68a62abd6433180c49841d8ea2d35')
console.log(response)
setArticles(response.data.articles)

        }
        getArticles()
       
    },[])
  return (
    <div>
        {articles.map(articles =>{
            return(
                <NewsItems
                title={articles.title}
                description={articles.description}
                url={articles.url}
                urlToImage={articles.urlToImage}
                />

            )
        })}

    </div>
  )
}

export default NewsList