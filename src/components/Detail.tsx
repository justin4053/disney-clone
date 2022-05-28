import styled from "styled-components"
import { UserGroupIcon, PlayIcon } from "@heroicons/react/solid"
import { useParams } from "react-router-dom"
// import { selectMovies } from "../features/movie/movieSlice"
// import { useAppSelector } from "../app/hooks"
import { useGetMoviesQuery } from "../services/Services"
import { thumbnailUrl } from "../contents/movie"

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
  height: 20vh;
  min-height: 100px;
  width: 35vw;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Title = styled.h1`
  font-size: 100px;
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
  const { id } = useParams()
  const { data, isLoading } = useGetMoviesQuery()
  const movie = data?.results.find((result: any) => result.id == id)
  return (
    <Container>
      {!isLoading && (
        <>
          <Background>
            <img
              src={`${thumbnailUrl}${movie.backdrop_path || movie.poster_path}`}
              alt=""
            />
          </Background>
          <ImageTitle></ImageTitle>
          <Title>{movie?.title || movie?.name}</Title>
          <SubTitle>
            {movie?.release_date?.slice(0, 4) || "無上映日期"}
            ・3小時5分鐘,科幻、奇幻、超級英雄、動作冒險
          </SubTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
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
          <Description>{movie.overview}</Description>
        </>
      )}
    </Container>
  )
}

export default Detail
