namespace emailsInputTypes {
  export interface IEmailsInput {
    initialEmails: string[];
  }
  export interface IEmail {
    email: string,
    isValid: boolean
  }
  export type EmailsType = IEmail[]
  export type EmailsUnhandledType = string | string[];
  export type OnEnterType = (email: EmailsUnhandledType) => void
  export type Callback = (email: EmailsUnhandledType) => any
}