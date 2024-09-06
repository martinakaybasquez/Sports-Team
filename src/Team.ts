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
}