/**
 * The main script file of the application.
 *
 * @author ale356
 * @version 1.0
 */
import './components/stand-outify/index.js'
import './components/stand-outify-menu/index.js'
import './components/stand-outify-display/index.js'

const standOutifyMenuElement = document.createElement('stand-outify-menu')
const standOutifyDisplayElement = document.createElement('stand-outify-display')

const headerContainer = document.querySelector('.header')
const middleContainer = document.querySelector('.middle')

headerContainer.append(standOutifyMenuElement)
middleContainer.append(standOutifyDisplayElement)

const standOutifyMenuReference = document.querySelector('stand-outify-menu')

standOutifyMenuReference.addEventListener('animateElement', (event) => {
  removeOldStandOutify()

  const currentDataArray = getCurrentData()
  const demoElement = createDemoElement(currentDataArray)

  showDemoElement(demoElement)
})

const removeOldStandOutify = () => {
  const standOutifyDisplayReference = document.querySelector('stand-outify-display')
  const standOutifyElementExists = standOutifyDisplayReference.shadowRoot.querySelector('stand-outify')

  if (standOutifyElementExists != null) {
    standOutifyElementExists.remove()
  }
}

const getCurrentData = () => {
  const elementOptionValue = standOutifyMenuElement.elementOptionValue
  const animationOptionValue = standOutifyMenuElement.animationOptionValue
  const currentDataArray = []
  currentDataArray.push(elementOptionValue)
  currentDataArray.push(animationOptionValue)
  return currentDataArray
}

const createDemoElement = (currentDataArray) => {

  const elementToAnimate = document.createElement(currentDataArray[0])
  elementToAnimate.textContent = 'Demo'

  const demoElement = document.createElement('stand-outify')
  demoElement.initializeElement(currentDataArray[1], elementToAnimate, 'click')
  return demoElement
}

const showDemoElement = (demoElement) => {
  const standOutifyDisplayContainer = document.querySelector('stand-outify-display').shadowRoot.getElementById('display-container')

  standOutifyDisplayContainer.appendChild(demoElement)
  standOutifyDisplayContainer.style.display = 'flex'
}
