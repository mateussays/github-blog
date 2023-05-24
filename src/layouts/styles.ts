import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 18.5rem;
  max-height: 100%;
  background: rgb(13, 40, 66);
  background: linear-gradient(
    102deg,
    rgba(13, 40, 66, 1) 0%,
    rgba(11, 29, 47, 1) 100%
  );
`

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 850px) {
    display: none;
  }
`

export const ImageLogo = styled.img`
  max-width: 100%;
  height: auto;
`
