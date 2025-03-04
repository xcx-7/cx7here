import React from 'react';
import { 
  FaDiscord, 
  FaFacebook, 
  FaMastodon, 
  FaTwitter, 
  FaGithub, 
  FaInstagram, 
  FaEnvelope, 
  FaLink 
} from 'react-icons/fa';

function Contact() {
  return (
    <div className="page contact-page">
      <h1>Contact Me</h1>
      <p>Email: <a href="cxe-7@proton.me">cxe-7@proton.me</a></p>
      <div className="social-icons">
        <a href="https://discord.com/invite/yKJhF5HSrm" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://mastodon.social" target="_blank" rel="noopener noreferrer"><FaMastodon /></a>
        <a href="https://bsky.app" target="_blank" rel="noopener noreferrer"><FaLink /></a> {/* BSky placeholder */} 
        <a href="https://thread.com" target="_blank" rel="noopener noreferrer"><FaLink /></a> {/* Thread placeholder */} 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer"><FaLink /></a> {/* Linktree */} 
      </div>
    </div>
  );
}

export default Contact;
