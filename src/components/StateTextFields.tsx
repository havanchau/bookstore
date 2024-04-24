"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonShoppingCard from "@/components/ButtonShoppingCard";

export default function StateTextFields() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <Box
      component="form"
      sx={{ width: 320 }}

      noValidate
      autoComplete="off"
    >
      <TextField
        id="username"
        label="Nhập tên của bạn"
        value={name}
        sx={{ width: '100%', marginTop: 2 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="email"
        label="Nhập email của bạn"
        value={email}
        sx={{ width: '100%', marginTop: 2 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
        }}
      />
      <ButtonShoppingCard name={name} email={email}/>
    </Box>
  );
}
