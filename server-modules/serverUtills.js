const refreshTimeStamp = (dataBase, cardId, currentTimeStamp) => {
   const repeatedCardIndex = dataBase.findIndex(card => card.id === cardId);
   console.log(repeatedCardIndex)
   dataBase[repeatedCardIndex].repeatedTimeStamp = currentTimeStamp; 
   dataBase[repeatedCardIndex].timesBeenRepeated = ++dataBase[repeatedCardIndex].timesBeenRepeated; 
}

module.exports = refreshTimeStamp;