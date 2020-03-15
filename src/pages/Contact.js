import React from "react";
import Container from "../components/Container";

function Contact() {
    return(
        <Container>
            <div className="row">
                <div className="col-md">
                    <h2 id="contactHead">Get in touch</h2>
                    <form action="https://formspree.io/mbjlqyrw" method="POST">
                        <label>Name: <input type="text" name="name" /></label><br />
                        <label>Email: <input type="text" name="_replyto" /></label><br />
                        <label>Message: <textarea name="message"></textarea></label><br />
                        <button type="submit" className="btn btn-light">Send</button>
                    </form>
                </div>
                <div className="col-md contactLinks">
                    <a href="mailto:taylormareebruno@gmail.com">
                        <i class="fas fa-envelope">Email</i>
                    </a> 
                    <a href="tel:828-449-9781" >
                        <i class="fas fa-phone-square">Phone</i>
                    </a>
                    <a href="/assets/images/resumePDF.pdf"  target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-file">Resume</i>
                    </a>
                    <a href="https://github.com/taylormbruno"  target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github">Github</i>
                    </a>
                    <a href="https://www.linkedin.com/in/taylor-bruno-5b5a49189/"  target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin">LinkedIn</i>
                    </a>
                </div>
            </div>
        </Container>
    );
}

export default Contact;