import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Hannah Knowles, Maegan Vazquez, Marianne LeVine, Azi Paybarah, Dylan Wells, Amy B Wang, Ann E. Marimow, Patrick Marley, Matt Viser, Philip Bump, Aaron Blake, HyoJung Kim, Amber Phillips, Mariana Alfaro, Caroline Kitchener, Josh Dawsey, Meryl Kornfield",
      "title": "Trump returned to Iowa, Biden spoke out on democracy - The Washington Post",
      "description": "Live updates from the 2024 campaign trail with the latest news on presidential candidates, polls, primaries and more.",
      "url": "https://www.washingtonpost.com/politics/2024/01/05/election-2024-campaign-updates/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/01-05-2024/t_d720b6f05efa4375bcbd67a8989f076f_name_CGSZVTZBSEXW4WTN3RPMGLWACM_scaled.jpg&w=1440",
      "publishedAt": "2024-01-06T07:52:46Z",
      "content": null
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "US Supreme Court to hear Trump appeal of Colorado ballot disqualification - Reuters",
      "description": null,
      "url": "https://www.reuters.com/legal/us-supreme-court-hear-trump-appeal-colorado-ballot-disqualification-2024-01-05/",
      "urlToImage": null,
      "publishedAt": "2024-01-06T06:57:00Z",
      "content": null
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "James Hill",
      "title": "4 new batches of documents naming Jeffrey Epstein's associates released - ABC News",
      "description": "The new release includes 132 documents.",
      "url": "https://abcnews.go.com/US/2-new-batches-documents-naming-jeffrey-epsteins-associates/story?id=106140893",
      "urlToImage": "https://i.abcnewsfe.com/a/62e523b1-5c89-4f82-80f7-06a7f8b18fd4/Jeffrey-Epstein-ap-gmh-240104_1704386953481_hpMain_16x9.jpg?w=992",
      "publishedAt": "2024-01-06T03:50:16Z",
      "content": "Four more tranches of court records pertaining to the late sex offender Jeffrey Epstein were unsealed Friday.\r\nA total of 132 documents were released Friday. About 19 documents were released Thursday… [+3810 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "MARI YAMAGUCHI",
      "title": "Japanese safety experts search for voice data as workers clear plane debris from runway collision - The Associated Press",
      "description": "Transport safety officials are searching for the voice recorder from a Japan Airlines airliner that caught fire after a collision with a coast guard plane. They hope the recorder will containe crucial information to determine the cause of the clash at Tokyo's…",
      "url": "https://apnews.com/article/japan-haneda-runway-fire-jal-coast-guard-airbus-c7f06e9e73fb36245d6407dfce688535",
      "urlToImage": "https://dims.apnews.com/dims4/default/c110e98/2147483647/strip/true/crop/5000x2813+0+260/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2Ff4%2F71e9478ed8da89701fb5267f0b18%2F1fabb87512d3491f91e8525295b4d43e",
      "publishedAt": "2024-01-06T03:37:00Z",
      "content": "Transport safety officials searched for a voice recorder from the severely burned fuselage of a Japan Airlines plane, seeking crucial information on what caused a collision with a small coast guard p… [+3743 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters UK",
      "title": "Britain hit by flooding after heavy rain swells major rivers - Reuters UK",
      "description": null,
      "url": "https://www.reuters.com/world/uk/britain-hit-by-flooding-after-heavy-rain-swells-major-rivers-2024-01-05/",
      "urlToImage": null,
      "publishedAt": "2024-01-06T03:20:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Heat.com"
      },
      "author": "Marc D'Amico",
      "title": "Keys to the Game: Celtics 126, Jazz 97 - NBA.com",
      "description": null,
      "url": "https://www.nba.com/celtics/news/gamerecap-keys-20250105-utabos",
      "urlToImage": "https://cdn.nba.com/teams/uploads/sites/1610612738/2024/01/jruekornet.jpg",
      "publishedAt": "2024-01-06T03:12:00Z",
      "content": "Boston came out hot Friday night. Utah did not.\r\nAnd thats an understatement.\r\nThe Jazz were as cold as an ice-tipped mountain throughout the majority of the first half. So cold, in fact, that they m… [+3119 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Joseph Pisani",
      "title": "Bill Ackman's Wife, Neri Oxman, Apologizes for Plagiarism in Her 2010 Dissertation - The Wall Street Journal",
      "description": "The billionaire pushed for ouster of Claudine Gay from Harvard over plagiarism allegations, campus antisemitism policies",
      "url": "https://www.wsj.com/us-news/bill-ackman-wife-neri-oxman-apologizes-for-plagiarism-in-her-2010-dissertation-ac01f4ce",
      "urlToImage": "https://images.wsj.net/im-908720/social",
      "publishedAt": "2024-01-06T03:10:00Z",
      "content": null
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Erin Jensen",
      "title": "Gypsy-Rose Blanchard new documentary: 'Prison Confessions' bombshells - USA TODAY",
      "description": "Gypsy-Rose Blanchard reveals the depths of the abuse she suffered at the hands of her mother, \"Dee Dee\" Blanchard, who she arranged to have killed.",
      "url": "https://www.usatoday.com/story/entertainment/tv/2024/01/05/gypsy-rose-blanchard-lifetime-documentary-bombshells/72083380007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/03/USAT/72099391007-134-kb-dee-dee-gypsyscaled.jpeg?crop=1635,918,x0,y886&width=1635&height=918&format=pjpg&auto=webp",
      "publishedAt": "2024-01-06T03:03:12Z",
      "content": "Gypsy-Rose Blanchard is now free from the confines of a Missouri prison and finding her voice and a sizeable audience on social media. Starting Friday, shell experience a new kind of release: reveali… [+4820 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    }
  ]
  constructor() {
    super();
    this.state={
      articles :this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
        <NewsItem title="My Title" desc="My Desc" imgUrl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/01-05-2024/t_d720b6f05efa4375bcbd67a8989f076f_name_CGSZVTZBSEXW4WTN3RPMGLWACM_scaled.jpg&w=1440" newsUrl="TODO" />
        </div>
        <div className="col-md-4">
        <NewsItem title="My Title" desc="My Desc" />
        </div>
        <div className="col-md-4">
        <NewsItem title="My Title" desc="My Desc"  />
        </div>
        </div>
      </div>
    );
  }
}
