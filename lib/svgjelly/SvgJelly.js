/* @flow */
import React from "react"

import JellyPath from "./PathTag"
import SVGJelly from "./SvgTag"

const walk = childrenEl => React.Children.map(childrenEl, child => {
  const children = child.props && child.props.children && walk(child.props.children)
  // node to replace
  if (child.type === "path") {
    return React.createElement(JellyPath, { ...child.props })
  }
  // other node
  else if (child.type) {
    return React.cloneElement(child, { ...child.props }, children)
  }
  // text child
  return child
})

const isClassComponent = Component => Component.prototype.hasOwnProperty("render")

export const SvgJelly = (SVGComponent: Function) => {
  const tree = isClassComponent(SVGComponent) ? new SVGComponent().render() : SVGComponent()
  const children = walk(tree.props.children)
  return (props: Props) => React.createElement(SVGJelly, { ...tree.props, ...props }, children)
}

type Props = {
  children: React.Element<*>
}
