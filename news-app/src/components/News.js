import React, { Component } from 'react'
import Newsitem from '../Newsitem'
import PropTypes from 'prop-types'
import Spinner from './Spinner';




export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:6,
        category : 'general',
      
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor() {
        super();
        this.state ={
         articles: [], 
         loading : true,
         page:1, 
        
        }
       
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=59af21fb649c4d0cb83ba543fb383bee&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch (url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState ({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})

    }
   async componentDidMount(){
    this.updateNews();
    }
    handlePreviousclick=async()=>{

        this.setState({page: this.state.page -1});
        this.updateNews();
    }
    
    handleNextclick=async()=>{
       this.setState({page: this.state.page +1})
       this.updateNews();
    }
    

    render() {
        return (
            <div className='container my-3 '>
                
              <h1 className="text-center "style={{margin:'30px 0px'}}>NewsExpress-Top Headlines</h1>
              {this.state.loading?<Spinner/>:""}
           
                
              
            
                <div className='row'>
               {this.state.articles?this.state.articles.map ((element) => {
                    return <div className='col-md-4' key={element.url}>
                        <Newsitem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                }):""}
                   
             </div>
             <div className="container d-flex justify-content-between">
             <button disabled = {this.state.page<=1} type="button" class="btn btn-success" onClick={this.handlePreviousclick}> &larr;Previous</button>
             <button disabled= {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" class="btn btn-success" onClick={this.handleNextclick}> Next &rarr; </button>

             </div>
            </div>
            
        )
    }
}

export default News
