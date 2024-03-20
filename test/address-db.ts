import { prismaClient } from '../src/application/database'
import { ContactTest } from './contact-db'
import { Address } from '@prisma/client'

export class AddressTest {
  static async deleteAll() {
    await prismaClient.address.deleteMany({
      where: {
        contact: {
          username: "usertest"
        }
      }
    })
  }

  static async create() {
    const contact = await ContactTest.get()
    await prismaClient.address.create({
      data: {
        contact_id: contact.id,
        street: "Jalan address",
        city: "city address",
        country: "idn",
        postal_code: "123",
        province: "aceh"
      }
    })
  }

  static async get() : Promise<Address> {
    const address = await prismaClient.address.findFirst({
      where: {
        contact: {
          username: "usertest"
        }
      }
    })

    if (!address) {
      throw new Error("Address not found")
    }

    return address
  }
}