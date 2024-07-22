import { calc_chapa } from "./calculo.js";

const botao = document.getElementById('material');


botao.addEventListener('change', function(){
    
   let botao_1 = botao.value;

    if(botao_1 == document.getElementById('chapa').value){
        chapa();
    } else if(botao_1 == document.getElementById('redondo').value){
        redondo();
    } else if(botao_1 == document.getElementById('quadrado').value){
        quadrado();
    }else if(botao_1 == document.getElementById('nd').value){
        limpar();
    }
});

function chapa(){
            document.getElementById('respostas').innerHTML = '<br><br><br><br><select id="opc_1"><option id="nm_0" value="0">0</option><option id="nm_1" value="1">1</option><option id="nm_2" value="2">2</option><option id="nm_3" value="3">3</option><option id="nm_4" value="4">4</option><option id="nm_5" value="5">5</option><option id="nm_6" value="6">6</option><option id="nm_7" value="7">7</option><option id="nm_8" value="8">8</option><option id="nm_9" value="9">9</option><option id="nm_10" value="10">10</option></select></label><label><input type="text" class="chapa" id="chapa_1" placeholder="CHAPA"></label><label><input type="number" class="chapa" id="chapa_1_1_2" value="0" placeholder="CHAPA"><label><input type="text" class="chapa" id="chapa_2" placeholder="CHAPA"></label><label><input type="text" class="chapa" id="chapa_3" placeholder="CHAPA"></label>';
            document.getElementById('calcular').className = 'Chapa'
}

function redondo(){

    document.getElementById('respostas').innerHTML = '<br><br><br><br><label><input type="text" class="Redondo_1" placeholder="REDONDO"></label><label><input type="text" class="Redondo_1" placeholder="REDONDO"></label>';
    document.getElementById('calcular').className = 'Redondo'

}

function quadrado(){
}

function limpar(){
    document.getElementById('respostas').innerHTML = ' ';
    document.getElementById('respostas_2').innerHTML = ' ';

}


    let calcular = document.getElementById('calcular');

    calcular.addEventListener('click', function(){
        
       let calcul = calcular.className;
    
        if(calcul == 'Chapa'){
            calc_chapa();
        } else if(calcul == 'Redondo'){
            calc_redondo()
        }
    });

// LIMPAR
let clean = document.querySelector('.limpar');

clean.addEventListener('click' , function(){

    limpar();

});


export function limpar_2(){

let res = 0
document.getElementById('respostas_2').innerHTML = ' ';
document.getElementById('chapa_1_1_1').value = 0;
document.getElementById('chapa_1_1_2').value = 0;
document.getElementById('chapa_1').value = 0;
document.getElementById('chapa_2').value = 0;
document.getElementById('chapa_3').value = 0;
}
