# Use-Cases

## UC1 Initialize element
Precondition: none

Postcondition: an element is animated

### Main scenario
1. Starts when a user wants to animate an element
2. The user instantiates the class Stand-outify.js
3. The User calls on the class method initializeElement and provides animation style, element and an event type
4. The system animates the element and adds it to the DOM

### Alternate scenarios
* 3a The user provides invalid parameters
* The system shows an error message


## UC2 Change animation style
Precondition: none

Postcondition: an element animation style is changed

### Main scenario
1. Starts when a user wants to change an elements current animation style
2. The User calls on the method changeAnimationStyle and provides animation style, element and an event type
3. The system changes the elements animation style

### Alternate scenarios
* 2a The user provides invalid parameters
* The system shows an error message

## UC3 Remove animation
Precondition: animated element

Postcondition: non animated element

### Main scenario
1. Starts when a user wants to remove animation from an element
2. The User calls on the method abortEventListenerChildElement
3. The system removes the elements animation

### Alternate scenarios
* 2a The user hasn’t initialised the element before.
* The system shows an error message

## UC4 Change animation color
Precondition: none

Postcondition: updated animation color

### Main scenario
1. Starts when a user wants to change the color on a animation
2. The User calls on the method changeColorOfAnimation and provides a color
3. The system updates the used animations color

### Alternate scenarios
* 2a The user provides color for an animation that don’t have any.
* The system shows an error message


## UC5 Change duration of animation
Precondition: none

Postcondition: updated animation duration

### Main scenario
1. Starts when a user wants to change the duration of an animation
2. The User calls on the method changeDurationOfAnimation and provides the time in milliseconds
3. The system updates the animations duration

### Alternate scenarios
* 2a The user provides wrong data type for the duration
* The system shows an error message
