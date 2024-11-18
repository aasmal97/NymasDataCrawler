import data, { AwardDataType } from "./data";

type DirectionType = "row" | "row-reverse";
//styles
const spacingFactor = 1;
const yearContainerWidth = spacingFactor * 9.333333;
const circleDiameter = spacingFactor * 2.25;
const units = "cqw";
const addYearContainerStyles = (
  yearContainer: HTMLElement,
  direction: DirectionType
) => {
  yearContainer.style.display = "flex";
  yearContainer.style.justifyContent =
    direction === "row" ? "flex-end" : "flex-start";
  yearContainer.style.flexGrow = "1";
};
const addYearInnerElStyles = (
  yearEl: HTMLElement,
  direction: DirectionType
) => {
  yearEl.style.display = "flex";
  yearEl.style.justifyContent = "center";
  yearEl.style.marginTop = "0";
  yearEl.style.marginBottom = "0";
  yearEl.style.padding = `${spacingFactor}${units} 0px`;
  yearEl.style.backgroundColor = "#252628";
  yearEl.style.color = "#FAF9FB";
  yearEl.style.width = yearContainerWidth + units;
  yearEl.style.fontSize = spacingFactor * 2 + units;
  yearEl.style.height = "min-content";
  const margin = spacingFactor * 2;
  if (direction === "row") yearEl.style.marginRight = margin + units;
  else yearEl.style.marginLeft = margin + units;
};
const addSeperatorContainerStyles = (sepContainer: HTMLElement) => {
  sepContainer.style.display = "flex";
  sepContainer.style.flexDirection = "column";
  sepContainer.style.alignItems = "center";
};
const addLineSeperatorStyles = (lineSep: HTMLElement) => {
  lineSep.style.flexGrow = "1";
  lineSep.style.width = "10%";
  lineSep.style.backgroundColor = "#ABABAD";
  lineSep.style.margin = "0px";
  lineSep.style.padding = "0px";
};
const addCircleContainerStyles = (circleContainer: HTMLElement) => {
  circleContainer.style.paddingTop = spacingFactor + units;
  circleContainer.style.display = "flex";
  circleContainer.style.justifyContent = "center";
  circleContainer.style.alignItems = "center";
  circleContainer.style.width = circleDiameter + units;
};
const addCircleStyles = (circle: HTMLElement) => {
  circle.style.width = "100%";
  circle.style.aspectRatio = "1/1";
  circle.style.borderStyle = "solid";
  circle.style.borderRadius = spacingFactor * 100 + units;
  circle.style.borderWidth = spacingFactor / 3 + units;
  circle.style.borderColor = "#ABABAD";
  circle.style.backgroundColor = "#FAF9FB";
  circle.style.margin = "0px";
  circle.style.padding = "0px";
};
const addCardOuterContainerStyles = (
  cardOuterContainer: HTMLElement,
  direction: DirectionType
) => {
  cardOuterContainer.style.paddingBottom = spacingFactor * 8 + units;
  if (direction === "row-reverse")
    cardOuterContainer.style.paddingRight = spacingFactor * 1.666666 + units;
  else cardOuterContainer.style.paddingLeft = spacingFactor * 1.666666 + units;
  cardOuterContainer.style.paddingTop = spacingFactor / 3 + units;
  cardOuterContainer.style.display = "flex";
  cardOuterContainer.style.flexDirection = "column";
  cardOuterContainer.style.width = `calc(50% - ${circleDiameter / 2}${units})`;
  cardOuterContainer.style.boxSizing = "border-box";
  return cardOuterContainer;
};
const addAwardTypeHeaderStyles = (
  header: HTMLElement,
  direction: DirectionType
) => {
  header.style.margin = "0px";
  header.style.padding = "0px";
  header.style.fontSize = spacingFactor * 2 + units;
  header.style.lineHeight = "1.65em";
  header.style.marginBottom = spacingFactor / 1.666666 + units;
  header.style.display = "flex";
  header.style.justifyContent = direction === "row" ? "flex-start" : "flex-end";
};
const addCardContainerStyles = (cardContainer: HTMLElement) => {
  cardContainer.style.display = "flex";
  cardContainer.style.width = "100%";
  cardContainer.style.minHeight = spacingFactor * 16 + units;
};
const addCardContentContainerStyles = (cardContentContainer: HTMLElement) => {
  cardContentContainer.style.display = "flex";
  cardContentContainer.style.flexDirection = "column";
  cardContentContainer.style.height = "100%";
  cardContentContainer.style.width = "70%";
  cardContentContainer.style.padding = `${spacingFactor * 1.666666}${units}`;
  cardContentContainer.style.paddingLeft = `${
    spacingFactor * 1.333333
  }${units}`;
  cardContentContainer.style.boxSizing = "border-box";
  cardContentContainer.style.color = "#252628";
  cardContentContainer.style.borderColor = "#E3E2E4";
  cardContentContainer.style.borderStyle = "solid";
  cardContentContainer.style.borderLeft = "none";
  cardContentContainer.style.borderWidth = spacingFactor / 12 + units;
  cardContentContainer.style.backgroundColor = "#FAF9FB";
};
const addCardHeaderStyles = (cardHeader: HTMLElement) => {
  cardHeader.style.margin = "0px";
  cardHeader.style.padding = "0px";
  cardHeader.style.fontSize = spacingFactor * 1.666666 + units;
  cardHeader.style.display = "flex";
  cardHeader.style.justifyContent = "flex-start";
  cardHeader.style.fontStyle = "italic";
  cardHeader.style.fontWeight = "400";
};
const addCardTitleStyles = (cardTitle: HTMLElement) => {
  cardTitle.style.margin = "0px";
  cardTitle.style.padding = "0px";
  cardTitle.style.fontSize = spacingFactor * 1.666666 + units;
  cardTitle.style.display = "flex";
  cardTitle.style.justifyContent = "flex-start";
  cardTitle.style.fontWeight = "600";
};
const addCardWinnerStyles = (cardWinner: HTMLElement) => {
  cardWinner.style.margin = "0px";
  cardWinner.style.padding = "0px";
  cardWinner.style.marginTop = spacingFactor * 0.75 + units;
  cardWinner.style.fontSize = spacingFactor * 1.5 + units;
  cardWinner.style.marginBottom = spacingFactor / 2 + units;
  cardWinner.style.display = "flex";
  cardWinner.style.justifyContent = "flex-start";
  cardWinner.style.fontWeight = "normal";
  cardWinner.style.fontStyle = "normal";
  cardWinner.style.lineHeight = "normal";
};
const addCardDescriptionStyles = (cardDescription: HTMLElement) => {
  cardDescription.style.margin = "0px";
  cardDescription.style.padding = "0px";
  cardDescription.style.fontSize = spacingFactor * 1.3333 + units;
  cardDescription.style.display = "flex";
  cardDescription.style.justifyContent = "flex-start";
  cardDescription.style.fontWeight = "400";
  cardDescription.style.marginTop = spacingFactor * 2 + units;
  cardDescription.style.justifySelf = "flex-end";
  cardDescription.style.flexGrow = "1";
  cardDescription.style.alignItems = "flex-end";
};
// create elements
const createYear = ({
  yearAwarded,
  direction,
}: Pick<AwardDataType, "yearAwarded"> & {
  direction: DirectionType;
}) => {
  if (!yearAwarded) return null;
  //create container layout
  const yearContainer = document.createElement("div");
  addYearContainerStyles(yearContainer, direction);
  //create year element
  const yearEl = document.createElement("h2");
  yearEl.innerText = yearAwarded.toString();
  //create styles
  addYearInnerElStyles(yearEl, direction);
  yearContainer.appendChild(yearEl);
  return yearContainer;
};
const createSeperator = (line: boolean) => {
  const sepContainer = document.createElement("div");
  const circleContainer = document.createElement("div");
  const circle = document.createElement("div");
  //styles
  addSeperatorContainerStyles(sepContainer);
  addCircleStyles(circle);
  addCircleContainerStyles(circleContainer);
  //append elements
  circleContainer.appendChild(circle);
  sepContainer.appendChild(circleContainer);
  if (!line) return sepContainer;
  //handle if line exists
  const lineSep = document.createElement("div");
  addLineSeperatorStyles(lineSep);
  sepContainer.appendChild(lineSep);
  return sepContainer;
};

