#!/bin/bash
# Issue #18: Create Shared Layout Components - TDD Acceptance Tests

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
echo "Issue #18: Create Shared Layout Components"
echo "TDD Acceptance Tests"
echo "=========================================="
echo ""

# AC1: Header component exists
echo "--- AC1: Header component ---"

if [ -f "components/layout/Header.tsx" ]; then
    pass "components/layout/Header.tsx exists"
else
    fail "components/layout/Header.tsx missing"
fi

# AC2: Footer component exists
echo ""
echo "--- AC2: Footer component ---"

if [ -f "components/layout/Footer.tsx" ]; then
    pass "components/layout/Footer.tsx exists"
else
    fail "components/layout/Footer.tsx missing"
fi

# AC3: Client component directive (for interactivity)
echo ""
echo "--- AC3: Client component directive ---"

if grep -q '"use client"' components/layout/Header.tsx 2>/dev/null; then
    pass "Header is a client component"
else
    fail "Header missing 'use client' directive"
fi

# AC4: Mobile menu toggle
echo ""
echo "--- AC4: Mobile menu ---"

if grep -q "mobileMenuOpen\|mobileMenu\|Menu" components/layout/Header.tsx 2>/dev/null; then
    pass "Mobile menu present in Header"
else
    fail "Mobile menu missing in Header"
fi

# AC5: Navigation links with Next.js Link
echo ""
echo "--- AC5: Next.js Link ---"

if grep -q "next/link\|Link" components/layout/Header.tsx 2>/dev/null; then
    pass "Next.js Link used in Header"
else
    fail "Next.js Link not used in Header"
fi

if grep -q "next/link\|Link" components/layout/Footer.tsx 2>/dev/null; then
    pass "Next.js Link used in Footer"
else
    fail "Next.js Link not used in Footer"
fi

# AC6: Logo and branding
echo ""
echo "--- AC6: Logo and branding ---"

if grep -q "text-primary\|Native\|⚡" components/layout/Header.tsx 2>/dev/null; then
    pass "Logo/branding present in Header"
else
    fail "Logo/branding missing in Header"
fi

# AC7: Accessibility
echo ""
echo "--- AC7: Accessibility ---"

if grep -q "aria-label\|aria-" components/layout/Header.tsx 2>/dev/null; then
    pass "ARIA attributes present in Header"
else
    fail "ARIA attributes missing in Header"
fi

# AC8: Layout integration in root layout
echo ""
echo "--- AC8: Layout integration ---"

if grep -q "Header\|Footer" app/layout.tsx 2>/dev/null; then
    pass "Header/Footer integrated in root layout"
else
    fail "Header/Footer not integrated in root layout"
fi

# AC9: TypeScript compliance
echo ""
echo "--- AC9: TypeScript ---"

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
