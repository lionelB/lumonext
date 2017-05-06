/* @flow */
import React from 'react'
import ReactDOM from 'react-dom';

type Bounds = {
  top: number,
  bottom: number,
  viewportTop: number,
  viewportBottom: number,
} 
 
type Position = 'invisible' | 'below' | 'above' | 'inside'

const isServer = () => {
  return typeof window === 'undefined'
} 

type DefaultProps = {
  offsetTop: number,
  offsetBottom: number,
  once: boolean,
}

type Props = {
  offsetTop: number,
  offsetBottom: number,
   once: boolean,
}

type Visible = {visible: boolean}

const injectVisible = <
  P:{},
>(
  Component:  Class<React.Component<*, P  & Visible, any>>
): Class<React.Component<DefaultProps, $Diff<P & Props, Visible>, Visible>> => { 
  class VisibleHoC extends React.Component<DefaultProps, *, Visible> {
    
    static defaultProps = {
      offsetTop: 0,
      offsetBottom: 0,
      once: false,
    }
    
    state: Visible

    node: Element;
    
    scrollHandler: () => void
    
    prevPosition: Position = "invisible" 
    
    constructor(props:$Diff<P,Visible>) {
      super(props)
      this.scrollHandler = this.scrollHandler.bind(this);
      this.state = {
        visible: false
      }
    }

    componentDidMount() { 
      if (isServer()) return; 

      window.addEventListener("scroll", this.scrollHandler, false);
      window.addEventListener("resize", this.scrollHandler, false);
      // delayed scroll handler
      Promise.resolve().then(() => this.scrollHandler(null));
    }

    componentDidUpdate() {
      if (isServer()) return;
      this.scrollHandler(null);
    }

    scrollHandler(event: Event) { 
      if (this.node === undefined) return;
      
      const bounds = this.getBounds()
      const position = this.getPosition(bounds)
      const prevPosition = this.prevPosition
      this.prevPosition = position
      
      // early return 
      if (position === prevPosition) return
      if (this.props.once && this.state.visible) return
      
      this.setState((prevState, props) => ({visible: position === 'inside'}))
    }

    getBounds() { 
      const { top, bottom } = this.node.getBoundingClientRect();
      const { offsetTop, offsetBottom } = this.props
      const viewportHeight = window.innerHeight
      const viewportTop = 0 + (offsetTop * viewportHeight) / 100
      const viewportBottom = viewportHeight - (offsetBottom * viewportHeight) / 100 
      return {
        top, bottom, viewportTop, viewportBottom
      }
    }

    getPosition({top, bottom, viewportTop, viewportBottom}: Bounds) {
      if (bottom < viewportTop ) return 'above'
      if (top > viewportBottom) return 'below'
      if (top > viewportTop || bottom < viewportBottom) return 'inside'
      if (top < viewportTop && bottom > viewportBottom) return 'inside'
      return 'invisible'
    }

    componentWillUnmount() {
      if (isServer()) return;

      window.removeEventListener("scroll", this.scrollHandler);
      window.removeEventListener("resize", this.scrollHandler);
    }
   
    render() {  
       const ref = (node: Element) => {  
         if (isServer()) return
         const el = ReactDOM.findDOMNode(node) 
         if (el instanceof Element) {
           this.node = el
         }
         else {
           this.node = node
         }
       }
      // ref={node => ref(node)}

      return  <Component 
          {...this.props }
          ref={node => ref(node)}
          visible={this.state.visible} /> 
    }
  };

  return VisibleHoC;
}
 
export default injectVisible;
