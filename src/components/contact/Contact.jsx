

const Contact = () => {
  return (
    <div>

        <div className="formContainer">
            <form>
                <div className="formHeader">
                    <h1>Contact Me</h1>
                </div>
                <div className="formBody">
                    <div className="inputGroup">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your name.." required />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your email.." required />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Subject.." required />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Write something.." required></textarea>
                    </div>
                </div>
                <div className="formFooter">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
