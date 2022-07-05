function carModelAlphabatically(inventory){

    inventory.sort(function(a, b) {
          let data1 = a['car_model'].toLowerCase(); 
          let data2 = b['car_model'].toLowerCase();
          if (data1 < data2) {
            return -1;
          }
          if (data1 > data2) {
            return 1;
          }
          return 0;
      });
      console.log(inventory)
  
  }
  module.exports = carModelAlphabatically;
  
  