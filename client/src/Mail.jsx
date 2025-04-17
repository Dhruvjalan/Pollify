import React, { useState } from 'react';
// import './MailCard.css'; // CSS file or use inline styles

const MailCard = () => {
  
  const maillist = [
    {
      subject: 'Dhruv Jalan, complete our 2-minute survey to win a prize',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      subject: 'Important: Your account will expire soon',
      body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      subject: 'You’ve been selected for an exclusive offer!',
      body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      subject: 'Weekly Digest: Top stories you may have missed',
      body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      subject: 'Invitation: Join our webinar this Thursday',
      body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.'
    }
  ];
  const [isHovered, setIsHovered] = useState(Array(maillist.length).fill(false));
  
  return (
    <div class='d-flex flex-column'>
      <h3>Mails</h3>
    <div class='mail-container d-flex flex-row justify-content-evenly' >
      {maillist.length === 0 ? (
        <p>No Mails!</p>
      ) : (
        maillist.map((mail, index) => (
          <div 
      className="mail-card"
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
    </div>
  );
  
}
export default MailCard
