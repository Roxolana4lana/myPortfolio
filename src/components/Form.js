import React, { Component } from 'react'
import axios from 'axios'
import Footer from './Footer';

export default class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            sender: '',
            subject: '',
            text: '',
            senderError: '',
            subjectError: '',
            textError: '',
            sent: ''

        }
    }
    handleMailChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    Validate = () => {
        let senderError = ""
        let subjectError = ''
        let textError = ''
        let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!valid.test(this.state.sender)) {
            senderError = 'type a valid email'
        }
        if (!this.state.subject || this.state.subject.length < 5) {

            subjectError = 'minimum 5 characters'

        }
        if (!this.state.text || this.state.text.length < 5) {

            textError = 'minimum 5 characters'

        }

        if (senderError || textError || subjectError) {
            console.log(this.state.senderError)
            this.setState({
                senderError,
                subjectError,
                textError
            })
            return false
        }
        else {
            return true
        }

    }
    handleMailSubmit = e => {
        e.preventDefault()
        const valid = this.Validate()
        console.log(this.state.senderError)
        if (valid) {
            const mail = {
                sender: this.state.sender,
                subject: this.state.subject,
                text: this.state.text
            }
            axios.post(`http://80.211.249.59/send_email/`, mail)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
                .then(this.setState({
                    sender: '',
                    subject: '',
                    text: '',
                    senderError: '',
                    subjectError: '',
                    textError: '',
                    sent: 'message sent!'
                }))
        } else
            console.log('not valid')
    }


    render() {
        return (
            <div className='mainForm'>
                <h1>Contact me </h1>
                <div className='myForm'>
                    <form onSubmit={this.handleMailSubmit}>
                        <div className="formPart">
                            <label>Email</label>
                            <input type='text'
                                value={this.state.sender}
                                onChange={this.handleMailChange}
                                name='sender'
                            />
                        </div>
                        <div className='errorMessage'><div></div>{this.state.senderError}</div>
                        <br />
                        <div className="formPart">
                            <label>Subject</label>
                            <input type='text'
                                value={this.state.subject}
                                onChange={this.handleMailChange}
                                name='subject'
                            />
                        </div>
                        <div className='errorMessage'> <div></div>{this.state.subjectError}</div>
                        <br />
                        <div className="formPart">
                            <label>Text</label>
                            <textarea
                                value={this.state.text}
                                onChange={this.handleMailChange}
                                name='text'
                            />
                        </div>
                        <div className='errorMessage'><div></div>{this.state.textError}</div>
                        <br />
                        <button className='formButton'>Submit</button>
                        <div className='sendMessage'><div></div>{this.state.sent}</div>
                    </form>

                </div>
                <div className='myContacts'></div>
                <Footer />
            </div>
        )
    }
}