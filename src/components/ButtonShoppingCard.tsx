import * as React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import axios from "axios";

import { BASE_API_URL, DOMAIN } from "@/ultils/contranst";

import Notification, {
  warningNotification,
  errorNotification,
} from "./Notifications";

interface Information {
  name: string;
  email: string;
}

const ButtonShoppingCard: React.FC<Information> = ({ name, email }) => {
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUltilForPayment = () => {
    if (name.length == 0) {
      warningNotification("Vui lòng điền tên của bạn");
      return;
    }

    if (email.length == 0) {
      warningNotification("Vui lòng điền email của bạn");
      return;
    }

    if (!isValidEmail(email)) {
      errorNotification("Email không hợp lệ");
      return;
    }

    
    axios
    .post(`${DOMAIN}/api/payments`)
    .then((response) => {
        localStorage.setItem("username", name);
        localStorage.setItem("email", email);
        localStorage.setItem("orderCode", response.data.orderCode);
        router.push(response.data.link)
      })
      .catch((error) => console.log(error));
  };

  return (
    <Stack direction="row" sx={{ marginTop: 4 }}>
      <Button
        variant="contained"
        sx={{ width: "100%", height: 48 }}
        endIcon={<ShoppingCartIcon />}
        onClick={() => handleUltilForPayment()}
      >
        Buy
      </Button>
      <Notification />
    </Stack>
  );
};

export default ButtonShoppingCard;
