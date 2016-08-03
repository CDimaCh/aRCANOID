var _render = (function (){
	return window.requestAnimationFrame ||
	window.webkitRequesAnimationFrame   ||
	window.mozRequesAnimationFrame      ||
	window.oRequesAnimationFrame        ||
	window.msRequesAnimationFrame       ||
	function(callback) {
		setTimeout( 1000/60 );
	};
})();

var _engine = function (){
	console.log("Игровой цикл не реализирован");
};

var startGame = function (game){
	if(typeof game == 'function'){
		_engine = game;
	}
	gameLoop();
};

var setGame = function (game){
	if(typeof game == 'function'){
		_engine = game;
	}
};

var gameLoop = function (){
	_engine();
	_render(gameLoop);
};