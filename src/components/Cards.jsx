import cardInfo from './cardInfo.json';


function card({ cardName }){

  
  const selectedCard = cardInfo.cards.find(card => card.cardName === cardName);
 
    return(
      <div>
        
      {selectedCard ? (
        <img src={selectedCard.svgPath} alt={selectedCard.cardName} />
      ) : (
        <p></p>
      )}
    </div>
    )
}

export default card;