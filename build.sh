#!/usr/bin/env bash
# build.sh — packages the CPRE FL Practice Tool for distribution
# Output: dist/cpre-fl-practice-tool.zip
# Usage:  ./build.sh

set -euo pipefail

DIST="dist"
ZIP_NAME="cpre-fl-practice-tool.zip"

echo "Building CPRE FL Practice Tool..."

# Clean and recreate dist/
rm -rf "$DIST"
mkdir -p "$DIST"

# Copy project files
cp index.html "$DIST/"
cp -r src "$DIST/src"

# Remove macOS metadata if present
find "$DIST" -name ".DS_Store" -delete

# Create zip
cd "$DIST"
zip -r "$ZIP_NAME" index.html src/ --quiet
cd ..

echo "Done. Output: $DIST/$ZIP_NAME"
echo "Contents:"
unzip -l "$DIST/$ZIP_NAME" | grep -v "^Archive\|^---\|files$" | head -30
