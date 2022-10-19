/**
 * The main script file of the application.
 *
 * @author ale356
 * @version 1.0
 */
import './components/stand-outify-menu/index.js'
import './components/stand-outify/index.js'

// Create the custom elements.
const standOutifyMenuElement = document.createElement('stand-outify-menu')
const standOutifyElement = document.createElement('stand-outify')

// Append the elements to the document.
document.body.append(standOutifyMenuElement)
document.body.append(standOutifyElement)

// standOutifyElement.initializeElement('highlight', h1Element, 'click')
