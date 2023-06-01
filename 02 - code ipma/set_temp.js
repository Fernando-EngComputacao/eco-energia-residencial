var value = msg.payload;

if (value != "off"){
    flow.set("braganca_temp", msg.payload);
} else {
    var temp_atual = flow.get("temp_braganca_aux");
    flow.set("braganca_temp", temp_atual);
}

return msg;