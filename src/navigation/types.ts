import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

//type checks for Stack Root
export type RootNavigatorList = {
  AuthStack: undefined;
  BottomMenu: undefined;
  HomeMenu: undefined;
  HomeStack: any;
  StartUpScreen: undefined;
  SplashScreen: undefined;
  JobsStack: undefined;
  TruckingStack: undefined;
  ProfileStack: undefined;
  DomesticStack: undefined;
  ExportStack: undefined;
};

export type HomeStackNavigatorParamList = {
  Home: undefined;
  NotifScreen: undefined;
  Details: {
    name: string;
    age: string;
  };
};
export type BottomTabNavigatorParamList = {
  Dashboard: HomeStackNavigatorParamList;
  Jobs: undefined;
  Profile: undefined;
  ExportNavigation: undefined;
  DomesticNavigation: undefined;
};

export type JobsNavigatorParamList = {
  ListJobs: {
    title: string;
  };
  DetailJobs: {
    title: string;
  };
  cameraJobs: {
    title: string;
  };
  InputJobs: {
    title: string;
  };
  cariJobs: {
    title: string;
  };
};
export type TruckingNavigatorParamList = {
  ListJobs: {
    title: string;
  };
  DetailJobs: {
    title: string;
  };
  CaptureKilometer: {
    title: string;
  };
  InputTracking: {
    title: string;
  };
  StartLoading: {
    title: string;
  };
  DoneLoading: {
    title: string;
  };
};

export type ProfileNavigatorParamList = {
  Profile: {
    title: string;
  };
  ChangePassword: {
    title: string;
  };
};
export type ExportNavigatorParamList = {
  ExportScreen: {
    title: string;
  };
  CargoDeliveryOrder: {
    title: string;
  };
  DeliveryOrderPreparation: {
    title: string;
  };
  ProofOfDelivery: {
    title: string;
  };
  History: {
    title: string;
  };
  Tracking: {
    title: string;
  };
};
export type DomesticNavigatorParamList = {
  DomesticScreen: {
    title: string;
  };
  CargoDeliveryOrder: {
    title: string;
  };
  DeliveryOrderPreparation: {
    title: string;
  };
  ProofOfDelivery: {
    title: string;
  };
  History: {
    title: string;
  };
  Tracking: {
    title: string;
  };
  DomesticDetail: {
    title: string;
  };
};

export type AuthNavigatorParamList = {
  LoginUser: undefined;
  RegisterUser: undefined;
  ForgotPassword: {
    title: string;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Details'
>;
