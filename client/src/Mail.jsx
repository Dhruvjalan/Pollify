import React, { useState } from 'react';
// import './MailCard.css'; // CSS file or use inline styles

const MailCard = ({maillist}) => {
  
  
  const [isHovered, setIsHovered] = useState(Array(maillist.length).fill(false));
  
  return (
    <div style={{marginBottom: '20rem'}}>
    <div className='d-flex flex-column justify-content-md-evenly align-content-center'   >
      <h1 style={{justifySelf:'center', marginLeft:"10rem"}}>Mails</h1>
    <div className='mail-container d-flex flex-row justify-content-md-evenly justify-content-center justify-self-center flex-md-nowrap flex-wrap' style={{margin: "0 5rem"}}>
      {maillist.length === 0 ? (
        <p>No Mails!</p >
      ) : (
        maillist.map((mail, index) => (
          <div 
      className="mail-card vw-100 justify-self-center align-self-center"
      key={index}
      style={{margin:'1rem'}}
      onMouseEnter={() => {
        const temp = [...isHovered];
        temp[index]=true
        setIsHovered(temp)
      }}
      onMouseLeave={() => {
        const temp = [...isHovered];
        temp[index]=false
        setIsHovered(temp)
      }}
    >
          <div key={index}>
            <h5 className="mail-subject">{mail.subject}</h5>
            {isHovered[index] && (
              <p className="mail-body">{mail.body}</p>
            )}
          </div>
          </div>
        ))
      )}
    </div>
    </div></div>
  );
  
}
export default MailCard
