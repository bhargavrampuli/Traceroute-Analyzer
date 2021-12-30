export type GList = {
    hop_num: number,
    hostname: string,
    ip_address: string,
    latitude: number,
    longitude: number;
    rtt: number;
    unique_id : number;
  };

  export type IUList = {
    hop_num: number,
    hostname: string,
    ip_address: string,
    latitude: number,
    longitude: number;
    rtt: number;
    unique_id : number;
  };
  
  export type iData = {
    array_google : GList[];
    array_iu : IUList[];
    time : number;
};
  
  export type ResponseData = {
    1: iData;
    2: iData;
    3: iData;
    4: iData;
    5: iData;
  };