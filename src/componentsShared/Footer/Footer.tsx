import styled from "styled-components";
import { LazzyAnimationContainer } from "../../components/LazzyAnimationContainer";
import { CentralizerContainer, Flex, Text } from "../../componentsStyles";
import { companyConfig } from "../../companyConfig";
import instagramIcon from "../../assets/icon-instagram.svg";
import facebookIcon from "../../assets/icon-facebook.svg";
import tiktokIcon from "../../assets/icon-tiktok.svg";
import { useWindowSize } from "../../hooks";

const Row = styled.hr`
  width: 100%;
  background: #e0d1b0;
  height: 5px;
  border: none;
  margin: 0;
`;

const CompanyDataContainer = styled.div`
  margin: 33px 0 0 0;
  display: flex;
  gap: 50px 38px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ComponayInfoContainer = styled.div`
  flex: 0 1 262px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FooterTitle = styled.h3`
  color: #404040;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  letter-spacing: 0.32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface ComponentLinkButtonProps {
  $type?: "dark" | "light";
}

const ComponentLinkButton = styled.a<ComponentLinkButtonProps>`
  display: flex;
  width: 238px;
  max-width: 238px;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${({ $type = "light" }) => ($type === "dark" ? "white" : "#323232")};
  background: ${({ $type = "light" }) =>
    $type === "dark" ? "#323232" : "white"};

  border-radius: 50px;
  border: 2px solid #323232;
  box-sizing: border-box;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  > div {
    display: flex;
    gap: 14px;
  }
`;

const TextContainerm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 70px;
`;

export const Footer = () => {
  const { isDesktop } = useWindowSize();
  const currentYear = new Date().getFullYear();
  return (
    <LazzyAnimationContainer>
      <Flex $justify-content="center" $flex="1 1 100%" $margin={isDesktop?"220px 0 0 0":"100px 0 0 0"}>
        <CentralizerContainer>
          <Flex $flex-direction="column" $gap="27px">
            <Row />
            <CompanyDataContainer>
              <ComponayInfoContainer>
                <FooterTitle>{companyConfig.name}</FooterTitle>
                <Text>
                  ©{currentYear} {companyConfig.name} - CNPJ{" "}
                  {companyConfig.cnpj} - {companyConfig.name} by{" "}
                  {companyConfig.owner}
                </Text>
              </ComponayInfoContainer>
              <ComponayInfoContainer>
                <FooterTitle>Relacionamento</FooterTitle>
                <div>
                  <FooterTitle>Contato</FooterTitle>
                  <Text>{companyConfig.phone}</Text>
                </div>
                <div>
                  <FooterTitle>Horário de Atendimento</FooterTitle>
                  <Text>{companyConfig.openinghours}</Text>
                </div>
              </ComponayInfoContainer>
              <ComponayInfoContainer>
                <FooterTitle>Endereço</FooterTitle>
                <Text>
                  {companyConfig.address} - {companyConfig.number} -{" "}
                  {companyConfig.neighborhood}, {companyConfig.city} -{" "}
                  {companyConfig.uf} <br />
                  {companyConfig.cep}
                </Text>
              </ComponayInfoContainer>
              <ButtonContainer>
                <ComponentLinkButton>Rastrear meu pedido</ComponentLinkButton>
                <ComponentLinkButton $type="dark">
                  Chat online
                </ComponentLinkButton>
              </ButtonContainer>
            </CompanyDataContainer>

            <SocialMediaContainer>
              <FooterTitle>Siga a gente</FooterTitle>
              <div>
                <a href={companyConfig.socialMedia.instagram}>
                  <img src={instagramIcon} alt="" />
                </a>
                <a href={companyConfig.socialMedia.facebook}>
                  <img src={facebookIcon} alt="" />
                </a>
                <a href={companyConfig.socialMedia.ticktok}>
                  <img src={tiktokIcon} alt="" />
                </a>
              </div>
            </SocialMediaContainer>
            <TextContainerm>
              <FooterTitle>
                Copywrite © Silhueta Perfeita - Todos os direitos reservados
              </FooterTitle>
              <Text>
                É vedada qualquer reprodução, total ou parcial, de qualquer
                elemento de identidade, sem expressa autorização. A violação de
                qualquer direito mencionado implicará na responsabilização cível
                e criminal nos termos da Lei. Os preços dos produtos estão
                sujeitos a alteração sem aviso prévio. A Silhueta Perfeita se
                reserva o direito de corrigir qualquer possível erro de
                digitação ou gráfico e caso haja divergências entre os valores
                ofertados nos e-mails promocionais e valores do site, prevalecem
                as informações do site.
              </Text>
              <Text>
                ESTE SITE NÃO É do FACEBOOK: Este site não faz parte do site do
                Facebook ou do Facebook Inc. Além disso, este site NÃO é
                endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca
                comercial independente da FACEBOOK, Inc.
              </Text>
            </TextContainerm>
          </Flex>
        </CentralizerContainer>
      </Flex>
    </LazzyAnimationContainer>
  );
};
