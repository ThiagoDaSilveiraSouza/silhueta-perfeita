import styled, { CSSProperties } from "styled-components";
import { MainButton } from "../../../../../../componentsStyles";
import { ThemeProps } from "../../../../../../interfaces";

const ProdutcCardElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
`;

interface ProductCardContainer {
  theme: ThemeProps;
  $isbigger: string;
}

const ProductCardContainer = styled.div<ProductCardContainer>`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 303px;
  min-height: 470px;
  padding: 26px 20px;
  border-radius: 20px;
  box-shadow: 0 0 5px 0 gray;
  font-family: ${({ theme }) => theme.fonts.body};
  color: gray;
  transition: 0.3s;
  user-select: none;

  transform: ${({ $isbigger = "false" }) =>
    $isbigger === "true" && "scale(1.05)"};
`;

interface CardNameProps {
  $color: CSSProperties["color"];
  $background: CSSProperties["background"];
  theme: ThemeProps;
}

const CardName = styled.h3<CardNameProps>`
  font-size: 22px;
  width: 100%;
  border-radius: 50px;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  background: ${({ $background }) => $background};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardTitle = styled.h4`
  font-weight: bolder;
  text-align: center;
  font-size: 18px;
`;

const CardGift = styled.span`
  text-align: center;
  font-size: 16px;
`;

const FreeSheepingContainer = styled.div`
  padding: 10px;
  border: 1px solid #a7d48c;
  border-radius: 20px;
  text-align: center;
  color: #a7d48c;
  font-weight: bolder;
`;

const CardParcelValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    font-size: 15px;
  }
  h2 {
    font-size: 33px;
    font-weight: bolder;
  }
`;

const CardTotalValue = styled.span`
  text-align: center;
  font-size: 15px;
`;

const CardRow = styled.hr`
  width: 80%;
  height: 1px;
  background: lightgray;
  border: none;
  opacity: 0.8;
`;

interface ProductCardProps {
  cardData: {
    id: number;
    name: string;
    imgUrl: string;
    title: string;
    hasFreeSheeping: boolean;
    giftCount: number;
    value: number;
    parcels: number;
    nameColor: string;
    nameBackgroundColor: string;
  };
  isBigger?: boolean;
}
export const ProdutcCard = ({
  cardData,
  isBigger = false,
}: ProductCardProps) => {
  const parcelValue = cardData.value / cardData.parcels;
  const valueInReal = cardData.value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const parcelValueInReal = parcelValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const createGiftText = (brindCount: number) => {
    const hasOnlyOneGift = brindCount === 1;

    return hasOnlyOneGift
      ? `+ Brinde surpresa!`
      : `+ ${brindCount} Brindes surpresa!`;
  };
  return (
    <ProdutcCardElement>
      <ProductCardContainer $isbigger={isBigger.toString()}>
        <CardName
          $color={cardData.nameColor}
          $background={cardData.nameBackgroundColor}
        >
          {cardData.name}
        </CardName>
        <ImgContainer>
          <img src={cardData.imgUrl} alt={cardData.title} />
        </ImgContainer>
        <CardTitle>{cardData.title}</CardTitle>
        <CardGift>{createGiftText(cardData.giftCount)}</CardGift>
        {cardData.hasFreeSheeping && (
          <FreeSheepingContainer>Frete Grátis!</FreeSheepingContainer>
        )}
        <CardRow />
        <CardParcelValueContainer>
          <span>Por apenas {cardData.parcels}x de</span>
          <h2>{parcelValueInReal}</h2>
        </CardParcelValueContainer>
        <CardRow />
        <CardTotalValue>ou {valueInReal} à vista.</CardTotalValue>
      </ProductCardContainer>

      <MainButton>Quero o corpo dos sonhos</MainButton>
    </ProdutcCardElement>
  );
};
