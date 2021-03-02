import React, {
    Component,
  } from "react";
  import ReactDOM from "react-dom";
  import { Provider } from "react-redux";
  import store from "../../store.js";
  import PropTypes from "prop-types";
  import isEmpty from "../../isEmpty";
  import {
    BrowserRouter as Router,
  } from "react-router-dom";
  import classnames from 'classnames';
  // import { CSSTransition } from 'react-transition-group';
  
  class Mode extends Component {
    componentDidMount = () => {
      this.modalTarget = document.createElement("div");
      this.modalTarget.className = classnames({
        "modal" : true,
        [this.props.className]:!isEmpty(this.props.className),
        "primary-modal":this.props.isPrimary
      })
      document.body.appendChild(this.modalTarget);
      this._render();
    };
    componentDidUpdate() {
      this._render();
    }
    componentWillUnmount() {
      ReactDOM.unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget);
    }
    switchComponent(){
      const { func, onModalClose, type, title, content } = this.props;
      switch(type){
        case "confirm":
          return <Confirm onModalClose={onModalClose} func={func} />
        case "success":
          return <Success onModalClose={onModalClose} />
        case "danger":
          return <Danger onModalClose={onModalClose} />
        case "dangerContent":
          return <DangerWithContent onModalClose={onModalClose} title={title} content={content} />
        default :
          return <DefaultModal {...this.props}   />
      }
    }
    _render() {
      ReactDOM.render(
        <Provider store={store}>
          <Router>
            {this.switchComponent()}
          </Router>
        </Provider>,
        this.modalTarget
      );
    }
    render() {
      return <noscript />;
    }
  }
  
  const DefaultModal = ({width,isHeader,title,onModalClose,content,children}) =>{
    return (
      <div className="modal__content" style={!isEmpty(width)?{width}:{}} >
        {
            (!isEmpty(title) || isHeader) ? (
            <div className="modal__header">
                <div className="modal__heading">
                <h2>{title}</h2>
                </div>
                <div className="modal__header-close" onClick={onModalClose}>
                {/* <MdClose /> */}
                <span class="iconify" data-icon="bytesize:close" data-inline="false"></span>
                </div>
            </div>
            ):
            (
                <a className="modal__close" onClick={onModalClose}>
                    <span class="iconify" data-icon="ic:twotone-close" data-inline="false"></span>
                </a>
            )
        }
  
        <div className="modal__content-body">
          {content ? content : children}
        </div>
      </div>
    )
  }
  
  const Confirm = ({ func, onModalClose }) => {
    return (
      <div className="modal__confrim confirm">
        <div className="confirm-icon">
            <span class="iconify" data-icon="bi:exclamation-circle-fill" data-inline="false"></span>
        </div>
        <h2 className="confirm-title">Are you Sure?</h2>
        <p>You wont be able to revert your action</p>
        <div className="confirm-buttons">
          <button
            className="confirm-buttons__confirm"
            onClick={() => {
              func();
              onModalClose();
            }}
          >
            <span>Yes, I am Sure</span>
          </button>
          <button
            className="confirm-buttons__cancel"
            onClick={() => onModalClose()}
          >
            <span>Cancel</span>
          </button>
        </div>
      </div>
    );
  };
  
  const Success = ({ onModalClose }) => {
    return (
      <div className="modal__confrim confirm success">
        <div className="confirm-icon">
          <i className="material-icons">check_circle</i>
        </div>
        <h2 className="confirm-title">Success</h2>
        <p>Your Current Action was a success</p>
        <div className="confirm-buttons">
          <button
            className="btn btn--success"
            style={{ borderRadius: "12rem" }}
            onClick={() => onModalClose()}
          >
            Done
          </button>
        </div>
      </div>
    );
  };
  
  const Danger = ({ onModalClose }) => {
    return (
      <div className="modal__confrim confirm danger">
        <div className="confirm-icon">
            <span class="iconify" data-icon="fa-solid:times-circle" data-inline="false"></span>
        </div>
        <h2 className="confirm-title">Error</h2>
        <p>
          Something Bad Occured
          <span>Please Try again Later</span>
        </p>
        <div className="confirm-buttons">
          <button
            className="btn btn--danger"
            style={{ borderRadius: "12rem" }}
            onClick={() => onModalClose()}
          >
            Done
          </button>
        </div>
      </div>
    );
  };
  
  const DangerWithContent = ({ onModalClose, title, content }) => {
    return (
      <div className="modal__confrim confirm danger">
        <div className="confirm-icon">
            <span class="iconify" data-icon="fa-solid:times-circle" data-inline="false"></span>
        </div>
        <h2 className="confirm-title">{title}</h2>
        <p>
          {/* Something Bad Occured */}
          <span>{content}</span>
        </p>
        <div className="confirm-buttons">
          <button
            className="btn btn-red"
            style={{ borderRadius: "12rem" }}
            onClick={() => onModalClose()}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export class Modal extends Component {
    render() {
      const { open, ...props } = this.props;
      if(open){
        return(
          <Mode {...props} />
        )
      }
      return null
    }
  }
  
  Modal.propTypes = {
    open: PropTypes.bool,
    onModalClose: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string,
    width: PropTypes.string,
    isPrimary:PropTypes.bool,
    isHeader:PropTypes.bool,
    className:PropTypes.string
  };
  
  Modal.defaultProps = {
    open: false,
    type: "normal",
    isPrimary:false,
    isHeader:false,
  };
  
export default Modal;
