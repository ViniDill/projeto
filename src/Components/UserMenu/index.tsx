import React, { useCallback } from "react";
import { UserMenuContainer } from "./styles";
import MenuButton from "../MenuButton";
import useAuthStore from "../../Store/authStore";
import { useNavigate } from "react-router-dom";
import Spacer from "../Spacer";

interface userMenuProps {
  modalControl: () => void;
}

const UserMenu: React.FC<userMenuProps> = ({ modalControl }) => {
  const logOut = useAuthStore((e) => e.logOut);
  const navigation = useNavigate();

  const navigate = useCallback((route: String) => {
    navigation(`${route}`);
    modalControl();
  }, []);

  return (
    <UserMenuContainer>
      <MenuButton
        iconName="password-lock-black"
        label="Alterar senha"
        selected={true}
        onClick={() => {
          navigate("/change-password");
        }}
      />
      <Spacer size="m" />
      <MenuButton
        variant="logout"
        iconName="logout"
        label="LogOut"
        selected={true}
        onClick={() => {
          logOut();
          window.location.reload();
        }}
      />
    </UserMenuContainer>
  );
};

export default UserMenu;
