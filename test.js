const fs = require('fs');
const path = require('path');

console.log("Running HTML validation tests...");

const htmlPath = path.join(__dirname, 'index.html');

// Test 1: Check if file exists
if (!fs.existsSync(htmlPath)) {
  console.error("❌ Test Failed: index.html does not exist.");
  process.exit(1);
}

const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Test 2: Check for correct Title for SEO
if (!htmlContent.includes('<title>Stellar App | Automated with GitHub Actions</title>')) {
  console.error("❌ Test Failed: Title is incorrect or missing.");
  process.exit(1);
}

// Test 3: Check for main heading
if (!htmlContent.includes('<h1>Stellar Actions</h1>')) {
  console.error("❌ Test Failed: Main heading (h1) is missing.");
  process.exit(1);
}

// Test 4: Check if styles are applied
if (!htmlContent.includes('var(--primary)')) {
  console.error("❌ Test Failed: CSS Variables for theming are missing.");
  process.exit(1);
}

console.log("✅ All HTML tests passed successfully! The site is ready for deployment.");
process.exit(0);
