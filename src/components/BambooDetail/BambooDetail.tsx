import { Component, h, State } from '@stencil/core';
// import { link } from 'fs';

@Component({
  tag: 'bamboo-detail',
  styleUrl: 'BambooDetail.css',
  shadow: true,
})
export class CitcuitConnection {
  @State() description: string = '';
  @State() latitude: string = '';
  @State() longitude: string = '';
  @State() splicer: string = '';

  handleDescriptionInput = event => {
    this.description = event.target.value;
  };

  handleLatitudeInput = event => {
    this.latitude = event.target.value;
  };

  handleLongitudeInput = event => {
    this.longitude = event.target.value;
  };

  handleSplicerInput = event => {
    this.splicer = event.target.value;
  };

  render() {
    return (
      <div class="container">
        <h2 class="bamboo--header">Bamboo Detail</h2>
        <form action="#">
          {/* Description  */}
          <div class="form-row" style={{ marginTop: '10px', width: '50%' }}>
            <div class="input-data">
              <input type="text" placeholder=" " name="description" onInput={this.handleDescriptionInput} value={this.description} />
              <div class="underline"></div>
              <label htmlfor="">Description</label>
            </div>
          </div>

          {/* Latitude and Longitude */}
          <div class="form-row" style={{ marginTop: '10px', width: '50%' }}>
            <div class="input-data">
              <input type="text" placeholder=" " name="latitude" onInput={this.handleLatitudeInput} />
              <div class="underline"></div>
              <label htmlfor="">Latitude</label>
            </div>
            <div class="input-data">
              <input type="text" placeholder=" " name="longitude" onInput={this.handleLongitudeInput} />
              <div class="underline"></div>
              <label htmlfor="">Longitude</label>
            </div>
          </div>
          {/* Splicer  */}
          <div class="form-row" style={{ marginTop: '10px', width: '50%' }}>
            <div class="input-data">
              <input type="text" placeholder=" " name="splicer" onInput={this.handleSplicerInput} />
              <div class="underline"></div>
              <label htmlfor="">Splicer</label>
            </div>
          </div>
          <div class="form-row">
            <input class="clear--btn" type="button" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
