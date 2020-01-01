#!/bin/bash

STARTED="copy files to www.infinityspine.com/public_html"
# STARTED="copy files to www.infinityspine.com/public_html/new"
echo $STARTED 
scp -rp ~/Sites/infinity-spine/public/* ver442czvd64@infinityspine.com:public_html
# scp -rp ~/Sites/infinity-spine/public/. ver442czvd64@infinityspine.com:public_html/new
# scp -rp ~/Sites/infinity-spine/public/js/* ver442czvd64@infinityspine.com:public_html/new/js

# investigate rsync
# https://www.cyberciti.biz/faq/howto-make-scp-copy-all-hidden-dot-files-under-bsd-appleosx/
