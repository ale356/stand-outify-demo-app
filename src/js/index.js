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

/**
 * Listen for the custom event 'animateElement'.
 */
standOutifyMenuReference.addEventListener('animateElement', (event) => {
  try {
    removeOldStandOutify()

    const currentDataArray = getCurrentData()
    const demoElement = createDemoElement(currentDataArray)

    showDemoElement(demoElement)
  } catch (e) {
    console.error(e.message)
  }
})

/**
 * Removes any previous stand-outify elements in the DOM.
 */
const removeOldStandOutify = () => {
  const standOutifyDisplayReference = document.querySelector('stand-outify-display')
  const standOutifyElementExists = standOutifyDisplayReference.shadowRoot.querySelector('stand-outify')

  if (standOutifyElementExists != null) {
    standOutifyElementExists.remove()
  }
}

/**
 * Gets the currect select data by user.
 */
const getCurrentData = () => {
  const elementOptionValue = standOutifyMenuElement.elementOptionValue
  const animationOptionValue = standOutifyMenuElement.animationOptionValue
  const currentDataArray = []
  currentDataArray.push(elementOptionValue)
  currentDataArray.push(animationOptionValue)
  return currentDataArray
}

/**
 * Creates an demo element from selected user data.
 */
const createDemoElement = (currentDataArray) => {
  const chosenAnimationStyle = currentDataArray[1]
  const elementToAnimate = document.createElement(currentDataArray[0])
  elementToAnimate.textContent = 'Demo'

  const demoElement = document.createElement('stand-outify')
  demoElement.initializeElement(chosenAnimationStyle, elementToAnimate, 'click')
  return demoElement
}

/**
 * Shows the demo element on the user interface.
 */
const showDemoElement = (demoElement) => {
  const standOutifyDisplayContainer = document.querySelector('stand-outify-display').shadowRoot.getElementById('display-container')

  standOutifyDisplayContainer.appendChild(demoElement)
  standOutifyDisplayContainer.style.display = 'flex'
}


// Test
const standOutifyElementTest = document.createElement('stand-outify')
document.body.append(standOutifyElementTest)
const headerElement = document.createElement('h1')
headerElement.textContent = 'Hover Here'
standOutifyElementTest.initializeElement('highlight', headerElement, 'click')
standOutifyElementTest.changeDurationOfAnimation('4000')

