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
<h2 id="h2-title"></h2>
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
     * Creates an instance of the current type.
     */
    constructor() {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#displayContainer = this.shadowRoot.getElementById('display-container')
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback() {
      // Select the node that will be observed for mutations
      const targetNode = document.getElementById('some-id');

      // Options for the observer (which mutations to observe)
      const config = { attributes: false, childList: true, subtree: true };

      // Callback function to execute when mutations are observed
      const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
          }
        }
      }

      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback);

      // Start observing the target node for configured mutations
      observer.observe(targetNode, config);

      // Later, you can stop observing
      observer.disconnect();

    }

    /**
  * Gets the element option value.
 */
    get displayContainer() {
      return this.#displayContainer
    }
  }
)
