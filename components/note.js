import React, { useState } from "react";
import Image from 'next/image'
import dayjs from 'dayjs'
const Note = (props) => {
    const [newNoteMessage, setNewNoteMessage] = useState('')
    const inputChange = (value) => {
        setNewNoteMessage(value)
    }
    const addBefore = () => {
        if(newNoteMessage === '') {
            alert('訊息為空')
            return
        }
        props.addNoteMessage(newNoteMessage)
        setNewNoteMessage('')
    }
    return (
    <div className="note-modal">
        <div className="modal-content">
            <div className="note-modal-header">
                <textarea className="input-box" value={newNoteMessage} type="text" rows="4" cols="30" placeholder="輸入訊息..." onChange={(e) => inputChange(e.target.value)} />
                <div className="add-note" onClick={()=> addBefore()}>新增</div>
            </div>
            <div className="note-message-area">
                {props.noteList.map((item, idx) => { return (
                    <div key={`note-id-${item.id}`} className="note-message">
                        <div className="note-message-header">
                            <div>{dayjs.unix(item.createTime).format('YYYY/MM/DD HH:mm')}</div>
                            <div className="delete-icon" onClick={()=> props.removeNoteMessage(idx)}>
                                <Image src="/images/ic_close2.png" alt="delete" width="12" height="12" />
                            </div>
                        </div>
                        <div>{item.message}</div>
                    </div>
                )})}
            </div>
        </div>
        <style jsx style={scss}>{`
        .note-modal {
            position: absolute;
            right: 0;
            top: 100%;
            transform: translate(0, 20px);
            z-index: 2;
        }
        .modal-content {
            position: relative;
            filter: drop-shadow(0 0 5px #ccc);
            box-shadow: 1px 1px 4px#bdbdbd;
            padding: 20px 0;
            background-color: #FFF;
            border-radius: 8px;
        } 
        .modal-content:after {
            content: "";
            position: absolute;
            right: 20px;
            bottom: 100%;
            width: 20px;
            height: 20px;
            background-color: #fff;
            transform: translate(0, 50%) rotate(45deg);
        }
        .note-modal-header {
            padding-bottom: 12px;
            border-bottom: 1px solid #afeddf;
            margin: 0 20px;
        }
        .input-box {
            resize: none;
            padding: 8px;
        }
        .add-note {
            text-align: center;
            background: #4a90e2;
            color: #FFF;
            margin-top: 4px;
            padding: 4px 0;
        }
        .note-message-area {
            max-height: 230px;
            overflow: auto;
        }
        .note-message {
            background: #FFF;
            padding: 8px;
            border: 1px solid#afeddf;
            margin: 10px 20px;
            min-height: 100px;
            font-size: 14px;
        }
        .note-message-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #4a90e2;
            margin-bottom: 4px;
        }
        `}</style>
    </div>
    )
}
export default Note
