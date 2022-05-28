import styled from "styled-components"
import { Link } from "react-router-dom"
import { selectMovies } from "../features/movie/movieSlice"
import { useAppSelector } from "../app/hooks"
import { thumbnailUrl } from "../contents/movie"
import { useGetMoviesQuery } from "../services/Services"
import { Movie } from "../../typings"

const Container = styled.div`
  h4 {
    font-size: 15px;
    font-family: sans-serif;
    font-weight: 900;
  }
`
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
  }
`

function Movies() {
  // const movies = useAppSelector(selectMovies)
  const { data, isLoading } = useGetMoviesQuery()
  const movies = data?.results
  return (
    <>
      {!isLoading && (
        <Container>
          <h4>推薦給您</h4>
          <Content>
            {movies &&
              movies.map((movie: Movie) => (
                <Wrap key={movie.id}>
                  <Link to={`/detail/${movie.id}`}>
                    <img src={`${thumbnailUrl}${movie.poster_path}`} alt="" />
                  </Link>
                </Wrap>
              ))}
          </Content>
        </Container>
      )}
    </>
  )
}

export default Movies
