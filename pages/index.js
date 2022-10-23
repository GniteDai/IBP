import Head from 'next/head'
import React from "react";
import ReactDOM from "react-dom";
import List from "./list";
import Header from './header'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container">
      <List />
      <div className='right-side'>
        <Header />
        <div className='cover'>
          <Image src="/images/img_default.png" alt="cover" width="240" height="200" />
          <div className='cover-title'>開始使用 Cherri Chat !</div>
        </div>
      </div>
      {/* #4a90e2 */}
      <style jsx style={scss}>{`
        .container {
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
        `}</style>
      <style jsx global>{`
        html,
        body {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        #__next {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}
