


document.addEventListener('DOMContentLoaded',()=>{
const grid=document.querySelector('.grid')
const doodler=document.createElement('div')
let doodlerLeftSpace=50
let doodlerBottomSpace=150
let speed=3
let isGameOver=false
let platformCount=5
let platforms=[]
const gravity=0.9
let upTimerId
let downTimerId
let isJumping=true
let isGoingLeft=false
let isGoingRight=false
let leftTimerId
let rightTimerId



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
visual.style.bottom=this.bottom+'px'
grid.appendChild(visual)
}

}

    function createPlatforms(){

        for(let i=0; i<platformCount; i++){
            let platGap=600/platformCount
            let newPlatBottom=100+i*platGap
            let newPlatform=new Platform(newPlatBottom)
            platform.push(newPlatform)
        }


    }


    function movePlatforms() {
        if (doodlerBottomSpace > 200) {
            platforms.forEach(platform => {
              platform.bottom -= 4
              let visual = platform.visual
              visual.style.bottom = platform.bottom + 'px'
    
              if(platform.bottom < 10) {
                let firstPlatform = platforms[0].visual
                firstPlatform.classList.remove('platform')
                platforms.shift()
                console.log(platforms)
                score++
                var newPlatform = new Platform(600)
                platforms.push(newPlatform)
              }
          }) 
        }
        
      }


      function createDoodler{

        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodlerLeftSpace=platforms[0].left
        doodler.style.left=doodlerLeftSpace+'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'

      }


      function fall(){

        isJumping=false
        






      }



function start(){

    if(!isGameOver){

        createDoodler()
        createPlatforms()
    }
}
start()

})
