import styled from "styled-components"

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("images/login-background.jpg");
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
  }
`
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`
const CTALogoOne = styled.img``
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 3px;
  margin: 8px 0 12px;
  &:hover {
    background: #0483ee;
  }
`
const Description = styled.p`
  font-size: 13px;
  letter-spacing: 1.3px;
  text-align: center;
  line-height: 1.5;
`
const CTALogoTwo = styled(CTALogoOne)`
  width: 100%;
`

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="images/cta-logo-one.svg" />
        <SignUp>取得所有資訊</SignUp>
        <Description>
          最新發行、永恒經典作品，盡在此處，重溫您最喜歡的電影、最愛的影集或重新遇見您錯過的內容，令人愛不釋手的經典作品、不計其數的最新電影和影集，等您發掘。
        </Description>
        <CTALogoTwo src="images/cta-logo-two.png" />
      </CTA>
    </Container>
  )
}

export default Login
