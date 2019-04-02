#!/bin/bash

STRING="copy files to www.zachkadish.com/public_html/infinity-spine/public"
echo $STRING 
scp -r public/ zkadish@zachkadish.com:/home/zkadish/public_html/infinity-spine/public
