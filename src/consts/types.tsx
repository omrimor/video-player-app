export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  snippet: any;
  contentDetails: any;
}

export interface StoreState {
  videos: {};
  shared: {
    networkReqests: {
      requests: {
        global: 0
      },
      errors: {}
    }
  };
}
