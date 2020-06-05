
var personagens = [
    [$("#ted") ,$("#fototed"), $("#bted")],
    [$("#marshall") ,$("#fotomarshall"), $("#bmarshall")],
    [$("#lily") ,$("#fotolily"), $("#blily")],
    [$("#barney") ,$("#fotobarney"), $("#bbarney")],
    [$("#robin") ,$("#fotorobin"), $("#brobin")],
];
var posicao = 0;


inicia ();
    alert("Clique na foto");
    function inicia (){
        personagens[0][1].on("click", function (){
            posicao = personagens[0][2].position();
            Modal(personagens[0], posicao.left);
        })
        personagens[1][1].on("click", function (){
            posicao = personagens[1][2].position();
            Modal(personagens[1], posicao.left);
        })
        personagens[2][1].on("click", function (){
            posicao = personagens[2][2].position();
            Modal(personagens[2], posicao.left);
        })
        personagens[3][1].on("click", function (){
            posicao = personagens[3][2].position();
            Modal(personagens[3], posicao.left);
        })
        personagens[4][1].on("click", function (){
            posicao = personagens[4][2].position();
            Modal(personagens[4], posicao.left);
        })              
    }
    
    function Modal(personagem, posicaos){

        if (posicaos <= 699 /*max-widht:720px*/){
            personagem[1].css("display", "none");
            personagem[0].css("justify-content", "center");
            personagem[2].css("width", "80%");
            personagem[2].css("border", "1px solid #000");
            personagem[2].css("font-size", "13px");

            personagem[2].on("click", function (){
                personagem[2].css("width", "0px");
                personagem[2].css("border", "0px");
                personagem[0].css("justify-content", "flex-start");
                personagem[1].css("display", "flex");
                
            })
        }
        else if (posicaos > 699 /*min-width:721px*/){
            personagem[2].css("width", "30%");
            personagem[2].css("border", "1px solid #000");
            personagem[2].css("font-size", "15px");

            personagem[1].on("click", function(){
                personagem[2].css("width", "0px");
                personagem[2].css("border", "0px");
               inicia();
            })
        }  
    }