export interface ISettlements {
  name: string,
  churches: string[]
}

export interface ICounties {
  name: string
  settlements?: ISettlements[]
}
