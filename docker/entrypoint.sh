#!/bin/bash
set -e

echo "window.ENV = `jo \`env | grep REACT_APP_\` end=1`" > static/js/env.js
nginx -g "daemon off;"