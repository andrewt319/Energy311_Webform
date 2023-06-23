# Energy311_Webform

## Current Iteration: 
Currently, this form prompt users for a busines name, business address, business ZIP, phone number, and email. After clicking on the submit button, it sends a POST request to https://energy311dev.appspot.com/a/building. The example POST request on https://documenter.getpostman.com/view/7686659/2s93m4Yi2k has many different fields that wasn't specified in the instructions for this form -- including stateCode, active, collections, etc. However, this form can easily be modified to include whatever fields are needed.

## Improvements to be made:
Clearly, this form is pretty basic, and it just takes in input and POSTS it into the api. However, there are improvements that could be made, depending on what we want to do. Namely, we could:
- Form Validation. Valid addresses, ZIP is within 5 numbers, phone is valid format, email is of valid format. Provide error messages when things aren't followed
- Error Handling: make berror error messages when the POST fails, and display error messages when user inputs are wrong as well
- Confirmation/Success Message: Sends an email to the user specifying that their form has been received.
- CAPTCHA / Anti-Spam: Prevent bots from submitting the form



