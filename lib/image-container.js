import React from 'react'
import { styled } from 'styletron-react'
import injectVisible from './scroll-reveal'
import Animated from 'animated/lib/targets/react-dom'
import colors from './colors'

type Props = {
  visible: boolean,
  url: string,
}

export class Image extends React.Component {
  props: Props
  state = {
    scale: new Animated.Value(0),
    scale2: new Animated.Value(1)
  }
  componentDidMount() {
    Animated.spring(this.state.scale, { toValue: 0 }).start()
  }
  componentWillReceiveProps(nextProps: Props) {
     if (nextProps.visible) {
       Animated.sequence([
        Animated.spring(this.state.scale, { toValue: 1, bounciness: 3, speed: 15}),
        Animated.spring(this.state.scale2, { toValue: 0,  bounciness: 3, speed: 15}),
       ]).start();
     }
  }
  render() {
    return (
      <Wrapper style={{transform: [{ scaleX: this.state.scale}] }} >
        <Img src={'/' + this.props.url} visible={this.props.visible} />
        <Placard style={{transform: [{ scaleX: this.state.scale2}] }} />        
      </Wrapper>   
    )
  }
}

export default injectVisible(Image);


const Img = styled('img', ({visible}) => {
 
  return {
    marginTop: '1em',
    width: "100%",
    transformOrigin: 'left center',
    boxShadow: '15px 15px 50px rgba(51, 51, 51, .5)',
    boxShadow: '0 10px 20px -4px rgba(0,0,0,0.6)',
  }
})

const Wrapper = styled(Animated.div, {
  position: 'relative', 
  transformOrigin: 'left center',
})

const Placard = styled(Animated.div, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: colors.gray,
  transformOrigin: 'right center',
})
