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
const standOutifyElement = document.createElement('stand-outify')
const standOutifyMenuElement = document.createElement('stand-outify-menu')
const standOutifyDisplayElement = document.createElement('stand-outify-display')

// Append the elements to the document.
document.body.append(standOutifyElement)
document.body.append(standOutifyMenuElement)
document.body.append(standOutifyDisplayElement)

// standOutifyElement.initializeElement('highlight', h1Element, 'click')
