function carInfo(inventory){
    for(let i=0;i<inventory.length;i++)
    {
        if(inventory[i]['id'] === 33)
        {
            console.log(`car 33 is a  ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`)
        }
    }
}
module.exports = carInfo;


