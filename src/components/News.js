import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
//      articles=[
//         {
//             "source": {
//                 "id": null,
//                 "name": "India.com"
//             },
//             "author": "Zee Media Bureau",
//             "title": "LIVE Updates | IND VS AUS, 3rd ODI Cricket Match Live Score: Check Live Streaming Details - Zee News",
//             "description": "LIVE Updates | IND VS AUS, 3rd ODI Cricket Match Live Score: Check Live Streaming Details",
//             "url": "https://zeenews.india.com/cricket/live-updates/live-cricket-score-ind-vs-aus-3rd-odi-2023-cricket-match-today-india-vs-australia-cricket-live-score-and-updates-chennai-stadium-rohit-sharma-steve-smith-2586363",
//             "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/03/21/1171103-3rdodi.jpeg",
//             "publishedAt": "2023-03-22T02:23:10Z",
//             "content": null
//         },
//         {
//             "source": {
//                 "id": "espn-cric-info",
//                 "name": "ESPN Cric Info"
//             },
//             "author": null,
//             "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//             "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//             "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//             "publishedAt": "2020-04-27T11:41:47Z",
//             "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//         },
//         {
//             "source": {
//                 "id": "espn-cric-info",
//                 "name": "ESPN Cric Info"
//             },
//             "author": null,
//             "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//             "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//             "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//             "publishedAt": "2020-03-30T15:26:05Z",
//             "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//         },
//         {
// "source": {
//     "id": null,
//     "name": "Hindustan Times"
//     },
//     "author": "HT Entertainment Desk",
//     "title": "Pols aagai pols: Kangana Ranaut warns Diljit Dosanjh he will be arrested - Hindustan Times",
//     "description": "Kangana Ranaut has shared a post on Twitter and Instagram about Diljit Dosanjh, warning him that he will be arrested soon.  | Bollywood",
//     "url": "https://www.hindustantimes.com/entertainment/bollywood/pols-aagai-pols-kangana-ranaut-warns-diljit-dosanjh-he-will-be-arrested-for-supporting-khalistanis-101679456024148.html",
//     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/22/1600x900/kangana_ranaut_1679457962576_1679457962918_1679457962918.png",
//     "publishedAt": "2023-03-22T04:09:02Z",
//     "content": "Kangana Ranaut has once again trained her guns at Diljit Dosanjh. Amid the crackdown on radical Sikh preacher and Waris Punjab De chief Amritpal Singh by Punjab Police, Kangana posted a warning for a… [+2457 chars]"
//         }
//     ]
articles =[]
    constructor(){
        super();
        this.state = {
            articles: this.articles,
        } 
    }
    async componentDidMount(){
        console.log("cdm")
        let url =  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bc4247142465429a9da629633748c9aa"
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)
        this.setState({articles:parseData.articles})
    }
    render(){
        console.log(this.state)
        return(
        <div className="container">
            <h1>News - Top Headlines</h1>
        <div className="row">
            {this.state.articles.map((element) =>
             <div className="col-md-4" key={element.url} style={{marginBottom:'10px'}}>
               <NewsItem title={element.title?element.title.slice(0,40):""}  description = {element.description?element.description.slice(0,70):""} imageUrl ={element.urlToImage?element.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} newsUrl={element.url}/>
             </div>
            )}
        </div>
</div> 
    )
  }
}
export default News
