/**
 * 
 *
    "id": 1,
    "player_img": "https://i.ibb.co.com/XW3Nf5S/rashid.jpg",
    "name": "Rashid Khan",
    "country": "Afghanistan",
    "batting_style": "Right-hand bat",
    "bowling_style": "Leg break googly",
    "price": 950000,
    "rating": 4.9,
    "role": "All-rounder"
}} param0 
 *
 */

import CardPlayer from "../../ui/CardPlayer";

const Available = ({ playersData }) => {
  console.log(playersData);

  return <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">





{playersData.map(card=><CardPlayer key={card.id} {...card}/>)}

  </section>;
};

export default Available;
