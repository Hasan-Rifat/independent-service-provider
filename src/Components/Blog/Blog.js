import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container py-44">
      <Accordion className="shadow-xl" defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between authorization and authentication ?
          </Accordion.Header>
          <Accordion.Body>
            Authentication vs Authorization To reiterate, authentication and
            authorization are separate steps in the user access provision
            process. We can use an analogy to demonstrate the differences.
            Consider a pet sitter who needs to enter the home of a family that
            is away on vacation. The pet sitter needs: Authentication, such as a
            key, keycard, or security code to enter the home. If the pet sitter
            has the correct piece of hardware to unlock the door, the pet sitter
            can enter the home. Authorization, such as the permissions and
            restrictions set by the family. The pet sitter has been authorized
            to access the living room (where the pet's leash is kept) and the
            kitchen (where the pet's food is stored). Once inside, the pet
            sitter can enter these rooms but not any other room. In this
            example, authentication and authorization work together. A pet
            sitter has the right to enter the house (authentication), and once
            there, she has access only to certain areas (authorization).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase Authentication approval backend- easy-to-use SDKs and
            ready-made UI libraries to authenticate to your program. It supports
            authentication with passwords, phone numbers, popular federal
            identity providers like Google, Facebook and Twitter, and more.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What other services does firebase provide other than authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase Authentication plat_ios plat_android plat_web plat_cpp
            plat_unity plat_node plat_java Most apps need to know the identity
            of a user. Knowing a user's identity allows an app to securely save
            user data in the cloud and provide the same personalized experience
            across all of the user's devices. Firebase Authentication provides
            backend services, easy-to-use SDKs, and ready-made UI libraries to
            authenticate users to your app. It supports authentication using
            passwords, phone numbers, popular federated identity providers like
            Google, Facebook and Twitter, and more.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
