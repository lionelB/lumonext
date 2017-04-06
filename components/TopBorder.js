import { styled } from 'styletron-react'
import colors from '../lib/colors'

export default () => (
  <TopBorder />
)

const TopBorder = styled('div', {
    height: ".3em",
    background: `linear-gradient(-90deg, ${colors.green} 3%, ${colors.blue} 98%)`,
})
