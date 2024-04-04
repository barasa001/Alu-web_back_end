// test.js
const { expect } = require('chai');
const displayMessage = require('./0-console');

describe('displayMessage', () => {
  it('should print the message to the console', () => {
    // Capture console output
    const logSpy = sinon.spy(console, 'log');
    
    // Call the function
    displayMessage('Hello NodeJS!');

    // Assert that console.log was called with the correct message
    expect(logSpy).to.have.been.calledWith('Hello NodeJS!');
    
    // Restore console.log
    logSpy.restore();
  });
});
