# simple-contact-form

## Front-end
Simple create-react-app React web page. Hosted statically on S3 with CloudFront.

## Back-end
Leverage SAM for a basic setup with AWS Api Gateway, Lambda and SNS. Accepts HTTP request and publishes a message to SNS that gets sent as an email to the subscribers of the topic.
To deploy, run `sam build` and `sam deploy --guided`


Note: When you try to run `sam local invoke` on the lambda, locally `!Ref SNS` will not actually return the TopicARN of your SNS Topic, you will have to insert it as a contant into your code in development.