#!/bin/bash

STARTED="copy files to www.infinityspine.com/public_html"
# STARTED="copy files to www.infinityspine.com/public_html/new"
echo $STARTED 
scp -r ~/Sites/infinity-spine/public/* ver442czvd64@infinityspine.com:public_html
# scp -r ~/Sites/infinity-spine/public/* ver442czvd64@infinityspine.com:public_html/new
# scp -r ~/Sites/infinity-spine/public/js/* ver442czvd64@infinityspine.com:public_html/new/js
