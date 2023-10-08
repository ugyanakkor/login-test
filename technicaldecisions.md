# Technical decisions

- I used my home project for create a sustainable environment.
- Because of the time limitation, I didn't write all the functionalities, unit and E2E tests, but most of them.
- Used routing for navigation, routing guard for prevent navigation without authentication.
- Used content projection to write a form wrapper for re-usability.
- Used trackbyfn for list rendering performance
- Used localstorage to store some user specific data
- Angular commit convention with +1 plus type: I use `design` type\
  when I modify only the design

## Further development opportunities

- Lazy loading the components and images for performance.
- Password is stored in localstorage as a string, NEVER do that in production.\
  Every user sensitive data in the localstorage should be hashed or encrypted.
- I didn't write all the unit tests, others could be written.
- I wrote E2E tests for login and register page, others could be written.
- I used window.localstorage in the cypress e2e tests, but there is a [package](https://www.npmjs.com/package/cypress-localstorage-commands)\
  which could be used to avoid some issues in other circumstances.
- I didn't write a functional file uploader, but in that case cypress not \
  support file uploading, but there is a [package](https://www.npmjs.com/package/cypress-file-upload) for that case.
- Login when the user entered the credentials and press Enter button. \
  You wouldn't have thought, there is a cool package for [keyboard events](https://www.npmjs.com/package/mousetrap)\
  to avoid difference issues between operation systems and browsers.
