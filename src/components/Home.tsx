import { useEffect, useState } from "react"
import styled from "styled-components"
import requests from "../utils/requests"
import ImgSlider from "./ImgSlider"
import Movies from "./Movies"
import Viewers from "./Viewers"
import axios from "axios"
import { useAppDispatch } from "../app/hooks"
import { setMovies } from "../features/movie/movieSlice"

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

function Home() {
  const dispatch = useAppDispatch()
  const fetchData = () => {
    axios
      .all([
        axios.get(requests.fetchNetflixOriginals),
        axios.get(requests.fetchTrending),
        axios.get(requests.fetchTopRated),
        axios.get(requests.fetchActionMovies),
        axios.get(requests.fetchComedyMovies),
        axios.get(requests.fetchHorrorMovies),
        axios.get(requests.fetchRomanceMovies),
        axios.get(requests.fetchDocumentaries)
      ])
      .then(
        axios.spread((...allData) => {
          dispatch(
            setMovies({
              NetflixOriginals: allData[0].data.results,
              Trending: allData[1].data.results,
              TopRated: allData[2].data.results,
              ActionMovies: allData[3].data.results,
              ComedyMovies: allData[4].data.results,
              HorrorMovies: allData[5].data.results,
              RomanceMovies: allData[6].data.results,
              Documentaries: allData[7].data.results
            })
          )
        })
      )
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home
