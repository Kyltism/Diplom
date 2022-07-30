import React from 'react'

export default function Subscribe() {
    return (
        <div className='subscribe'>
            <h1>Subscribe to Newsletter</h1>
            <fieldset>
                <legend>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</legend>
                <div className='inputs'>
                    <p><input type="email" placeholder="mail@example.com" className='inputMail' list="mailList" /></p>
                    <p><input type="submit" value="Submit" className='inputSubmit' /></p>
                </div>
                <datalist id="mailList">
                    <option value="mail0@example.com" label="E-mail №1" />
                    <option value="mail1@example.com" label="E-mail №2" />
                    <option value="mail2@example.com" label="E-mail №3" />
                </datalist>
            </fieldset>
        </div>
    )
}




