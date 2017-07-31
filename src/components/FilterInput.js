import React from 'react';
import PropTypes from 'prop-types';

class FilterInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    e.preventDefault();
    this.props.onFilterInputChange(e.currentTarget.value);
  }

  render() {
    return (
      <input placeholder={this.props.placeholder} onChange={this.handleOnChange} />
    );
  }
}

FilterInput.propTypes = {
  setValue: PropTypes.func,
  getValue: PropTypes.func,
  placeholder: PropTypes.string,
  onFilterInputChange: PropTypes.func,
}

export default FilterInput
