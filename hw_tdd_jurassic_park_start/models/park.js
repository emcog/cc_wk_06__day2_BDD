const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.newDinosaur = function(dinosaur){
    this.dinosaur = dinosaur;
    this.dinosaurs.pop(this.dinosaur)
}

module.exports = Park;