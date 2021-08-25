const Notification = (props) => {
  const { className, icon, msg } = props;
  return (
    <div className={className}>
      <img src={icon} className="icon" />
      <p>{msg}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="note-heading">Notifications</h1>
    <div className="cards-container">
      <Notification
        className="information-con msg-container"
        icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        msg="Information message"
      />
      <Notification
        className="success-con msg-container"
        icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        msg="success message"
      />
      <Notification
        className="warning-con msg-container"
        icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        msg="Warning message"
      />
      <Notification
        className="error-con msg-container"
        icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        msg="Error message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
