import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "genral",
  };
  static PropsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey:PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-LatestNews;`;
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=74d2dd5553924d7c9adadba75aa5208d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let pareseData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: pareseData.articles,
      totalResults: pareseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=74d2dd5553924d7c9adadba75aa5208d&page=1&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    // let data = await fetch(url);
    // let pareseData = await data.json();
    // console.log(pareseData);
    // this.setState({
    //   articles: pareseData.articles,
    //   totalResults: pareseData.totalResults,

    // });
    this.updateNews();
  }
  //  hendelOnClickNext = async () => {
  //    console.log("ok")
  //  if (!this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
  //  } else {
  //    let url =
  //     `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=74d2dd5553924d7c9adadba75aa5208d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
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
  //    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=74d2dd5553924d7c9adadba75aa5208d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
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
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=74d2dd5553924d7c9adadba75aa5208d&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let pareseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(pareseData.articles),
      totalResults: pareseData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          Latest News - Top Headlines from{" "}
          {this.capitalizeFirstLetter(this.props.category)}
        </h2>
        {this.state.loading && <Spiner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spiner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 " key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : " "}
                      description={
                        element.description ? element.description : " "
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
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
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
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
}

export default News;
