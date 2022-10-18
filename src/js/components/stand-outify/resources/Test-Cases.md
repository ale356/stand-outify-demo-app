# Manual Test-Cases

## TC1.1 Initialize element successfully
Use case: UC1 Initialize element

Scenario: Initialise element successfully

The main scenario of UC1 is tested where a user initialises an element successfully.
Precondition: Instantiated custom element stand-outify.

### Test steps
* Create an H1 element called headerElement with text content ‘’Hover Here.
* Call on the method initializeElement and put in as parameters ‘magnify’, headerElement, ‘click’
* Start the application
* Click on the element

### Expected
* The system should now animate the headerElement with the style magnify when a user clicks on it.

## TC1.2 Initialize element unsuccessfully
Use case: UC1 Initialize element

Scenario: Initialise element unsuccessfully

The second scenario of UC1 is tested where a user initialises an element unsuccessfully.
Precondition: Instantiated custom element stand-outify..

### Test steps
* Create an H1 element called headerElement.
* Call on the method initializeElement on the custom element and put in as parameters 10, headerElement, ‘click’
* Start the application

### Expected
* The system should now show an error message in the web browsers console.

## TC2.1 Change element style successfully
Use case: UC2 Change element style

Scenario: Change element style successfully

The main scenario of UC2 is tested where a user changes an elements style successfully.
Precondition: An initialised element with the animation style ‘magnify’ and instantiated custom element stand-outify.

### Test steps
* Call on the method changeAnimationStyle and put in as parameter ‘highlight’
* Start the application
* Click on the element

### Expected
* The system should now animate the initialised element with the style highlight when a user clicks on it.


## TC2.2 Change elements style unsuccessfully
Use case: UC2 Change element style

Scenario: Change element style unsuccessfully

The second scenario of UC2 is tested where a user changes an elements style unsuccessfully.
Precondition: An initialised element and instantiated custom element stand-outify.

### Test steps
* Call on the method changeAnimationStyle and put in as parameter 10
* Start the application
* Click on the element

### Expected
* The system should now show an error message in the web browsers console.

## TC3.1 Remove animation successfully
Use case: UC3 Remove animation

Scenario: Remove animation successfully

The main scenario of UC3 is tested where a user removes an elements animation successfully.
Precondition: An initialised element and instantiated custom element stand-outify.

### Test steps
* Call on the method abortEventListenerChildElement on the custom element
* Start the application
* Click on the element

### Expected
* The system should now have removed the animation on the initialised element

## TC3.2 Remove animation unsuccessfully
Use case: UC3 Remove animation

Scenario: Remove animation unsuccessfully

The second scenario of UC3 is tested when a user tries to remove an animation of an element that hasn’t been initialised.
Precondition: Instantiated custom element stand-outify.

### Test steps
* Call on the method abortEventListenerChildElement on the custom element
* Start the application

### Expected
* The system should now show an error message in the web browsers console.

## TC4.1 Change animation color successfully
Use case: UC4 Change animation color

Scenario: Change animation color successfully

The main scenario of UC4 is tested when a user changes an elements animation color successfully.
Precondition: An initialised element with the animation style highlight and an instantiated custom element stand-outify.

### Test steps
* Call on the method changeColorOfAnimation on the custom element and provide ‘red’ as a parameter
* Start the application
* Click on the element

### Expected
* The system should now have updated/changed the animation color

## TC4.2 Change animation color unsuccessfully
Use case: UC4 Change animation color

Scenario: Change animation color unsuccessfully

The second scenario of UC4 is tested when a user changes an elements animation color which don’t have any color in their animation.
Precondition: An initialised element with the animation style magnify and a instantiated custom element stand-outify.

### Test steps
* Call on the method changeColorOfAnimation on the custom element and provide ‘red’ as a parameter
* Start the application
* Click on the element

### Expected
* The system should show an error message in the web browsers console.

## TC5.1 Change duration of animation successfully
Use case: UC5 Change duration of animation

Scenario: Change duration of animation successfully

The main scenario of UC5 is tested when a user changes the duration of an animation successfully.
Precondition: An initialised element with the animation style highlight and an instantiated custom element stand-outify.

### Test steps
* Call on the method changeDurationOfAnimation on the custom element and provide 4000 as a parameter
* Start the application
* Click on the element

### Expected
* The system should now show the animation with an increased duration.

## TC5.2 Change duration of animation unsuccessfully
Use case: UC5 Change duration of animation

Scenario: Change duration of animation unsuccessfully

The second scenario of UC5 is tested when a user changes the duration of an animation unsuccessfully.
Precondition: An initialised element with the animation style ‘highlight’ and an instantiated custom element stand-outify.

### Test steps
* Call on the method changeDurationOfAnimation on the custom element and provide ‘4000’ as a parameter
* Start the application
* Click on the element

### Expected
* The system should show an error message in the web browsers console.