# HTTPS-server


<b>Use the following commands to generate ssl certificate: </b>
- openssl genrsa -out privatekey.pem 1024  
- openssl req -new -key privatekey.pem -out certrequest.csr  
- openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem  
