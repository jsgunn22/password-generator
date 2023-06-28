### Challenge 3 - Build a Password Generator

### User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

### Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Purpose

The prupose of this challenge was to practice our newly learned basic javaScript skills.

## What I learned

Creating a function or feature is to create a list of instructions. "Tell this to tell that to do this". Using computational thinking allowed me to make decisions based on the AC one step at a time.

## My experience with this challenge

The for and while loops are very important for some of the AC. There are several solutions to this challenge that I could have chose from, most notably how to build an array of all characts of chosen character types. I chose to use 4 arrays in a single object and a reusable function to help populate available characters. However the alpha characters outweigh the numeric and special characters so when choosing random characters there is a higher chance that a letter will be chosen over a number or special character. None the less, the function works as expected and has some real world application.

## Considerations

There were some functions that I feel I could improve in the future. e.g when the user cancels out of the first prompt the placeholder goes to "undefined". I would like to know more about how to cancel without changing the placeholder text. I am also curious if its possible to overwrite the styling and labels of a prompt.

## Assets

The live page can be viewed here >> https://jsgunn22.github.io/password-generator/
