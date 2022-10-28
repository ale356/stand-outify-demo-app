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
     * @type {SlotElement}
     */
    #slotElement

    /**
     * The string value for the animation.
     *
     * @type {String}
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
     * @type {Object}
     */
    #selectedAnimationStyleSettings

    /**
     * The selected timing property.
     *
     * @type {Object}
     */
    #selectedAnimationTimingSettings

    /**
     * The abort controller.
     *
     * @type {Object}
     */
    #controller

    /**
     * The event type to listen for.
     *
     * @type {Object}
     */
    #eventType

    /**
     * Holds the different animation settings.
     *
     * @type {Object}
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

      this.#slotElement = this.shadowRoot.getElementById('slot-element')

      // Controller object that can abort DOM requests.
      this.#controller = new AbortController()
    }

    /**
     * Initializes the custom element with a style, event type and a child element.
     *
     * @param animationStyle - a string.
     * @param childElement - a HTMLElement.
     * @param eventType - a string.
     */
    initializeElement(animationStyle, childElement, eventType) {
      if (this.#initializeParametersAreValid(animationStyle, childElement, eventType)) {
        this.#setupCustomElement(animationStyle, childElement, eventType)

        this.#setChosenAnimationSettings()

        this.#addEventListenerToChildElement()
      } else {
        throw new Error('Invalid parameter value.')
      }
    }

    /**
    * Validates the parameters for the method initializeElement().
    */
    #initializeParametersAreValid(animationStyle, childElement, eventType) {

      if (typeof animationStyle === 'string' && typeof childElement === 'object' && typeof eventType === 'string') {
        return true
      } else {
        return false
      }
    }

    /**
    * Setup the custom element with the values needed to initialize it.
    */
    #setupCustomElement(animationStyle, childElement, eventType) {

      this.#setAnimationStyle = animationStyle

      this.#setEventType = eventType

      childElement.setAttribute('id', 'animation-element')

      this.#slotElement.appendChild(childElement)

      this.childElement = this.shadowRoot.getElementById('animation-element')
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
      this.#setAnimationStyleSettings()
      this.#setAnimationTimingSettings()
    }

    /**
     * Sets the animation style settings to use.
     */
    #setAnimationStyleSettings() {
      for (const key in this.#animationObject) {
        if (key === this.#animationStyle) {
          this.#selectedAnimationStyleSettings = this.#animationObject[key]
        }
      }
    }

    /**
     * Sets the animation timing settings to use.
     */
    #setAnimationTimingSettings() {
      for (const key in this.#timingObject) {
        if (key === this.#animationStyle) {
          this.#selectedAnimationTimingSettings = this.#timingObject[key]
        }
      }
    }

    /**
     * Change the animation of the element.
     *
     * @param animationStyle
     */
    changeAnimationStyle(animationStyle) {
      if (this.#parameterIsAString(animationStyle)) {
        this.#setAnimationStyle(animationStyle)

        this.#setChosenAnimationSettings()
      } else {
        throw new Error('The parameter is not a string.')
      }
    }

    /**
     * Change the event listener type.
     *
     * @param eventType - a string.
     */
    changeEventListenerType(eventType) {
      if (this.#parameterIsAString(eventType)) {
        this.abortEventListenerChildElement()

        this.#setEventType(eventType)
  
        this.#addEventListenerToChildElement()
      } else {
        throw new Error('The parameter is not a string.')
      }
    }

    /**
     * Aborts the event listener on the child element.
     */
    abortEventListenerChildElement() {
      // Remove the eventlistener on child element.
      this.#controller.abort()

      if (this.#getChildElement === undefined) {
        throw new Error('No element has been initialized.')
      }
    }

    /**
     * Animates the child element.
     */
    #animateChildElement() {
      this.childElement.animate(this.#selectedAnimationStyleSettings, this.#selectedAnimationTimingSettings)
    }

    /**
     * Changes the color of the animation.
     *
     * @param colorString
     */
    changeColorOfAnimation(colorString) {
      if (this.#parameterIsAString(colorString)) {
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
      } else {
        throw new Error('The parameter is not a string.')
      }
    }

    /**
     * Checks if the parameter is a string.
     */
    #parameterIsAString(value) {
      if (typeof value === 'string') {
        return true
      } else {
        console.log('Not a string.')
        return false
      }
    }

    /**
     * Changes the duration of the animation.
     *
     * @param milliseconds
     */
    changeDurationOfAnimation(milliseconds) {
      if (this.#parameterIsANumber(milliseconds)) {
        // Get the timing object.
        const currentAnimation = this.getAnimationStyle
        const currentTimingObject = this.#timingObject[currentAnimation]

        // Change the value of the timing object.
        currentTimingObject.duration = milliseconds
      }
    }

/**
 * Checks if the parameter is a number.
 */
      #parameterIsANumber(value) {
      if (typeof value === 'number') {
        return true
      } else {
        console.log('Not a number.')
        return false
      }
    }

    get getAnimationStyle() {
      return this.#animationStyle
    }

    set #setAnimationStyle(animationStyle) {
      this.#animationStyle = animationStyle
    }

    get #getEventType() {
      return this.#eventType
    }

    set #setEventType(eventType) {
      this.#eventType = eventType
    }

    get #getChildElement() {
      return this.childElement
    }
  }
)
