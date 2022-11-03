/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Stack, Text, Title, Input, Button, createStyles } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { ConfirmationResult, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import InputMask from "react-input-mask";
import toast from "react-hot-toast";
import { auth } from "@/lib/firebase";
import { convertPhoneNumber, sliceFirstStr } from "@/lib/util/string-util";
import { AuthModal } from "../AuthModal";

export const Auth: FC = () => {
  const id = useId();
  const { classes } = useStyles();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const recaptchaVerifierId = "sign-in-button";
  const mask = "99999999999";

  const submitPhoneNumber = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const recaptchaVerifier = new RecaptchaVerifier(recaptchaVerifierId, { size: "invisible" }, auth);
      const slicePhoneNumber = sliceFirstStr(phoneNumber);
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        convertPhoneNumber(slicePhoneNumber),
        recaptchaVerifier
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).confirmationResult = confirmationResult; // NOTE: window.confirmationResultだと型エラーになるので、一旦windowをanyにしている
      setConfirmationResult(confirmationResult);
      setIsOpen(true);
    } catch (err) {
      toast.error("不正な電話番号です");
      console.error(err);
    } finally {
      setPhoneNumber("");
    }
  };

  const isDisabled = phoneNumber === "" || phoneNumber.includes("_");

  return (
    <>
      <form onSubmit={submitPhoneNumber} className={classes.container}>
        <Stack justify="center">
          <Title align="center" order={2}>
            ユーザー情報登録
          </Title>
          <Text size="sm">
            万が一何かあった時にお客様にご連絡ができるように、お客様のお電話番号のご登録をお願いいたします。
          </Text>
          <Input.Wrapper id={id} label="電話番号をスペースなしで入力してください" required>
            <Input
              id={id}
              type="tel"
              inputMode="numeric"
              pattern="[\d\]*"
              value={phoneNumber}
              placeholder="01023456789"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
            />
          </Input.Wrapper>
          <Button type="submit" color="orange" id={recaptchaVerifierId} disabled={isDisabled}>
            登録
          </Button>
        </Stack>
      </form>
      <AuthModal opened={isOpen} setOpened={setIsOpen} confirmationResult={confirmationResult!} />
    </>
  );
};

const useStyles = createStyles(() => ({
  container: {
    margin: "20px",
  },
}));
