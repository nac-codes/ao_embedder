#!/bin/bash

# Define the number of iterations
num_iterations=213

# Define the timeout duration in seconds
timeout_duration=8

# Iterate from 1 to num_iterations
for ((i=0; i<=num_iterations; i++))
do
  echo "Running embedder_$i"
#   aos embedder_$i --load Embedder/Model_base.lua --load Embedder/MakeModel.lua --load Embedder/Embedder.lua &
  aos embedder_$i --load Embedder/AddWordToEmbedder.lua &
  pid=$!
  
  sleep $timeout_duration
  kill $pid
  wait $pid 2>/dev/null
  
  echo "----"
done