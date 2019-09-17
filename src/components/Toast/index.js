/* eslint-disable react/no-will-update-set-state */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { closeToast } from '../../actions/toast';
import './index.scss';

export class Toast extends Component {
  state = {
    openToast: false,
    opened: false,
  }

  componentWillUpdate(nextProps) {
    const { opened } = this.state;
    const { close } = this.props;
    if (nextProps.toasts.open && opened === false) {
      this.setState({
        openToast: true,
        opened: true,
      });
    }

    if (nextProps.toasts.open) {
      setTimeout(() => {
        close();
        this.setState({
          openToast: false,
          opened: false,
        });
      }, 3000);
    }
  }

  onDismissClick = () => {
    this.setState({
      openToast: false,
      opened: false,
    });
    const { close } = this.props;
    close();
  }

  render() {
    const {
      toasts: { type, message },
    } = this.props;

    const { openToast } = this.state;

    const styles = type === 'success' ? { backgroundColor: 'green' } : { backgroundColor: '#ff6961' };

    if (openToast) styles.right = '200px'; else styles.right = '-50%';

    return (
      <div className="toast" style={styles} data-test="toastComponent">
        <div className="toast_container">
          <p className="toast_content">
            {message}
          </p>
          <button type="button" className="toast_dismiss" onClick={this.onDismissClick}>
            x
          </button>
        </div>
      </div>
    );
  }
}

Toast.propTypes = {
  close: PropTypes.func.isRequired,
  toasts: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
    open: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => {
  const {
    toasts,
  } = state;
  return { toasts };
};

export default connect(mapStateToProps, { close: closeToast })(Toast);
