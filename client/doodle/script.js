


document.addEventListener('DOMContentLoaded',()=>{
const grid=document.querySelector('.grid')
    const doodler=document.createElement('div')
let doodlerLeftSpace=50
    function createDoodler(){
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left=doodlerLeftSpace+'px'
        doodler.style.bottom
    }
    createDoodler()


class Platform{

constructor(newPlatBottom){

this.bottom=newPlatBottom
this.left=Math.random()*315
this.visual=document.createElement('div')

const visual=this.visual
visual.classList.add('platform')
visual.style.left=this.style+'px'
visual.style.bottom=this.style+'px'
grid.appendChild(visual)
}

}

    function createPlatforms(){

        for(let i=0; i<platformCount; i++){
            let platGap=600/platformCount
            let newPlatBottom=100+i*platGap
            let newPlatform=new Platform(newPlatBottom)
        }


    }


function start(){

    if(!isGameOver){

        createDoodler()
        createPlatforms()
    }
}
start()

})
