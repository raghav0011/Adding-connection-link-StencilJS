import { Component, h, Prop, State } from '@stencil/core';
// const axios = require('axios').default;

@Component({
  tag: 'connection-link-component',
  styleUrl: 'AddConnectionLinkForm.css',
  shadow: true,
})
export class Form {
  @Prop() splitter_name: string;

  @State() accordionForm = [
    {
      linkType: '',
      olt: '',
      cores: '',
      fiberLinkName: '',
      fiberModel: '',
      from: '',
      to: '',
      length: '',
      gpsStart: '',
      gpsEnd: '',
      description: '',
      loopWire: [
        {
          loopname: '',
          loopmeter: '',
          GPS: '',
        },
      ],
    },
  ];

  handleSubmit = e => {
    e.preventDefault();
  };

  addAccordionForm() {
    this.accordionForm = [
      ...this.accordionForm,
      {
        linkType: '',
        olt: '',
        cores: '',
        fiberLinkName: '',
        fiberModel: '',
        from: '',
        to: '',
        length: '',
        gpsStart: '',
        gpsEnd: '',
        description: '',
        loopWire: [
          {
            loopname: '',
            loopmeter: '',
            GPS: '',
          },
        ],
      },
    ];
  }

  //Adding Loopwire inside the accordion form
  addLoopwire(i) {
    const list = [...this.accordionForm];
    const newLoopWire = { loopname: '', loopmeter: '', GPS: '' };
    list[i].loopWire.push(newLoopWire);
    this.accordionForm = list;
    console.log(this.accordionForm);
  }

  // Remove LoopName
  removeLoopwire(i, index) {
    const rows = [...this.accordionForm];
    rows[i].loopWire.splice(index, 1);
    this.accordionForm = rows;
  }

  //Removing accordion form
  removeAccordionForm(index) {
    const rows = [...this.accordionForm];

    if (confirm('Are you sure to close this tab?')) {
      rows.splice(index, 1);
      this.accordionForm = rows;
    }
  }

  //When accordion form changes
  handleAccordionFormChange(i, evnt) {
    let { name, value } = evnt.target;
    if (name == 'olt') {
      value = value.toUpperCase();
    }

    const list = [...this.accordionForm];
    list[i][name] = value;
    this.accordionForm = list;
  }

