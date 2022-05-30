import styled from 'styled-components'

const ResponsiveBackground = styled.div`
  background-image: url(${props => (props.small)});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;

  @media (min-width: 640px) {
    background-image: url(${props => (props.medium)});
  }

  @media (min-width: 1024px) {
    padding-top: 40px;
    background-image: url(${props => (props.large)});
  }
`

export default ResponsiveBackground