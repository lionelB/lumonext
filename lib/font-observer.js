// @flow
import FontFaceObserver from "fontfaceobserver"

// const playfairObserver = new FontFaceObserver("playfair_displayregular")
export const observe = () => {
  const montserratObserver = new FontFaceObserver("montserrat")
  const calendasObserver = new FontFaceObserver("calendas")
  
  montserratObserver
    .load()
    .then(() => document.body && document.body.classList.add("font-montserrat"))
    .catch(err => console.error("failed load montserrat", err))
  calendasObserver
    .load()
    .then(() => document.body && document.body.classList.add("font-calendas"))
    .catch(err => console.error("failed load ebgaramond", err))
}


