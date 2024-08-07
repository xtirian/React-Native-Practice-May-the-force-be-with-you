import React from "react";
import { ScrollView } from "react-native";

import Historia from "../../Components/1.historia";
import Especificacoes from "../../Components/2.especificacoes";
import Jogo from "../../Components/3.jogo";
import Conclusao from "../../Components/4.conclusao";

import ImgHistoria from "../../assets/historia/console-xbox.png";

export default function Xbox() {
  return (
    <ScrollView>
      <Historia
        titulo="História do Xbox"
        imagem={ImgHistoria}
        paragrafo1="A Microsoft começou sua história com o público gamer em 2001, com o lançamento do Xbox. Lançado na época para concorrer com o PS2 da Sony e o Game Cube da Nintendo. O Xbox oferecia um hardware mais poderoso que o dos seus concorrentes."
        paragrafo2="E para mostrar a capacidade desse novo console super poderoso a Microsoft precisava de um jogo que usasse todo esse potencial, e foi aí que surgiu Halo, que fez um enorme sucesso atingindo uma imensa base de fãs, principalmente nos Estados Unidos."
      />
      <Especificacoes
        paragrafo="Confira a seguir as especificações técnicas do Xbox de 2001"
        corCard="#0e7a0d"
        nomeCPU="Intel Pentium 3"
        capacidadeCPU="733 MHz"
        nomeGPU="nVidia NV2A"
        capacidadeGPU="233 MHz"
        nomeRAM="64 MB DDR SDRAM"
        capacidadeRAM="200 MHz"
        nomeHDD="HD 8GB"
        capacidadeHDD="5400 RPM"
      />

      <Jogo titulo="O fenômeno Halo"
      paragrafo1="Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% da base de consoles Xbox."
      paragrafo2="Halo é até hoje um dos jogos mais importantes do Xbox e da indústria como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox."

      corCard="#0E7A0D"
      Copias="4.7 milhões de cópias"
      Periodo="Até Julho de 2006"
      Arrecadacao="US$ 170 milhões"
      Tempo="Apenas nos EUA"
      Aprovacao="97% de Aprovação"
      Revista="Metacritic"
      AnoRemake="Remake em 2014"
      ConsoleRemake="Para o Xbox One"
      />


      <Conclusao titulo="Conclusão"
      paragrafo1="A Microsoft conseguiu criar com o Xbox uma grande base de fãs em todo mundo que jogam suas franquias diariamente. O que começou como uma tentativa de defender o territórios dos PCs nas salas se tornou um dos produtos mais vendidos da companhia e parte de um dos setores mais lucrativos da industria do entretenimento." />
    </ScrollView>
  );
}
