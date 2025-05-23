"use client";
import { PasswordInput } from "@/components/ui/password-input";
import { Provider } from "@/components/ui/provider";
import { useAuth } from "@/contexts/AuthContext";
import { loginSchema } from "@/schemas/auth.schema";
import { LoginUserData } from "@/types/auth";
import {
  Button,
  Center,
  Field,
  Fieldset,
  Highlight,
  Input,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Login() {
  const { loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = (data: LoginUserData) => {
    loginUser(data);
  };

  return (
    <Provider>
      <Center h="100vh" as="form" onSubmit={handleSubmit(submitForm)}>
        <Fieldset.Root
          size="lg"
          maxW="md"
          border="1px solid #fff"
          p="1rem"
          borderRadius="xl"
        >
          <Stack>
            <Fieldset.Legend fontSize="2rem">
              Bem vindo de volta!
            </Fieldset.Legend>
            <Fieldset.HelperText>
              Seja bem vindo a dev shop!
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Email:</Field.Label>
              <Input {...register("email")} />
              <Text color="red.500" fontSize="14px">
                {errors.email?.message}
              </Text>
            </Field.Root>

            <Field.Root>
              <Field.Label>Senha:</Field.Label>
              <PasswordInput {...register("password")} />
              <Text color="red.500" fontSize="14px">
                {errors.password?.message}
              </Text>
            </Field.Root>
          </Fieldset.Content>

          <Separator />

          <Button type="submit" alignSelf="flex-start" w="100%">
            Submit
          </Button>

          <Separator />

          <Text>
            Não tem uma conta?{" "}
            <Link href="/register">
              <Highlight query="Cadastre-se" styles={{ color: "#00b3b9" }}>
                Cadastre-se
              </Highlight>
            </Link>
          </Text>
        </Fieldset.Root>
      </Center>
    </Provider>
  );
}
