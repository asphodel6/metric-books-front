export interface ISettlements {
  np_code: number;
  np_name: string;
  church: IChurch[];
}

export interface IChurch {
  c_code: number,
  c_name: string
}
