var objeto = msg.payload[0];
var temp = parseFloat(flow.get("braganca_temp"));

msg.payload = [
    {
        measurement: "Eletric-Project",
        fields: {
            corrente: objeto['value'],
            geladeira: (objeto['status']['geladeira'] == null ? 0 : objeto['status']['geladeira']),
            aquecedor: (objeto['status']['aquecedor'] == null ? 0 : objeto['status']['aquecedor']),
            maquina: (objeto['status']['maquina'] == null ? 0 : objeto['status']['maquina']),
            forno: (objeto['status']['forno'] == null ? 0 : objeto['status']['forno']),
            temperatura: temp,

        },
        tags: {
            sendorID: 1,
            location: "Inside house"
        }
    }
];

return msg;