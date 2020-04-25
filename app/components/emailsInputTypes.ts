namespace emailsInputTypes {
  export interface IEmail {
    email: string,
    isValid: boolean
  }
  export type EmailsType = IEmail[]
  export type onRemoveEmailType = (index: number) => void
  export type onEnterType = (email: string | string[]) => void
}