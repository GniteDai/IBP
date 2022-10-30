import React, { useState } from "react";
import List from "../components/list";
import Header from '../components/header'
import Chat from '../components/chat'
import Image from 'next/image'
import dayjs from 'dayjs'

const CherriChat = () => {
    const userList = [
        { userId: 1, userName: '保羅', userDesc: '大家好，我是保羅～', messageList: [
            {id: 0, message: '保羅', fromId: 4},
            {id: 1, message: '你好, 我是潔西卡', fromId: 4},
            {id: 2, message: '我喜歡吃的食物有', fromId: 4},
            {id: 3, message: '各種巧克力口味的甜點', fromId: 4},
            {id: 4, message: 'hi 潔西卡', fromId: 1}
        ]},
        { userId: 2, userName: '傑克', userDesc: '大家好，我是傑克～', messageList: [
            {id: 0, message: '傑克', fromId: 4},
            {id: 1, message: '你好, 我是潔西卡', fromId: 4},
            {id: 2, message: '我喜歡做的運動為', fromId: 4},
            {id: 3, message: '游泳,跑步', fromId: 4}
        ]},
        { userId: 3, userName: '傑森', userDesc: '大家好，我是傑森～', messageList: [
            {id: 0, message: '傑森', fromId: 4},
            {id: 1, message: '你好, 我是潔西卡', fromId: 4},
            {id: 2, message: '我喜歡的動物為', fromId: 4},
            {id: 3, message: '貓,狗', fromId: 4}
        ]}
    ]
    const [currentUser, setCurrentUser] = useState(null)
    const [showSearch, setShowSearch] = useState(false)
    const [showNote, setShowNote] = useState(false)
    const [account, setAccount] = useState({ userId: 4, userName: '潔西卡' })
    const [currentLanguage, setLanguage] = useState('zh')
    const languageList = [ { code: 'zh', name: '中文' }, { code: 'en', name: 'English' }]
    const [noteList, setNoteList] = useState([
        {id: 1, createTime: 1667117648, message: '備忘訊息1'},
        {id: 2, createTime: 1666944848, message: '備忘訊息2'}
    ])
    const changeCurrrentUser = (item) => {
        if(currentUser && currentUser.userId === item.userId) {
            return setCurrentUser(null)
        }
        setCurrentUser(item)
    }
    const toolShow = (toolName) => {
        setShowSearch(toolName === 'search' ? !showSearch : false)
        setShowNote(toolName === 'note' ? !showNote : false)
    }
    const changeLanguage = (item) => {
        setLanguage(item.code)
    }
    const addNoteMessage = (item => {
        const newId = 0
        noteList.forEach(item => newId = Math.max(newId, item.id))
        const newItem = {
            id: newId + 1, 
            createTime: dayjs().unix(),
            message: item
        }
        setNoteList(prev => [...prev, newItem])
    })
    const removeNoteMessage = (idx => {
        const res = [...noteList]
        res.splice(idx, 1)
        setNoteList(res)
    })

    return (
        <div className="cherri-chat-content">
            <List list={userList} currentUser={currentUser} changeUser={changeCurrrentUser} />
            <div className='right-side'>
                <Header languageList={languageList} currentLanguage={currentLanguage} account={account} changeLanguage={changeLanguage} />
                { currentUser === null && 
                    <div className='cover'>
                        <Image src="/images/img_default.png" alt="cover" width="240" height="200" />
                        <div className='cover-title'>開始使用 Cherri Chat !</div>
                    </div>
                }
                { currentUser !== null && 
                <Chat 
                    currentUser={currentUser} 
                    account={account} 
                    showSearch={showSearch} 
                    showNote={showNote} 
                    toolShow={toolShow} 
                    noteList={noteList} 
                    addNoteMessage={addNoteMessage} 
                    removeNoteMessage={removeNoteMessage}
                /> }
            </div>
            <style jsx style={scss}>{`
                .cherri-chat-content {
                    display: flex;
                    width: 100%;
                    height: 100%;
                }
                .right-side {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .cover {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    user-select: none;
                }
                .cover-title {
                    font-size: 32px;
                    font-weight: bold;
                    color: #4A90E2;
                    margin-top: 20px;
                }
            `}
            </style>
        </div>
    )
}
export default CherriChat;