export interface userDetailsProps {
  token: string;
  user: {
    name: string;
    email: string;
    email_verified_at: string;
  };
}

export interface ChangePassProps {
  current_password: string;
  new_password: string;
  confirmation_password: string;
}
export interface LogInServiceProps {
  logIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<userDetailsProps>;
  changePassLogged(values: ChangePassProps): Promise<void>;
}
