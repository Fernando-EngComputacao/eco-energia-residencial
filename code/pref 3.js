var value = msg.payload[0]['fields']['maquina'];
var text = "" + (value != 0 ? value : "off");


msg.payload = text;

return msg;