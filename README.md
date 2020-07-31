# simple-contact-form

[You can check out the Live Version here](https://form.yamcraft.com)
If you actually submit a proper form, I just might reply :)

## Front-end
React web page instantiated with create-react-app.
I am statically hosting my instance on AWS S3 with AWS CloudFront for distribution.

## Back-end
Leverage [AWS SAM](https://aws.amazon.com/serverless/sam/) for a basic setup: AWS Api Gateway -> Lambda -> SNS.
Accepts HTTP POST request and publishes a message to SNS. SNS will email/notify the subscribers of the topic.
It allows CORS by default for quick set up.
To build run `sam build`
To deploy run `sam deploy --guided`


Note: When/if you run `sam local invoke` for local testing/development, `!Ref SNS` will not actually return the TopicARN of your SNS Topic. You either have to temporarily insert the value as a contant in your code or modify the environment variable in the template.yaml file.