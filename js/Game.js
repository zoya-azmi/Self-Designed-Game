class Game {
	constructor(){
	}

	getState(){
		var gameStateRef  = database.ref('gameState');
		gameStateRef.on("value",function(data){
			gameState = data.val();
		})
	}

	update(state){
		database.ref('/').update({
			gameState: state
		});
	}

	async start(){
		if(gameState === 0){
			player = new Player();
			var playerCountRef = await database.ref('playerCount').once("value");
			if(playerCountRef.exists()){
				playerCount = playerCountRef.val();
				player.getCount();
			}
			form = new Form();
			form.display();
		}

		//player1 = createSprite(100,200,50,50);
		//player2 = createSprite(200,200,50,50);
		//player3 = createSprite(300,200,50,50);
		//player4 = createSprite(400,200,50,50);
	}
	play(){
		form.hide();
		for(var i = 0;i<500;i=i+50){
			line1 = createSprite(i,500,50,50);
		}
		drawSprites();
	}
}