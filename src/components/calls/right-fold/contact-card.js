import React from "react";
import "./contact-card.css"
function ContactCard({item}){
    return<div className="contact-card">
        <div className="contact-top">
            <img src={item.avatar} className="contact-avatar"></img>
            <div className="contact-info">
                <label className="contact-title">{item.name}</label>
                <label className="contact-subtitle">{item.type}</label>
            </div>
        </div>
        <div className="contact-icons">
            <div className="contact-icons">
                <i class="fi-rr-microphone"></i>
            </div>
            <div className="contact-icons">
                <i class="fi-rr-play-alt"></i>
            </div>
            <div className="contact-icons">
                <i class="fi fi-rr-menu-dots"></i>
            </div>
        </div>
    </div>
}
export default ContactCard;