import React from "react";
import "./right-fold.css"
import { CallsContact } from "../../../data/sidebar";
import ContactCard from "./contact-card";
function RightFolds(){
    const contact = CallsContact
    return(<div className="rightFold">
            <div className="rightFold-heading">
                <lable className="heading-label">Contracts</lable>
            </div>
            <div className="rightFold-options">
                <div className="contact-search">
                    <input placeholder="Find a contact"></input>
                    <div className="contact-search-icon">
                        <i class="fi-rr-search"></i>
                    </div>
                </div>
                <div className="add-button">
                    <div className="add-icon">
                        <i class="fi-rr-user-add"></i>
                    </div>
                    <label className="add-label">Add Contact</label>
                </div>
            </div>
            <div className="contact-list">
                {contact.map((item)=>{
                    return<ContactCard item={item}/>
                })}
            </div>
        </div>
    )
}

export default RightFolds