import FontFaceObserver from "fontfaceobserver"

// const playfairObserver = new FontFaceObserver("playfair_displayregular")
export const observe = () => {
  const montserratObserver = new FontFaceObserver("montserrat")
  const ebgaramondObserver = new FontFaceObserver("ebgaramond")

  montserratObserver
    .load()
    .then(() => document.body.classList.add("font-montserrat"))
    .catch(err => console.error("failed load montserrat", err))
  ebgaramondObserver
    .load()
    .then(() => document.body.classList.add("font-ebgaramond"))
    .catch(err => console.error("failed load ebgaramond", err))
}


