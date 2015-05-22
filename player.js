var Player = (function(){
function Player (params){
	this.fullName = params.fullName;
	this.choosenOption = undefined;

}

Player.prototype.choose = funtion(options){
	var chosenIndex = parseInt(prompt(this.fullName + "0: Rock, 1: Paper, 2: Scissors"));
	this.chosenOption = options[chosenIndex];

}

Player.prototype.beats = funtion(otherPlayer){
	return this.chosenOption.beats(otherPlayer.chosenOption);

}

return Player;

})();