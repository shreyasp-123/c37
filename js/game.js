class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value", (data) => {
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    async start(){
        if(gameState === 0){
            player = new Player()
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCountRef.val()
                player.getCount()
            }
            form = new Form
            form.display()
        }
    }

    play(){
        form.hide()
        Player.getPlayerInfo()

        if(allPlayers !== undefined){
            background(255)
            var displayPosition = 100
            for(var plr in allPlayers){
                if(plr === 'player'+player.index) {
                    fill('red')
                } else {
                    fill('black')
                }
                displayPosition = displayPosition + 30
                textSize(30)
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120 , displayPosition)
            }
        }
        
        if(keyDown(UP_ARROW) && player.index !== null){
            player.distance += 10
            player.update()
        }
    
    }
}