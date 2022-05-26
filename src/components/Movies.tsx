import styled from "styled-components"

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
  return (
    <Container>
      <h4>推薦給您</h4>
      <Content>
        <Wrap>
          <img
            src="https://i.ytimg.com/vi/zpz1Ncgx1KQ/maxresdefault.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i.ytimg.com/vi/zpz1Ncgx1KQ/maxresdefault.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i.ytimg.com/vi/zpz1Ncgx1KQ/maxresdefault.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i.ytimg.com/vi/zpz1Ncgx1KQ/maxresdefault.jpg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies