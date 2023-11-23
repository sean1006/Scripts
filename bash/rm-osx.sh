#!/bin/bash

# this removes files added by MacOS after transferring the files to Windows
find . -iname '._*' -exec rm -rf {} \;