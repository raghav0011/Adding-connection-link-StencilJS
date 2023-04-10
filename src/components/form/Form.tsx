import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'md-component',
  styleUrl: 'styles.css',
  shadow: true,
})
export class Form {
  @State() loopwire = [{ loopName: '', loopmeter: '', GPS: '' }];

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.loopwire);
  };

  // LoopName
  addLoopwire() {
    this.loopwire = [...this.loopwire, { loopName: '', loopmeter: '', GPS: '' }];
  }

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
          {/* FIBER LINK NAME  */}
          <div class="form-row">
            <div class="input-data">
              <input type="text" required placeholder=" " />
              <div class="underline"></div>
              <label htmlfor="">
                Fiber Link Name<span class="text-danger">*</span>
              </label>
            </div>
          </div>

          {/* FIBER MODEL  */}
          <div class="form-row">
            <div class="input-data">
              <label htmlfor="">
                Fiber Model<span class="text-danger">*</span> :
              </label>
              <select required style={{ marginLeft: '120px', width: '63%' }}>
                <option value="">Select :</option>
                <option value="Model 1">Model 1</option>
                <option value="Model 2">Model 2</option>
              </select>
              <div class="underline"></div>
            </div>

            {/* CORES  */}
            <div class="input-data">
              <label htmlfor="">
                Cores<span class="text-danger">*</span> :
              </label>
              <select required>
                <option value="">Select :</option>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="48">48</option>
                <option value="96">96</option>
                <option value="Path Cord">Path Cord</option>
              </select>
              <div class="underline"></div>
            </div>
          </div>

          {/* LINK LOCATION  */}
          <label class="section--label">Link Location:</label>
          <div class="form-row" style={{ marginTop: '10px' }}>
            <div class="input-data">
              <input type="text" placeholder=" " />
              <div class="underline"></div>
              <label htmlfor="">From</label>
            </div>
            <div class="input-data">
              <input type="text" placeholder=" " />
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
                  <input type="text" onChange={evnt => this.handleLoopwireChange(index, evnt)} name="loopmeter" value={loopmeter} placeholder=" " />
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
