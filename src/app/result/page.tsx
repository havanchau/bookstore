"use client";
import axios from "axios";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";

const Result = () => {
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSendEmail = async () => {
    if (typeof window != undefined) {
      const email = localStorage.getItem("email");
      const name = localStorage.getItem("username");
      const subject = "BookStore - Bí mật của may mắn";
      const html = `<html lang="vi">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Cảm ơn bạn đã mua sách</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  padding: 20px;
                  border: 1px solid #ddd;
                  border-radius: 5px;
                  background-color: #fff;
                  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
              }
              h1 {
                  color: #333;
              }
              p {
                  margin-bottom: 15px;
                  line-height: 1.6;
              }
              .signature {
                  margin-top: 20px;
                  text-align: right;
                  font-style: italic;
                  color: #777;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <p>Thân gửi ${name},</p>
              <p>Chúng tôi xin gửi lời cảm ơn chân thành nhất đến quý khách hàng đã mua sách "Bí mật của may mắn" của chúng tôi. Dưới đây là link để bạn có thể tải sách: https://drive.google.com/file/d/1DaoW9CH7ri29mHZ5Qtxl6uMo-wH3X4ol/view</p>
              <p>Chúng tôi hy vọng rằng cuốn sách này sẽ mang lại cho quý khách hàng những phút giây thư giãn và cũng như những kỹ năng sống bổ ích từ những bài học trong sách.</p>
              <p>Nếu quý khách có bất kỳ câu hỏi hoặc cần hỗ trợ gì thêm, xin đừng ngần ngại liên hệ với chúng tôi qua email hoặc số điện thoại dưới đây.</p>
              <div class="signature">
                  <p>Trân trọng,</p>
                  <p>Hà Văn Châu</p>
                  <p>Email: chau.hachau0125@hcmut.edu.vn</p>
                  <p>Số điện thoại: 0373396371</p>
              </div>
          </div>
      </body>
      </html>
      `;

      if (email && subject && html && localStorage) {
        axios
          .post(
            `/api/sendmails`,
            {
              email: email.toString(),
              subject: subject,
              html: html.toString(),
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            localStorage.removeItem("email");
            localStorage.removeItem("username");
          })
          .catch((error) => console.log(error));
      } else {
        console.error("Email, subject, or html is invalid.");
      }
    } else {
      console.error("localStorage is not available in this environment.");
    }
  };

  useEffect(() => {
    const orderCodeString = localStorage.getItem("orderCode");
    let id;
    if (orderCodeString && orderCodeString.trim() !== "") {
      id = parseInt(orderCodeString);
      axios
        .get(`/api/payments/${id}`)
        .then((response) => {
          setPaymentStatus(response.data.paymentInfo.status);
        })
        .catch((error) => console.log(error));
    } else {
      console.error("Invalid or missing order code in localStorage");
    }
  });

  useEffect(() => {
    if (paymentStatus == "PAID") {
      handleSendEmail();
    }
  }, [paymentStatus]);

  return (
    <div className="flex items-center justify-center">
      {paymentStatus ? (
        <div className="flex items-center justify-center">
          {paymentStatus == "PAID" ? (
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="flex items-center justify-center">
                <Typography variant="h4" color="text.secondary">
                  <SentimentSatisfiedAltIcon
                    fontSize="large"
                    sx={{ marginRight: 4 }}
                  />
                  Thanh toán thành công, vui lòng kiểm tra email để nhận sách.
                </Typography>
              </div>
            </Box>
          ) : (
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="flex items-center justify-center">
                <SentimentVeryDissatisfiedIcon
                  fontSize="large"
                  sx={{ marginRight: 4 }}
                />
                <Typography variant="h4" color="text.secondary">
                  Có lỗi xảy ra, vui lòng kiểm tra lại.
                </Typography>
              </div>
            </Box>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Result;
