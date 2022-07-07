function carModelAlphabatically(inventory){
  if((inventory.length!==undefined) && (inventory!==0)){
      let models = []
      for(let i=0; i<inventory.length; i++){
          models.push(inventory[i].car_model)
      }
      let sortedData = models.sort()
      console.log(sortedData);
  }
  else{
      return []
  }
  
}
module.exports = carModelAlphabatically;
  
  
