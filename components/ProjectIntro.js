import React from 'react'
import { styled } from 'styletron-react'
import Animated from 'animated/lib/targets/react-dom'
import Link from 'next/link'
import { BASE_WIDTH } from './ContentWrapper'
import injectVisible from '../lib/scroll-reveal'
import colors from '../lib/colors'
import { cx } from '../lib/utils'

type Props = {
  visible: boolean,
  title: string,
  description: string,
}

export class ProjectIntro extends React.Component {
  interpolate: Animated.Value.interpolate

  state = {
    translate: new Animated.Value(0), 
    opacity: new Animated.Value(0),
  }
  
  componentDidMount() {
    Animated.spring(this.state.opacity, { toValue: 0 }).start()
    this.interpolate = this.state.translate.interpolate({
      inputRange: [-1, 0],
      outputRange: ['20px', '0px']
    });
  }

  componentWillReceiveProps(nextProps: Props) {
     if (nextProps.visible) { 
        Animated.spring(this.state.translate, { toValue: 1}).start()
        Animated.spring(this.state.opacity, { toValue: 1 }).start()
     }
  }

  render() {
    return (
      <Wrapper style={{
        opacity: this.state.opacity,
        transform: [{
          translateY: this.interpolate 
        }]
      }}>
        <H2>
          <Link href="/projects?id=test" as="/projects/test">
            <A href="/projects/test">{this.props.title}</A>
          </Link>
        </H2>
        { this.props.description.map((paragraph, index) => <P key={index}> { paragraph } </P>) }
      </Wrapper>
    )
  }
}

export default injectVisible(ProjectIntro);

const Wrapper = styled(Animated.div, {
  margin: '3.5rem auto 0',
  maxWidth: BASE_WIDTH,
  transformOrigin: 'left center',
})

const H2font = ({ className, children }) => (
  <h2 className={cx(className, 'font-montserrat')}>{children}</h2>
)

const H2 = styled(H2font, {
  fontSize: '2.25em',
})

const A = styled('a', {
  color: colors.black,
  textDecoration: 'none',
  transition: '.1s ease color',
  ':visited': {
    color: colors.black,
  },
  ':hover': {
    color: colors.blue,
  }
})

const P = styled('p', {
  fontSize: '1.3em',
  lineHeight: '1.5',
  color: colors.lightBlack,
})
