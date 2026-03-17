#!/bin/sh
set -e

if [ "$1" = "-dev" ]; then
    echo "🚀 Starting in DEVELOPMENT mode (with hot-reloading)..."
    exec npm run dev
elif [ "$1" = "-deploy" ]; then
    echo "🌐 Starting in PRODUCTION/DEPLOYMENT mode..."
    exec npm build
    exec npm start
else
    exec "$@"
fi