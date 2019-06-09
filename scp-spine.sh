#!/bin/bash

STARTED="copy files to www.infinityspine.com/public_html/new"
echo $STARTED 
scp -r public/* ver442czvd64@infinityspine.com:public_html/new
