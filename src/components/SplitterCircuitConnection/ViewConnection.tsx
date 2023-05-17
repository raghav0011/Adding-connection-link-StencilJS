import { Component, h, State } from '@stencil/core';
// import { link } from 'fs';

type Modal = {
  open: boolean;
  show: 'view' | '';
};

@Component({
  tag: 'circuit-connection',
  styleUrl: 'ViewConnection.css',
  shadow: true,
})
export class CitcuitConnection {
  @State() circuitConnection = [{ LinkName: '', Core: '' }];

  @State() bambooDetails = [{ Description: '', Latitude: '', Longitude: '', Splicer: '' }];

  @State() modal: Modal = { open: false, show: '' };

  @State() linkList = [{ LinkName: '' }];

  close = () => {
    this.modal = {
      open: false,
      show: '',
    };
  };

  handleClickView = () => {
    this.modal = {
      open: true,
      show: 'view',
    };
  };

  // Circuit
  addCircuitConnection() {
    this.circuitConnection = [...this.circuitConnection, { LinkName: '', Core: '' }];
    // this.bambooDetails = [...this.bambooDetails, { Description: '', Latitude: '', Longitude: '', Splicer: '' }];
    console.log(this.bambooDetails);
  }

  // Remove Circuit
  removeCircuitConnection(index) {
    const rows = [...this.circuitConnection];
    rows.splice(index, 1);
    this.circuitConnection = rows;
  }

  handleCircuitConnectionChange(index, evnt) {
    const { name, value } = evnt.target;
    const list = [...this.circuitConnection];
    list[index][name] = value;
    this.circuitConnection = list;
  }

  handlebambooChange(index, event) {
    const { name, value } = event.target;
    const list = [...this.bambooDetails];
    list[index][name] = value;
    this.bambooDetails = list;
    console.log(this.bambooDetails);
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="text">View Splitter Link </div>

          <div class="link--list">
            <label htmlfor="" style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginLeft: '46%' }}>
              Link List
            </label>
            {this.linkList.map(() => {
              return (
                <div class="link--container" draggable={true}>
                  F-KLTR-1-12,16
                </div>
              );
            })}
          </div>
          <div class="splitter--link--connection">
            <label htmlfor="" style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginLeft: '35%' }}>
              Splitter Link Connection
            </label>
            <form action="#">
              {this.circuitConnection.map((data, index) => {
                const { LinkName, Core } = data;
                return (
                  <div>
                    <div class="form-row" style={{ marginTop: '10px', marginBottom: '10px' }} key={index}>
                      <div class="input-data">
                        <input list="LinkName" name="LinkName" placeholder=" " onChange={evnt => this.handleCircuitConnectionChange(index, evnt)} required value={LinkName} />
                        <datalist id="LinkName">
                          <option value=""></option>
                          <option value="Link 1"></option>
                          <option value="Link 2"></option>
                          <option value="Link 3"></option>
                          <option value="Link 4"></option>
                        </datalist>
                        <div class="underline"></div>
                        <label htmlfor="">
                          LinkName<span class="text-danger">*</span>
                        </label>
                      </div>
                      <div class="input-data">
                        <label htmlfor="">
                          Cores<span class="text-danger">*</span> :
                        </label>
                        <select required name="Core" onChange={evnt => this.handleCircuitConnectionChange(index, evnt)} style={{ width: '63%', marginLeft: '30%' }}>
                          <option value=""> Core :</option>
                          <option value="1" selected={Core === '1'}>
                            1
                          </option>
                          <option value="6" selected={Core === '6'}>
                            6
                          </option>
                          <option value="12" selected={Core === '12'}>
                            12
                          </option>
                          <option value="24" selected={Core === '24'}>
                            24
                          </option>
                          <option value="48" selected={Core === '48'}>
                            48
                          </option>
                          <option value="96" selected={Core === '96'}>
                            96
                          </option>
                        </select>
                      </div>

                      {/* ADD and REMOVE BUTTONS  */}
                      <input class="add--btn" onClick={() => this.addCircuitConnection()} type="button" value="+" />
                      <div style={{ width: '35%' }}>
                        {this.circuitConnection.length !== 1 ? <input class="remove--btn" onClick={() => this.removeCircuitConnection(index)} type="button" value="-" /> : ''}
                      </div>
                    </div>
                    {/* {this.circuitConnection.length - 1 === index ? (
                      ''
                    ) : (
                      <input style={{ marginLeft: '10px' }} class="bamboo--btn" type="button" value="Bamboo" onClick={this.handleClickView} />
                    )} */}

                    {this.circuitConnection.length - 1 === index ? (
                      ''
                    ) : (
                      <input style={{ marginLeft: '10px' }} class="bamboo--btn" type="button" value="Bamboo" onClick={this.handleClickView} />
                    )}
                  </div>
                );
              })}

              <br />
            </form>
          </div>
          <button class="submit-btn" type="submit" style={{ marginTop: '20px' }}>
            Submit
          </button>
        </div>

        <div id="myModal" class="modal" style={{ display: this.modal.open ? 'block' : 'none' }}>
          <div class="modal-content">
            <span class="close" onClick={this.close}>
              &times;
            </span>
            {this.modal.show === 'view' &&
              this.bambooDetails.map((d, i) => {
                const { Description, Latitude, Longitude, Splicer } = d;
                return (
                  <div class="container" style={{ height: '30rem' }}>
                    <h2 class="bamboo--header">Bamboo Detail</h2>
                    <form action="#">
                      {/* Description  */}
                      <div class="form-row" style={{ marginTop: '10px', width: '50%' }}>
                        <div class="input-data">
                          <input type="text" placeholder=" " name="Description" required onChange={event => this.handlebambooChange(i, event)} value={Description} />
                          <div class="underline"></div>
                          <label htmlfor="">Description</label>
                        </div>
                      </div>

                      {/* Latitude and Longitude */}
                      <div class="form-row" style={{ marginTop: '10px', width: '50%' }}>
                        <div class="input-data">
                          <input type="text" placeholder=" " name="Latitude" required value={Latitude} onChange={event => this.handlebambooChange(i, event)} />
                          <div class="underline"></div>
                          <label htmlfor="">Latitude</label>
                        </div>
                        <div class="input-data">
                          <input type="text" placeholder=" " name="Longitude" required value={Longitude} onChange={event => this.handlebambooChange(i, event)} />
                          <div class="underline"></div>
                          <label htmlfor="">Longitude</label>
                        </div>
                      </div>
                      {/* Splicer  */}
                      <div class="form-row" style={{ marginTop: '10px', width: '50%' }}>
                        <div class="input-data">
                          <input type="text" placeholder=" " name="Splicer" required value={Splicer} onChange={event => this.handlebambooChange(i, event)} />
                          <div class="underline"></div>
                          <label htmlfor="">Splicer</label>
                        </div>
                      </div>
                      <div class="form-row">
                        <input class="submit-btn" type="submit" value="Submit" style={{ marginLeft: '0' }} />
                      </div>
                    </form>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
