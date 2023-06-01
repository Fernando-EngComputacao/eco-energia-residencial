var iot = flow.get('iot')[0]['potencia'];
var matriz_4x4 = [[], [], [], []];
var matriz_3x4 = [[], [], []];
var gel = []

for (let x = 1;  x < 4; x++){
    matriz_4x4[0].push(Math.ceil(iot['geladeira']['modo_' + x]));
    matriz_4x4[1].push(Math.ceil(iot['aquecedor']['modo_' + x]));
    matriz_4x4[2].push(Math.ceil(iot['maquina-lavar']['modo_' + x]));
    matriz_4x4[3].push(Math.ceil(iot['forno']['modo_' + x]));

    matriz_3x4[0].push(Math.ceil(iot['geladeira']['modo_' + x]));
    matriz_3x4[1].push(Math.ceil(iot['maquina-lavar']['modo_' + x]));
    matriz_3x4[2].push(Math.ceil(iot['forno']['modo_' + x]));

}

var body_4x4 = {
    "matriz": matriz_4x4,
    "alvo": msg.payload
}

var body_3x4 = {
    "matriz": matriz_3x4,
    "alvo": msg.payload
}

flow.set('matriz_4x4', body_4x4);
flow.set('matriz_3x4',body_3x4);
flow.set("set_alvo", msg.payload);

msg.payload = body_3x4;
return msg;