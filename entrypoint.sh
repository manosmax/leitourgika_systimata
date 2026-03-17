#!/bin/sh
set -e

if [ "$1" = "-dev" ]; then
    echo "🚀 Starting Next.js in DEVELOPMENT mode..."
    exec npm run dev
elif [ "$1" = "-deploy" ]; then
    echo "🌐 Starting Next.js in PRODUCTION mode..."
    exec npm start
else
    exec "$@"
fi