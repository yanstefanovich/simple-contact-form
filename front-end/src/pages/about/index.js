import React from 'react'

export default () => (
  <>
    <h2>Front End</h2>
    <p>Simple create-react-app React web page. Hosted statically on S3 with CloudFront.</p>

    <h2>Back End</h2>
    <p>Leverage SAM for a basic setup with AWS Api Gateway, Lambda and SNS. Accepts HTTP request and publishes a message to SNS that gets sent as an email to the subscribers of the topic.</p>
    <p>To deploy, run `sam build` and `sam deploy --guided`</p>
  </>
)