import { Component, h, State } from '@stencil/core';
// const axios = require('axios').default;

@Component({
  tag: 'connection-link-component',
  styleUrl: 'styles.css',
  shadow: true,
})
export class Form {
  @State() loopwire = [{ loopName: '', loopmeter: '', GPS: '' }];
  @State() LinkType: string;
  @State() Olt: string;
  @State() Cores: string;

  handleSubmit = e => {
    e.preventDefault();
    console.log('Cores:', this.Cores);
    console.log('FiberLinkName:', this.LinkType, '-', this.Cores, '-', this.Olt);
  };

  // setting link type
  handleLinkType = event => {
    this.LinkType = event.target.value;
  };

  handleOlt = event => {
    this.Olt = event.target.value;
  };

  //for setting Cores value to its state
  handleCores = event => {
    this.Cores = event.target.value;
  };

  // LoopName
  addLoopwire() {
    this.loopwire = [...this.loopwire, { loopName: '', loopmeter: '', GPS: '' }];
  }

  // Remove LoopName
  removeLoopwire(index) {
    const rows = [...this.loopwire];
    rows.splice(index, 1);
    this.loopwire = rows;
  }

  handleLoopwireChange(index, evnt) {
    const { name, value } = evnt.target;
    const list = [...this.loopwire];
    list[index][name] = value;
    this.loopwire = list;
  }

  render() {
    return (
      <div class="container">
        <div class="text">ADD NEW CONNECTION LINK</div>
        <form action="#" onSubmit={e => this.handleSubmit(e)}>
          {/* OLT and Link Type  */}

          <div class="form-row" style={{ marginTop: '10px', marginBottom: '10px' }}>
            <div class="input-data" style={{ marginRight: '60px' }}>
              <label htmlfor="">
                Link Type<span class="text-danger">*</span> :
              </label>
              <select required onInput={this.handleLinkType} style={{ marginLeft: '100px', width: '63%' }}>
                <option value="">Select :</option>
                <option value="F">Fiber</option>
                <option value="R">Redundant</option>
                <option value="T">Trunk</option>
              </select>
            </div>

            <div class="input-data">
              <input list="olt" name="olt" placeholder=" " onInput={this.handleOlt} style={{ textTransform: 'uppercase' }} required />
              <datalist id="olt">
                <option value="MINI"></option>
                <option value="KLTR"></option>
                <option value="JAWL"></option>
                <option value="TRTL"></option>
              </datalist>
              <div class="underline"></div>
              <label htmlfor="">
                OLT<span class="text-danger">*</span>
              </label>
            </div>
            {/* CORES  */}
            <div class="input-data">
              <label htmlfor="">
                Cores<span class="text-danger">*</span> :
              </label>
              <select required onInput={this.handleCores} style={{ width: '63%' }}>
                <option value="">Select :</option>
                <option value="1">1</option>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="48">48</option>
                <option value="96">96</option>
              </select>
            </div>
          </div>

          {/* FIBER LINK NAME  */}
          <div class="form-row">
            <div class="input-data">
              <label htmlfor="">
                Fiber Link Name<span class="text-danger">* </span>: {this.LinkType}-{this.Olt}-{this.Cores}
              </label>
            </div>
          </div>

          {/* FIBER MODEL  */}
          <div class="form-row">
            <div class="input-data">
              <label htmlfor="">
                Fiber Model<span class="text-danger">*</span> :
              </label>
              <select required style={{ marginLeft: '120px', width: '30%' }}>
                <option value="">Select :</option>
                <option value="Model 1">Model 1</option>
                <option value="Model 2">Model 2</option>
              </select>
              <div class="underline"></div>
            </div>
          </div>

          {/* LINK LOCATION  */}
          <label class="section--label">Link Location:</label>
          <div class="form-row" style={{ marginTop: '10px' }}>
            <div class="input-data">
              <input type="text" placeholder=" " name="from" />
              <div class="underline"></div>
              <label htmlfor="">From</label>
            </div>
            <div class="input-data">
              <input type="text" placeholder=" " name="to" />
              <div class="underline"></div>
              <label htmlfor="">To</label>
            </div>
          </div>

          {/* LENGTH  */}
          <div class="form-row">
            <div class="input-data">
              <input type="number" placeholder=" " required />
              <div class="underline"></div>
              <label htmlfor="">
                Length(Meters)<span class="text-danger">*</span>
              </label>
            </div>
          </div>

          {/* GPS  */}
          <div class="form-row">
            <div class="input-data">
              <input type="text" placeholder=" " required />
              <div class="underline"></div>
              <label htmlfor="">
                GPS Start<span class="text-danger">*</span>
              </label>
            </div>
            <div class="input-data">
              <input type="text" placeholder=" " required />
              <div class="underline"></div>
              <label htmlfor="">
                GPS End<span class="text-danger">*</span>
              </label>
            </div>
          </div>

          {/* DESCRIPTION  */}
          <div class="form-row">
            <div class="input-data textarea">
              <textarea rows={8} cols={80} placeholder=" "></textarea>
              <br />
              <div class="underline"></div>
              <label htmlfor="">Description</label>
            </div>
          </div>

          {/* LOOP WIRE */}
          <label class="section--label">Loop wire:</label>
          {this.loopwire.map((data, index) => {
            const { loopName, loopmeter, GPS } = data;
            return (
              <div class="form-row" style={{ marginTop: '10px' }} key={index}>
                <div class="input-data">
                  <input type="text" onChange={evnt => this.handleLoopwireChange(index, evnt)} name="loopName" value={loopName} placeholder=" " />
                  <div class="underline"></div>
                  <label htmlfor="">Loop Name</label>
                </div>

                <div class="input-data">
                  <input type="number" onChange={evnt => this.handleLoopwireChange(index, evnt)} name="loopmeter" value={loopmeter} placeholder=" " />
                  <div class="underline"></div>
                  <label htmlfor="">Loop Meters</label>
                </div>

                <div class="input-data">
                  <input type="text" onChange={evnt => this.handleLoopwireChange(index, evnt)} name="GPS" value={GPS} placeholder=" " />
                  <div class="underline"></div>
                  <label htmlfor="">GPS</label>
                </div>

                {/* ADD and REMOVE BUTTONS  */}
                <input class="add--btn" onClick={() => this.addLoopwire()} type="button" value="+" />

                <div style={{ width: '35%' }}>
                  {this.loopwire.length !== 1 ? <input class="remove--btn" onClick={() => this.removeLoopwire(index)} type="button" value="-" /> : ''}
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
