flow.set('iot', [{ 
    "potencia": {
        "geladeira": { "modo_1": 8700, "modo_2": 26100, "modo_3": 43500 },
        "aquecedor": { "modo_1": 1000, "modo_2": 1500, "modo_3": 2500 },
        "maquina-lavar": { "modo_1": 8310, "modo_2": 12010, "modo_3": 15500 },
        "forno": { "modo_1": 600, "modo_2": 1200, "modo_3": 1800 }
    },
    "corrente" :    {
        "geladeira": { "modo_1": 39.54, "modo_2": 118.63, "modo_3": 197.93 },
        "aquecedor": { "modo_1": 4.46, "modo_2": 6.82, "modo_3": 11.36 },
        "maquina-lavar": { "modo_1": 39.14, "modo_2": 54.59, "modo_3": 70.45 },
        "forno": { "modo_1": 6.32, "modo_2": 7.75, "modo_3": 8.45 }
    },
    "temperatura": {
        "geladeira": { "modo_1": 5, "modo_2": 3, "modo_3": 2 },
        "aquecedor": { "modo_1": 10, "modo_2": 15, "modo_3": 25 },
        "maquina-lavar": { "modo_1": 25, "modo_2": 35, "modo_3": 45 },
        "forno": { "modo_1": 100, "modo_2": 200, "modo_3": 250 }
    }
    }]);

flow.set('state', [{
    "geladeira": {
        "modo": "ativo",
        "temp": 1},
    "aquecedor": {
        "modo": "ativo",
        "temp": 1
    },
    "maquina-lavar": {
        "modo": "ativo",
        "temp": 1
    },
    "forno": {
        "modo": "ativo",
        "temp": 1
    },
}]);

if (typeof flow.get('alvo') !== 'undefined') {
    // A variável "alvo" existe
} else {
    flow.set("alvo", [-1, -2]);
    // A variável "alvo" não existe
}

flow.set('key-status', "falso");

return msg;