class CreatureService {
    constructor() {}

    url = "https://eldenring.fanapis.com/api/creatures";

    async getCreatures(){
        try{
            const response = await fetch (this.url);
            if(!response.ok) throw new Error (response.status);
            const creatures = await response.json();

            return creatures.data;
        } catch (e){
            console.error(e);

            return [];
            
        }
    }
    
    async getCreatureWithReturnedURL (url){
        try{
            const response = await fetch(url);
            if (!response.ok) throw new Error (response.statusText);
            return await response.json();
        } catch (e){
            console.error(e);

            return{};
        }
        }
    }

    export default CreatureService;