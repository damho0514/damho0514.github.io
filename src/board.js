import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsToggleOff } from "react-icons/bs";
import LogoImage from "./Image/Logo.png";
import LogoIcons from "./Image/Vector.png";
import Divider from "./Image/divider.png";
import { IoMdArrowDropdown } from "react-icons/io";
function Board() {
  const [lists, setLists] = useState([]);
  const [checkedInputs, setCheckedInputs] = useState([]);
  const [border, setBorder] = useState(false);
  const [isShow, isSetShow] = useState(false);

  const handlemodalOpen = () => {
    isSetShow(true);
  };

  const handlemodalClose = () => {
    isSetShow(false);
  };

  useEffect(() => {
    fetch("http://localhost:3000/Data/requests.json")
      .then((res) => res.json())
      .then((res) => setLists([...requests]));
  }, []);

  return (
    <>
      <HeaderBox>
        <HeaderImage />
        <LogoBox>
          <VectorIcons />
          <VectorTitle>A 가공업체</VectorTitle>
          <LineIcons />
          <LogTab>로그아웃</LogTab>
        </LogoBox>
      </HeaderBox>
      <MainContainer>
        <NavContainer>
          <NavBox>들어온요청</NavBox>
          <NavContent>파트너에게 딱 맞는 요청서를 찾아보세요.</NavContent>
          <button
            type="button"
            style={{
              display: "flex",
              alignContent: "center",
              width: "100px",
            }}
            onClick={handlemodalOpen}
          >
            가공방식
            <IoMdArrowDropdown style={{ fontSize: "24px", color: "#939FA5" }} />
          </button>
          <FilterBox>
            <BsToggleOff />
            <p style={{ fontSize: "14px" }}>상담 중인 요청만 보기</p>
          </FilterBox>
        </NavContainer>
        <ArticleBox>
          {lists.map((list, index) => (
            <Article>
              <CardPage>
                <ul key={index}>
                  {list.title}
                  <ProjectName>{list.client}</ProjectName>
                  <UserName>{list.due}까지 납기</UserName>
                  <UserDate>{list.count}개</UserDate>
                  <BorderLine></BorderLine>
                  <Counter>총 수량{list.amount}</Counter>
                  <Processing>가공방식{list.method}</Processing>
                  <Material>재료{list.material}</Material>
                  {list.status}
                </ul>
                <ButtonBox>
                  <HistoryButton>요청 내역 보기</HistoryButton>
                  <ChattingButton>채팅하기</ChattingButton>
                </ButtonBox>
              </CardPage>
            </Article>
          ))}
        </ArticleBox>
      </MainContainer>
    </>
  );
}

const DropdownBox = styled.div`
  width: 130px;
  height: 164px;
  background: #ffffff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
`;
const NavContainer = styled.div`
  width: 1500px;
  height: 150px;
  padding: 50px;
  transform: translateX(100px);
`;

const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ArticleBox = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 380px);
  grid-template-rows: repeat(2, 375px);
  transform: translateY(-25px);
`;

const FilterBox = styled.div`
  position: absolute;
  right: 0;
  p {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    transform: translate(57px, -93px);
  }
  svg {
    height: 32px;
    font-size: 55px;
    transform: translateY(-50px);
    color: #e5e5e5;
  }
`;

const MaterialFilter = styled.div`
  display: flex;
  align-items: center;
  width: 76px;
  height: 32px;
  padding: 4px 12px;
  background: #ffffff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
`;
const ProcessingFilter = styled.button`
  display: flex;
  align-items: center;
  width: 98px;
  height: 32px;
  padding: 4px 12px;
  background: #ffffff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
`;
const ButtonBox = styled.div`
  display: flex;
`;
const ChattingButton = styled.button`
  color: #2196f3;
  border: 1px solid #2196f3;
  padding: 6px 12px;
  background: #ffffff;
  border-radius: 4px;
  margin-left: 10px;
`;
const HistoryButton = styled.button`
  color: #ffffff;
  padding: 6px 12px;
  background: #2196f3;
  border: 1px solid #ffffff;
  border-radius: 4px;
  margin: 0px 0px;
`;
const Counter = styled.p`
  width: 70px;
  height: 20px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;

const Processing = styled.p`
  width: 70px;
  height: 20px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;
const Material = styled.p`
  width: 70px;
  height: 20px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;

const UserName = styled.p`
  margin-top: 10px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const UserDate = styled.p`
  font-family: Note Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;

const BorderLine = styled.div`
  position: absolute;
  transform: translate(-35px, -50px);
  width: 330px;
  border: 1px solid #e5e5e5;
`;

const CardPage = styled.div`
  width: 340px;
  height: 320px;
  margin: 0 auto;
  margin-top: 30px;
`;

const ProjectName = styled.div``;
const Article = styled.div`
  width: 366px;
  height: 356px;
  margin: 175px 145px 200px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
`;

const NavBox = styled.div`
  width: 97px;
  height: 32px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #323d45;
`;
const NavContent = styled.div`
  width: 284px;
  height: 24px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #323d45;
`;

const HeaderBox = styled.div`
  height: 70px;
  top: 0%;
  bottom: 0%;
  right: 0%;
  left: 0%;
  background-color: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

const HeaderImage = styled.div`
  background-image: url(${LogoImage});
  width: 153px;
  height: 20px;
  transform: translate(25px, 25px);
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  height: 30px;
  transform: translate(820%, 5px);
`;

const VectorIcons = styled.div`
  background-image: url(${LogoIcons});
  width: 16.67px;
  height: 15px;
  transform: translateY(2px);
`;
const VectorTitle = styled.span`
  width: 80px;
  height: 20px;
  color: white;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transform: translateY(3px);
`;

const LineIcons = styled.div`
  background-image: url(${Divider});
  position: absolute;
  height: 16px;
  top: 2px;
  left: 123.67px;
  border: 2px solid #ffffff;
`;

const LogTab = styled.span`
  width: 67px;
  height: 20px;
  line-height: 20px;
  color: white;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  transform: translate(20px, 3px);
`;

const requests = [
  {
    id: 1,
    title: "자동차 시제품 제작",
    client: "A 고객사",
    due: "2020.12.14",
    count: 2,
    amount: 100,
    method: ["밀링", "선반"],
    material: ["알루미늄"],
    status: "대기중",
  },
  {
    id: 2,
    title: "비행기 시제품 제작",
    client: "B 고객사",
    due: "2020.12.13",
    count: 2,
    amount: 100,
    method: ["선반"],
    material: ["탄소강", "강철"],
    status: "상담중",
  },
  {
    id: 3,
    title: "기차 시제품 제작",
    client: "C 고객사",
    due: "2020.12.12",
    count: 1,
    amount: 20,
    method: ["선반"],
    material: ["구리"],
    status: "대기중",
  },
  {
    id: 4,
    title: "자전거 시제품 제작",
    client: "D 고객사",
    due: "2020.12.11",
    count: 1,
    amount: 45,
    method: ["선반"],
    material: ["스테인리스강"],
    status: "대기중",
  },
  {
    id: 5,
    title: "헬리콥터 시제품 제작",
    client: "E 업체",
    due: "2020.12.10",
    count: 2,
    amount: 2,
    method: ["밀링"],
    material: ["알루미늄", "탄소강"],
    status: "대기중",
  },
  {
    id: 6,
    title: "전동 킥보드 시제품 제작",
    client: "F 업체",
    due: "2020.12.09",
    docs: 1,
    amount: 20,
    method: ["밀링"],
    material: ["강철"],
    status: "대기중",
  },
];
export default Board;
