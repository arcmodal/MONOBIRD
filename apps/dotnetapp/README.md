# MONOBIRD

MONO REPO

## .NetCore Web Application

This is a hello world web application based on .Net core. Taken from https://dotnet.microsoft.com/learn/aspnet/hello-world-tutorial

## Steps

1. Download .NET SDK

> https://dotnet.microsoft.com/learn/aspnet/hello-world-tutorial/install

2. Run application

> dotnet run

3. Go to http://localhost:5000

## Dockerize

1. Create Docker image

> docker build -t dotnetapp .

2. Create and run our container

> docker run -d -p 8080:80 --name helloworld dotnetapp

3. Go to http://localhost:8080
