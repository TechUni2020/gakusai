import { COLLECTION_PATH } from "@/constants/path";
import { TOKEN_LABEL } from "@/constants/token_label";
import { db } from "@/lib/firebase";
import { Button, Input, Modal, Stack, Text, Title } from "@mantine/core";
import { addDoc, collection } from "firebase/firestore";
import { FC, FormEvent, SetStateAction, useEffect, useState } from "react";

export const AuthModal: FC = () => {
  const [opened, setOpened] = useState(false);
  const [name, setName] = useState("");
  const { USER_PATH } = COLLECTION_PATH;
  const { USER_ID } = TOKEN_LABEL;
  useEffect(() => {
    if (localStorage.getItem(USER_ID) == null) setOpened(true);
  }, []);

  const createUser = async (values: FormEvent<HTMLFormElement>) => {
    values.preventDefault();
    const newUser = await addDoc(collection(db, USER_PATH), {
      name: name,
      orderList: "",
      sumOfPay: 0,
      uuid: "",
    });
    localStorage.setItem(USER_ID, newUser.id);
    setName("");
    setOpened(false);
  };

  return (
    <Modal opened={opened} onClose={() => null} withCloseButton={false}>
      <form onSubmit={(values) => createUser(values)}>
        <Stack justify="center">
          <Title align="center" order={2}>
            ユーザー情報登録
          </Title>
          <Text size="sm">お名前の入力をローマ字でお願いします。</Text>
          <Input
            value={name}
            variant="default"
            placeholder="例: Yamada"
            onChange={(e: { target: { value: SetStateAction<string> } }) => setName(e.target.value)}
          />
          <Button type="submit" color="orange">
            登録
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};
