import Player from "./Player";

export class Team{
    players: Player[];
    teamName: string;
    constructor(players: Player[], teamName: string){
        this.players = players;
        this.teamName = teamName;
    }
    addPlayer(newPlaya: Player):void{
        this.players.push(newPlaya);
    }
    removePlayer(removePlaya: Player.players):void{
        this.players.splice(removePlaya, 1);
    }
    setActive(playa: Player.players, benched: boolean):void{
        this.players[playa].active = benched;
    }
    getPlayerCount():number{
        return this.players.length;
    }
    logActivePlayers():number{
        
    }
    getActivePlayers():Player[]{
        return this.players.filter((p, i) => p.active);
    }
}