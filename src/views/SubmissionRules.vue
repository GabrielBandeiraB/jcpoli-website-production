<template>
  <div class="view">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-7">
          <v-expansion-panel v-model="panel" expand>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="titles">
                  <v-icon class="mr-2">fas fa-file-alt</v-icon>Formatação do
                  texto para submissão
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3 text-justify">
                  <ul class="my-2" id="aceitacao">
                    <li>
                      <b>Arquivo digital em Word</b>
                    </li>
                    <li><b>Papel:</b> A4</li>
                    <li><b>Margens:</b> sup./esq. 3cm; inf./dir. 2cm</li>
                    <li><b>Margem de parágrafo:</b> 0,60 cm</li>
                    <li><b>Tipo de Letra:</b> Times New Roman</li>
                    <li>
                      <b>Tamanho da fonte:</b> 12 para texto; 10 para citação
                      (com recuo de 4cm), quadros, tabelas e figuras
                    </li>
                    <li>
                      <b>Espaçamento Entrelinhas:</b> 1.5 para texto e título;
                      simples para citações recuadas, quadros, tabelas e figuras
                    </li>
                    <li>
                      <b>Espaçamento entre parágrafos:</b> de 12pt após cada
                      parágrafo
                    </li>
                  </ul>
                  <h6>Estrutura do artigo:</h6>
                  <ul class="my-2" id="aceitacao">
                    <li>
                      Título: no máximo, 10 palavras (todo em maiúsculo e
                      negrito);
                    </li>
                    <li>
                      Um resumo entre 10 e 15 linhas, em um único parágrafo, sem
                      entrada de parágrafo, espaçamento entre parágrafos (antes
                      e depois) de 24 pt, seguido de três a cinco
                      palavras-chave;
                    </li>
                    <li>
                      Um abstract (resumo em inglês), obedecendo às mesmas
                      regras do resumo, seguido de três a cinco keywords;
                    </li>
                    <li>
                      Títulos e subtítulos devem ser numerados e apresentar as
                      seguintes formas:
                      <ul class="my-2" id="aceitacao">
                        <li>
                          <b>Título Primário:</b> com maiúsculas nas primeiras
                          letras, negrito e espaçamento entre parágrafos (antes
                          e depois) de 12 pt;
                        </li>
                        <li>
                          <i><b>Título Secundário:</b></i> com maiúsculas nas
                          primeiras letras, negrito e itálico, além de
                          espaçamento entre parágrafos (antes e depois) de 12
                          pt;
                        </li>
                        <li>
                          <i>Título Terciário:</i> com maiúsculas nas primeiras
                          letras, itálico, além de espaçamento entre parágrafos
                          (antes e depois) de 12 pt;
                        </li>
                        <li>
                          Título Quaternário: com maiúsculas nas primeiras
                          letras e espaçamento entre parágrafos (antes e depois)
                          de 12 pt.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h6>Notas Explicativas (Notas de Fim de Texto)</h6>
                  <p>
                    As notas explicativas devem ser somente com explicações ou
                    complementos e não com referências bibliográficas ou
                    eletrônicas completas. As notas explicativas devem constar
                    no final texto.
                  </p>
                  <h6>Notação Matemática</h6>
                  <p>
                    Matrizes são escritas com letras maiúsculas e negrito (X)
                    vetores em letras minúsculas e negrito (x), escalares em
                    letras minúsculas e itálico (x). A escrita de equações
                    deverão ser acompanhadas de um número sequencial ao longo do
                    texto. A referência as equações no texto deve ser feita pela
                    palavra equação começando com letra maiúscula com o número
                    da equação entre "parênteses", Exemplo Equação (1), Equação
                    (2), etc.
                  </p>
                  <h6>Citação e Referências</h6>
                  <p>
                    O estilo de citação/Referência segue o padrão SPRINGER LNCS,
                    um estilo de referência numerada, comumente usada em artigos
                    científicos, que consiste de:
                  </p>
                  <ul class="my-2" id="aceitacao">
                    <li>
                      Citação no texto indicada pelo uso de numeração sequencial
                      (indicada entre colchetes [ ]);
                    </li>
                    <li>
                      Lista de referências sequencialmente numerada de acordo
                      com a aparição/referenciamento no texto e posta no fim do
                      documento incluindo os detalhes completos da referência
                      indicada.
                    </li>
                  </ul>
                  <p>Regras gerais de citação no texto:</p>
                  <ul class="my-2" id="aceitacao">
                    <li>
                      Um número é alocado à uma fonte na ordem em que ela é
                      citada no texto. Se a fonte for referenciada várias vezes
                      no texto, o mesmo número é usado;
                    </li>
                    <li>
                      Os números que indicam a fonte são colocados entre
                      colchetes (Ex.: [1]);
                    </li>
                    <li>
                      As referências são postas imediatamente após a
                      sentença/texto/parágrafo o qual é referenciada à uma fonte
                      a ser citada;
                    </li>
                    <li>
                      Cada trabalho individual de um mesmo autor, mesmo que
                      publicado no mesmo ano, possui seu próprio número de
                      referência.
                    </li>
                  </ul>
                  <p>
                    Na lista de referências, o sobrenome do autor deve ser
                    citado com a primeira letra em maiúscula, acompanhado das
                    iniciais dos nomes, com vírgula entre sobrenome e iniciais
                    do nome e com ponto entre as iniciais. O título vem em
                    sequência (após o ultimo autor) precedido de “:”. As normas
                    não indicam qualquer tipo de destaque gráfico, tais como
                    negrito, sublinhado ou itálico, na composição das
                    referências [1].
                  </p>
                  <p>
                    Exemplo: 1.Lehrman, P., Tully, T.: MIDI for the
                    professional. Amsco Publications, London (1993).
                  </p>
                  <p>
                    A seguir, mostraremos como fazer referências de diversos
                    tipos de fontes de pesquisa seguindo o Estilo Springer LNCS:
                  </p>
                  <h6>Artigos de revista</h6>
                  <p>
                    Autor(es).: Título do artigo. Abreviatura internacional da
                    revista; volume (número), página inicial-final do artigo;
                    (ano).
                  </p>
                  Exemplo:
                  <p class="ml-4 mt-2">
                    1. Hunt, C.A., Ropella, G.E.P., Park, S., Engelberg, J.:
                    Dichotomies between computational and mathematical models.
                    Nat. Biotechnol.; 26, 738-739; (2008).
                  </p>
                  <h6>Artigo de revista online</h6>
                  <p>
                    Autor(es) do artigo.: Título do artigo. Nome da revista,
                    data de consulta; volume (número). Endereço eletrônico.
                  </p>
                  Exemplo:
                  <p class="ml-4 mt-2">
                    2. Francês, I., Barandiarán, M., Marcellán, T., Moreno, L.:
                    Estimulação psicocognoscitiva nas demências. An Sist Sanit
                    Navar. Acesso 19 de outubro de 2005; 26(3). Disponível em:
                    http://www.cfnavarra.es/salud/anales/textos/vol26/n3/revis2a.html
                  </p>
                  <h6>Livros</h6>
                  <p>
                    Autor(es).: Título do livro. Edição. Lugar de publicação:
                    Editorial; ano. Neste caso, não é necessário especificar a
                    primeira edição, apenas da segunda em diante. A edição
                    sempre se põe em números arábicos e abreviatura: 2ª ed. Se a
                    obra estivesse composta por mais de um volume, devemos
                    citá-lo a seguir do título do livro: Vol. 3.
                  </p>
                  Exemplo:
                  <p class="ml-4 mt-2">
                    3. Autor(es).: Título do livro. Edição. Lugar de publicação:
                    Editorial; ano. Neste caso, não é necessário especificar a
                    primeira edição, apenas da segunda em diante. A edição
                    sempre se põe em números arábicos e abreviatura: 2ª ed. Se a
                    obra estivesse composta por mais de um volume, devemos
                    citá-lo a seguir do título do livro: Vol. 3.
                  </p>
                  <h6>Tese, dissertação, monografia e projeto de pesquisa</h6>
                  <p>
                    Autor.: Título. (subtítulo se houver). Tipo de documento.
                    Cidade: Instituição onde foi defendida (ano).
                  </p>
                  Exemplo:
                  <p class="ml-4 mt-2">
                    4. Nunes AMT.: A abordagem do arrebatamento da Igreja
                    analisado sob o ponto de vista cristão pré-milenista.
                    Trabalho de Conclusão de Curso em Ciências da Religião. Belo
                    Horizonte: Instituto de Educação Continuada da PUC Minas
                    (2006).
                  </p>
                  <h6>
                    Trabalho apresentado em evento – Simpósios, Jornadas,
                    Congressos, Seminários, Encontros, Workshops, Colóquios,
                    entre outros
                  </h6>
                  <p>
                    Autor(es).: Título. Tipo de publicação, número e nome do
                    evento; data de realização (ano); Cidade e país de
                    realização do evento. Cidade da publicação: Editora ou
                    Instituição responsável pela publicação; ano de edição (nem
                    sempre é o mesmo do evento).
                  </p>
                  Exemplo:
                  <ul class="my-2" id="aceitacao">
                    <li>
                      Carvalho, R. V, Kleijn, J., Verbeek, F.J.: A Multi-Scale
                      Extensive Petri Net Model Of The Bacterial – Macrophage
                      Interaction. In: Heiner, M. (ed.) 5th International
                      Workshop on Biological Processes & Petri Nets. pp. 15–29.
                      CEUR Workshop Proceedings, Tunis, Tunisia (2014).
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="titles">
                  <v-icon class="mr-2">fas fa-file-alt</v-icon>Normas para
                  Apresentação dos Trabalhos
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3 text-justify">
                  <p>
                    1. Os trabalhos apresentados no evento serão publicados nos
                    Anais Virtuais.
                  </p>
                  <p>
                    2. Serão consideradas somente contribuições científicas
                    inéditas, originais e enquadradas no escopo da Jornada,
                    sendo vedado ao autor submeter trabalhos já divulgados e
                    pesquisas em fase de planejamento, tais como:
                  </p>
                  <ul class="my-2" id="aceitacao">
                    <li>
                      simples descrição de projeto, intenção de trabalho ou
                      trabalho com resultados preliminares;
                    </li>
                    <li>resumo de trabalho já publicado;</li>
                    <li>resumo de revisão bibliográfica;</li>
                    <li>
                      resumos baseados em um mesmo trabalho de investigação e
                      fragmentados com resultados em diferentes resumos, com ou
                      sem primeiros autores diferentes.
                    </li>
                  </ul>
                  <p>
                    3. Pelo menos um dos autores deverá estar inscrito na I
                    JCPOLI. Cada inscrito poderá apresentar até dois trabalhos.
                  </p>
                  <p>
                    4. Cabe ao autor indicar o eixo temático do seu trabalho. Em
                    cada área existem duas opções para o autor enquadrar seu
                    trabalho: Estudante de Graduação ou Profissional. Os
                    trabalhos serão avaliados e expostos segundo o enquadramento
                    do autor.
                  </p>
                  4.1 Eixos Temáticos para submissão de Trabalhos:
                  <ul id="temas">
                    <li>Análise e Desenvolvimento de Sistemas;</li>
                    <li>Agronomia;</li>
                    <li>Arquitetura e Urbanismo;</li>
                    <li>Big Data e Inteligência Artificial;</li>
                    <li>Ciências Aeronáuticas;</li>
                    <li>Ciência da Computação;</li>
                    <li>Design;</li>
                    <li>Engenharia da Computação;</li>
                    <li>Engenharia de Alimentos;</li>
                    <li>Engenharia de Controle e Automação;</li>
                    <li>Engenharia Elétrica;</li>
                    <li>Engenharia Mecânica;</li>
                    <li>Engenharia Civil;</li>
                    <li>Engenharia de Produção;</li>
                    <li>Iniciação Científica;</li>
                    <li>Mestrado.</li>
                  </ul>
                  <p>
                    5. Na categoria Estudantes de Graduação, o orientador é
                    considerado um dos autores do trabalho e condição
                    indispensável para a submissão do mesmo.
                  </p>
                  <p>
                    6. O autor receberá e-mail da aceitação de seu trabalho.
                    Atente se seu provedor não tem restrições a spam. Ele poderá
                    "entender" que o remetente está nesta categoria.
                  </p>
                  <p>
                    7. Os tipos de trabalhos permitidos para submissão ao evento
                    são:
                  </p>
                  <ul class="mt-y" id="aceitacao">
                    <li>
                      Pesquisa científica, submetida por estudantes, professores
                      ou pesquisadores de quaisquer níveis;
                    </li>
                    <li>
                      Trabalho desenvolvido no âmbito das bolsas do PIBIC, PIBID
                      ou PIBIT. Trabalhos oriundos dessas bolsas, o(s) autor(es)
                      deve(m) citar nas conclusões a Instituição/local do
                      Programa que está(ão) vinculado(s);
                    </li>
                    <li>
                      Estudo de caso, que é um trabalho que se refere ao relato
                      de casos ou experiências que explorem/descrevam/discutam
                      um método ou problema por meio do exemplo – aplicado às
                      situações complexas ou casos raros;
                    </li>
                    <li>Experiências e/ou práticas de ensino-aprendizagem.</li>
                  </ul>
                  <p>8. Os resumos expandidos devem conter:</p>
                  <ul>
                    <li>
                      8.1. Título: Deve ser claro e conciso, permitindo pronta
                      identificação do conteúdo do trabalho;
                    </li>
                    <li>
                      8.2. Autores: Nome(s) do(s) autor(es), conforme modelo na
                      página, escrevendo-se o último sobrenome seguindo-se das
                      letras dos demais nomes e sobrenomes. Após o nome de cada
                      autor deve aparecer a instituição a que ele pertence. Pode
                      ter até 10 (dez) autores;
                    </li>
                    <li>
                      8.3. Resumo: o texto deve, obrigatoriamente, explicar o(s)
                      objetivo(s) pretendido(s), os principais procedimentos
                      adotados, os resultados mais expressivos e conclusões;
                    </li>
                    <li>8.4. Palavras-chave: máximo 3 palavras;</li>
                    <li>
                      8.5. Introdução: visão geral sobre o tema estudado (breve
                      revisão da literatura sobre o tema) e relevância da
                      pesquisa. Apresentar os objetivos e justificativos da
                      importância do tema;
                    </li>
                    <li>
                      8.6. Material e Métodos: como o trabalho foi realizado
                      (procedimentos, estratégias, sujeitos participantes,
                      documentos, equipamentos, ambientes etc.) incluindo, se
                      for o caso, a análise estatística empregada. Unidades de
                      medida e símbolos devem seguir o sistema internacional;
                    </li>
                    <li>
                      8.7. Resultados e Discussão: apresentar tabelas, gráficos,
                      etc. Na discussão, confrontar os dados obtidos com o da
                      literatura;
                    </li>
                    <li>
                      8.8. Conclusões: descrever a conclusão do(s) autor(es) com
                      base nos resultados do trabalho, relacionando-as aos
                      objetivos da pesquisa;
                    </li>
                    <li>
                      8.9. Agradecimentos se for o caso, inseri-los após as
                      conclusões;
                    </li>
                    <li>8.10. Referências: segundo normas da ABNT.</li>
                  </ul>
                  <p>
                    9. Observações quanto à submissão de resumos: O respeito aos
                    direitos autorais é de total responsabilidade dos autores do
                    trabalho. Em caso de comprovado o plágio os autores
                    responsáveis ficaram sujeitos a sanções impostas pela
                    Comissão de Organização. O trabalho deve ter rigorosa
                    revisão gramatical, ortográfica, de digitação, de conteúdo e
                    dados da pesquisa. O trabalho sem cuidados em sua preparação
                    ou com deficiências na pesquisa; com as informações
                    desorganizadas e/ou com procedimentos/descrições inadequados
                    ou equivocados; em quaisquer dos itens será recusado.
                  </p>
                  <p>
                    10. Somente serão aceitas as submissões de trabalhos quando
                    houver pelo menos um autor devidamente inscrito na JCPOLI.
                  </p>
                  <p>
                    11. Trabalhos com nenhum dos autores inscritos na JCPOLI
                    serão desconsiderados.
                  </p>
                  <p>
                    12. Depois de enviado o trabalho via e-mail será impossível
                    alterá-lo.
                  </p>
                  <p>
                    13. Todos os trabalhos aceitos deverão ser apresentados na
                    JCPOLI oralmente.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <!--<v-expansion-panel-content>
              <template v-slot:header>
                <div class="titles">
                  <v-icon class="mr-2">fas fa-file-alt</v-icon>Normas para
                  Apresentação de Pôsteres
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>1. O Pôster deverá atender os seguintes padrões:</p>
                  <ul class="my-2" id="aceitacao">
                    <li>Título centralizado, Arial 66, negrito;</li>
                    <li>Nome dos autores centralizado, Arial 46;</li>
                    <li>Nome do evento, Arial 34, negrito;</li>
                    <li>Local e data do evento, Arial 34, negrito;</li>
                    <li>O restante do pôster em Arial de no mínimo 32;</li>
                    <li>
                      OBRIGATORIAMENTE as dimensões do pôster são 90 cm
                      (largura) X 100 cm (altura).
                    </li>
                  </ul>
                  <p>
                    2. Todas essas orientações estão disponíveis no modelo em
                    anexo.
                  </p>
                  <p>
                    3. O local onde o pôster será afixado será divulgado em
                    lista na secretaria do evento a partir do primeiro dia de
                    sua realização.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>-->
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="titles">
                  <v-icon class="mr-2">fas fa-file-alt</v-icon>Normas para
                  Apresentação Oral
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3 text-justify">
                  <p>
                    1. A Comissão Científica selecionará e convidará os
                    trabalhos que deveram ser apresentarem via oral.
                  </p>
                  <p>
                    2. O resultado desta seleção será publicado e informado aos
                    selecionados (via e-mail).
                  </p>
                  <p>
                    3. A apresentação dos trabalhos orais deverá ocorrer em
                    horário e local próprios divulgados em lista na secretaria
                    do evento a partir do primeiro dia de sua realização.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <template v-slot:header>
                <div class="titles">
                  <v-icon class="mr-2">fas fa-user-check</v-icon>Certificados de
                  Participação e Apresentação de Trabalhos
                </div>
              </template>
              <v-card>
                <v-card-text class="grey lighten-3 text-justify">
                  <p>
                    1. Todos os Certificados de apresentação de trabalhos são
                    disponibilizados no site da PUC após a realização do evento.
                  </p>
                  <!--<p>
                    2. O responsável da seção de pôsteres fará a verificação da
                    presença do pôster e de pelo menos um dos autores, que terá
                    que assinar a lista de presença. Sem a assinatura do autor o
                    certificado do trabalho não é liberado.
                  </p>-->
                  <p>
                    2. Os Certificados estarão disponíveis para impressão no
                    site da PUC pelo período de 60 (sessenta) dias após o
                    evento. Depois desse prazo não mais será possível obter o
                    certificado.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
        <div class="col-md-5">
          <div class="info-arquivo">
            <h4>Orientações aos Professores e Alunos:</h4>
            <v-btn
              type="submit"
              color="primary"
              href="/assets/orientações professores e alunos I JCPOLI.pdf"
              target="_blank"
            >
              ACESSAR ORIENTAÇÕES
              <v-icon right dark>cloud_download</v-icon>
            </v-btn>
          </div>

          <div class="info-arquivo">
            <h4>Edital Ciência de dados</h4>
            <v-btn
              type="submit"
              color="primary"
              href="/assets/edital_Ciencia_dados.pdf"
              target="_blank"
            >
              ACESSAR EDITAL
              <v-icon right dark>cloud_download</v-icon>
            </v-btn>
          </div>

          <div class="info-arquivo">
            <h4>Certificado:</h4>
            <v-btn
              type="submit"
              color="primary"
              href="https://sites.pucgoias.edu.br/certificados/"
              target="_blank"
            >
              ACESSAR CERTIFICADO
              <v-icon right dark>cloud_download</v-icon>
            </v-btn>
          </div>

          <div class="info-arquivo">
            <h4>Template de artigo:</h4>
            <v-btn
              type="submit"
              color="primary"
              href="/assets/JCPOLI_template.docx"
              target="_blank"
            >
              ACESSAR TEMPLATE
              <v-icon right dark>cloud_download</v-icon>
            </v-btn>
          </div>

          <div class="info-arquivo">
            <h4>Edital para submissão de artigo:</h4>
            <v-btn
              type="submit"
              color="primary"
              href="/assets/edital_JCPOLI.pdf"
              target="_blank"
            >
              ACESSAR EDITAL
              <v-icon right dark>cloud_download</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from "vue-property-decorator";

