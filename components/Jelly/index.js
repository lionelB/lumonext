import React from "react";
import Path from "./Path";
import normalize from "normalize-svg-path";
import parse from "parse-svg-path";
import { jellySettings, JellyPoint } from "./jellify";

const path = "M0,0 L75,0 150,0 150,25 150,50 75,50 0,50 0,25 Z";

const center = {
  x:75,
  y: 125
};

class Jelly extends React.Component {

  componentWillMount() {
    let points = normalize(parse(path)).map((el) => new JellyPoint(el, jellySettings));
    let curvePath = points.map((p) => p.toSVG()).join(" ");
    this.state = {
      hovered: false,
      mouseX: 0,
      mouseY: 0,
      path:curvePath,
      points: points
    };
  }
  onMouseMove(event) {
    const svgRect = this.svg.getBoundingClientRect();
    const mouseX = Math.round(event.clientX - svgRect.left - center.x);
    const mouseY = Math.round(event.clientY - svgRect.top - center.y);
    this.state.points.forEach((p) => p.update(mouseX, mouseY));
    this.setState({
      hovered: true,
      mouseX,
      mouseY
    });
  }

  onMouseEnter() {
    const animationId = requestAnimationFrame(() => this.updatePath())
    this.setState({
      hovered: true,
      animationId
    });
  }

  onMouseLeave() {
    cancelAnimationFrame(this.state.animationId);
    this.setState({
      hovered: false,
      animationId: false
    });
  }

  updatePath() {
    this.state.points.forEach((p) => p.update(this.state.mouseX, this.state.mouseY));
    this.setState({
      path: this.state.points.map((p) => p.toSVG()).join(" ")
    });

    requestAnimationFrame(() => this.updatePath());
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.state.animationId);
  }
  render() {
    return (
      <svg
          ref={(svg) => { this.svg = svg} }
          viewBox={`-${center.x} -${center.y} 300 300`}
          onMouseEnter={(e) => this.onMouseEnter(e)}
          onMouseLeave={(e) => this.onMouseLeave(e)}
          onMouseMove={(e) => this.onMouseMove(e)}
          style={{...styles.svg}}
      >
        <rect x={-center.x} y={-center.y} width="300" height="300" fill="rgba(0, 125, 255, .3)" />
        <Path path={this.state.path} style={styles.path} />
        {
          this.state.hovered && this.props.debug &&
          <circle
              cx={this.state.mouseX}
              cy={this.state.mouseY}
              r={jellySettings.radius}
              fill="none"
              stroke="rgba(00, 125, 255, .5)"
              strokeWidth="1px"
          />
        }
        <text x="150" y="150">{this.state.mouseX} - {this.state.mouseY} </text>
      </svg>
    );
  }
}

const styles = {
  svg: {
    display: "block",
    width: "300px",
    height: "300px",
    margin: "0 auto"
  },

  path: {
    fill: "red",
    strokeWidth: "1px",
    stroke: "black"
  }
}

Jelly.propTypes = {
  debug: React.PropTypes.bool
};

export default Jelly;

