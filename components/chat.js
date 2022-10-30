import React, {useState, useEffect} from "react";
import Image from 'next/image'
import Note from "./note";
import Highlighter from "react-highlight-words";
import Search from './search'
const Chat = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const [matchCount, setMatchCount] = useState(0)
  const changeSearchValue = (value => {
    setSearchValue(value)
    let res = 0
    if(value !== '') {
      props.currentUser.messageList.forEach(item => {
        res += item.message.split(value).length - 1
      })
    }
    setMatchCount(res)
  })
  useEffect(() => {
    let res = 0
    console.log(searchValue)
    if(searchValue !== '') {
      props.currentUser.messageList.forEach(item => {
        res += item.message.split(searchValue).length - 1
      })
    }
    setMatchCount(res)
  }, [props.currentUser]);
  return (
    <div className="chat">
      <div className="chat-head">
        <div className="user-info">
          <div className="user-img"/>
          {props.currentUser.userName}
        </div>
        <div className="toolBar">
          <div className={`${props.showSearch? 'selected': ''} tool-item`} onClick={()=> props.toolShow('search')}>
            <Image src="/images/ic_search.png" alt="search" width="40" height="40" />
          </div>
          <div className="search">
            <div className={`${props.showNote? 'selected': ''} tool-item`} onClick={()=> props.toolShow('note')}>
              <Image src="/images/ic_note.png" alt="note" width="40" height="40" />
            </div>
            {props.showNote && <Note noteList={props.noteList} addNoteMessage={props.addNoteMessage} removeNoteMessage={props.removeNoteMessage} />}
          </div>
        </div>
      </div>
      {props.showSearch && <Search searchValue={searchValue} matchCount={matchCount} changeSearchValue={changeSearchValue} />}
      <div className="chat-content">
        {[...props.currentUser.messageList].reverse().map(item => {
          return (
            <div className={item.fromId === props.account.userId ? 'self-message':'other-message'} key={`message-${item.id}`}>
              <Highlighter
                searchWords={searchValue !== '' ? [searchValue] : []}
                autoEscape={true}
                textToHighlight={item.message}
              />
            </div>
          )
        })}
      </div>
      <div className="chat-footer">
        <div className="input-box">輸入訊息...</div>
        <Image src="/images/ic_sent.png" alt="search" width="40" height="40" />
      </div>
      <style jsx style={scss}>{`
      .chat {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .chat-head {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        box-shadow: 1px 1px 4px#bdbdbd;
      }
      .user-info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 1;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 4px;
      }
      .user-img {
        border-radius: 50%;
        border: 1px solid #AFEDDF;
        width: 50px;
        height: 50px;
        display: block;
        margin-right: 12px;
      }
      .toolBar {
        display: flex;
      }
      .tool-item {
        border: 1px solid transparent;
        padding: 2px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .selected {
        border-color: #DFDFDF;
        background: #f4f4f4;
      }
      .search {
        position: relative;
      }
      .chat-content {
        flex: 1;
        padding: 0 12px;
        overflow: auto;
        display: flex;
        flex-direction: column-reverse;
        overflow: auto;
      }
      .chat-footer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        border-top: 1px solid #AFEDDF;
        cursor: pointer;
        user-select: none;
      }
      .input-box {
        flex: 1;
        color: #bdbdbd;
      }
      .self-message {
        padding: 8px 20px;
        width: fit-content;
        background: #4A90E2;
        border-radius: 20px;
        color: #FFF;
        margin: 4px 0 4px auto;
      }
      .other-message {
        padding: 8px 20px;
        width: fit-content;
        margin: 4px auto 4px 0;
        background: #DFDFDF;
        border-radius: 20px;
        color: #000;
      }
      `}</style>
    </div>
  )
}

export default Chat