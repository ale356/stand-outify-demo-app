/**
 * The Stand-outify display web component module.
 *
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
/*Style here.*/
</style>
<div id="display-container">
</div>
`

customElements.define('stand-outify-display',
  /**
   * Represents a Stand-outify menu element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback() {
    }
  }
)
