/**
 * Created by work on 17/3/15.
 */
import Picker from './Picker';
class DatePanel extends React.Component {
  constructor(props) {
    super(props);
    const year = parseInt(new Date().getFullYear(), 10);
    const minY = (typeof this.props.minYear === 'number') ? this.props.minYear : (year - 100);
    const maxY = (typeof this.props.maxYear === 'number') ? this.props.maxYear : (year + 100);
    this.defValue = this.props.defaultIndex ? this.props.defaultIndex
      : [(parseInt(new Date().getFullYear(), 10) - minY), (parseInt(new Date().getMonth(), 10)),
        (parseInt(new Date().getDate(), 10) - 1)];
    this.yearItems = [];
    this.monthItems = [];
    this.dayItems = [];
    for (let y = minY; y <= maxY; y ++) {
      this.yearItems.push(y);
    }
    for (let m = 1; m <= 12; m ++) {
      this.monthItems.push(m);
    }
    const defY = this.yearItems[this.defValue[0]];
    let defM = this.monthItems[this.defValue[1]];
    const totalDays = new Date(defY, defM, 0).getDate();
    for (let d = 1; d <= totalDays; d++) {
      this.dayItems.push(d);
    }
    let defD = this.dayItems[this.defValue[2]];
    this.type = 3;
    if (this.props.type === 'year') {
      this.type = 1;
    } else if (this.props.type === 'year&month') {
      this.type = 2;
    }
    if (this.type === 1) {
      defM = 1;
      defD = 1;
    }
    if (this.type === 2) {
      defD = 1;
    }
    this.state = {
      year: defY,
      month: defM,
      day: defD
    };
    this.style = {
      shadow: {
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, .4)',
          zIndex: 999,
      },
      panel: {
          width: '300px',
          height: '350px',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          margin: 'auto',
          backgroundColor: '#fff'
      },
      top: {
          height: '88px',
          backgroundColor: '#11c1ae',
          lineHeight: '88px',
          textAlign: 'center',
          color: '#fff',
          fontSize: '24px',
          fontWeight: 'bold'
      },
      small: {
          fontSize: '14px',
          fontWeight: 'normal',
          marginRight: '2px',
          marginLeft: '1px'
      },
      mid: {
          height: '190px'
      },
      box: {
          marginTop: '20px',
          marginRight: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
      },
      title: {
          fontSize: '16px',
          color: '#3cb198'
      },
      label: {
          marginTop: '10px',
          height: '20px',
          fontSize: '14px',
          lineHeight: '30px',
          textAlign: 'center',
          color: '#3cb198'
      },
      action: {
          width: '100%',
          height: '52px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          fontSize: '14px'
      },
      cancel: {
          margin: '0 20px',
          color: '#333'
      },
      confirm: {
          margin: '0 30px',
          color: '#11c1ae'
      }
    }
  }

  handleSetDay = (y, m) => {
    this.dayItems = [];
    const totalDays = new Date(y, m, 0).getDate();
    for (let d = 1; d <= totalDays; d++) {
      this.dayItems.push(d);
    }
    this.setState({year: y, month: m});
  };
  addZero = (str) => {
    let string = str;
    if (typeof string !== 'string') {
      string = string.toString();
    }
    string = string.length <= 1 ? `0${string}` : string;
    return string;
  };

  render() {
    let title = (<div style={this.style.top}>
      <span>{this.state.year}</span>
      <small style={this.style.small}>年</small>
      <span>{this.state.month}</span>
      <small style={this.style.small}>月</small>
      <span>{this.state.day}</span>
      <small style={this.style.small}>日</small>
    </div>);
    let opt = (
      <div style={this.style.box}>
        <Picker
          options={this.yearItems}
          onChange={(value) => this.handleSetDay(value, this.state.month)}
          defaultIndex={this.defValue[0]}
          show={this.props.show}
        />
        <p style={this.style.title}>年</p>
        <Picker
          options={this.monthItems}
          onChange={(value) => this.handleSetDay(this.state.year, value)}
          defaultIndex={this.defValue[1]}
          show={this.props.show}
        />
        <p style={this.style.title}>月</p>
        <Picker
          options={this.dayItems}
          onChange={(value) => this.setState({day: value})}
          defaultIndex={this.defValue[2]}
          show={this.props.show}
        />
        <p style={this.style.title}>日</p>
      </div>
    );
    if (this.type === 1) {
      title = (
        <div style={this.style.top}>
          <span>{this.state.year}</span>
          <small style={this.style.small}>年</small>
        </div>
      );
      opt = (
        <div style={this.style.box}>
          <Picker
            options={this.yearItems}
            onChange={(value) => this.handleSetDay(value, this.state.month)}
            defaultIndex={this.defValue[0]}
            show={this.props.show}
          />
          <p style={Object.assign({}, this.style.title, {visibility: 'hidden'})}>年</p>
        </div>
      );
    } else if (this.type === 2) {
      title = (
        <div style={this.style.top}>
          <span>{this.state.year}</span>
          <small style={this.style.small}>年</small>
          <span>{this.state.month}</span>
          <small style={this.style.small}>月</small>
        </div>
      );
      opt = (
        <div style={this.style.box}>
          <Picker
            options={this.yearItems}
            onChange={(value) => this.handleSetDay(value, this.state.month)}
            defaultIndex={this.defValue[0]}
            show={this.props.show}
          />
          <p style={this.style.title}>年</p>
          <Picker
            options={this.monthItems}
            onChange={(value) => this.handleSetDay(this.state.year, value)}
            defaultIndex={this.defValue[1]}
            show={this.props.show}
          />
          <p style={this.style.title}>月</p>
        </div>
      );
    }
    return (
      <div
        style={Object.assign({}, this.style.shadow, {display: this.props.show ? 'block' : 'none'})}
      >
        <div style={this.style.panel}>
          {
            title
          }
          <div style={this.style.mid}>
            <div style={this.style.label}>
              {`选择${this.props.label}`}
            </div>
            {
              opt
            }
          </div>
          <div style={this.style.action}>
            <div
              style={this.style.cancel}
              onClick={() => { this.props.onCancel(); }}
            >
              取消
            </div>
            <div
              style={this.style.confirm}
              onClick={() => {
                let show = `${this.state.year}年${this.addZero(this.state.month)}月${this.addZero(this.state.day)}日`;
                if (this.type === 1) {
                  show = `${this.state.year}年`;
                } else if (this.type === 2) {
                  show = `${this.state.year}年${this.addZero(this.state.month)}月`;
                }
                const value = {
                  show,
                  pass: `${this.state.year}-${this.addZero(this.state.month)}-${this.addZero(this.state.day)}`
                };
                this.props.onConfirm(value); //eslint-disable-line
              }}
            >
              确定
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DatePanel.propTypes = {
  show: React.PropTypes.bool.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  minYear: React.PropTypes.number,
  maxYear: React.PropTypes.number,
  defaultIndex: React.PropTypes.array,
  onConfirm: React.PropTypes.func.isRequired,
  type: React.PropTypes.string
};

export default DatePanel;