const sinon = require('sinon');
const displayMessage = require('./0-console');

describe('displayMessage', () => {
  it('should print the message to the console', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const message = 'Hello NodeJS!';
    displayMessage(message);
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, message);
    consoleSpy.restore();
  });
});
