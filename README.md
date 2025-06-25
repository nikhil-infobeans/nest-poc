# nest-poc

# Docker Setup 
### Development

#### Step 1: clone git repo

```
git clone https://github.com/nikhil-infobeans/nest-poc.git
```

#### Step 2: Build and run docker container

```
docker-compose build
docker-compose up -d
```
#### Step 3: Run application (Port number is 3002 )

```
https://localhost:3002
```

Call the below API using Postman
```
http://localhost:3002/users/register
Method :- POST
Params :- 

{
  "password": "Test@123",
  "email": "alice@example.com"
}
```
