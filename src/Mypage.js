import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./mypage.css";

const Mypage = () => {
  return (
    <Grid container className="container">
      <Grid item className="blank" xs={2}>
        sgdgdgg
      </Grid>

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
              <Grid item xs={6} className="profile">
                <Grid container>
                  <Grid item xs={3} justifyContent="center" alignItems="center">
                    사진
                  </Grid>
                  <Grid item xs={9}>
                    <p justifyContent="center">김성수님 안녕하세요. </p>
                    <p>누적 구매 금액: 0원</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <p justifyContent="center">포인트</p>
                <p justifyContent="center">2,000</p>
              </Grid>
              <Grid item xs={3}>
                <p justifyContent="center">쿠폰</p>
                <p justifyContent="center">0</p>
              </Grid>
            </Grid>
            <Grid justifyContent="center">주문내역이 없습니다.</Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="blank" xs={2}>
        514 63
      </Grid>
    </Grid>
  );
};

export default Mypage;
