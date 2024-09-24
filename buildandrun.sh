#!/bin/bash

# Run the first command
landscape2 build --data-file data.yml --settings-file settings.yml --guide-file guide.yml --logos-path logos --output-dir build

# Check if the first command was successful
if [ $? -eq 0 ]; then
    # If the first command was successful, run the second command
    landscape2 serve --landscape-dir build
else
    echo "The first command failed. The second command will not be executed."
fi
