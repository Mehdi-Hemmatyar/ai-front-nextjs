import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import z from "zod";

const credentialSchema = z.object({
  username: z.string().min(4, "نام کاربری باید حداقل 4 کاراکتر باشد"),
  password: z
    .string()
    .min(6, "رمز عبور حداقل 6 کاراکتر")
    .max(25, "رمز عبور حداقل 25 کاراکتر"),
});

const isCredentialsValid = (credentials: unknown) => {
  const parsed = credentialSchema.safeParse(credentials);
  if (!parsed.success) return new CredentialsSignin(parsed.error.message);

  return {};
  // return {}
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "نام کاربری" },
        password: { label: "رمز عبور", type: "password" },
      },
      async authorize(credentials) {
        return isCredentialsValid(credentials);
      },
    }),
  ],
});
