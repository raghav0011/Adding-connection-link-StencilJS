import { Component, h, State, Listen, Element } from '@stencil/core';
// import { link } from 'fs';

type Modal = {
  open: boolean;
  show: 'view' | 'add' | '';
};

@Component({
  tag: 'circuit-connection',
  styleUrl: 'CircuitStyles.css',
  shadow: true,
})
export class CitcuitConnection {
  @Element() private element: HTMLElement;

  @State() circuitConnection = [{ LinkName: '', Core: '' }];

  @State() modal: Modal = { open: false, show: '' };

  constructor() {
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickView = this.handleClickView.bind(this);
    this.close = this.close.bind(this);
  }
  close() {
    this.modal = {
      open: false,
      show: '',
    };
  }

  handleClickAdd() {
    this.modal = {
      open: true,
      show: 'add',
    };
  }
  handleClickView() {
    this.modal = {
      open: true,
      show: 'view',
    };
  }
  @Listen('click', { target: 'window' })
  handleWindowClick(ev) {
    const modal = this.element.querySelector('div#myModal');
    if (ev.target === modal) {
      this.close();
    }
  }

  // Circuit
  addCircuitConnection() {
    this.circuitConnection = [...this.circuitConnection, { LinkName: '', Core: '' }];
    // console.log(this.circuitConnection);
  }

  // Remove Circuit
  removeCircuitConnection(index) {
    const rows = [...this.circuitConnection];
    rows.splice(index, 1);
    this.circuitConnection = rows;
    // console.log(this.circuitConnection);
  }

  handleCircuitConnectionChange(index, evnt) {
    const { name, value } = evnt.target;
    const list = [...this.circuitConnection];
    list[index][name] = value;
    this.circuitConnection = list;
  }

  render() {
    return (
      <div>
        <div class="container">
          <form action="#">
            <label class="section--label">Splitter Name </label>
            <br />
            <br />
            <label class="section--label">Splitter Type </label>
            <br />
            <br />
            <label class="section--label">Circuit Label:</label>
            {this.circuitConnection.map((data, index) => {
              const { LinkName, Core } = data;
              return (
                <div>
                  <div class="form-row" style={{ marginTop: '10px', marginBottom: '10px' }} key={index}>
                    <div class="input-data">
                      <input type="text" onChange={evnt => this.handleCircuitConnectionChange(index, evnt)} name="LinkName" value={LinkName} placeholder=" " required />
                      <div class="underline"></div>
                      <label htmlfor="">Link Name</label>
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

                  <div class="bamboo--container">
                    <div>{this.circuitConnection.length !== 1 ? <input class="bamboo--btn" type="button" value="Bamboo" onClick={this.handleClickAdd} /> : ''}</div>

                    <div>{this.circuitConnection.length !== 1 ? ' |+|' : ''}</div>
                  </div>
                </div>
              );
            })}

            <br />
          </form>
        </div>

        <div id="myModal" class="modal" style={{ display: this.modal.open ? 'block' : 'none' }}>
          <div class="modal-content">
            <span class="close" onClick={this.close}>
              &times;
            </span>
            {this.modal.show === 'add' && <bamboo-detail></bamboo-detail>}
            {this.modal.show === 'view' && <bamboo-detail></bamboo-detail>}
          </div>
        </div>
      </div>
    );
  }
}
