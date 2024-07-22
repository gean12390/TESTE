import { limpar_2 } from "./script.js";

export function calc_chapa(){
    let conta = 0;
    let chapa_1 = 0;
    let chapa_2 = 0;
    
     chapa_1 = document.getElementById('chapa_1').value;
     chapa_2 = document.getElementById('chapa_2').value;


    // CASO TENHA MATERIAL FRACIONADO, ELE IRÁ FAZER A CONVERSÃO COM ESSAS LINHAS DE CODIGO:

    // 1/32

    if(chapa_1 == '1/32' && chapa_2 != '1/32'){
            chapa_1 = 0.79;
        } else if(chapa_2 == '1/32' && chapa_1 != '1/32'){
            chapa_2 = 0.79;
        } else if(chapa_1 == '1/32' && chapa_2 == '1/32'){
            chapa_1 = 0.79;
            chapa_2 = 0.79;
        }
        //1/16
        if(chapa_1 == '1/16' && chapa_2 != '1/16'){
            chapa_1 = 1.59;
        } else if(chapa_2 == '1/16' && chapa_1 != '1/16'){
            chapa_2 = 1.59;
        } else if(chapa_1 == '1/16' && chapa_2 == '1/16'){

            chapa_1 = 1.59;
            chapa_2 = 1.59;
        }
        //3/32
        if(chapa_1 == '3/32' && chapa_2 != '3/32'){
            chapa_1 = 2.38;
        } else if(chapa_2 == '3/32' && chapa_1 != '3/32'){
            chapa_2 = 2.38;
        } else if(chapa_1 == '3/32' && chapa_2 == '3/32'){

            chapa_1 = 2.38;
            chapa_2 = 2.38;
        }
        //1/8
        if(chapa_1 == '1/8' && chapa_2 != '1/8'){
            chapa_1 = 3.18;
        } else if(chapa_2 == '1/32' && chapa_1 != '1/8'){
            chapa_2 = 3.18;
        } else if(chapa_1 == '1/8' && chapa_2 == '1/8'){

            chapa_1 = 3.18;
            chapa_2 = 3.18;
        }
        //5/32
        if(chapa_1 == '5/32' && chapa_2 != '5/32'){
            chapa_1 = 3.97;
        } else if(chapa_2 == '1/32' && chapa_1 != '5/32'){
            chapa_2 = 3.97;
        } else if(chapa_1 == '5/32' && chapa_2 == '5/32'){

            chapa_1 = 3.97;
            chapa_2 = 3.97;
        }
        //3/16
        if(chapa_1 == '3/16' && chapa_2 != '3/16'){
            chapa_1 = 4.76;
        } else if(chapa_2 == '1/32' && chapa_1 != '3/16'){
            chapa_2 = 4.76;
        } else if(chapa_1 == '3/16' && chapa_2 == '3/16'){

            chapa_1 = 4.76;
            chapa_2 = 4.76;
        }
        //7/32
        if(chapa_1 == '7/32' && chapa_2 != '7/32'){
            chapa_1 = 4.76;
        } else if(chapa_2 == '7/32' && chapa_1 != '7/32'){
            chapa_2 = 4.76;
        } else if(chapa_1 == '7/32' && chapa_2 == '7/32'){

            chapa_1 = 4.76;
            chapa_2 = 4.76;
        }
        //1/4
        if(chapa_1 == '1/4' && chapa_2 != '1/4'){
            chapa_1 = 6.35;
        } else if(chapa_2 == '1/4' && chapa_1 != '1/4'){
            chapa_2 = 6.35;
        } else if(chapa_1 == '1/4' && chapa_2 == '1/4'){

            chapa_1 = 6.35;
            chapa_2 = 6.35;
        }
        //9/32
        if(chapa_1 == '9/32' && chapa_2 != '9/32'){
            chapa_1 = 7.14;
        } else if(chapa_2 == '9/32' && chapa_1 != '9/32'){
            chapa_2 = 7.14;
        } else if(chapa_1 == '9/32' && chapa_2 == '9/32'){

            chapa_1 = 7.14;
            chapa_2 = 7.14;
        }
        //5/16
        if(chapa_1 == '5/16' && chapa_2 != '5/16'){
            chapa_1 = 7.94;
        } else if(chapa_2 == '5/16' && chapa_1 != '5/16'){
            chapa_2 = 7.94;
        } else if(chapa_1 == '5/16' && chapa_2 == '5/16'){

            chapa_1 = 7.94;
            chapa_2 = 7.94;
        }
        //11/32
        if(chapa_1 == '11/32' && chapa_2 != '11/32'){
            chapa_1 = 8.73;
        } else if(chapa_2 == '11/32' && chapa_1 != '11/32'){
            chapa_2 = 8.73;
        } else if(chapa_1 == '11/32' && chapa_2 == '11/32'){

            chapa_1 = 8.73;
            chapa_2 = 8.73;
        }
        //3/8
        if(chapa_1 == '3/8' && chapa_2 != '3/8'){
            chapa_1 = 9.53;
        } else if(chapa_2 == '3/8' && chapa_1 != '3/8'){
            chapa_2 = 9.53;
        } else if(chapa_1 == '3/8' && chapa_2 == '3/8'){

            chapa_1 = 9.53;
            chapa_2 = 9.53;
        }
        //13/32
        if(chapa_1 == '13/32' && chapa_2 != '13/32'){
            chapa_1 = 10.32;
        } else if(chapa_2 == '13/32' && chapa_1 != '13/32'){
            chapa_2 = 10.32;
        } else if(chapa_1 == '13/32' && chapa_2 == '13/32'){

            chapa_1 = 10.32;
            chapa_2 = 10.32;
        }
        //7/16
        if(chapa_1 == '7/16' && chapa_2 != '7/16'){
            chapa_1 = 11.11;
        } else if(chapa_2 == '7/16' && chapa_1 != '7/16'){
            chapa_2 = 11.11;
        } else if(chapa_1 == '7/16' && chapa_2 == '7/16'){

            chapa_1 = 11.11;
            chapa_2 = 11.11;
        }
        //15/32
        if(chapa_1 == '15/32' && chapa_2 != '15/32'){
            chapa_1 = 11.91;
        } else if(chapa_2 == '15/32' && chapa_1 != '15/32'){
            chapa_2 = 11.91;
        } else if(chapa_1 == '15/32' && chapa_2 == '15/32'){

            chapa_1 = 11.91;
            chapa_2 = 11.91;
        }
        //1/2
        if(chapa_1 == '1/2' && chapa_2 != '1/2'){
            chapa_1 = 12.70;
        } else if(chapa_2 == '1/2' && chapa_1 != '1/2'){
            chapa_2 = 12.70;
        } else if(chapa_1 == '1/2' && chapa_2 == '1/2'){

            chapa_1 = 12.70;
            chapa_2 = 12.70;
        }
        //17/32
        if(chapa_1 == '17/32' && chapa_2 != '17/32'){
            chapa_1 = 13.49;
        } else if(chapa_2 == '17/32' && chapa_1 != '17/32'){
            chapa_2 = 13.49;
        } else if(chapa_1 == '17/32' && chapa_2 == '17/32'){

            chapa_1 = 13.49;
            chapa_2 = 13.49;
        }
        //9/16
        if(chapa_1 == '9/16' && chapa_2 != '9/16'){
            chapa_1 = 14.29;
        } else if(chapa_2 == '9/16' && chapa_1 != '9/16'){
            chapa_2 = 14.29;
        } else if(chapa_1 == '9/16' && chapa_2 == '9/16'){

            chapa_1 = 14.29;
            chapa_2 = 14.29;
        }
        //19/32
        if(chapa_1 == '19/32' && chapa_2 != '19/32'){
            chapa_1 = 15.08;
        } else if(chapa_2 == '19/32' && chapa_1 != '19/32'){
            chapa_2 = 15.08;
        } else if(chapa_1 == '19/32' && chapa_2 == '19/32'){

            chapa_1 = 15.08;
            chapa_2 = 15.08;
        }
        //5/8
        if(chapa_1 == '5/8' && chapa_2 != '5/8'){
            chapa_1 = 15.88;
        } else if(chapa_2 == '5/8' && chapa_1 != '5/8'){
            chapa_2 = 15.88;
        } else if(chapa_1 == '5/8' && chapa_2 == '5/8'){

            chapa_1 = 15.88;
            chapa_2 = 15.88;
        }
        //21/32
        if(chapa_1 == '21/32' && chapa_2 != '21/32'){
            chapa_1 = 16.67;
        } else if(chapa_2 == '21/32' && chapa_1 != '21/32'){
            chapa_2 = 16.67;
        } else if(chapa_1 == '21/32' && chapa_2 == '21/32'){

            chapa_1 = 16.67;
            chapa_2 = 16.67;
        }
        //11/16
        if(chapa_1 == '11/16' && chapa_2 != '11/16'){
            chapa_1 = 17.46;
        } else if(chapa_2 == '11/16' && chapa_1 != '11/16'){
            chapa_2 = 17.46;
        } else if(chapa_1 == '11/16' && chapa_2 == '11/16'){

            chapa_1 = 17.46;
            chapa_2 = 17.46;
        }
        //23/32
        if(chapa_1 == '23/32' && chapa_2 != '23/32'){
            chapa_1 = 18.26;
        } else if(chapa_2 == '23/32' && chapa_1 != '23/32'){
            chapa_2 = 18.26;
        } else if(chapa_1 == '23/32' && chapa_2 == '23/32'){

            chapa_1 = 18.26;
            chapa_2 = 18.26;
        }
        //3/4
        if(chapa_1 == '3/4' && chapa_2 != '3/4'){
            chapa_1 = 19.05;
        } else if(chapa_2 == '3/4' && chapa_1 != '3/4'){
            chapa_2 = 19.05;
        } else if(chapa_1 == '3/4' && chapa_2 == '3/4'){

            chapa_1 = 19.05;
            chapa_2 = 19.05;
        }
        //25/32
        if(chapa_1 == '25/32' && chapa_2 != '25/32'){
            chapa_1 = 19.84;
        } else if(chapa_2 == '25/32' && chapa_1 != '25/32'){
            chapa_2 = 19.84;
        } else if(chapa_1 == '25/32' && chapa_2 == '25/32'){

            chapa_1 = 19.84;
            chapa_2 = 19.84;
        }
        //13/16
        if(chapa_1 == '13/16' && chapa_2 != '13/16'){
            chapa_1 = 20.64;
        } else if(chapa_2 == '13/16' && chapa_1 != '13/16'){
            chapa_2 = 20.64;
        } else if(chapa_1 == '13/16' && chapa_2 == '13/16'){

            chapa_1 = 20.64;
            chapa_2 = 20.64;
        }
        //27/32
        if(chapa_1 == '27/32' && chapa_2 != '27/32'){
            chapa_1 = 21.43;
        } else if(chapa_2 == '27/32' && chapa_1 != '27/32'){
            chapa_2 = 21.43;
        } else if(chapa_1 == '27/32' && chapa_2 == '27/32'){

            chapa_1 = 21.43;
            chapa_2 = 21.43;
        }
        //7/8
        if(chapa_1 == '7/8' && chapa_2 != '7/8'){
            chapa_1 = 22.23;
        } else if(chapa_2 == '7/8' && chapa_1 != '7/8'){
            chapa_2 = 22.23;
        } else if(chapa_1 == '7/8' && chapa_2 == '7/8'){

            chapa_1 = 22.23;
            chapa_2 = 22.23;
        }
        //29/32
        if(chapa_1 == '29/32' && chapa_2 != '29/32'){
            chapa_1 = 23.02;
        } else if(chapa_2 == '29/32' && chapa_1 != '29/32'){
            chapa_2 = 23.02;
        } else if(chapa_1 == '29/32' && chapa_2 == '29/32'){

            chapa_1 = 23.02;
            chapa_2 = 23.02;
        }
        //15/16
        if(chapa_1 == '15/16' && chapa_2 != '15/16'){
            chapa_1 = 23.81;
        } else if(chapa_2 == '15/16' && chapa_1 != '15/16'){
            chapa_2 = 23.81;
        } else if(chapa_1 == '15/16' && chapa_2 == '15/16'){

            chapa_1 = 23.81;
            chapa_2 = 23.81;
        }
        //31/32
        if(chapa_1 == '31/32' && chapa_2 != '31/32'){
            chapa_1 = 24.61;
        } else if(chapa_2 == '31/32' && chapa_1 != '31/32'){
            chapa_2 = 24.61;
        } else if(chapa_1 == '31/32' && chapa_2 == '31/32'){

            chapa_1 = 24.61;
            chapa_2 = 24.61;
        }
        //1
        if(chapa_1 == '1' && chapa_2 != '1'){
            chapa_1 = 25.40;
        } else if(chapa_2 == '1' && chapa_1 != '1'){
            chapa_2 = 25.40;
        } else if(chapa_1 == '1' && chapa_2 == '1'){

            chapa_1 = 25.40;
            chapa_2 = 25.40;
        }



    conta = parseFloat(chapa_1) + parseFloat(chapa_2);
   
    let res = conta;

        
    document.getElementById('respostas_2').innerHTML = `<br><label><input type="number" class="chapa" id="resposta_final" value="${res}" placeholder="CHAPA" readonly></label><input type="button" value="Limpar" class="limpar_2" id="limpar_2" style="margin-left: -20px">`;

    if(document.getElementById('limpar_2').addEventListener('click', function(){
        limpar_2()
    }));
}
