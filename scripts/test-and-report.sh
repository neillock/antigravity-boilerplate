#!/bin/bash

# test-and-report.sh - Run tests and generate a status report

set -e

echo "🧪 Running tests..."

# Simulate test run (replace with actual test commands like 'npm test')
if npm test -- --watchAll=false; then
  TEST_RESULT="PASSED"
  EXIT_CODE=0
else
  TEST_RESULT="FAILED"
  EXIT_CODE=1
fi

echo "-----------------------------------"
echo "Test Session Report"
echo "Status: $TEST_RESULT"
echo "Timestamp: $(date)"
echo "-----------------------------------"

if [[ $EXIT_CODE -eq 0 ]]; then
  echo "✅ All tests passed. Safe to deploy."
else
  echo "❌ Tests failed. Please fix issues before deploying."
fi

exit $EXIT_CODE
