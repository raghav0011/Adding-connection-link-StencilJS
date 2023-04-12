import { Component, h, State } from '@stencil/core';
import { link } from 'fs';

@Component({
  tag: 'circuit-connection',
  styleUrl: 'CircuitStyles.css',
  shadow: true,
})
export class CitcuitConnection {
  @State() circuitConnection = [{ LinkName: '', Cores: '' }];

  // Circuit
  addCircuitConnection() {
    this.circuitConnection = [...this.circuitConnection, { LinkName: '', Cores: '' }];
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

  render() {
    return (
      <div class="container">
        <form action="#">
          <label class="section--label">Circuit Label:</label>
          {this.circuitConnection.map((data, index) => {
            const { LinkName, Cores } = data;
            // const circuitConnection = this.circuitConnection.length;
            return (
              <div>
                <div class="input-data" style={{ display: 'flex', justifyContent: 'center' }}>
                  |+|
                </div>
                <div class="form-row" style={{ marginTop: '10px' }} key={index}>
                  <div class="input-data">
                    <input type="text" onChange={evnt => this.handleCircuitConnectionChange(index, evnt)} name="LinkName" value={LinkName} placeholder=" " />
                    <div class="underline"></div>
                    <label htmlfor="">Link Name</label>
                  </div>
                  <div class="input-data">
                    <select required onChange={evnt => this.handleCircuitConnectionChange(index, evnt)} name="Core">
                      <option value=""> Core :</option>
                      <option value="6">6</option>
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="48">48</option>
                      <option value="96">96</option>
                      <option value="Path Cord">Path Cord</option>
                    </select>
                    <div class="underline"></div>
                  </div>

                  {/* ADD and REMOVE BUTTONS  */}
                  <input class="add--btn" onClick={() => this.addCircuitConnection()} type="button" value="+" />
                  <div style={{ width: '35%' }}>
                    {this.circuitConnection.length !== 1 ? <input class="remove--btn" onClick={() => this.removeCircuitConnection(index)} type="button" value="-" /> : ''}
                  </div>
                </div>
              </div>
            );
          })}

          <br />
          {/* SUBMIT BUTTON  */}
          <div class="form-row submit-btn">
            <div class="input-data">
              <div class="inner"></div>
              <input type="submit" value="submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