import { mixins } from 'vue-class-component'
// import PhotoHeader from "@/components/organization/PhotoHeader.vue";
// import Main from "@/components/organization/Main.vue";
// import Paragraph from "@/components/organization/Paragraph.vue";
// import Login from "@/views/Login.vue";
// import { getSession, refreshSession } from "../services/authentication";
// import { CognitoUserSession } from "amazon-cognito-identity-js";
import LoaderMixin from '../mixins/loader'

// @Component({
//   components: {
//     PhotoHeader,
//     Main,
//     Paragraph,
//     Login
//   }
// })
export default class SubmissionRules extends mixins(LoaderMixin) {
  private panel = [true, false, false, false]

  //   private async created() {
  //     try {
  //       this.showLoader();
  //       const session = await getSession();

  //       if (session instanceof CognitoUserSession) {
  //         if (session.isValid()) {
  //           this.hideLoader();
  //           this.$router.push("/conta");
  //         } else {
  //           const newSession = await refreshSession(session.getRefreshToken());

  //           if (newSession instanceof CognitoUserSession) {
  //             this.hideLoader();
  //             this.$router.push("/conta");
  //           } else {
  //             this.hideLoader();
  //             this.$router.push("/submissao");
  //           }
  //         }
  //       }
  //     } catch (error) {
  //       this.hideLoader();
  //       this.$router.push("/submissao");
  //     }
  //   }
}
</script>

<style scoped>
#aceitacao li {
  list-style-type: disc !important;
}

#temas li {
  list-style-type: decimal-leading-zero !important;
  margin-left: 10px;
}

.ordenado li {
  list-style-type: decimal !important;
}

.titles {
  font-size: 16px !important;
  font-weight: 500;
}

.info-arquivo {
  margin-top: 3rem;
}

@media screen and (max-width: 576px) {
  .row {
    flex-direction: column-reverse;
  }

  .col-md-5 {
    margin-bottom: 3rem;
  }
}

.v-btn {
  font-size: 1.1rem;
  width: 18rem;
}
</style>
