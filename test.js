const { add } = require('./index.js');

console.log("Running tests...");

if (add(2, 3) !== 5) {
  console.error("Test Failed: 2 + 3 should equal 5");
  process.exit(1); // This tells the CI pipeline that the test failed
}

console.log("Test Passed: 2 + 3 equals 5");
process.exit(0); // This tells the CI pipeline that the test passed
