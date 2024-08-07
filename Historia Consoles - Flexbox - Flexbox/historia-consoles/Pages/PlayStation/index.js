import React from "react";
import { ScrollView } from "react-native";

import Historia from "../../Components/1.historia";
import Especificacoes from "../../Components/2.especificacoes";
import Jogo from "../../Components/3.jogo";
import Conclusao from "../../Components/4.conclusao";

import ImgHistoria from "../../assets/historia/console-playstation.jpg";

export default function PlayStation() {
  return (
    <ScrollView>
      <Historia
        titulo="História do PlayStation"
        imagem={ImgHistoria}
        paragrafo1="A Sony iniciou sua jornada no mundo dos consoles de vídeo games em 1994, com a chegada do PS1 ao Japão. A expansão não demorou e em Setembro de 1995 o aparelho chegou aos Estados Unidos. Naquela época, duas outras gigantes japonesas, Sega e Nintendo, dominavam o mercado de jogos eletrônicos, e ninguém esperava que um terceiro player pudesse mudar isso. "
        paragrafo2="Quando o PS1 foi anunciado nos Estados Unidos por U$$ 299, isso mexeu com o mercado já que alguns dias antes a sega havia anunciado o Saturn por $399, o que somado com os diversos problemas causados pelo lançamento as pressas do Saturn, consolidaram a posição do PlayStation no mercado de jogos."
        paragrafo3="Isso tudo foi somado com o fato do Saturn ser focado em jogos 2D, enquanto o PS1 chegou com a proposta de ser um console totalmente em 3D, o que o tornava ainda mais interessante, por ser um console mais poderoso e mais barato que o seu concorrente."
      />
      <Especificacoes
        paragrafo="Confira a seguir as especificações técnicas do PlayStation, lançado em 1994"
        corCard="#0000FF"
        nomeCPU="Sony CXD8530BQ"
        capacidadeCPU="33.8688 MHz"
        nomeGPU="Sony CXD8514Q"
        capacidadeGPU="1MB VRAM"
        nomeRAM="2 MB EDO DRAM"
        capacidadeRAM="33 MHz"
        nomeHDD="Drive de CD-ROM"
        capacidadeHDD="660 MB / disco"
      />
      <Jogo titulo="Final Fantasy VII"
      paragrafo1="Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido muito bem recebido pelo público e pela crítica especializada."
      paragrafo2="Final Fantasy VII foi um lançamento muito importante para a Sony, isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas a seguir:"

      corCard="#0000FF"
      Copias="2 milhões de cópias"
      Periodo="Em 2 dias no Japão"
      Arrecadacao="US$ 115 milhões"
      TempoArrecadacao="Em 2 dias no Japão"
      Aprovacao="92% de Aprovação"
      Revista="Metacritic"
      AnoRemake="Remake em 2020"
      ConsoleRemake="Para o PS4"
      />

      <Conclusao titulo="Conclusão"
      paragrafo1="A Sony construiu com o PlayStation algo que para muita gente era impensável, não apenas por mostrar que era possível construir um produto barato e de qualidade, mas também por ter conseguido vencer uma das líderes de mercado na época de seu lançamento na briga pela fidelidade dos consumidores." />
    </ScrollView>
  );
}
