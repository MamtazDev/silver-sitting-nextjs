import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Message = ({ styles, profile, sms, members }) => {
  const { user } = useSelector((state) => state.register);
  const [userInfo, setUserInfo] = useState();

  //   console.log(members, "mmmebe");

  //   const getTheUserInfo = async (values, content) => {
  //     let userInfo = "hh";
  //     const userId = values.find((i) => user?._id === i);

  //     fetch(`http://localhost:8000/api/users/${userId}`).then((res) =>
  //       res.json().then((datas) => {
  //         if (content === "image") {
  //           userInfo = datas?.image;
  //         } else if (content === "name") {
  //           userInfo = datas?.firstName + " " + datas?.lastName;
  //         }
  //       })
  //     );

  //     return userInfo;
  //   };

  useEffect(() => {
    const userId = members?.find((i) => user?._id !== i);

    fetch(`http://localhost:8000/api/users/${userId}`).then((res) =>
      res.json().then((datas) => {
        if (datas) {
          setUserInfo(datas);
        }
      })
    );
  }, [user, members]);

  return (
    <div className={styles.pobox}>
      <div className="d-flex gap-3 align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-4 rounded-circle">
          <img
            src={userInfo?.image}
            alt=""
            width={124}
            height={124}
            className="rounded-circle"
          />

          <div>
            <h6>Conversation with</h6>
            {userInfo && (
              <p>{userInfo?.firstName + " " + userInfo?.lastName}</p>
            )}
          </div>
        </div>
        <div>
          <button type="button" class="border-0 position-relative">
            <Link href={`/child-care/message/${userInfo?._id}`}>
              <img src={sms.src} alt="" />
            </Link>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0<span class="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
