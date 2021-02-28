import React, { useContext } from 'react';
import Admin2 from "../../layouts/Admin2";
import Sidebar from "../../ components/Navbars/Sidebar";
import routes from "routes.js";
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  ChannelListMessenger,
  ChannelPreviewMessenger,
  InfiniteScrollPaginator,
  MessageInput,
  MessageInputFlat,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import './App.css';

import axios from "axios"
import AppContext from '../context/AppContext';



const urlParams = new URLSearchParams(window.location.search);
const apiKey = urlParams.get('apiKey') || process.env.REACT_APP_STREAM_KEY || 'g63cwhyr4w6s';
const userId = urlParams.get('user') || process.env.REACT_APP_USER_ID || userId;
const theme = urlParams.get('theme') || 'light';
const userToken = urlParams.get('user_token') || process.env.REACT_APP_USER_TOKEN || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiemUifQ.xR1sax52yUoqTXz8dDJg4QBIh1zK3GBwgggf5_NGmj0"
;


const Paginator = (props) => (
  <InfiniteScrollPaginator threshold={300} {...props} />
);

const chatClient = StreamChat.getInstance(apiKey);

if (process.env.REACT_APP_CHAT_SERVER_ENDPOINT) {
  chatClient.setBaseURL(process.env.REACT_APP_CHAT_SERVER_ENDPOINT);
}






class App extends React.Component {

  static contextType = AppContext

  constructor(props) {
    
    super(props);
    this.state = { value: ' '    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {    
    this.setState({value: event.target.value});  }

  handleSubmit(event) {
    axios.get(`https://localhost:3001/`)
      .then(res => {
        const persons = res.data;
        alert(persons)
        alert('An essay was submitted: ' + this.state.value);
      })
     
    event.preventDefault();
  }
  

  componentDidMount(){
    const { state } = this.context;

    console.log("-- " + state.nome)
    console.log("- - " + state.tokenC)
  
  
    chatClient.connectUser({ id: state.nome }, state.tokenC);
  }

render(){
  const { state } = this.context;
  
  const filters = { type: 'messaging', members: {$in:[state.nome]}};
    const options = {};
    const sort = {
      cid: 1,
      last_message_at: -1,
      updated_at: -1,
  };

  return(
    <>
  
  
  <Chat client={chatClient} theme={`messaging ${theme}`} >
    <ChannelList
      List={ChannelListMessenger}
      Preview={ChannelPreviewMessenger}
      filters={filters}
      sort={sort}
      options={options}
      Paginator={Paginator}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput Input={MessageInputFlat} focus />
      </Window>
      <Thread />
    </Channel>
  </Chat>
  </>
  )
}
}



App.layout = Admin2;
export default App;
