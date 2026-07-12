import React from 'react'
import "./PrivacyPolicy.css"
const PrivacyPolicy = () => {
  return (
    <div className="privacy container">
      <h1>Privacy Policy</h1>
      <h3>1. About -</h3>
      <p className="privacy-p">
        Invisible Routes is committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website{" "}
        <a href="https://www.invisibleroutes.com">www.invisibleroutes.com</a>,
        use our software products, or engage with our services. Please read this
        privacy policy carefully. If you do not agree with the terms of this
        privacy policy, please do not access our services.
      </p>
      <h3>2. Information We Collect -</h3>
      <h4>2.1 Information We Collect -</h4>
      <p className="privacy-p">
        We may collect personally identifiable information (PII), such as:
      </p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Telephone number</li>
        <li>Company name</li>
      </ul>
      <h4>2.2 Non-Personal Data -</h4>
      <p className="privacy-p">
        We may collect non-personally identifiable information, including but
        not limited to:
      </p>
      <ul>
        <li>Browser type</li>
        <li>Operating system</li>
        <li>IP address</li>
        <li>Cookies and usage data</li>
      </ul>
      <h4>2.3 Software Usage Data -</h4>
      <p className="privacy-p">
        For software products, we may collect data on:
      </p>
      <ul>
        <li>User activity within the software</li>
        <li>Error reports</li>
        <li>Performance metrics</li>
      </ul>
      <h3>3. How We Use Your Information -</h3>
      <p className="privacy-p">
        We use the information we collect in various ways, including to:
      </p>
      <ul>
        <li>Provide, operate, and maintain our services</li>
        <li>Improve, personalize, and expand our services</li>
        <li>
          Communicate with you, either directly or through one of our partners,
          including for customer service, to provide you with updates and other
          information relating to the service
        </li>
        <li>Process your transactions and manage your orders</li>
        <li>Understand and analyze how you use our services</li>
        <li>Develop new products, services, features, and functionality</li>
      </ul>
    </div>
  );
}

export default PrivacyPolicy