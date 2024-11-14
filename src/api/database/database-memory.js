import { randomUUID } from "node:crypto"

export class DatabaseMemory {
  #respostas = new Map()

  list(search) {
    return Array.from(this.#respostas.entries()).map((respostaArray) => {
      const id = respostaArray[0]
      const data = respostaArray[1]

      return{
        id,
        ...data,
      }
    })
    .filter(resposta => {
      if (search){
        return resposta.title.includes(search)
      }

      return true
    })
  }

  create(resposta) {
    const respostaId = randomUUID()

    this.#respostas.set(respostaId, resposta)
  }

  update(id, resposta) {
    this.#respostas.set(id, resposta)
  }

  delete(id) {
    this.#respostas.delete(id)
  }
}