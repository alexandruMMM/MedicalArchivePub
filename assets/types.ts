// types.ts
export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: { user: User } | undefined;
  SyncScreen: { user: User } | undefined;
  SettingsScreen: { user: User } | undefined;
};

export interface User {
  name: string;
  email: string;
}

export type TopTabParamList = {
  HomeScreen: undefined;
  Sincronizare: undefined;
  Setari: undefined;
};