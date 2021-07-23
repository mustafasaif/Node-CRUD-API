# Node_Mongo_CRUD_API
Basic API CRUD on nodejs+Mongo Atlas

## ServerSide
install Docker  

Build docker image as follows **docker build --tag [assign name to image] [directory where the dockerfile is located]**

Run the docker image as follows  **docker run --name [assign name to container] -p [bind container port with server port i.e (3001:3000)] name of the image  

##### NOTE: replace the [ ] with the instruction written within  
##### The flag **-d** can be used before **-p** to run the container in the background

## ClientSide
Enter the client directory through the terminal 
execute **"npm start"**

=================================================================================  
**NOTE**  
Make sure to run the server first then run the client as the default port in client is the same as the server port
