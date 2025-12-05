#!/bin/bash
# Issue #17: Migrate Contact Page - TDD Acceptance Tests

set -e

PROJECT_DIR="/home/quaid/Documents/Projects/ainative-studio/src/ainative-nextjs"
cd "$PROJECT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

PASSED=0
FAILED=0

pass() {
    echo -e "${GREEN}✓ PASS${NC}: $1"
    PASSED=$((PASSED + 1))
}

fail() {
    echo -e "${RED}✗ FAIL${NC}: $1"
    FAILED=$((FAILED + 1))
}

echo "=========================================="
echo "Issue #17: Migrate Contact Page"
echo "TDD Acceptance Tests"
echo "=========================================="
echo ""

# AC1: Contact page exists
echo "--- AC1: Page file structure ---"

if [ -f "app/contact/page.tsx" ]; then
    pass "app/contact/page.tsx exists"
else
    fail "app/contact/page.tsx missing"
fi

# AC2: Contact form component
echo ""
echo "--- AC2: Contact form ---"

if grep -q "form\|Form" app/contact/page.tsx 2>/dev/null || [ -f "components/contact/ContactForm.tsx" ]; then
    pass "Contact form component present"
else
    fail "Contact form component missing"
fi

# AC3: Form validation with Zod
echo ""
echo "--- AC3: Zod validation ---"

if grep -q "zod\|z\." app/contact/page.tsx 2>/dev/null || \
   grep -q "zod\|z\." components/contact/ContactForm.tsx 2>/dev/null; then
    pass "Zod validation used"
else
    fail "Zod validation not found"
fi

# AC4: react-hook-form
echo ""
echo "--- AC4: react-hook-form ---"

if grep -q "useForm\|react-hook-form" app/contact/page.tsx 2>/dev/null || \
   grep -q "useForm\|react-hook-form" components/contact/ContactForm.tsx 2>/dev/null; then
    pass "react-hook-form used"
else
    fail "react-hook-form not found"
fi

# AC5: Client component directive
echo ""
echo "--- AC5: Client component ---"

if grep -q '"use client"' components/contact/ContactForm.tsx 2>/dev/null || \
   grep -q '"use client"' app/contact/page.tsx 2>/dev/null; then
    pass "Client component directive present"
else
    fail "Client component directive missing"
fi

# AC6: Accessibility (ARIA labels)
echo ""
echo "--- AC6: Accessibility ---"

if grep -q "aria-\|htmlFor\|Label" app/contact/page.tsx 2>/dev/null || \
   grep -q "aria-\|htmlFor\|Label" components/contact/ContactForm.tsx 2>/dev/null; then
    pass "Accessibility attributes present"
else
    fail "Accessibility attributes missing"
fi

# AC7: Next.js Metadata
echo ""
echo "--- AC7: Next.js Metadata ---"

if grep -q "export const metadata" app/contact/page.tsx 2>/dev/null; then
    pass "Next.js Metadata API used"
else
    fail "Next.js Metadata API not used"
fi

# AC8: TypeScript compliance
echo ""
echo "--- AC8: TypeScript ---"

if npm run type-check 2>&1 | grep -q "error TS"; then
    fail "TypeScript errors detected"
else
    pass "TypeScript type check passes"
fi

# Summary
echo ""
echo "=========================================="
echo "Test Summary"
echo "=========================================="
echo -e "Passed: ${GREEN}$PASSED${NC}"
echo -e "Failed: ${RED}$FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}Some tests failed.${NC}"
    exit 1
fi
