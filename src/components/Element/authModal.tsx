import { COLLECTION_PATH } from "@/constants/path";
import { useGetUID } from "@/hooks/useGetUID";
import { db } from "@/lib/firebase";
import { Button, Input, Modal, Stack, Text, Title } from "@mantine/core";
import { addDoc, collection } from "firebase/firestore";
import { FormEvent, SetStateAction, useState } from "react";

export const AuthModal = () => {
  const uid = useGetUID();
  const [opened, setOpened] = useState(uid ? false : true);
  const [name, setName] = useState("");
  const { USER_PATH } = COLLECTION_PATH;

  const createUser = async (values: FormEvent<HTMLFormElement>) => {
    values.preventDefault();
    const newUser = await addDoc(collection(db, USER_PATH), {
      name: name,
      orderList: "",
      uuid: "",
    });
    localStorage.setItem("uid", newUser.id);
    setName("");
    setOpened(false);
  };

  return (
    <Modal opened={opened} onClose={() => uid && setOpened(false)} withCloseButton={false}>
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
