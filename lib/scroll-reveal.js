/* @flow */
import React from 'react'

type VisibleState = {isVisible: boolean}

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


const ViewportVisible = <P:{children: any},S>(
  Component: Class<React.Component<void, P, S>>
) =>  
  class ViewportVisible extends React.Component<void, P, VisibleState> {
    node: Element;
    state: { isVisible: boolean }
    scrollHandler: () => void
    prevPosition: Position
    static displayName = 'Viewport'
    constructor(props: P) {
      super(props);
      this.scrollHandler = this.scrollHandler.bind(this);
      this.state = {
        isVisible: false
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
      
      this.setState((prevState, props) => ({isVisible: position === 'inside'}))
    }

    getBounds() {   
      const { top, bottom } = this.node.getBoundingClientRect();
      const viewportHeight = window.innerHeight
      const viewportTop = 0
      const viewportBottom = viewportHeight
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
      return <div ref={(node) => {this.node = node}}>
        <Component {...this.props} isVisible={this.state.isVisible} />
      </div>
    }
  };



export default ViewportVisible;
 
