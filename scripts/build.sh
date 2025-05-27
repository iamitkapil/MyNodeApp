#!/bin/bash

cd ../Lambda
npm install
zip -r ../lambda_function.zip .
cd ..