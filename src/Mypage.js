import React from "react";
import { Grid } from "@material-ui/core";
import CardTable from "./CartTable";
import styles from "./mypage.css";

const Mypage = () => {
  return (
    <Grid container className="box">
      <Grid item xs={2}></Grid>

      <Grid item className="main" xs={8}>
        <Grid container>
          <Grid item className="" xs={2}>
            <ul className="list">
              <li>주문조회</li>
              <li>위시리스트</li>
              <li>취소/교환/반품</li>
              <li>쿠폰</li>
              <li>포인트</li>
              <li>1:1 문의</li>
              <li>정보 수정</li>
              <li>회원탈퇴</li>
            </ul>
          </Grid>
          <Grid item className="content" xs={10}>
            <Grid container>
              <Grid item xs={5} className="profile">
                <Grid container>
                  <Grid item xs={3}>
                    사진
                  </Grid>
                  <Grid item xs={9}>
                    <p className="member">김성수님 안녕하세요. </p>
                    <p className="fontsmall">누적 구매 금액: 0원</p>
                  </Grid>
                </Grid>
              </Grid>
              <div className="line"></div>
              <Grid item xs={3}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <p className="fontsmall">포인트</p>
                    <p className="bold">2,000</p>
                  </Grid>
                </Grid>
              </Grid>
              <div className="line"></div>
              <Grid item xs={3}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <p className="fontsmall">쿠폰</p>
                    <p className="bold">0</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className="boxcardtable">
              <Grid item>
                <CardTable />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Mypage;
