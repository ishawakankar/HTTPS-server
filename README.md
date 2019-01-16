# HTTPS-server

COMMANDS TO GENERATE SSL:

openssl genrsa -out privatekey.pem 1024\n
openssl req -new -key privatekey.pem -out certrequest.csr
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
