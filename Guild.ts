interface Guild {
    name: string,
    id: string,
    created: string,
    joinable: boolean,
    public: boolean,
    tag: string,
    tag_color: string,
    tag_formatted: string,
    legacy_ranking: number,
    exp: number,
    level: number,
    exp_by_game: {
        REPLAY: number,
        UHC: number,
        Paintball: number,
        BedWars: number,
        MegaWalls: number,
        Blitz: number,
        Warlords: number,
        Skyblock: number,
        VampireZ: number,
        BuildBattle: number,
        Housing: number,
        TNT: number,
        Duels: number,
        Pit: number,
        Walls: number,
        Arena: number,
        SkyWars: number,
        CvC: number,
        MurderMystery: number,
        Prototype: number,
        Arcade: number,
        Quake: number,
        SpeedUHC:number,
        TKR: number,
        Smash: number,
        Classic: number
    },
    exp_history: any,
    description: string,
    prefferred_games: string[],
    ranks: _rank[],
    members: _member[]
}
interface _member {
    uuid: string,
    rank: string,
    joined: number,
    quest_participation: number,
    exp_history: any,
    muted_till: number
}
interface _rank {
    name: string,
    default: boolean,
    tag: string,
    created: number,
    priority: number
}