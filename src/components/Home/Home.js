/**
 * Created by zgf on 17/10/12.
 */
import DatePanel from '../Picker/DatePanel';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: false,
      dateShow: null,
      codeOpen: false
    };
    this.birthday = null;
    this.style = {
      title: {
        fontSize: '20px',
        color: '#333',
        padding: '10px 0'
      },
      row: {
        height: '50px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #11c1ae'
      },
      name: {
        fontSize: '16px',
        color: '#666'
      },
      date: {
        fontSize: '16px',
        color: '#11c1ae'
      },
      code: {
        wordBreak: 'word-break',
        whiteSpace: 'pre-wrap',
        backgroundColor: '#f7f7f7',
        borderRadius: '10px',
        padding: '10px',
        overflow: 'scroll'
      }
    };
    this.code = `
      import DatePanel from '../Picker/DatePanel';
      class Home extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            panelOpen: false,
            dateShow: null
          };
          this.birthday = null;
          this.style = {
            title: {
              fontSize: '20px',
              color: '#333',
              padding: '10px 0'
            },
            row: {
              height: '50px',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #11c1ae'
            },
            name: {
              fontSize: '16px',
              color: '#666'
            },
            date: {
              fontSize: '16px',
              color: '#11c1ae'
            }
          };
        }
     
        render() {
          return (
            <div style={{width: '100%', padding: '20px', height: '100%'}}>
              <p style={this.style.title}>日期选择器Demo</p>
              <div style={this.style.row}>
                <span style={this.style.name}>日期</span>
                <p
                  onClick={() => this.setState({panelOpen: true})}
                  style={this.style.date}
                >
                  {this.state.dateShow || '请选择日期'}
                </p>
              </div>
              <DatePanel
                show={this.state.panelOpen}
                onCancel={() => this.setState({panelOpen: false})}
                label="出生年份"
                onConfirm={value => {
                  this.birthday = value.pass;
                  this.setState({dateShow: value.show, panelOpen: false});
                }}
                minYear={parseInt(new Date().getFullYear(), 10) - 100}
                maxYear={parseInt(new Date().getFullYear(), 10)}
              />
            </div>
          );
        }
      }
      
      export default Home;`;
  }

  render() {
    return (
      <div style={{width: '100%', padding: '20px', height: '100%'}}>
        <p style={this.style.title}>日期选择器Demo</p>
        <div style={this.style.row}>
          <span style={this.style.name}>日期</span>
          <p
            onClick={() => this.setState({panelOpen: true})}
            style={this.style.date}
          >
            {this.state.dateShow || '请选择日期'}
          </p>
        </div>
        <button
          style={{
            height: '44px',
            width: '300px',
            color: '#fff',
            backgroundColor: '#11c1ae',
            fontSize: '18px',
            borderRadius: '5px',
            border: 'none',
            outline: 'none',
            margin: '0 auto 20px',
            display: 'block'
          }}
          onClick={() => {
            this.setState({codeOpen: !this.state.codeOpen});
          }}
        >{this.state.codeOpen ? '收起示例代码' : '查看示例代码'}</button>
        <pre
          style={{
            height: '420px',
            wordBreak: 'word-break',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#f7f7f7',
            borderRadius: '10px',
            padding: '10px',
            fontSize: '12px',
            lineHeight: '1.2',
            color: '#666',
            overflow: 'scroll',
            display: this.state.codeOpen ? 'block' : 'none'
          }}
        >
          {this.code}
        </pre>
        <DatePanel
          show={this.state.panelOpen}
          onCancel={() => this.setState({panelOpen: false})}
          label="出生年份"
          onConfirm={value => {
            this.birthday = value.pass;
            this.setState({dateShow: value.show, panelOpen: false});
          }}
          minYear={parseInt(new Date().getFullYear(), 10) - 100}
          maxYear={parseInt(new Date().getFullYear(), 10)}
        />
      </div>
    );
  }
}
export default Home;