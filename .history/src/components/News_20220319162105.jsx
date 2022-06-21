// import React, { Component } from "react"; class base
import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
// export class News extends Component {
//   // static defaultProps ={ ==========================....>class base     in function we will define these in last
//   //   country : 'in',
//   //   pageSize : 8,
//   //   category :"general",

  
//   // }
//   // static PropsTypes ={
//   //   country : PropTypes.string,
//   //   pageSize : PropTypes.number,
//   //   category: PropTypes.string,
    

//   // }

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalReasult, setTotalReasult] = useState(0)
    // document.title = `${this.capitalizeFirstLetter(props.category)}-LatestNews;`

    const capitalizeFirstLetter  =(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);

   }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: false,===============class base
  //     page: 1,
  //     totalResults :0
  //   };
  //   document.title = `${this.capitalizeFirstLetter(props.category)}-LatestNews;`
  // }
  // async updateNews (){
    const updateNews= async ()=>{
  props.setProgress(10);
  const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=74d2dd5553924d7c9adadba75aa5208d&page=${page}&pageSize=${props.pageSize}`;
  // this.setState({loading:true}); .........> class base
  setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let pareseData = await data.json()
    props.setProgress(70);
    setArticles(pareseData.articles)
    setTotalReasult(pareseData.totalResults)
    setLoading(false)
    // this.setState({
    //   articles: pareseData.articles,
    //   totalResults: pareseData.totalResults,
    //   loading:false,
     
    // })
    props.setProgress(100);
  }
  // async componentDidMount() { class base======>  
  //   // let url =
  //   //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=74d2dd5553924d7c9adadba75aa5208d&page=1&pageSize=${props.pageSize}`;
  //   //   this.setState({loading:true});
  //   // let data = await fetch(url);
  //   // let pareseData = await data.json();
  //   // console.log(pareseData);
  //   // this.setState({
  //   //   articles: pareseData.articles,
  //   //   totalResults: pareseData.totalResults,
 
  //   // });
  //   this.updateNews();

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-LatestNews;`
      updateNews();
      //eslint-disable-next-line
    },[])

  
  // }
  //  hendelOnClickNext = async () => {
  //    console.log("ok")
  //  if (!this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) {
  //  } else {
  //    let url =
  //     `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=74d2dd5553924d7c9adadba75aa5208d&page=${this.state.page+1}&pageSize=${props.pageSize}`;
  //      this.setState({loading:true});
        
  //    let data = await fetch(url);
  //    let pareseData = await data.json();
  //    this.setState({
  //      page: this.state.page + 1,
  //     articles: pareseData.articles,
  //     loading : false
  //   });
  // }
  //    this.setState({page: this.state.page + 1});
  //    this.updateNews();
  //  }
  //  hendelOnClickPreviews = async () => {
    
  
  //  let url =
  //    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=74d2dd5553924d7c9adadba75aa5208d&page=${this.state.page-1}&pageSize=${props.pageSize}`;
  //    this.setState({loading:true});
  //  let data = await fetch(url);
  //  let pareseData = await data.json();
  //  console.log(pareseData);
  //  this.setState({
  //    page: this.state.page - 1,
  //   articles: pareseData.articles,
  //    loading:false
  //  });
  //      this.setState({page: this.state.page - 1});
  
  //      this.updateNews();
  // }
  const fetchMoreData = async() => {
    // this.setState({page: this.state.page  + 1})
    
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=74d2dd5553924d7c9adadba75aa5208d&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let pareseData = await data.json()
    setArticles(articles.concat(pareseData.articles))
    setTotalReasult(pareseData.totalResults)
  };
 
  
    return (
      <>
        <h2 className="text-center"style={{margin:'35px 0px',marginTop:"90px"}}>Latest News - Top Headlines from {capitalizeFirstLetter(props.category)}</h2>
      {loading && <Spiner />}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalReasult}
          loader={<Spiner/>}>
          <div className="container">
        <div className="row">

          {articles.map((element) => {
            return <div className="col-md-4 " key={element.url}>
                <NewsItem title={element.title ? element.title: " "}
                  description={element.description? element.description:" "}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author}date={element.publishedAt}
                  source={element.source.name}/>
              </div>
          
          })}
        </div>

        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.hendelOnClickPreviews}
          >
            {" "}
            &larr;Previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.hendelOnClickNext}
          >
            {" "}
            &rarr; Next
          </button>
        </div> */}
       </>
    );
  }
// }
News.defaultProps ={
    country : 'in',
    pageSize : 8,
    category :"general",

  
  }
   News.PropsTypes={
    country : PropTypes.string,
    pageSize :PropTypes.number,
    category: PropTypes.string,
    

   }
  
export default News;
