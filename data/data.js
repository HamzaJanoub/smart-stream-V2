export const apiUrl = "https://6af23f4642c6561ced392449.mockapi.io/channels/hamza"
const erreur = document.getElementById('error')
export async function fetchChanels() {
    try {
        const response = await fetch(apiUrl)
        if (!response.ok){
            if(response.status === 404){
                erreur.classList.remove('hidden')
            throw new Error('Channels not found (404)')
        }

        if(response.status >= 500){
        erreur.classList.remove('hidden')
            throw new Error ("Server error (500)")
        }
        throw new Error(`HTTP Error: ${response.status}`)
   
    }
        const channels = await response.json()

        console.log("ID:", channels.id);
        console.log("Favorite:", channels.isFavorite);
        return channels
    
    }catch (error) {
    console.log("fetch channels failed", error)
    throw error

}finally{
    // setTimeout(()=>{

        const loading = document.getElementById('loading-screen')
        loading.classList.add('hidden')

    // },3000)
}
}



// export async function updatechannels(){
//      try{ const response = await fetch(apiUrl)
//         if(!response.ok){
//             throw new Error(`HTTP Error: ${response.status}`)
//         }
      
//      const channels = await response.json()
       
//         for (let channel of channels){
//             const updatedata  = await fetch(`${apiUrl}/${channel.id}`,{
//             method : "PUT",
//             headers:{"Content-type": "application/json"},
//             body: JSON.stringify({...channel,  isFavorite: false,  isBlacklisted: false })
//         })
//                  if(!updatedata.ok){
//                      throw new Error(`Failed to update ${channel.name}`)
//                  }
//         }
//         console.log(`All good :)`)
//     }catch(error){
//         console.error("Update failed",error)
//         throw error
//     }

// }
