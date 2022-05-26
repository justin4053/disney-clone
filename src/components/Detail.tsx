import styled from "styled-components"
import { UserGroupIcon } from "@heroicons/react/solid"

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;
`
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  font-weight: 900;
  padding: 0 26px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 60px;
  background: rgb(249, 249, 249);
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    background: rgb(198, 198, 198);
  }
`
const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.6);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    color: black;
  }
`
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  span {
    font-size: 30px;
    color: white;
  }

  &:hover {
    background-color: white;
    span {
      color: black;
    }
  }
`
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
  color: white;
  margin-right: 0;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    background: white;
    color: black;
  }
`
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  font-weight: 900;
  min-height: 20px;
  margin-top: 26px;
  padding-bottom: 30px;
`
const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  margin-top: 16px;
  max-width: 800px;
`

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt=""
        />
      </ImageTitle>
      <SubTitle>2019・3小時5分鐘,科幻、奇幻、超級英雄、動作冒險</SubTitle>
      <Controls>
        <PlayButton>
          <img src="images/play-icon-black.png" alt="" />
          <span>播放</span>
        </PlayButton>
        <TrailerButton>
          <span>預告</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <UserGroupIcon />
        </GroupWatchButton>
      </Controls>
      <Description>
        漫威的「無限」(Infinity)
        系列史詩般的結局成為全球廣受好評的熱議話題，復仇者聯盟將與宇宙中最強大的反派薩諾斯展開激烈的對決。在毀滅性的事件抹殺了世界上一半的人口，並重挫他們的隊伍之後，剩下的英雄們掙扎著前進。但是他們必須攜手恢復宇宙的秩序與和諧，並把他們愛的人帶回來。由小勞勃道尼、克里斯伊凡、馬克盧法洛、克里斯漢斯沃、史嘉蕾喬韓森、傑瑞米雷納、唐奇鐸、保羅路德、班奈狄克康柏拜區、查德威克鮑斯曼、布麗拉森、湯姆霍蘭、凱倫吉蘭、柔伊莎​達娜和伊凡潔琳莉莉主演的《復仇者聯盟：終局之戰》(Avengers:
        Endgame)由凱文費奇製作，安東尼羅素和喬羅素執導。路易斯斯波西托、維多利亞阿隆索、邁克爾格里羅、陳貞、強法夫洛、詹姆斯岡恩和史丹李擔任執行製片人，克里斯托弗馬庫斯和史蒂芬麥費利撰寫劇本。某些連續閃光的片段或圖案可能會給光敏感的觀眾造成不適。
      </Description>
    </Container>
  )
}

export default Detail
