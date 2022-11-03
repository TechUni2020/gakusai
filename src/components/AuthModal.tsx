import { Button, Input, Modal } from "@mantine/core";
import { FC, useId, useState } from "react";
import { ConfirmationResult } from "firebase/auth";
import InputMask from "react-input-mask";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { userRepository } from "@/modules/user/user.repository";
import { authService } from "@/modules/auth/auth.service";
import { pagesPath } from "@/lib/$path";

type Props = {
  opened: boolean;
  setOpened: (open: boolean) => void;
  confirmationResult: ConfirmationResult;
};

export const AuthModal: FC<Props> = ({ opened, setOpened, confirmationResult }) => {
  const id = useId();
  const [number, setNumber] = useState<string>("");
  const mask = "999999";
  const router = useRouter();

  const login = async () => {
    try {
      const res = await confirmationResult.confirm(number);
      const user = res.user;
      await userRepository.init(user.uid);
      authService.login(user.uid);
      router.push(pagesPath.$url());
    } catch (err) {
      toast.error("不正な確認コードです");
      console.error(err);
      router.reload();
    } finally {
      setOpened(false);
    }
  };

  const isDisabled = number === "" || number.includes("_");

  return (
    <Modal opened={opened} onClose={() => null} withCloseButton={false}>
      <Input.Wrapper id={id} label="確認コードを入力" required>
        <Input
          component={InputMask}
          mask={mask}
          value={number}
          type="text"
          inputMode="numeric"
          placeholder="123456"
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </Input.Wrapper>
      {/* TODO: 現状だとボタンが二度押しできてしまうので、AsyncButtonを作る */}
      <Button onClick={login} disabled={isDisabled}>
        送信する
      </Button>
    </Modal>
  );
};
