import React from 'react';
import showDate from './showDate';

export default function NewsCard({
    item: {
        id,
        title,
        img,
        body,
        isTrending,
        category,
        read,
        createdUser: { firstName, lastName, organization, userImg },
        date,
        isSaved,
      },
      list,
      user,
      saveBookmark,
    }) {
      const newsTitle = {
        fontFamily: "Helvetica Neue",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: list ? "21px" : "16px",
        lineHeight: list ? "28px" : "20px",
        marginTop: "8px",
      };
    
      return (
        <div className="d-flex" style={{ paddingTop: "14px" }}>
          <div>
            <div className="d-flex align-items-center">
              <img src={userImg} alt="use" className="pr-2" />
              <h1 className="author-name">{firstName + " " + lastName + " "}</h1>
              {organization && (
                <>
                  <span className="inWord"> in </span>
                  <h1 className="author-name">{" " + organization}</h1>
                </>
              )}
            </div>
            <a href={`/newsdetails/${id}`}>
              <h1 style={newsTitle}>{title}</h1>
            </a>
            {list && <p className="news-body">{body}</p>}
            <div className=" desc d-flex align-items-center justify-content-flex-start">
              <span>{showDate(new Date(date))}</span>
              <span className="point"></span>
              <span>{read}</span>
              {list && (
                <>
                  <span className="point"></span>
                  <div className="rounded-pill bg-light">
                    <span className="desc m-3">{category}</span>
                  </div>
                </>
              )}
              {user && (
                <>
                  <span className="point"></span>
                  <span onClick={() => saveBookmark(id)}>
                    <i
                      class={
                        isSaved ? "bi bi-bookmark-heart-fill" : "bi bi-bookmark"
                      }
                    ></i>
                  </span>
                </>
              )}
            </div>
          </div>
          {list && (
            <div>
              <img
                src={require("../images/1_LfGu1ASFMYN4S7Fsf8URrQ.png")}
                alt="jh"
              />
            </div>
          )}
        </div>
      );
    }
    