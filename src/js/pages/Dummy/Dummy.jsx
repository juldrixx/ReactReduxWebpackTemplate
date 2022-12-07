import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../actions';

class DummyPage extends Component {
  componentDidMount() {
    const { dummyGet } = this.props;
    dummyGet()
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { dummyResult, dummyError } = this.props;

    return (
      <div className="content">
        {dummyResult.length > 0 && dummyResult}
        {dummyError.length > 0 && dummyError}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dummyResult: state.dummy.dummyResult,
  dummyError: state.dummy.dummyError,
});

function mapDispatchToProps(dispatch) {
  return {
    dummyGet: () => dispatch(actions.dummyActions.dummyGet()),
  };
}

DummyPage.propTypes = {
  dummyGet: PropTypes.func.isRequired,
  dummyResult: PropTypes.string,
  dummyError: PropTypes.string,
};

DummyPage.defaultProps = {
  dummyResult: '',
  dummyError: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(DummyPage);
