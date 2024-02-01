import styled from "styled-components";
import { LazzyAnimationContainer } from "../../components/LazzyAnimationContainer";
import { CentralizerContainer, Flex, Heading } from "../../componentsStyles";
import { ThemeProps } from "../../interfaces";

interface FaqContainerPros {
  theme: ThemeProps;
}

const FaqContainer = styled.div<FaqContainerPros>`
  position: relative;
  display: flex;
  min-height: 514px;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 81px 59px;
  font-family: ${({ theme }) => theme.fonts.body};
  details {
    flex: 1 1 40%;
    font-size: 15px;
    padding: 30px;

    summary {
      list-style: none;
      display: flex;
      gap: 15px;
      cursor: pointer;
      b {
        color: #cebc96;
      }
    }
  }
  p {
    padding: 20px;
    box-sizing: border-box;
  }
`;

const faqList = [
  {
    question: "A Silhueta Perfeita é confortável para uso diário?",
    resp: "Sim, foi projetada para conforto prolongado, mesmo com uso diário.",
  },
  {
    question: "A cinta ajuda na postura?",
    resp: "Sim, ajuda a manter uma postura correta, apoiando a coluna.",
  },
  {
    question: "Posso ajustar a compressão da cinta?",
    resp: "Sim, a cinta possui ajustes para personalizar a compressão.",
  },
  {
    question: "A Silhueta Perfeita é visível sob a roupa?",
    resp: "Não, seu design discreto permite que fique invisível sob a maioria das roupas.",
  },
  {
    question: "Posso usar a cinta durante os exercícios?",
    resp: "Sim, é segura e benéfica para usar durante atividades físicas.",
  },
  {
    question: "Quais são os tamanhos disponíveis?",
    resp: "Oferecemos uma variedade de tamanhos, consulte nosso guia de medidas.",
  },
  {
    question: "Como devo cuidar da minha cinta?",
    resp: "Recomendamos lavagem manual e secagem ao ar para preservar sua qualidade.",
  },
  {
    question: "A cinta pode causar desconforto ou irritação na pele?",
    resp: "Feita com material hipoalergênico, é projetada para minimizar irritações.",
  },
  {
    question: "Quanto tempo devo usar a cinta por dia?",
    resp: "Recomendamos começar com algumas horas por dia e aumentar gradativamente.",
  },
  {
    question: "A cinta tem garantia?",
    resp: "Sim, oferecemos uma garantia de satisfação de 30 dias.",
  },
];

export const Section13 = () => {
  return (
    <LazzyAnimationContainer>
      <Flex $justify-content="center" $flex="1 1 100%" $margin="220px 0 0 0">
        <CentralizerContainer>
          <Flex $flex-direction="column">
            <Heading>Dúvidas frequentes</Heading>
            <FaqContainer>
              {faqList.map((faqData, index) => {
                const currentIndex = (index + 1).toString();
                const updatedIndex =
                  currentIndex.length >= 2 ? currentIndex : "0" + currentIndex;

                return (
                  <details key={"faq-question-" + index}>
                    <summary>
                      <b>{updatedIndex}</b>
                      {faqData.question}
                    </summary>
                    <p>R: {faqData.resp}</p>
                  </details>
                );
              })}
            </FaqContainer>
          </Flex>
        </CentralizerContainer>
      </Flex>
    </LazzyAnimationContainer>
  );
};
