/**
 * The Stand-outify menu web component module.
 *
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
/*Style here.*/
</style>
<div class="select-menu">
  <select id="element-options">
    <option selected value="button">Button</option>
    <option value="a">Anchor</option>
    <option value="h1">H1</option>
    <option value="h2">H2</option>
    <option value="p">Paragraph</option>
  </select>
  <select id="animation-options">
    <option selected value="magnify">Magnify</option>
    <option value="highlight">Highlight</option>
    <option value="shake">Shake</option>
  </select>
  <button id="animate-button">Animate</button>
</div>
`

customElements.define('stand-outify-menu',
  /**
   * Represents a Stand-outify menu element.
   */
  class extends HTMLElement {
    /**
     * The element options select element.
     *
     * @type {SelectElement}
     */
    elementOptionsSelectElement

    /**
     * The element options value.
     *
     * @type {string}
     */
    #elementOptionsValue

    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.elementOptionsSelectElement = this.shadowRoot.getElementById('element-options')

      // Set the value.
      this.#elementOptionsValue = this.elementOptionsSelectElement.options[this.elementOptionsSelectElement.selectedIndex].value
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback() {
      // Eventlistener to the element options.
      this.elementOptionsSelectElement.addEventListener('change', (event) => {

        // Update the value.
        this.#elementOptionsValue = this.elementOptionsSelectElement.options[this.elementOptionsSelectElement.selectedIndex].value
      })
    }
  }
)
