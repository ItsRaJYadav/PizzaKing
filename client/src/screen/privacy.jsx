import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function PrivacyPolicy() {
    return (
        <div className="bg-gray-100 mt-5" >

            <Container className="py-10 ">
                <Row>
                    <Col>
                        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
                        <ol class="list-group ">
                            <li class="list-group-item"><strong>1 :</strong> Collection of Information : <br />
                                When you use our web application, we may collect personal information about you, including your name, email address, phone number, and delivery address. We may also collect information about your device, such as your IP address and browser type. We collect this information in order to provide you with our food delivery services and to improve our web application.</li>
                            <li class="list-group-item"><strong>2 :</strong> Use of Information <br />
                                We may use your personal information to provide you with our food delivery services, including processing your orders, communicating with you about your orders, and responding to your inquiries. We may also use your personal information to improve our web application, analyze user behavior, and personalize your experience. We will not share your personal information with third parties, except as described in this Privacy Policy.</li>
                            <li class="list-group-item"><strong>3 :</strong> Disclosure of Information <br />
                                We may disclose your personal information to our service providers and partners who assist us in providing our food delivery services, such as payment processors and delivery drivers. We may also disclose your personal information to comply with applicable laws, regulations, or legal requests, or to protect our rights or property. We may also disclose your personal information in connection with a merger, acquisition, or sale of our business.</li>
                            <li class="list-group-item"><strong>4 :</strong> Cookies <br />
                                We may use cookies and other tracking technologies to collect information about your use of our web application. Cookies are small data files that are stored on your device when you visit a website. We use cookies to improve your experience, analyze user behavior, and personalize your experience.</li>
                            <li class="list-group-item"><strong>5 :</strong> Security <br />
                                We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the Internet or electronic storage system can be guaranteed to be 100% secure.</li>

                            <li class="list-group-item"> <strong>6 :</strong>  Changes to Privacy Policy br
                                We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by posting a notice on our web application or by sending you an email.</li>
                            <li class="list-group-item"> <strong>7 :</strong>Contact Us <br />
                                If you have any questions or concerns about our Privacy Policy, please contact us at <span>info@pizzaking.com</span>  </li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PrivacyPolicy;
