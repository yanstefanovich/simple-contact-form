/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
const aws = require('aws-sdk')

const { SNS_Topic } = process.env

const sns = new aws.SNS()

let response

const validate = (name, email, message) => {
    if (name.length > 36) throw new Error('Name cannot exceed 36 characters')
    if (email.length > 72) throw new Error('Email cannot exceed 72 characters')
    if (
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        )
    )
        throw new Error('Invalid email address')
    if (message.length > 500)
        throw new Error('Message cannot exceed 500 characters')
}

exports.lambdaHandler = async (event, context) => {
    try {
        console.log('Incoming event:', event)

        const { name, email, message } = JSON.parse(event.body)
        validate(name, email, message)

        const params = {
            TopicArn: SNS_Topic,
            Message: `name: ${name}
email: ${email}
message: ${message}`,
            Subject: `Contact Form Submission from ${name}`
        }
        await sns.publish(params).promise()

        response = {
            statusCode: 200,
            body: 'OK'
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500
        }
    }

    return response
}
