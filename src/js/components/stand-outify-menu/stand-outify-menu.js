/**
 * The Stand-outify menu web component module.
 *
 */

import '../stand-outify/index.js'

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
/*Style here.*/
select::-ms-expand {
  display: none;
}
select {
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5em 2em 0.5em 0.5em;
  border: 1px solid #eee;
  font: inherit;
  line-height: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: right 15px top 1em, right 10px top 1em;
  background-size: 5px 5px, 5px 5px;
}
.select-menu {
  font-size: 20px;
}
/* From uiverse.io */
button {
  margin: 12px;
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
button:hover {
  background-color: orangered;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
}
label {
  padding: 8px;
}
</style>
  <div class="select-menu">
  <label for="element-options">Choose an element</label>
    <select id="element-options">
      <option selected value="button">Button</option>
      <option value="a">Anchor</option>
      <option value="h1">H1</option>
      <option value="h2">H2</option>
      <option value="p">Paragraph</option>
    </select>
    <label for="animation-options">Choose an animation</label>
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
     * A select element.
     *
     * @type {SelectElement}
     */
    elementOptionsSelectElement

    /**
     * A select element.
     *
     * @type {SelectElement}
     */
    animationOptionsSelectElement

    /**
     * The animate button.
     *
     * @type {ButtonElement}
     */
    animateButtonElement

    /**
     * The element options value.
     *
     * @type {string}
     */
    #elementOptionsValue

    /**
     * The animation options value.
     *
     * @type {string}
     */
    #animationOptionsValue

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
      this.animationOptionsSelectElement = this.shadowRoot.getElementById('animation-options')
      this.animateButtonElement = this.shadowRoot.getElementById('animate-button')

      this.#elementOptionsValue = this.elementOptionsSelectElement.options[this.elementOptionsSelectElement.selectedIndex].value
      this.#animationOptionsValue = this.animationOptionsSelectElement.options[this.animationOptionsSelectElement.selectedIndex].value
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback() {
      this.elementOptionsSelectElement.addEventListener('change', (event) => {

        // Update the value.
        this.#elementOptionsValue = this.elementOptionsSelectElement.options[this.elementOptionsSelectElement.selectedIndex].value
      })

      this.animationOptionsSelectElement.addEventListener('change', (event) => {
        this.#animationOptionsValue = this.animationOptionsSelectElement.options[this.animationOptionsSelectElement.selectedIndex].value
      })

      this.animateButtonElement.addEventListener('click', (event) => {
        this.dispatchEvent(new window.CustomEvent('animateElement'))
      })
    }

    /**
     * Gets the element option value.
     */
    get elementOptionValue() {
      return this.#elementOptionsValue
    }

    /**
    * Gets the animation option value.
    */
    get animationOptionValue() {
      return this.#animationOptionsValue
    }
  }
)
