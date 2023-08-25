import React from "react";
import Layout from "../Components/Layout/Layout.js";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Purchase and delivery of products and services. We use your personal information to take and handle orders, deliver products and services, process payments, and communicate with you about orders, products and services, and promotional offers.</p>
          <p>Provide, troubleshoot, and improve Amazon Services. We use your personal information to provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of the Procuere Services.</p>
          <p>Recommendations and personalization. We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with Procure Services.</p>
          {/* <p>Provide voice, image and camera services. When you use our voice, image and camera services, we use your voice input, images, videos, and other personal information to respond to your requests, provide the requested service to you, and improve our services.</p>
          <p>Comply with legal obligations. In certain cases, we collect and use your personal information to comply with laws. For instance, we collect from sellers information regarding place of establishment and bank account information for identity verification and other purposes.</p>
          <p>Communicate with you. We use your personal information to communicate with you in relation to Amazon Services via different channels (e.g., by phone, email, chat).</p>
          <p>Advertising. We use your personal information to display interest-based ads for features, products, and services that might be of interest to you. We do not use information that personally identifies you to display interest-based ads.</p>
          <p>Fraud Prevention and Credit Risks. We use personal information to prevent and detect fraud and abuse in order to protect the security of our customers, Procure, and others. We may also use scoring methods to assess and manage credit risks.</p> */}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
