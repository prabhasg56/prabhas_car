function carInfo(inventory, Id){
   
    if((Array.isArray(inventory))==true){
        
        if(((inventory==undefined)&&(Id==undefined))||(Id==undefined)) {
    
            return [];
        }
        else{
            for(let i=0;i<inventory.length;i++)
            {
                if(inventory[i]['id'] == Id)
                {
                     return inventory[i];
                }
            }
        } 
    }
    else{
        return false;
     }
 
}
 module.exports = carInfo;


