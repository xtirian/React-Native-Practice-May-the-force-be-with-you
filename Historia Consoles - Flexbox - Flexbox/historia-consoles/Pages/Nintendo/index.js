import React from "react";
import { ScrollView } from "react-native";

import Historia from "../../Components/1.historia";
import Especificacoes from "../../Components/2.especificacoes";
import Jogo from "../../Components/3.jogo";
import Conclusao from "../../Components/4.conclusao";

import ImgHistoria from "../../assets/historia/console-nintendo.jpg";

export default function Nintendo() {
  return (
    <ScrollView>
      <Historia
        titulo="História do Nintendo Entertainment System"
        imagem={ImgHistoria}
        paragrafo1="Um dos consoles mais emblemáticos da Nintendo até hoje foi lançado em 1983 no Japão com o nome de Famicom (Family Computer), mas só em 1985 o console chegou aos Estados Unidos, com um visual totalmente reformulado e um novo nome, Nintendo Entertainment System (NES)."
        paragrafo2="O NES ajudou a revitalizar a indústria de vídeo games após a quebra da mesma devido a uma saturação de mercado com diversos consoles de baixa qualidade disponíveis. A nintendo mirou e acertou em cheio, trazendo com o NES um console barato, simples e de alta qualidade para as mãos dos consumidores."
        paragrafo3="O console foi lançado no dia 15 de Julho de 1983 no japão, juntamente com os jogos Donkey Kong, Donkey Kong Jr. e Popey, todos feitos pela Nintendo para arcade. Ao final de 1984 o Famicom já era console mais vendido do país. O console chegou em Nova York, nos Estados Unidos, em 1985 mas o lançamento a nível nacional só ocorreu em Fevereiro de 1986, contando com 17 jogos disponíveis no lançamento."
      />
      <Especificacoes
        paragrafo="Confira a seguir as especificações técnicas do NES, lançado em 1983"
        corCard="#FE0016"
        nomeCPU="Ricoh 2A03"
        capacidadeCPU="Processador 8-bit"
        nomeGPU="52 Cores"
        capacidadeGPU="256 x 240"
        nomeRAM="2KB RAM"
        capacidadeRAM="Memória"
        nomeHDD="Cartucho"
        capacidadeHDD="Proprietário"
      />

      <Jogo titulo="Super Mario bros"
      paragrafo1="Apesar de não estar disponível no lançamento do console, Super Mario Bros foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje."
      paragrafo2="A franquia foi tão popular na época, que 3 jogos da série Super Mario ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto lugar. Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:"

      corCard="#FE0016"
      Copias="40 milhões de cópias"
      Periodo="Até 1994"
      Arrecadacao="US$ 72 milhões"
      TempoArrecadacao="Primeiros 4 meses"
      Aprovacao="95% de Aprovação"
      Revista="Revista CVG"
      AnoRemake="Remake em 1993"
      ConsoleRemake="Para o SNES"
      />

      <Conclusao titulo="Conclusão"
      paragrafo1="A Nintendo é uma das empresas mais icônicas da indústria de jogos eletrônicos e até hoje atrai milhares de fãs com seus consoles e franquias como Super Mario, The Legend of Zelda, Pokémon, dentre muitas outras séries adoradas pelos fãs. A Nintendo conseguiu crescer em meio a crise dos vídeo games de 1983 e transformar o que parecia ser o fim da indústria em um recomeço extremamente lucrativo. " />
    </ScrollView>
  );
}
