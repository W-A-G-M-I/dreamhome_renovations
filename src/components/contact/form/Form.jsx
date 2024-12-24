import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className="form_lai">
      <form method="post" action="">
        <div className='flex-form_lai'>
          <label for="name_lai">First Name *
            <input type="text" id="name_lai" required></input>
          </label>

          <label for="name_lai">Second Name *
            <input type="text" id="name_lai" required></input>
          </label>
        </div>

        <div className='flex-form_lai'>
          <label for="email_lai">Email *
            <input type="email" id="email_lai" required></input>
          </label>

          <label for="number_lai">Phone
            <input type="tel" id="number_lai" minLength={11} required></input>
          </label>
        </div>

        <label for="address_lai">Address
          <input type="text" id="address_lai" required></input>
        </label>

        <label for="subject_lai">Subject
          <input type="text" id="subject_lai" required></input>
        </label>

        <label for="message_lai">Message
          <textarea id="message_lai" name="message" rows="8" cols="50" minLength={50} maxLength={700} required></textarea>
        </label>

        <input type="submit" id="submit_lai"/>
      </form>
    </div>
  )
}

export default Form