// Bragança IDs (28 - Bragança, 29 - Bragança [aeródromo])
// Bragança IDs (374 - Bragança, 375 - Bragança [aeródromo])

// var tmh = msg.payload['features'].length;
// var object = msg.payload['features'];
// var list = [];
// for (let a = 0; a < tmh; a++){
//     list.push(msg.payload['features'][a+""]['properties']['localEstacao'])
// }
// msg.payload = list;

var temperatuaAgoraBraganca = msg.payload['features'][375 + ""]['properties']['temperatura'];
flow.set("braganca_temp", temperatuaAgoraBraganca);
flow.set("temp_braganca_aux", temperatuaAgoraBraganca);

// var teste = 5
// flow.set("braganca_temp", teste);
// msg.payload = teste;
msg.payload = temperatuaAgoraBraganca;
return msg;