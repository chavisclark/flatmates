import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createFlat } from '../actions/flats';
import GoogleMapsWrapper from '../components/GoogleMapsWrapper';
import AddFlat from '../components/AddFlat';

class AddFlatContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(data) {
    // let name = data.name;
    // let price_per_month = data.price;
    // let rooms = data.rooms;
    // let beds = data.beds;
    // let capacity = data.capacity;
    // let location = data.location;
    // let description = data.description;
    const { createFlat } = this.props;
    createFlat({ data });
  }

  render() {
    return (
      <div>
        <GoogleMapsWrapper>
          <AddFlat setLocation={this.props.setLocation} handleOnSubmit={this.handleOnSubmit} />
        </GoogleMapsWrapper>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, { createFlat })(AddFlatContainer);

