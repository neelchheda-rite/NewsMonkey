import React, {Component} from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "sport",
            "title": "WATCH | Faf intervenes as fiery Kohli loses cool in IPL post-match row",
            "description": "Indian cricket star Virat Kohli was fined on Tuesday for the second time in this IPL after a post-match altercation with former national team-mate Gautam Gambhir.",
            "url": "https://www.news24.com/sport/cricket/ipl/watch-faf-intervenes-as-fiery-kohli-loses-cool-in-ipl-post-match-row-20230502",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/825/ce547ea212ec4859a929a090fdb6f9d9.jpg",
            "publishedAt": "2023-05-02T09:35:15+00:00",
            "content": "<ul><li>Virat Kohli has copped another fine after a post-match altercation in the Indian Premier League.</li><li>Matters got so heated that Kohli's Royal Challengers Bangalore skipper, Faf du Plessis… [+2668 chars]"
        }, {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        }, {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                This is a News Component from NewsMonkey
                <div className="row">
                    {
                    this.articles.map((element) => {
                        return (
                            <div className="col-md-4 my-3">
                                <NewsItem key={element.url} title={element.title}
                                    description={element.description}
                                    imageUrl={element.urlToImage}/>
                            </div>
                        )
                    })
                }
                </div>

            </div>
        )
    }
}

export default News
