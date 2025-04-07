import React, { useState, useEffect } from 'react';
import { PostNotifier, PostEvent } from '../post/postNotifier';
import './notification.css'; // We'll use similar styles as subscribe.css

export default function NotificationOverlay() {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Handler to receive post notifications.
    const handler = (event) => {
      if (event.type === PostEvent.Post) {
        setNotification(event);
        // Auto-clear the notification after 5 seconds.
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      }
    };

    // Subscribe to notifications.
    PostNotifier.addHandler(handler);
    return () => {
      PostNotifier.removeHandler(handler);
    };
  }, []);

  // Only show the overlay if there's a notification.
  return (
    notification && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button onClick={() => setNotification(null)} className="close-btn">
            x
          </button>
          <div className="popup-header">
            <h2>New Post Notification</h2>
          </div>
          <div className="notification-body">
            <p>
              New post by <strong>{notification.from}</strong>: {notification.value}
            </p>
          </div>
        </div>
      </div>
    )
  );
}
