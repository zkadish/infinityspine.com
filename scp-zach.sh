#!/bin/bash

STARTED="copy files to www.zachkadish.com/public_html/infinity-spine/public"
echo $STARTED 
# scp -rp public/* zkadish@zachkadish.com:/home/zkadish/public_html/infinity-spine/public
scp -rp public/* zkadish@zachkadish.com:public_html/infinity-spine/public
