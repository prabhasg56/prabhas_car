function carInfo(inventory, Id){
   if((inventory==undefined)&&(Id==undefined)) {
    return [];
   }
   else{
    for(let i=0;i<inventory.length;i++)
     {
         if(inventory[i]['id'] === Id)
         {
            return inventory[i];
         }
     }
   } 
 }
module.exports = carInfo;


