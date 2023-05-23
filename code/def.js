var matriz = msg.payload['matriz'];
var alvo = msg.payload['alvo'];

// Insere o alvo atual na variável de flow "alvo"
var textValue = flow.get("alvo");
textValue[1] = alvo;
flow.set("alvo",[textValue[0],textValue[1]]);

// var alvo = Math.floor(Math.random() * (420 - 1 + 1)) + 1;
// var alvo = 237;

function funcao(matriz, valores, alvo, indice = 0, cbn = [], size = 4) {
    alvo = Math.floor(alvo);
    //console.log("Anterior -> "+anterior);
    if (size == null || size == 0 || alvo <= 0) {
        modos = {
            "0": [-1,-1,-1,-1]
        }
        return null;
    } if (inicio == true) {
        inicio = false;
        for (let x = 0; x < 3; x++) {
            modos[matriz[0][x] + ''] = [x, -1, -1, -1];
            modos[matriz[1][x] + ''] = [-1, x, -1, -1];
            modos[matriz[2][x] + ''] = [-1, -1, x, -1];
            modos[matriz[3][x] + ''] = [-1, -1, -1, x];
        }
    } if (size == 4) {
        const posicao1 = matriz[0].reduce((maior, elemento) => { if (elemento > maior) { return elemento; } return maior; });
        const posicao2 = matriz[1].reduce((maior, elemento) => { if (elemento > maior) { return elemento; } return maior; });
        const posicao3 = matriz[2].reduce((maior, elemento) => { if (elemento > maior) { return elemento; } return maior; });
        const posicao4 = matriz[3].reduce((maior, elemento) => { if (elemento > maior) { return elemento; } return maior; });

        //console.log("size ["+size+"] == 4");
        var compara = matriz[0][cbn[0]] + matriz[1][cbn[1]] + matriz[2][cbn[2]] + matriz[3][cbn[3]];
        if (indice === valores.length) {
            cbn[3] = (typeof cbn[3] === 'undefined' ? -1 : cbn[3]);
            modos[compara + ""] = ([cbn[0], cbn[1], cbn[2], cbn[3]]);
            if ((cbn[0] === 0) && (cbn[1] === 0) && (cbn[2] === 0) && (cbn[3] === 0)) {
                matriz.pop();
                funcao(matriz, [2, 2, 2], alvo, indice = 0, cbn = [], size - 1);
            }
            return;
        }
        for (let i = valores[indice]; i >= 0; i--) {
            cbn.push(i);
            funcao(matriz, [...valores], alvo, indice + 1, cbn);
            cbn.pop();
        }



    } else if (size == 3) {
        var compara = matriz[0][cbn[0]] + matriz[1][cbn[1]] + matriz[2][cbn[2]];
        if (indice === valores.length) {
            //var test = (typeof cbn[0] != 'undefined' ? (typeof cbn[1] != 'undefined' ? typeof cbn[3] === 'undefined': "Undefined**") : cbn[3]);
            //(typeof cbn[3] === 'undefined' ? console.log("** undefined **") : cbn[2]);
            //console.log(test)
            //modos[compara+""] = ([cbn[0],cbn[1], (typeof cbn[3] === 'undefined' ? -1 : cbn[3])]);
            if ((cbn[0] === 0) && (cbn[1] === 0) && (cbn[2] === 0)) {
                matriz.pop();
                funcao(matriz, [2, 2], alvo, indice = 0, cbn = [], size - 1);
            }
            return;
        }

        for (let i = valores[indice]; i >= 0; i--) {
            cbn.push(i);
            funcao(matriz, [...valores], alvo, indice + 1, cbn, size);
            cbn.pop();
        }
    } else if (size == 2) {
        var compara = matriz[0][cbn[0]] + matriz[1][cbn[1]];
        if (indice === valores.length) {
            modos[compara + ""] = ([cbn[0], cbn[1], cbn[2]]);

            if ((cbn[0] === 0) && (cbn[1] === 0)) {
                matriz.pop();
                funcao(matriz, [2], alvo, indice = 0, cbn = [], size - 1);
            }
            return;
        }

        for (let i = valores[indice]; i >= 0; i--) {
            cbn.push(i);
            funcao(matriz, [...valores], alvo, indice + 1, cbn, size);
            cbn.pop();
        }

    } else {
        return null;
    }
}


// var matriz = [
//     [40, 119, 198],
//     [5, 7, 12],
//     [40, 55, 71],
//     [7, 8, 9]];


var equipamento = [];
var modos = {};
var indices = [2, 2, 2, 2];
var inicio = true;


//funcao(matriz, indice = 0, cbn = [], size) 
funcao(matriz, indices, alvo);

// msg.payload = modos;
var list = Object.keys(modos).map(key => parseInt(key));


// Encontra o valor igual ou próximo ao objetivo
let valorMaisProximo = list[0]; // Definimos o primeiro elemento como o mais próximo inicialmente
let diferencaMaisProxima = Math.abs(alvo - list[0]); // Calculamos a diferença inicialmente

for (let i = 1; i < list.length; i++) {
    const diferenca = Math.abs(alvo - list[i]);
    if (diferenca < diferencaMaisProxima) {
        diferencaMaisProxima = diferenca;
        valorMaisProximo = list[i];
    }
}
////////////////////////////////////////////////
// Encontra no valor X (alvo) os modos (in)ativos
var modoFinal = modos[valorMaisProximo+''];

var eletrodomesticos = [{
     
    "status":{"geladeira": modoFinal[0]+1,
    "aquecedor": modoFinal[1]+1,
    "maquina": modoFinal[2]+1,
    "forno": modoFinal[3]+1
    },
    "value": alvo
}];
//////////////////////////
msg.payload = eletrodomesticos;

// "itens" contém todos os eletrodométicos com seus modos finais
flow.set('itens', eletrodomesticos);
var getAlvo = flow.get("alvo");

// Verifica o "alvo" para inserir na encriptação
// if (getAlvo != alvo){
//     flow.set('alvo',alvo);
// }

return msg;