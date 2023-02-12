# ssh:
- $ssh ssh -v -oHostKeyAlgorithms=+ssh-rsa ver442czvd64@infinityspine.com
- password: m,X@UZy.705#g

# Copy files to godaddy installation:
`````
#!/bin/bash

STARTED="copy files to www.infinityspine.com/public_html/new"
echo $STARTED 
scp -r ~/Sites/infinity-spine/public/* ver442czvd64@infinityspine.com:public_html/new
# scp -r ~/Sites/infinity-spine/public/js/* ver442czvd64@infinityspine.com:public_html/new/js
`````

# Copy files to zachkadish.com:
`````
#!/bin/bash

STARTED="copy files to www.zachkadish.com/public_html/infinity-spine/public"
echo $STARTED 
# scp -r public/* zkadish@zachkadish.com:/home/zkadish/public_html/infinity-spine/public
scp -r public/* zkadish@zachkadish.com:public_html/infinity-spine/public
`````

## Resources

### html to pdf

- `https://itnext.io/javascript-convert-html-css-to-pdf-print-supported-very-sharp-and-not-blurry-c5ffe441eb5e`

### Godaddy tutorials

- `https://www.godaddy.com/help/manually-install-an-ssl-certificate-on-my-cpanel-hosting-12027`

## current versions on GoDaddy

- MySQL - Server version: 5.6.51-cll-lve - MySQL Community Server (GPL)
- PHP version: 7.4.30
- WordPress 5.2.17 - can be upgraded to 6.1.1 upgraded all plugins
- wp-admin user name: Dr. Thoma
- wp-admin password: msonaew&5RvHqyIUnaDHC%A^

## initial wp install settings

test password: Cxi1K12O1oiV

## Running MySQL locally

- $mysql -V, mysql Ver 14.14 Distrib 5.7.40, for osx10.17 (x86_64) using  EditLine wrapper
- $mysql.server start | stop
- $mysql -u root -p enter when prompted for password
- mysql> show databases;
  