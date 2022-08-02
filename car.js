function car(name,cc,color,price,model){
    this.Name =name;
    this.EngineCC =cc;
    this.Color = color;
    this.Price =price;
    this.Model =model;
     
     this.callmycolor = function(){
        return (`My color is ${this.Color}`);
     }
     this.CallmyEngine= function(){
        return(`my Engine is ${this.EngineCC}`);
     }
     this.CallmyNAme = function(){
        return(`My Car Name is ${this.Name}`);
     }
     this.CallmyPrice =function(){
        return(`my car Price is ${this.Price}`);

     }
     this.CallmyModel = function(){
        return(`my car model is ${this.Model}`);
     }

}
let BugattiDivo = new car(`BugattiDivo`,'7993','Black','1,350,900,000','2022');
console.log( BugattiDivo.CallmyModel())

