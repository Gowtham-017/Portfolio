import React from 'react'
import '../styles/Resume.css'
import download from 'downloadjs';
import home from '../assets/home.png';
function Resume() {
    const downloadResume = () => {
        const resumeLink = '';
        fetch(resumeLink)
          .then((response) => response.blob())
          .then((blob) => {
            download(blob, 'Gowtham K Resume.pdf', 'application/pdf');
            showDownloadNotification();
          })
          .catch((error) => console.error('Error:', error));
      };
      const showDownloadNotification = () => {
        if (Notification.permission === 'granted') {
          new Notification('Resume Downloaded', {
            body: 'Resume has been successfully downloaded.',
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              new Notification('Resume Downloaded', {
                body: 'Resume has been successfully downloaded.',
              });
            }
          });
        }
      };
  return (
    <div className='bodyr'>
        <img src={home} alt='home' />
        <button onClick={downloadResume}>Download My Resume</button>
    </div>
  )
}
export default Resume