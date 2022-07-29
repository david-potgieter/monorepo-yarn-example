import { object, string, number, date } from 'yup'

let userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
})

export async function validateUserResponse(data) {
  return await userSchema.validate(data)
}
