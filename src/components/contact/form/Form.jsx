import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className="form">
      <form method="post" action="">
        <div className='flex-form'>
          <label for="name">First Name *
            <input type="text" id="name" required></input>
          </label>

          <label for="name">Second Name *
            <input type="text" id="name" required></input>
          </label>
        </div>

        <div className='flex-form'>
          <label for="email">Email *
            <input type="email" id="email" required></input>
          </label>

          <label for="number">Phone
            <input type="tel" id="number" minLength={11} required></input>
          </label>
        </div>

        <label for="address">Address
          <input type="text" id="address" required></input>
        </label>

        <label for="subject">Subject
          <input type="text" id="subject" required></input>
        </label>

        <label for="message">Message
          <textarea id="message" name="message" rows="8" cols="50" minLength={50} maxLength={700} required></textarea>
        </label>

        <input type="submit" id="submit"/>
      </form>
    </div>
  )
}

export default Form