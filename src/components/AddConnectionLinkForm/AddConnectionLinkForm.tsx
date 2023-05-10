import { Component, h, State } from '@stencil/core';
// import { addGlobalStyle, addScript } from '@stencil/core';
// const axios = require('axios').default;

@Component({
  tag: 'connection-link-component',
  styleUrl: 'AddConnectionLinkForm.css',
  shadow: true,
})
export class Form {
  @State() accordionForm = [{ linkType: '', olt: '', cores: '', fiberLinkName: '', fiberModel: '', from: '', to: '', length: '', gpsStart: '', gpsEnd: '', description: '' }];
  @State() loopwire = [{ loopName: '', loopmeter: '', GPS: '' }];

  handleSubmit = e => {
    e.preventDefault();
  };

  // LoopName
  // addLoopwire() {
  //   this.loopwire = [...this.loopwire, { loopName: '', loopmeter: '', GPS: '' }];
  //   console.log(this.loopwire);
  // }

  addLoopwire() {
    this.loopwire = [...this.loopwire, { loopName: '', loopmeter: '', GPS: '' }];
    console.log(this.loopwire);
  }

  addAccordionForm() {
    this.accordionForm = [
      ...this.accordionForm,
      { linkType: '', olt: '', cores: '', fiberLinkName: '', fiberModel: '', from: '', to: '', length: '', gpsStart: '', gpsEnd: '', description: '' },
    ];
    console.log(this.accordionForm);
    console.log(this.loopwire);
  }

  removeAccordionForm(index) {
    const rows = [...this.accordionForm];
    rows.splice(index, 1);
    this.accordionForm = rows;
    console.log(this.accordionForm);
  }

  // Remove LoopName
  removeLoopwire(index) {
    const rows = [...this.loopwire];
    rows.splice(index, 1);
    this.loopwire = rows;
    // console.log(index);
  }

  handleAccordionFormChange(i, evnt) {
    const { name, value } = evnt.target;
    const list = [...this.accordionForm];
    list[i][name] = value;
    this.accordionForm = list;
  }

  handleLoopwireChange(index, evnt) {
    const { name, value } = evnt.target;
    const list = [...this.loopwire];
    list[index][name] = value;
    this.loopwire = list;
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="text">Splitter Link Add()</div>
          <label htmlfor="" style={{ fontSize: '25px', fontWeight: '600' }}>
            Circuit Label :
          </label>

          {this.accordionForm.map((data, i) => {
            const { linkType, olt, cores, fiberLinkName, fiberModel, from, to, length, gpsStart, gpsEnd, description } = data;
            return (
              <div>
                <form action="#" onSubmit={e => this.handleSubmit(e)} key={i}>
                  {/* For Accordion  */}
                  <input class="accordion" type="checkbox" id={`link${i}`} />
                  <label class="accordion-label" htmlFor={`link${i}`}>
                    Connection Link
                  </label>

                  {/* Content for the accordion  */}
                  <div class="content">
                    {/* OLT and Link Type  */}

                    <div class="form-row" style={{ marginTop: '10px', marginBottom: '10px' }}>
                      <div class="input-data" style={{ marginRight: '60px' }}>
                        <label htmlfor="">
                          Link Type<span class="text-danger">*</span> :
                        </label>
                        <select required style={{ marginLeft: '100px', width: '63%' }}>
                          <option value="">Select :</option>
                          <option value="F">Fiber</option>
                          <option value="R">Redundant</option>
                          <option value="T">Trunk</option>
                        </select>
                      </div>

                      <div class="input-data">
                        <input list="olt" name="olt" placeholder=" " style={{ textTransform: 'uppercase' }} required />
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
                        <select required style={{ width: '63%' }}>
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
                          Fiber Link Name<span class="text-danger">* </span>:
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
                        <input type="text" onChange={e => this.handleAccordionFormChange(i, e)} placeholder=" " name="from" value={from} />
                        <div class="underline"></div>
                        <label htmlfor="">From</label>
                      </div>
                      <div class="input-data">
                        <input type="text" onChange={e => this.handleAccordionFormChange(i, e)} placeholder=" " name="to" value={to} />
                        <div class="underline"></div>
                        <label htmlfor="">To</label>
                      </div>
                    </div>

                    {/* LENGTH  */}
                    <div class="form-row">
                      <div class="input-data">
                        <input type="number" placeholder=" " required onChange={e => this.handleAccordionFormChange(i, e)} value={length} name="length" />
                        <div class="underline"></div>
                        <label htmlfor="">
                          Length(Meters)<span class="text-danger">*</span>
                        </label>
                      </div>
                    </div>

                    {/* GPS  */}
                    <div class="form-row">
                      <div class="input-data">
                        <input type="text" placeholder=" " required onChange={e => this.handleAccordionFormChange(i, e)} value={gpsStart} name="gpsStart" />
                        <div class="underline"></div>
                        <label htmlfor="">
                          GPS Start<span class="text-danger">*</span>
                        </label>
                      </div>
                      <div class="input-data">
                        <input type="text" placeholder=" " required onChange={e => this.handleAccordionFormChange(i, e)} value={gpsEnd} name="gpsEnd" />
                        <div class="underline"></div>
                        <label htmlfor="">
                          GPS End<span class="text-danger">*</span>
                        </label>
                      </div>
                    </div>

                    {/* DESCRIPTION  */}
                    <div class="form-row">
                      <div class="input-data textarea">
                        <textarea rows={8} cols={80} placeholder=" " onChange={e => this.handleAccordionFormChange(i, e)} value={description} name="description"></textarea>
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
                  </div>

                  <br />
                  {this.accordionForm.length !== 1 ? (
                    <button class="remove--btn" style={{ width: '4rem', backgroundColor: 'red' }} onClick={() => this.removeAccordionForm(i)}>
                      Remove
                    </button>
                  ) : (
                    ''
                  )}
                </form>
              </div>
            );
          })}

          <div style={{ marginLeft: '44%' }}>
            <button class="add--btn" style={{ width: '4rem' }} onClick={() => this.addAccordionForm()}>
              Add
            </button>
          </div>
          <br />
          <button class="submit-btn">Submit</button>
        </div>
      </div>
    );
  }
}
