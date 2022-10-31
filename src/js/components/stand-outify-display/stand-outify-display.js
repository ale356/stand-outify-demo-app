/**
 * The Stand-outify display web component module.
 *
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
/*Style here.*/
#display-container {
  background-color: rgba(60, 60, 60, 0.2);
  border-style: solid;
  width: 100%;
  height: 300px;
  display: none;
	align-items: center;
	justify-content: center;
}
</style>
  <h2 id="display-title"></h2>
  <div id="display-container">
</div>
`

customElements.define('stand-outify-display',
  /**
   * Represents a Stand-outify menu element.
   */
  class extends HTMLElement {
    /**
     * The display container.
     *
     * @type {DivElement}
     */
    #displayContainer

    /**
     * The display title.
     *
     * @type {h2Element}
     */
    #displayTitle

    /**
     * The callback counter.
     *
     * @type {number}
     */
    #callBackCounter

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#displayContainer = this.shadowRoot.getElementById('display-container')
      this.#displayTitle = this.shadowRoot.getElementById('display-title')
      this.#callBackCounter = 0
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      // Options for the observer.
      const config = { childList: true }

      // Create an observer instance linked to the callback function.
      const observer = new MutationObserver(this.#updateDisplayTitle)

      // Start observing the target node for configured mutations.
      observer.observe(this.displayContainer, config)
    }

    /**
     * Updates the text content of the display title.
     *
     * @type {Function}
     */
    #updateDisplayTitle = (mutationList, observer) => {
      if (this.callBackCounter < 1) {
        this.#callBackCounter++

        for (const mutation of mutationList) {
          if (mutation.type === 'childList') {
            this.#displayTitle.textContent = 'Click on the element to play the animation.'
          }
        }
      } else {
        observer.disconnect()
      }
    }

    get displayContainer () {
      return this.#displayContainer
    }

    get displayTitle () {
      return this.#displayTitle
    }

    get callBackCounter () {
      return this.#callBackCounter
    }
  }
)
