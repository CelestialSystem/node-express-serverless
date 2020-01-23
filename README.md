Pre-requistics for using application :-
1. An AWS Account for using Lambda services (this application is build for AWS, however serverless mechanism can be implemented on other cloud providers like Azure, GCP etc)
2. Node.js (v10.x.x)

Steps to configure serverless :-
1. Run below command in system :-

```bash
    npm install serverless --global
```

2. Once done, then run below command :-

```bash
    serverless
```

3. After running above command, you will be asked to enter below information :-

```bash
    What do you want to name this application?
    AWS Access Key Id
    AWS Secret Access Key
```

4. Once done, then AWS credentials saved on your machine at ~/.aws/credentials.


Steps to deploy the application :-
1. Run below command to deploy your serverless application :-
```bash
    serverless deploy
```

Note:
1. Above steps has been performed on Macbook, there may be changes that the same will work in linux system as well
2. Serverless application is only used against the stateless application.
