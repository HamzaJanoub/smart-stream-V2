import {fetchChanels} from '../data/data.js'
import { loadVideoStreaming } from './stream.js'
import { setFavorite } from './favorite.js'
import { setBlacklisted } from './blackliste.js'

export async function affichage (){

    const chanellsdata = await fetchChanels()
    const chanel = document.getElementById('chanels')
    const select = document.getElementById("select-categorie")
    const search = document.getElementById('search')
    const timeEl = document.getElementById('time')


    function render (){
        let fiterByCa = filterbyCategorie(chanellsdata, select.value)
            fiterByCa = filterByName(fiterByCa,search.value)
        chanel.innerHTML=``
        timeEl.innerHTML = ``
    fiterByCa.forEach(value => {
        const chain = document.createElement('div')
        chain.innerHTML=`
                            <div class="flex items-center gap-3 bg-slate-800 p-3 m-1 rounded-xl border border-slate-700 hover:border-orange-500 hover:bg-slate-700 transition duration-300 cursor-pointer">

                                <div class="w-12 h-12 bg-slate-800 border border-slate-700 text-orange-500 font-extrabold flex items-center justify-center rounded-xl text-sm shadow-inner">
                                    ${value.logo}
                                </div>
                                <div>
                                    <h1 class="text-white font-semibold text-base">${value.name} </h1>
                                    <p class="text-slate-400 text-sm">channel ${value.channelNumber} </p>
                                </div >
                        <div class="flex items-center ml-auto gap-1">
                            <div class='self-end'>
                                    <div class='flex items-center gap-1'>
                                        <svg data-type='favorite' data-status="${value.isBlacklisted}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#EA3323"><path d="M7,13H17V11H7v2Zm5,9q-2.07,0-3.9-0.79q-1.82-0.79-3.17-2.14Q3.58,17.73 2.79,15.9T2,12Q2,9.92 2.79,8.1Q3.58,6.27 4.93,4.93Q6.28,3.57 8.1,2.79Q9.93,2 12,2t3.9,0.79t3.17,2.14q1.35,1.35 2.14,3.17Q22,9.92 22,12t-0.79,3.9t-2.14,3.17q-1.35,1.35-3.17,2.14T12,22Zm0-2q3.35,0 5.68-2.32T20,12T17.68,6.32T12,4T6.33,6.32T4,12t2.33,5.68T12,20Zm0-8Z"/></svg>
                                        <svg data-type='favorite' data-status="${value.isFavorite}" class="favorite-active ${value.isFavorite ? '' : 'hidden'} " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#F19E39"><path data-type='favorite'   data-status="${value.isFavorite}" d="M12,7.9v5.9l2.4,1.85L13.5,12.6L15.75,11h-2.8L12,7.9ZM5.83,21l2.33-7.6L2,9H9.6L12,1l2.4,8H22l-6.15,4.4L18.18,21L12,16.3L5.83,21Z"/></svg>                                           
                                        <svg data-type='favorite' data-status="${value.isFavorite}"  class=" favorite-inactive ${value.isFavorite ? 'hidden' : ''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#999999"><path data-type='favorite'data-status="${value.isFavorite}" d="M8.85,16.83L12,14.93l3.15,1.93l-0.82-3.6l2.78-2.4l-3.65-0.33L12,7.13L10.55,10.5L6.9,10.83l2.78,2.43L8.85,16.83ZM5.83,21l1.63-7.03L2,9.25L9.2,8.63L12,2l2.8,6.63L22,9.25l-5.45,4.72L18.18,21L12,17.27L5.83,21ZM12,12.25Z"/></svg>
                                    </div>

                                </div>
                                    <p class="ml-auto text-orange-500 text-xs font-bold">LIVE</p>
                            </div>
                               `

    chain.addEventListener('click', async(event)=>{
        
        if (event.target.tagName === 'svg' || event.target.tagName === 'path' ){

            if(event.target.dataset.type === 'favorite'){
               const status = event.target.dataset.status === 'false'
                await setFavorite(value.id , status)
                value.isFavorite = status
                render()
                return
            }
        }
        
        if (event.target.tagName === 'svg' || event.target.tagName === 'path' ){
                    
            if(event.target.dataset.type === 'favorite'){
               const status = event.target.dataset.status === 'false'
                await setBlacklisted(value.id , status)
                value.isBlacklisted = status
                render()
                console.log()
                return
            }
        }
        
        
        
        console.log(value.streamUrl)
        loadVideoStreaming(value.streamUrl)
            
        timeEl.innerHTML = ``
        
        const infos = document.createElement('div')
            infos.innerHTML = ` 
            <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 m-2">
                <div class="flex justify-between items-center mb-3">
                <h2 class="text-white font-bold text-lg">${value.name}</h2>
                <span class="bg-orange-800 text-orange-400 text-xs px-3 py-1 rounded-full">NOW</span>
                
                </div>
                <h3 class="text-orange-500 text-xl font-bold mb-2">${value.epg.currentProgram}</h3>
                <p class="text-slate-400 text-sm">${value.epg.startTime} - ${value.epg.endTime}</p>
            </div>
        `
        render()

        timeEl.appendChild(infos)

        })
        chanel.appendChild(chain)
        
    });
}

function filterbyCategorie(chanellsdata, categorie) {
  return chanellsdata.filter((data) => {
    return categorie === "tous" || data.category === categorie;
  });
}

select.addEventListener("change", render )
render();


function filterByName(chanellsdata,search){
return chanellsdata.filter((data) => {
return data.name.toLowerCase().includes(search.toLowerCase())
});
}
search.addEventListener("input",render)
render()

}
