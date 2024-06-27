import TipoPet from "../types/TipoPet.js";

let novoId: number = 0;
function geradorDeId(listaRecebida: TipoPet[]): number {
    if (listaRecebida.length === 0) {
        return novoId;
    }
    const elementoAnterior = listaRecebida.length - 1;
    novoId = listaRecebida[elementoAnterior].id;
    return novoId + 1;
}

export default geradorDeId;