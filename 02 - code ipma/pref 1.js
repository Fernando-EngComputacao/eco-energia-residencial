var value = msg.payload[0]['fields']['geladeira'];
var text = "" + (value != 0 ? value : "off");


msg.payload = text;

return msg;