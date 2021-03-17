import React, { Component } from 'react';

const PageAlertContext = React.createContext();

export class PageAlertProvider extends Component {
  constructor() {
    super();
    this.state = {
      alert: null,
    };
  }

  /*setAlert = (message, type) => {
    const NewAlert = { message, type };
    this.setState({ alert: NewAlert });
  };*/

  closeAlert = () => {
    this.setState({ alert: null });
  };

  setAlert = (message, type) => {
    const NewAlert = { message, type };
    this.setState({ alert: NewAlert },()=>{
      window.setTimeout(()=>{
        this.closeAlert()
      },3000)
    });
  }

  render() {
    return (
      <PageAlertContext.Provider
        value={{
          alert: this.state.alert,
          closeAlert: this.closeAlert,
          setAlert: this.setAlert,
        }}
      >
        {this.props.children}
      </PageAlertContext.Provider>
    );
  }
}

export default PageAlertContext;
