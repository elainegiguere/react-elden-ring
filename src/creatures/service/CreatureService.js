class CreatureService {
    constructor() {}

    url = "https://eldenring.fanapis.com/api/creatures";

    async getCreatures(){
        try{
            const response = await fetch (this.url);
            if(!response.ok) throw new Error (response.status);
            const data = await response.json();

            return data.data;
        } catch (e){
            console.error(e);

            return {
                data:[],
            };
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