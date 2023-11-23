#!/bin/bash

# cd directory to change extentions
# ch-ext.sh
# arg1 (from extension), arg2 (to extension)

# PRE-DOWNLOAD
# sudo apt install rename

if [ $1 ] && [ $2 ] && [ ! $3 ];
then
    rename "s/\.$1$/.$2/" *.$1
    rename "s/\.$1$/.$2/" **/*.$1
    echo "Finished converting .$1 to .$2"
else
    echo "Please input 2 parameters"
fi