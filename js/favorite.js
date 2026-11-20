import { apiUrl } from "../data/data.js";


export async function setFavorite(Idchannel , status){



    try{
        const response = await fetch(`${apiUrl}/${Idchannel}`,{
                method : 'PUT',
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({isFavorite : status})
        });
        if (!response.ok)
            throw new Error (`Failed to set channel id ${Idchannel} to your favorite | Error status (${response.status})`);

    

    } catch (error) {
        console.log(error);
    }


}