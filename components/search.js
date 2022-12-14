import React from "react";
import Image from 'next/image'
import { useTranslation } from 'next-i18next';
const Note = (props) => {
    const { t } = useTranslation()
    return (
    <div className="search-bar">
        <input className="input-box" value={props.searchValue} type="text" placeholder={t('InputPlaceholder')} onChange={(e) => props.changeSearchValue(e.target.value)} />
        {props.searchValue !== '' && <div className="match-info">{props.matchCount}{t('MatchMessageCount')}</div>}
        {props.searchValue !== '' &&
            <div className="clear-search-icon" onClick={()=>props.changeSearchValue('')}>
                <Image src="/images/ic_close1.png" alt="search" width="28" height="28" />
            </div>
        }
        
        <style jsx style={scss}>{`
        .search-bar {
            width: 100%;
            height: 50px;
            padding: 0 20px;
            border-bottom: 1px solid #afeddf;
            display: flex;
            align-items: center;
        }
        .input-box {
            padding: 4px;
            border: 0px;
            flex: 1;
        }
        .input-box:focus {
            outline: none;
        }
        .match-info {
            margin-right: 8px;
            color: #dfdfdf;
            user-select: none;
        }
        .clear-search-icon {
            cursor: pointer;
            user-select: none;
        }
        `}</style>
    </div>
    )
}
export default Note
