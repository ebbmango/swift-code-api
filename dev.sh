#!/bin/bash
docker rm -f swift-code-api-container
docker build -t swift-code-api .
docker run -p 8080:8080 --name swift-code-api-container swift-code-api
