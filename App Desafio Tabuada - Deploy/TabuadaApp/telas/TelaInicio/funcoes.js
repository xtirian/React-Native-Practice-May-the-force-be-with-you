import React from "react";

export function gerarNumero() {
  const min = Math.ceil(1);
  const max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function validarResposta(numero1, numero2, respostaUsuario) {
  const respostaCerta = numero1 * numero2;

  if(respostaUsuario == respostaCerta){
    return true
  }else{
      return  false
    }
}
