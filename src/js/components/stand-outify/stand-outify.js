/**
 * The StandOutify web component module.
 *
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
/*Style here.*/
button {
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
#slot-element {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<slot id="slot-element"></slot>
`

customElements.define('stand-outify',
  /**
   * Represents a Standoutify element.
   */
  class extends HTMLElement {
    /**
     * The slot element.
     *
     * @type {HTMLDivElement}
     */
    #slotElement

    /**
     * The string value for the animation.
     *
     * @type {string}
     */
    #animationStyle

    /**
     * The child element.
     *
     * @type {HTMLElement}
     */
    childElement

    /**
     * The selected animation property.
     *
     * @type {object}
     */
    #selectedAnimationSettings

    /**
     * The selected timing property.
     *
     * @type {object}
     */
    #selectedTimingSettings

    /**
     * The abort controller.
     *
     * @type {object}
     */
    #controller

    /**
     * The event to listen for.
     *
     * @type {object}
     */
    #eventType

    /**
     * Object that holds the different animation settings.
     *
     * @type {object}
     */
    #animationObject = {
      magnify: [
        { transform: 'scale(1)' },
        { transform: 'scale(1.3)' },
        { transform: 'scale(1)' }
      ],
      shake: [
        { transform: 'rotate(0deg)', offset: 0 },
        { transform: 'rotate(5deg)', offset: 0.25 },
        { transform: 'rotate(0deg)', offset: 0.50 },
        { transform: 'rotate(-5deg)', offset: 0.75 },
        { transform: 'rotate(0deg)', offset: 1 }
      ],
      highlight: [
        { transform: 'scale(1)', color: 'orange', opacity: 1 },
        { transform: 'scale(1)', color: 'orange', opacity: 1 },
        { transform: 'scale(1)' }
      ]
    }

    /**
     * Holds the timing settings for the animations.
     *
     * @type {object}
     */
    #timingObject = {
      magnify: { duration: 2000, iterations: 1, easing: 'ease-in-out', delay: '10' },
      shake: { duration: 300, iterations: 5 },
      highlight: { duration: 2000, iterations: 1, easing: 'ease-in-out' }
    }

    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      // Reference to the slot element.
      this.#slotElement = this.shadowRoot.getElementById('slot-element')

      // Create a controller object.
      this.#controller = new AbortController()
    }

    /**
     * Getter method for the animation style.
     */
    get getAnimationStyle() {
      return this.#animationStyle
    }

    /**
     * Setter method for the animation style.
     *
     * @param animationStyle
     */
    #setAnimationStyle(animationStyle) {
      this.#animationStyle = animationStyle
    }

    /**
     * Getter method for the event type.
     */
    get #getEventType() {
      return this.#eventType
    }

    /**
     * Setter method for the event listener type.
     *
     * @param eventType
     */
    #setEventType(eventType) {
      this.#eventType = eventType
    }

    /**
     * Getter method for the child element.
     */
    get #getChildElement() {
      return this.childElement
    }

    /**
     * Initializes the custom element with a style, event type and a child element.
     *
     * @param animationstyle
     * @param childElement
     * @param eventType
     */
    initializeElement(animationstyle, childElement, eventType) {
      // Check if the input is valid.
      if (typeof animationstyle === 'string' && typeof eventType === 'string' &&
        typeof childElement === 'object') {
        // Setup the element.
        this.#animationStyle = animationstyle

        this.#eventType = eventType

        childElement.setAttribute('id', 'animation-element')

        this.#slotElement.appendChild(childElement)

        this.childElement = this.shadowRoot.getElementById('animation-element')

        // Set the correct animation settings.
        this.#setChosenAnimationSettings()

        // Animate the element and add a event listener.
        this.#addEventListenerToChildElement()
      } else {
        console.log('Invalid input.')
      }
    }

    /**
     * Adds a event listener to the child element.
     */
    #addEventListenerToChildElement() {
      // Add a eventlistener with a signal.
      this.childElement.addEventListener(this.#getEventType, (event) => {
        this.#animateChildElement()
      }, { signal: this.#controller.signal })
    }

    /**
     * Sets the animation settings to use.
     */
    #setChosenAnimationSettings() {
      // Set the animation.
      for (const key in this.#animationObject) {
        if (key === this.#animationStyle) {
          this.#selectedAnimationSettings = this.#animationObject[key]
        }
      }

      // Set the timing.
      for (const key in this.#timingObject) {
        if (key === this.#animationStyle) {
          this.#selectedTimingSettings = this.#timingObject[key]
        }
      }
    }

    /**
     * Change the animation of the element.
     *
     * @param animationStyle
     */
    changeAnimationStyle(animationStyle) {
      if (typeof animationStyle === 'string') {
        // Update the property.
        this.#setAnimationStyle(animationStyle)

        // Update the animation settings.
        this.#setChosenAnimationSettings()
      } else {
        console.log('Invalid input.')
      }
    }

    /**
     * Change the event listener type.
     *
     * @param eventType
     */
    changeEventListenerType(eventType) {
      // Remove the event listener.
      this.abortEventListenerChildElement()

      // Update the property.
      this.#setEventType(eventType)

      // Add new event listener.
      this.#addEventListenerToChildElement()
    }

    /**
     * Aborts the event listener on the child element.
     */
    abortEventListenerChildElement() {
      // Remove a eventlistener.
      this.#controller.abort()

      if (this.#getChildElement === undefined) {
        console.log('No element has been initialized.')
      }
    }

    /**
     * Animates the child element.
     */
    #animateChildElement() {
      this.childElement.animate(this.#selectedAnimationSettings, this.#selectedTimingSettings)
    }

    /**
     * Changes the color of the animation.
     *
     * @param colorString
     */
    changeColorOfAnimation(colorString) {
      if (typeof colorString === 'string') {
        // Iterate through each transform object.
        const currentAnimation = this.getAnimationStyle
        const currentAnimationArray = this.#animationObject[currentAnimation]
        let animationUsesColor = false

        currentAnimationArray.forEach(element => {
          if (element.color !== undefined) {
            element.color = colorString
            animationUsesColor = true
          }
        })

        if (!animationUsesColor) {
          console.log('This animation does not have any color.')
        }
      }
    }

    /**
     * Changes the duration of the animation.
     *
     * @param milliseconds
     */
    changeDurationOfAnimation(milliseconds) {
      if (typeof milliseconds === 'number') {
        // Get the timing object.
        const currentAnimation = this.getAnimationStyle
        const currentTimingObject = this.#timingObject[currentAnimation]

        // Change the value of the timing object.
        currentTimingObject.duration = milliseconds
      } else {
        console.log('Invalid data type.')
      }
    }
  }
)