  //Sets the value of the specific loopwire to its correct index
  handleLoopwireChange(i, index, evnt) {
    const { name, value } = evnt.target;
    const list = [...this.accordionForm];
    list[i].loopWire[index][name] = value;
    this.accordionForm = list;
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="text">Add Splitter Link ({this.splitter_name})</div>
          {/* <label htmlfor="" style={{ fontSize: '25px', fontWeight: '600' }}>
            Circuit Label :
          </label> */}

          {this.accordionForm.map((data, i) => {
            const { linkType, olt, cores, fiberLinkName, fiberModel, from, to, length, gpsStart, gpsEnd, description, loopWire } = data;
            return (
              <div>
                <form action="#" onSubmit={e => this.handleSubmit(e)} key={i}>
                  <div style={{ display: 'flex' }}>
                    <div>
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
                            <select required style={{ marginLeft: '100px', width: '63%' }} onChange={e => this.handleAccordionFormChange(i, e)} name="linkType">
                              <option value="">Select :</option>
                              <option value="F" selected={linkType === 'F'}>
                                Fiber
                              </option>
                              <option value="R" selected={linkType === 'R'}>
                                Redundant
                              </option>
                              <option value="T" selected={linkType === 'T'}>
                                Trunk
                              </option>
                            </select>
                          </div>

                          <div class="input-data">
                            <input
                              list="olt"
                              name="olt"
                              placeholder=" "
                              style={{ textTransform: 'uppercase' }}
                              onChange={e => this.handleAccordionFormChange(i, e)}
                              required
                              value={olt}
                            />
                            <datalist id="olt">
                              <option value=""></option>
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
                            <select required style={{ width: '63%' }} onChange={e => this.handleAccordionFormChange(i, e)} name="cores">
                              <option value="">Select :</option>
                              <option value="1" selected={cores === '1'}>
                                1
                              </option>
                              <option value="6" selected={cores === '6'}>
                                6
                              </option>
                              <option value="12" selected={cores === '12'}>
                                12
                              </option>
                              <option value="24" selected={cores === '24'}>
                                24
                              </option>
                              <option value="48" selected={cores === '48'}>
                                48
                              </option>
                              <option value="96" selected={cores === '96'}>
                                96
                              </option>
                            </select>
                          </div>
                        </div>

                        {/* FIBER LINK NAME  */}
                        <div class="form-row">
                          <div class="input-data">
                            <input
                              type="text"
                              placeholder=" "
                              onChange={e => this.handleAccordionFormChange(i, e)}
                              value={`${linkType}-${olt}-${cores}`}
                              name="fiberLinkName"
                              disabled
                            />
                            <label htmlfor="">
                              Fiber Link Name<span class="text-danger">* </span>:
                            </label>
                            <div class="underline"></div>
                          </div>
                        </div>

                        {/* FIBER MODEL  */}
                        <div class="form-row">
                          <div class="input-data">
                            <label htmlfor="">
                              Fiber Model<span class="text-danger">*</span> :
                            </label>
                            <select required style={{ marginLeft: '120px', width: '30%' }} onChange={e => this.handleAccordionFormChange(i, e)} name="fiberModel">
                              <option value="">Select :</option>
                              <option value="Model 1" selected={fiberModel === 'Model 1'}>
                                Model 1
                              </option>
                              <option value="Model 2" selected={fiberModel === 'Model 2'}>
                                Model 2
                              </option>
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
                        {loopWire.map((data, index) => {
                          const { loopname, loopmeter, GPS } = data;
                          return (
                            <div class="form-row" style={{ marginTop: '10px' }}>
                              <div class="input-data">
                                <input type="text" onChange={evnt => this.handleLoopwireChange(i, index, evnt)} name="loopname" value={loopname} placeholder=" " />
                                <div class="underline"></div>
                                <label htmlfor="">Loop Name</label>
                              </div>

                              <div class="input-data">
                                <input type="number" onChange={evnt => this.handleLoopwireChange(i, index, evnt)} name="loopmeter" value={loopmeter} placeholder=" " />
                                <div class="underline"></div>
                                <label htmlfor="">Loop Meters</label>
                              </div>

                              <div class="input-data">
                                <input type="text" onChange={evnt => this.handleLoopwireChange(i, index, evnt)} name="GPS" value={GPS} placeholder=" " />
                                <div class="underline"></div>
                                <label htmlfor="">GPS</label>
                              </div>

                              {/* ADD and REMOVE BUTTONS  */}
                              <input class="add--btn" onClick={() => this.addLoopwire(i)} type="button" value="+" title="Add loop wire" />

                              <div style={{ width: '35%' }}>
                                {loopWire.length !== 1 ? (
                                  <input class="remove--btn" onClick={() => this.removeLoopwire(i, index)} type="button" value="-" title="Remove loop wire" />
                                ) : (
                                  ''
                                )}
                              </div>
                            </div>
                          );
                        })}

                        <button class="submit-btn" title="Submit connection links" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>

                    <br />

                    <div>
                      {this.accordionForm.length !== 1 ? (
                        <button
                          class="remove--btn"
                          type="button"
                          style={{ width: '25px', height: '25px', backgroundColor: 'red', borderRadius: '25px', marginLeft: '-37px', marginTop: '6px', fontWeight: 'bold' }}
                          onClick={() => this.removeAccordionForm(i)}
                        >
                          X
                        </button>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </form>
              </div>
            );
          })}

          <div style={{ marginLeft: '44%' }}>
            <button class="add--btn" style={{ width: '4rem', marginTop: '10px' }} onClick={() => this.addAccordionForm()} title="Add more connection link">
              Add
            </button>
          </div>
          <br />
          {/* <button class="submit-btn" title="Submit connection links" type="submit">
            Submit
          </button> */}
        </div>
      </div>
    );
  }
}
