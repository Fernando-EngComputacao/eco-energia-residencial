var value = msg.payload[0]['fields']['corrente'];
msg.payload = value;
return msg;