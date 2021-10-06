
document.addEventListener("DOMContentLoaded",()=>{

const grid=document.querySelector('.grid')
let squares=Array.from(document.querySelectorAll('.grid div'))
const scoreDisplay = document.querySelector('#score')
const startBtn = document.querySelector('#start-button')
const width=10

})

const lTetromino=[

[1,width+1,width*2+1,2],[width,width+1,width+2,width*2+2],
[1,width+1,width*2+1,width*2],[width,width*2,width*2+1,width*2+2]

]

const zTetromino=[

    [1,width+1,width*2+1,2],[width,width+1,width+2,width*2+2],
    [1,width+1,width*2+1,width*2],[width,width*2,width*2+1,width*2+2]
    
    ]


    const tTetromino=[

        [1,width+1,width*2+1,2],[width,width+1,width+2,width*2+2],
        [1,width+1,width*2+1,width*2],[width,width*2,width*2+1,width*2+2]
        
        ]
        const oTetromino=[

         [1,width+1,width*2+1,2],[width,width+1,width+2,width*2+2],
         [1,width+1,width*2+1,width*2],[width,width*2,width*2+1,width*2+2]
            
            ]

            const iTetromino=[

                [1,width+1,width*2+1,2],[width,width+1,width+2,width*2+2],
                [1,width+1,width*2+1,width*2],[width,width*2,width*2+1,width*2+2]
                
                ]

        const theTetrominoes=[lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]

        let currentPosition=4
        let current=theTetrominoes[0][0]

        function draw(){
            current.forEach(index=>{

                squares[currentPosition+index].classList.add('tetromino')

            })



        }
draw()