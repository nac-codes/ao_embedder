#!/bin/bash

base_dir="/Users/chim/Documents/embedders"

# Function to process files in a given directory
process_directory() {
  embedder_dir=$1
  echo "Starting processing in background for directory: $embedder_dir"
  for json_file in "$embedder_dir"/vector_chunk_*.json; do
    echo "Processing file: $json_file"
    # Call your Node.js script here, passing the path to the JSON file
    # Replace 'node your_script.js' with the actual command to run your script
    node The_Sender.mjs "$json_file" &>/dev/null
    sleep 1
  done
  echo "Finished processing directory: $embedder_dir"
}

export -f process_directory
export base_dir

# Loop through each embedder directory and process it in the background
for embedder_dir in "$base_dir"/embedder_*; do
  if [ -d "$embedder_dir" ]; then
    # Run process_directory in background for each directory
    bash -c "process_directory '$embedder_dir'" &
  fi
done

# Wait for all background jobs to finish
wait
echo "All directories processed."