const createCardOuterContainer = (direction: DirectionType) => {
  const cardOuterContainer = document.createElement("div");
  addCardOuterContainerStyles(cardOuterContainer, direction);
  return cardOuterContainer;
};
const createAwardTypeHeader = ({
  awardType,
  direction,
}: {
  awardType?: [string];
  direction: DirectionType;
}) => {
  if (!awardType) return null;
  if (awardType.length < 1) return null;
  const award = awardType[0];
  const header = document.createElement("h3");
  header.innerText = award;
  addAwardTypeHeaderStyles(header, direction);
  return header;
};
const createCardContainer = () => {
  const cardContainer = document.createElement("div");
  addCardContainerStyles(cardContainer);
  return cardContainer;
};
const createCardImg = (imgUrl: AwardDataType["imgUrl"]) => {
  const cardImgContainer = document.createElement("div");
  cardImgContainer.style.height = "100%";
  cardImgContainer.style.width = "30%";
  cardImgContainer.style.backgroundColor = "#252628";
  if (!imgUrl) return cardImgContainer;
  const cardImg = document.createElement("img");
  cardImg.style.width = "100%";
  cardImg.style.height = "100%";
  cardImg.style.objectFit = "contain";
  cardImg.style.objectPosition = "center";
  cardImg.src = imgUrl;
  cardImgContainer.appendChild(cardImg);
  return cardImgContainer;
};
const createCardContentContainer = ({
  headerTitle,
  title,
  description,
  winner,
}: AwardDataType) => {
  const cardContentContainer = document.createElement("div");
  addCardContentContainerStyles(cardContentContainer);
  //create elements
  const headerTitleEl = document.createElement("h4");
  const titleEl = document.createElement("h2");
  const winnerEl = document.createElement("p");
  const descriptionEl = document.createElement("p");
  //assign text values
  headerTitleEl.innerText = headerTitle || "";
  titleEl.innerText = title || "";
  winnerEl.innerText = winner || "";
  descriptionEl.innerText = description || "";
  //append elements
  if (headerTitle) cardContentContainer.appendChild(headerTitleEl);
  if (title) cardContentContainer.appendChild(titleEl);
  if (winner) cardContentContainer.appendChild(winnerEl);
  if (description) cardContentContainer.appendChild(descriptionEl);
  //style elements
  addCardHeaderStyles(headerTitleEl);
  addCardTitleStyles(titleEl);
  addCardWinnerStyles(winnerEl);
  addCardDescriptionStyles(descriptionEl);

  return cardContentContainer;
};
const createCard = ({
  imgUrl,
  awardType,
  direction,
  ...rest
}: AwardDataType & {
  direction: DirectionType;
}) => {
  const cardOuterContainer = createCardOuterContainer(direction);
  const awardTypeHeader = createAwardTypeHeader({
    awardType: awardType,
    direction,
  });
  const cardContainer = createCardContainer();
  const cardImg = createCardImg(imgUrl);
  const cardContentContainer = createCardContentContainer(rest);
  //append to card
  cardContainer.appendChild(cardImg);
  cardContainer.appendChild(cardContentContainer);
  //append to outer container
  if (awardTypeHeader) cardOuterContainer.appendChild(awardTypeHeader);
  cardOuterContainer.appendChild(cardContainer);
  return cardOuterContainer;
};

const createAward = ({
  direction,
  yearAwarded,
  line,
  ...rest
}: AwardDataType & {
  direction: DirectionType;
  line: boolean;
}) => {
  const cardEl = createCard({ ...rest, direction });
  const seperator = createSeperator(line);
  const awardContainer = document.createElement("div");
  const yearEl = createYear({
    yearAwarded,
    direction,
  });
  //add in order
  if (yearEl) awardContainer.appendChild(yearEl);
  awardContainer.appendChild(seperator);
  awardContainer.appendChild(cardEl);
  //add styles
  awardContainer.style.display = "flex";
  awardContainer.style.flexDirection = direction;
  awardContainer.style.width = "100%";
  awardContainer.style.marginTop = -spacingFactor + units;
  return awardContainer;
};

const main = (currData: AwardDataType[]) => {
  currData.forEach((award, i) => {
    const awardEl = createAward({
      ...award,
      direction: i % 2 === 0 ? "row" : "row-reverse",
      line: i !== currData.length - 1,
    });
    awardsContainer?.appendChild(awardEl);
  });
};
//init
const awardsContainer = document.body;
document.body.style.backgroundColor = "#F2F0F3";
document.body.style.padding = spacingFactor * 5.33333 + units;
main(data);
