/**
 * The main script file of the application.
 *
 * @author ale356
 * @version 1.0
 */
import './components/stand-outify/index.js'
import './components/stand-outify-menu/index.js'
import './components/stand-outify-display/index.js'

// Create the custom elements.
const standOutifyMenuElement = document.createElement('stand-outify-menu')
const standOutifyDisplayElement = document.createElement('stand-outify-display')

// Append the elements to the document.
const headerContainer = document.querySelector('.header')
const middleContainer = document.querySelector('.middle')

headerContainer.append(standOutifyMenuElement)
middleContainer.append(standOutifyDisplayElement)

// Add a event listener to the dom.
const standOutifyMenuReference = document.querySelector('stand-outify-menu')

standOutifyMenuReference.addEventListener('animateElement', (event) => {

  // Check if there already are a standoutify element existing.
  const standOutifyDisplayReference = document.querySelector('stand-outify-display')
  const standOutifyElementExists = standOutifyDisplayReference.shadowRoot.querySelector('stand-outify')
  console.log(standOutifyElementExists)

  if (standOutifyElementExists != null) {
    standOutifyElementExists.remove()
  }

  const standOutifyElement = document.createElement('stand-outify')
  document.body.append(standOutifyElement)

  // Get the selected values and animate the element.
  const elementOptionValue = standOutifyMenuElement.elementOptionValue
  const animationOptionValue = standOutifyMenuElement.animationOptionValue
  const elementToAnimate = document.createElement(elementOptionValue)
  elementToAnimate.textContent = 'Demo'
  standOutifyElement.initializeElement(animationOptionValue, elementToAnimate, 'click')

  // Add the animated element as a child to the display component.
  const standOutifyDisplayContainer = document.querySelector('stand-outify-display').shadowRoot.getElementById('display-container')
  const standOutifyElementReference = document.querySelector('stand-outify')
  standOutifyDisplayContainer.appendChild(standOutifyElementReference)

})
