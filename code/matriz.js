var iot = flow.get('iot')[0]['corrente'];
var matriz = [[],[],[],[]];
var gel = []

for (let x = 1;  x < 4; x++){
    matriz[0].push(Math.ceil(iot['geladeira']['modo_' + x]));
    matriz[1].push(Math.ceil(iot['aquecedor']['modo_' + x]));
    matriz[2].push(Math.ceil(iot['maquina-lavar']['modo_' + x]));
    matriz[3].push(Math.ceil(iot['forno']['modo_' + x]));

}

var body = {
    "matriz": matriz,
    "alvo": msg.payload
}

msg.payload = body;

return msg;