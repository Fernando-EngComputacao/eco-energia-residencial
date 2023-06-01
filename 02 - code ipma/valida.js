// Verifica o "alvo" para inserir na encriptação
var getAlvo = flow.get("alvo");
var itens = flow.get("itens");
var text;

if (typeof msg.payload === "number") {
   text = itens;
} else {
   if (getAlvo[0] != getAlvo[1]) {
      flow.set("alvo", [getAlvo[1], getAlvo[1]]);
      text = itens;
   } else {
      text = "invalido";
   }
}
msg.payload = text;
return msg;