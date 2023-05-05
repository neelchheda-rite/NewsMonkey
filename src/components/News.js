import React, {Component} from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
articles = [
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "SRH vs KKR Live Score, IPL 2023: Brook aims to repeat heroics vs Kolkata - Hindustan Times",
        "description": "SRH vs KKR Live Score, IPL 2023: Sunrisers Hyderabad will take on Kolkata Knight Riders in a re-match in Hyderabad. Follow live score of today's IPL match.",
        "url": "https://www.hindustantimes.com/cricket/srh-vs-kkr-live-score-ipl-2023-sunrisers-hyderabad-vs-kolkata-knight-riders-todays-ipl-match-47-latest-scorecard-updates-101683190912223.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/05/04/1600x900/markram_rana_1683191846341_1683191882171.jpg",
        "publishedAt": "2023-05-04T12:19:22Z",
        "content": "SRH: Mayank Agarwal, Abhishek Sharma, Rahul Tripathi, Aiden Markram(c), Heinrich Klaasen(w), Harry Brook, Abdul Samad, Mayank Markande, Bhuvneshwar Kumar, Akeal Hosein, Umran Malik, Marco Jansen, T N… [+497 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "FDA approves first adult RSV vaccine - KIII 3 News",
        "description": "Dr. Salim Surani joined First Edition to explain what this could mean for kids, who are most susceptible to the virus.",
        "url": "https://www.youtube.com/watch?v=6mXD7OfmbX4",
        "urlToImage": "https://i.ytimg.com/vi/6mXD7OfmbX4/hqdefault.jpg",
        "publishedAt": "2023-05-04T11:46:10Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Adani Enterprises Q4 Profit More Than Doubles To Rs 722 Crore - NDTV Profit",
        "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
        "url": "https://www.ndtv.com/",
        "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
        "publishedAt": "2023-05-04T11:30:00Z",
        "content": "If you are a climate change warrior or know someone who is doing incredible work in this space, send us your entries and we'll bring the most innovative stories to the world."
    },
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": null,
        "title": "Russia's War in Ukraine Latest News Updates: May 4, 2023 - Bloomberg",
        "description": null,
        "url": "https://www.bloomberg.com/news/articles/2023-05-04/ukraine-latest-kyiv-shoots-down-drones-zelenskiy-to-the-hague",
        "urlToImage": null,
        "publishedAt": "2023-05-04T11:13:45Z",
        "content": "To continue, please click the box below to let us know you're not a robot."
    }, {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Arvind Ojha",
        "title": "Dreaded gangster Anil Dujana killed in encounter with UP Police - India Today",
        "description": "Dreaded gangster Anil Dujana was killed in an encounter with the Uttar Pradesh Special Task Force in Meerut on Thursday evening.",
        "url": "https://www.indiatoday.in/india/story/gangster-anil-dujana-killed-encounter-meerut-uttar-pradesh-police-2368508-2023-05-04",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/whatsapp_image_2023-05-04_at_16.30.25-sixteen_nine.jpeg?VersionId=WBysVB4wcoMrjDG_Monp3iKcMYTOtr2U",
        "publishedAt": "2023-05-04T11:02:34Z",
        "content": "By Arvind Ojha: Gangster Anil Dujana was killed in an encounter with the Uttar Pradesh Special Task Force in Meerut on Thursday. \r\nDujana had 62 cases registered against him, including that of murder… [+2147 chars]"
    }, {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Sports Desk",
        "title": "Wrestlers Protest Live Updates: Protesting wrestlers threaten to return medals, Bajrang Punia makes an appeal - The Indian Express",
        "description": "Wrestlers Protest in Delhi Live Updates: The latest confrontation seemed to have started when the wrestlers tried to bring beds to the protest site.",
        "url": "https://indianexpress.com/article/sports/sport-others/india-women-wrestlers-protest-against-wfi-resident-brij-bhushan-sharan-singh-at-jantar-mantar-new-delhi-8591177/",
        "urlToImage": "https://images.indianexpress.com/2023/05/wrestler-protest-live.jpg",
        "publishedAt": "2023-05-04T11:00:34Z",
        "content": "In a press conference this morning, Vinesh Phogat detailed the scuffle between the protesting wrestlers and the Delhi Police:\r\n“Lots of rain yesterday, and the roads were full of water, so we weren’t… [+1223 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Jagran.com"
        },
        "author": "JE News Desk",
        "title": "In A First, Astronomers Observe Sun-Sized Dying Star Swallowing Planet As Big As Jupiter - Jagran English",
        "description": "The researchers revealed that when the bigger star puffs up with ageing and grows a million times its original size as it runs out of fuel it engulfs all the planets around it",
        "url": "https://english.jagran.com/world/in-a-first-astronomers-observe-sun-sized-dying-star-swallowing-planet-as-big-as-jupiter-10076396",
        "urlToImage": "https://imgeng.jagran.com/images/2023/may/star swallow1683196844075.jpg",
        "publishedAt": "2023-05-04T10:34:00Z",
        "content": "In a first, a team of scientists observed a dying star consuming a Jupiter-size planet. The star was same as the size of the sun, and its age was nearly 10 billion years.\r\nAccording to a report by th… [+1664 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "COLOSSAL 180-foot asteroid speeding towards Earth at 81907 kmph today, NASA warns - HT Tech",
        "description": "NASA has issued a warning regarding an asteroid that is rushing towards a very close approach to Earth. This 180-foot wide asteroid has been named 2023 HZ4.",
        "url": "https://tech.hindustantimes.com/tech/news/colossal-180-foot-asteroid-speeding-towards-earth-at-81907-kmph-today-nasa-warns-71683196191393.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/05/04/1600x900/asteroid-6155562_640_1683023354133_1683196353840.jpg",
        "publishedAt": "2023-05-04T10:33:14Z",
        "content": "An enormous asteroid is currently headed towards Earth, and what's concerning is that it's predicted to come perilously close! According to NASA's Jet Propulsion Laboratory, three asteroids are due t… [+1763 chars]"
    }, {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "\"I Cried All Day\": Serbia Reels After Deadly School Shooting - NDTV",
        "description": "Serbia Shooting: Serbia was in mourning on Thursday a day after a 13-year-old suspect shot dead eight fellow students and a security guard after allegedly drawing up a kill list.",
        "url": "https://www.ndtv.com/world-news/serbia-school-shooting-serbia-reels-after-deadly-school-shooting-i-cried-all-day-4004342",
        "urlToImage": "https://c.ndtvimg.com/2023-05/81fausbg_serbia-school-shooting-afp_625x300_03_May_23.jpg",
        "publishedAt": "2023-05-04T10:33:00Z",
        "content": "Serbia Shooting: Serbia Police said a seventh-grade student had been arrested.\r\nBelgrade, Serbia: Serbia was in mourning on Thursday a day after a 13-year-old suspect shot dead eight fellow students … [+2577 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Reuters",
        "title": "Russia accuses US of being behind alleged Kremlin drone attack - Hindustan Times",
        "description": "Ukraine has denied involvement in the incident in the early hours of Wednesday, when video footage showed two flying objects approaching the Kremlin. | World News",
        "url": "https://www.hindustantimes.com/world-news/kremlin-drone-attack-on-putins-residence-russia-accuses-us-101683195239425.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/05/04/1600x900/vladimir_putin_1667475915496_1683195299977.jpg",
        "publishedAt": "2023-05-04T10:31:24Z",
        "content": "Russia accused the United States on Thursday of being behind what it says was a drone attack on the Kremlin intended to kill President Vladimir Putin.\r\nRussian President Vladimir Putin (Reuters)\r\nKre… [+1297 chars]"
    }, {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "The Japanese diet can be the remedy for fatty liver disease complication - Times of India",
        "description": "​A new study published in MDPI journal has found a close association between Japanese diet and lower risk of advanced liver fibrosis in patients with non alcoholic fatty liver disease.​",
        "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/the-japanese-diet-can-be-the-remedy-to-fatty-liver-disease-complication/photostory/99984963.cms",
        "urlToImage": "https://static.toiimg.com/photo/99985020.cms",
        "publishedAt": "2023-05-04T10:30:00Z",
        "content": "So, how is the Japanese diet which essentially comprises fish helps in recovering liver damage? \r\nThe Japanese diet pattern is a food pattern that consists mainly of fish and shellfish, and is rich i… [+1097 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Jyoti Banthia",
        "title": "HDFC Q4 Results: Firm announces dividend, check details here | Mint - Mint",
        "description": "HDFC has set May 16, 2023 as the record date for the payment of the dividend.",
        "url": "https://www.livemint.com/companies/news/hdfc-q4-results-firm-announces-dividend-check-details-here-11683191296643.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/05/04/600x338/hdfc_1683195778699_1683195778879.jpg",
        "publishedAt": "2023-05-04T10:23:05Z",
        "content": "Housing Development Finance Corporation (HDFC) on Thursday declared a interim dividend of 44 per equity share of face value of 2 each for the financial year ended March 31, 2023. Apart from this, the… [+1862 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Rezaul H Laskar",
        "title": "Pakistan FM Bilawal Bhutto Zardari arrives in Goa for SCO meeting - Hindustan Times",
        "description": "People familiar with the matter said there was no proposal for a bilateral meeting between Bhutto Zardari and Jaishankar. However, the possibility of the two ministers coming face to face at the dinner at Taj Exotica Resort on Thursday evening could not be ru…",
        "url": "https://www.hindustantimes.com/india-news/bilawal-bhutto-zardari-attends-sco-meet-in-india-first-pakistani-foreign-minister-to-visit-in-12-years-101683194559285.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/05/04/1600x900/Pakistan-foreign-minister-Bilawal-Bhutto-Zardari--_1683194550458.png",
        "publishedAt": "2023-05-04T10:02:38Z",
        "content": "Bilawal Bhutto Zardari arrived in Goa on Thursday afternoon to attend a Shanghai Cooperation Organisation (SCO) meet, becoming the first Pakistani foreign minister to visit India in almost 12 years, … [+2965 chars]"
    }, {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Took decision to quit as NCP chief for party's future, Sharad Pawar tells protesting workers - Times of India",
        "description": "India News: Two days after resigning as the Nationalist Congress Party (NCP) president, Sharad Pawar on Thursday met protesting party workers in Mumbai and said t",
        "url": "https://timesofindia.indiatimes.com/india/took-decision-to-quit-as-ncp-chief-for-partys-future-sharad-pawar-tells-protesting-workers/articleshow/99985045.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-99985803,width-1070,height-580,imgsize-30700,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-05-04T09:59:00Z",
        "content": "Rain brings respite from heat in north India, some other parts of country"
    }, {
        "source": {
            "id": null,
            "name": "Daijiworld.com"
        },
        "author": null,
        "title": "NIA files supplementary charge sheet in Praveen Nettaru murder case - Daijiworld.com",
        "description": "New Delhi, May 4 (IANS): The National Investigation Agency (NIA) on Thursday said that they have filed a supplementary charge sheet against two more accused in connection with the 2022 murder case of BJP Yuva Morcha leader leader Praveen Nettaru in Karnataka.…",
        "url": "https://www.daijiworld.com/news/newsDisplay?newsID=1076540",
        "urlToImage": "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/allwyn_040523_prvnt.jpg",
        "publishedAt": "2023-05-04T09:38:53Z",
        "content": "New Delhi, May 4 (IANS): The National Investigation Agency (NIA) on Thursday said that they have filed a supplementary charge sheet against two more accused in connection with the 2022 murder case of… [+1904 chars]"
    }, {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Fresh Violence In Imphal, Army Called In As Manipur Tense Over Protests - NDTV",
        "description": "The Army today held a flag march in violence-hit areas in Manipur amid an ongoing protest by tribal groups over a court order on their Scheduled Tribe status.",
        "url": "https://www.ndtv.com/india-news/army-holds-flag-march-in-violence-hit-areas-in-manipur-amid-protests-by-tribal-groups-over-court-order-on-scheduled-tribe-status-4003364",
        "urlToImage": "https://c.ndtvimg.com/2023-05/93chkj38_manipur_625x300_04_May_23.jpg",
        "publishedAt": "2023-05-04T09:28:00Z",
        "content": "Violence in Manipur: Army and Assam Rifles were called in to contain the escalating violence.\r\nImphal: The Army today held a flag march in violence-hit areas in Manipur amid an ongoing protest by tri… [+3390 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Microsoft's Bing AI Chatbot to soon let users post images, ask related questions | Mint - Mint",
        "description": "Microsoft Bing will also get features such as the ability to use third-party services like OpenTable and Wolfram Alpha through Bing chat and get answers that include videos and charts",
        "url": "https://www.livemint.com/technology/tech-news/microsofts-bing-ai-chatbot-to-soon-let-users-post-images-ask-related-questions-11683191260767.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/05/04/600x338/AP02-08-2023-000020B-0_1676557634010_1676557634010_1683191853398.jpg",
        "publishedAt": "2023-05-04T09:18:18Z",
        "content": "Microsoft is planning to add a host of new features to the OpenAI-based Bing search and chat. In an interview with Bloomberg,  Yusuf Mehdi, a Microsoft vice president said the the company may add fea… [+2058 chars]"
    }, {
        "source": {
            "id": null,
            "name": "Devdiscourse"
        },
        "author": "PTI",
        "title": "Amazon Great Summer Sale - Exclusive No Cost EMI Offers on Bajaj Finserv EMI Network Card - Devdiscourse",
        "description": "Lakhs of customers have already reaped the benefits of exclusive offers on No Cost EMI using Bajaj Finserv EMI Network Card during the Amazon Great Republic Day Sale in January this year.Customers can avail cart financing across segments such as Home, Kitchen…",
        "url": "https://www.devdiscourse.com/article/technology/2439536-amazon-great-summer-sale---exclusive-no-cost-emi-offers-on-bajaj-finserv-emi-network-card",
        "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/02_02_2021_11_31_11_4767832.jpg?width=920&format=jpeg",
        "publishedAt": "2023-05-04T08:57:25Z",
        "content": "Bajaj Finance Limited (BFL), the lending arm of Bajaj Finserv Limited and India's largest and highly diversified NBFC, is making shopping more exciting for its customers at the upcoming Amazon Great … [+3864 chars]"
    }, {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Sanstuti Nath",
        "title": "Army Chopper Crashes in J&K's Kishtwar, All 3 Onboard Evacuated; Inquiry Ordered - News18",
        "description": "This comes nearly a month after an Army Aviation Cheetah helicopter flying an operational sortie near Arunachal Pradesh’s Bomdila crashed on March 16 after losing contact with the ATC",
        "url": "https://www.news18.com/india/indian-army-helicopter-chopper-crash-jammu-kashmir-kishtwar-rescue-operation-death-toll-7717561.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/05/army-chopper-helicopter-crash-jammu-kashmir-kishtwar-168318157016x9.jpg",
        "publishedAt": "2023-05-04T07:54:00Z",
        "content": "An AHL Dhruv Helicopter of the Indian Army, with three officers onboard, crashed in the remote forested area of Kishtwar district in Jammu and Kashmir on Thursday morning.\r\nAt about 1115 hours on 04 … [+2901 chars]"
    }, {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Ileana D'Cruz Shares First Pic Of Baby Bump Since Announcing Pregnancy - NDTV Movies",
        "description": "A few days back, Ileana posted a picture on her Instagram stories, giving her fans a peek into her \"preggy perks\"",
        "url": "https://www.ndtv.com/entertainment/ileana-dcruz-shares-first-pic-of-baby-bump-since-announcing-pregnancy-4004065",
        "urlToImage": "https://c.ndtvimg.com/2023-05/6ufv2e6o_ileana-_625x300_04_May_23.jpg",
        "publishedAt": "2023-05-04T07:42:01Z",
        "content": "Image was shared by Ileana D'Cruz . (courtesy: ileana_official)\r\nNew Delhi: Ileana D'Cruz created a buzz across social media last month after she announced that she will soon be welcoming her first c… [+1754 chars]"
    }
]



    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){
        //News API only provides 100 free api hits
        const url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=49eaedd2928841fc9c0c5dbe3757a932&page=1";
        const data= await fetch(url);
        const parsedData= await data.json();
        this.setState({articles:parsedData.articles})
    }



    render() {
        return (
            <div className='container my-3'>
                <h3>NewsMonkey - Top Headlines</h3>
                <div className="row">
                    {
                    this.state.articles.map((element) => {
                        return (
                            <div className="col-md-3 my-3" key={element.url}>
                                <NewsItem  title={element.title!==null?`${element.title}...`:``}
                                    description={element.description!==null?`${element.description}...`:``}
                                    imageUrl={element.urlToImage!==null?`${element.urlToImage}`:`data:image/png;base64,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`}
                                    newsUrl={element.url!==null?`${element.url}`:``}/>
                            </div>
                        )
                    })
                }
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button"  className="btn btn-dark" >&larr; Previous</button>
                <button disabled={this.state.page>=1} type="button" className="btn btn-dark" >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
