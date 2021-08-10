# Node_Mongo_CRUD_API
Basic API CRUD on nodejs+Mongo Atlas

## ServerSide
install Docker  

Go to server directory through the terminal

Build docker image as follows `docker build --tag [assign name to image] [directory where the dockerfile is located]`

Run the docker image as follows  `docker run --name [assign name to container] -p [bind container port with server port i.e (3002:3002)]`` name of the image  


## ClientSide
Go to server directory through the terminal

Build docker image as follows ``docker build --tag [assign name to image] [directory where the dockerfile is located]``

Run the docker image as follows  ``docker run --name [assign name to container] -p [bind container port with server port i.e (3002:3002)]`` name of the image  

##### NOTE: replace the [ ] with the instruction written within  
##### The flag **-d** can be used before **-p** to run the container in the background

