import { prismaClient } from '../src/application/database'
import { Contact } from '@prisma/client'

export class ContactTest {
  static async deleteAll() {
    await prismaClient.contact.deleteMany({
      where: {
        username: "usertest"
      }
    })
  }

  static async create() {
    await prismaClient.contact.create({
      data: {
        first_name: "test",
        last_name: "test",
        email: "test@example.com",
        phone: "123456789",
        username: "usertest"
      }
    })
  }

  static async get() : Promise<Contact> {
    const contact = await prismaClient.contact.findFirst({
      where: {
        username: "usertest"
      }
    })

    if (!contact) {
      throw new Error("Contact is not found")
    }

    return contact
  }
}