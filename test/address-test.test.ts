import { UserTest } from './test-util'
import { ContactTest } from './contact-db'
import { AddressTest } from './address-db'
import supertest from 'supertest'
import { web } from '../src/application/web'
import { logger } from '../src/application/logging'
import { add } from 'winston'

describe('POST /api/contacts/contacId/addresses', () => {
  beforeEach(async () => {
    await UserTest.create()
    await ContactTest.create()
  })

  afterEach(async () => {
    await AddressTest.deleteAll()
    await ContactTest.deleteAll()
    await UserTest.delete()
  })

  it('should be able to create address', async () => {
    const contact = await ContactTest.get()
    const response = await supertest(web)
      .post(`/api/contacts/${contact.id}/addresses`)
      .set("X-API-TOKEN", "test")
      .send({
        street: "Jalan",
        city: "Aceh",
        province: "Aceh",
        country: "IDN",
        postal_code: "123"
      })

    logger.debug(response.body)
    expect(response.status).toBe(200)
    expect(response.body.data.id).toBeDefined()
    expect(response.body.data.street).toBe("Jalan")
    expect(response.body.data.city).toBe("Aceh")
    expect(response.body.data.province).toBe("Aceh")
    expect(response.body.data.country).toBe("IDN")
    expect(response.body.data.postal_code).toBe("123")
  })

  it('should be reject to create address if request is invalid', async () => {
    const contact = await ContactTest.get()
    const response = await supertest(web)
      .post(`/api/contacts/${contact.id}/addresses`)
      .set("X-API-TOKEN", "test")
      .send({
        street: "Jalan",
        city: "Aceh",
        province: "Aceh",
        country: "",
        postal_code: ""
      })

    logger.debug(response.body)
    expect(response.status).toBe(400)
    expect(response.body.errors).toBeDefined()
  })

  it('should be reject to create address if contact is not found', async () => {
    const contact = await ContactTest.get()
    const response = await supertest(web)
      .post(`/api/contacts/${contact.id + 1}/addresses`)
      .set("X-API-TOKEN", "test")
      .send({
        street: "Jalan",
        city: "Aceh",
        province: "Aceh",
        country: "IDN",
        postal_code: "123"
      })

    logger.debug(response.body)
    expect(response.status).toBe(404)
    expect(response.body.errors).toBeDefined()
  })
})

describe('GET /api/contacts/:contactId/addresses/:addressId', () => {
  beforeEach(async () => {
    await UserTest.create()
    await ContactTest.create()
    await AddressTest.create()
  })

  afterEach(async () => {
    await AddressTest.deleteAll()
    await ContactTest.deleteAll()
    await UserTest.delete()
  })

  it('should be able get address', async () => {
    const contact = await ContactTest.get()
    const address = await AddressTest.get()

    const response = await supertest(web)
      .get(`/api/contacts/${contact.id}/addresses/${address.id}`)
      .set("X-API-TOKEN", "test")

    logger.debug(response.body)
    expect(response.status).toBe(200)
    expect(response.body.data.id).toBeDefined()
    expect(response.body.data.street).toBe(address.street)
    expect(response.body.data.province).toBe(address.province)
    expect(response.body.data.city).toBe(address.city)
    expect(response.body.data.country).toBe(address.country)
    expect(response.body.data.postal_code).toBe(address.postal_code)
  })

  it('should reject if address not found', async () => {
    const contact = await ContactTest.get()
    const address = await AddressTest.get()

    const response = await supertest(web)
      .get(`/api/contacts/${contact.id}/addresses/${address.id + 1}`)
      .set("X-API-TOKEN", "test")

    logger.debug(response.body)
    expect(response.status).toBe(404)
    expect(response.body.errors).toBeDefined()
  })

  it('should reject if contact not found', async () => {
    const contact = await ContactTest.get()
    const address = await AddressTest.get()

    const response = await supertest(web)
      .get(`/api/contacts/${contact.id + 1}/addresses/${address.id}`)
      .set("X-API-TOKEN", "test")

    logger.debug(response.body)
    expect(response.status).toBe(404)
    expect(response.body.errors).toBeDefined()
  })
})

describe('PUT /api/contacts/:contactId/addresses/:addressId', () => {
  beforeEach(async () => {
    await UserTest.create()
    await ContactTest.create()
    await AddressTest.create()
  })

  afterEach(async () => {
    await AddressTest.deleteAll()
    await ContactTest.deleteAll()
    await UserTest.delete()
  })

  it('should be able to update address', async () => {
    const contact = await ContactTest.get()
    const address = await AddressTest.get()

    const response = await supertest(web)
      .put(`/api/contacts/${contact.id}/addresses/${address.id}`)
      .set("X-API-TOKEN", "test")
      .send({
        street: "Jalan",
        city: "Aceh",
        province: "Aceh",
        country: "SNG",
        postal_code: "456"
      })

    logger.debug(response.body)
    expect(response.status).toBe(200)
    expect(response.body.data.id).toBe(address.id)
    expect(response.body.data.street).toBe("Jalan")
    expect(response.body.data.city).toBe("Aceh")
    expect(response.body.data.province).toBe("Aceh")
    expect(response.body.data.country).toBe("SNG")
    expect(response.body.data.postal_code).toBe("456")
  })

  it('should reject update address if data is invalid', async () => {
    const contact = await ContactTest.get()
    const address = await AddressTest.get()

    const response = await supertest(web)
      .put(`/api/contacts/${contact.id}/addresses/${address.id}`)
      .set("X-API-TOKEN", "test")
      .send({
        street: "Jalan",
        city: "Aceh",
        province: "Aceh",
        country: "",
        postal_code: ""
      })

    logger.debug(response.body)
    expect(response.status).toBe(400)
    expect(response.body.errors).toBeDefined()
  })

  it('should reject update address if address is not found', async () => {
    const contact = await ContactTest.get()
    const address = await AddressTest.get()

    const response = await supertest(web)
      .put(`/api/contacts/${contact.id}/addresses/${address.id + 1}`)
      .set("X-API-TOKEN", "test")
      .send({
        street: "Jalan",
        city: "Aceh",
        province: "Aceh",
        country: "IDN",
        postal_code: "345"
      })

    logger.debug(response.body)
    expect(response.status).toBe(404)
    expect(response.body.errors).toBeDefined()
  })

  it('should reject update address if contact is not found', async () => {
    const contact = await ContactTest.get()
    const address = await AddressTest.get()

    const response = await supertest(web)
      .put(`/api/contacts/${contact.id + 1}/addresses/${address.id}`)
      .set("X-API-TOKEN", "test")
      .send({
        street: "Jalan",
        city: "Aceh",
        province: "Aceh",
        country: "IDN",
        postal_code: "345"
      })

    logger.debug(response.body)
    expect(response.status).toBe(404)
    expect(response.body.errors).toBeDefined()
  })
})

describe('DELETE /api/contacts/:contactId/addresses/:addressId', () => {
  beforeEach(async () => {
    await UserTest.create()
    await ContactTest.create()
    await AddressTest.create()
  })

  afterEach(async () => {
    await AddressTest.deleteAll()
    await ContactTest.deleteAll()
    await UserTest.delete()
  })

  it('should be able to remove address', async () => {
    const contact = await ContactTest.get()
    const address = await AddressTest.get()

    const response = await supertest(web)
      .delete(`/api/contacts/${contact.id}/addresses/${address.id}`)
      .set("X-API-TOKEN", "test")

    logger.debug(response.body)
    expect(response.status).toBe(200)
    expect(response.body.data).toBe("Success")
  })

  it('should be reject remove address if address not found', async () => {
    const contact = await ContactTest.get()
    const address = await AddressTest.get()

    const response = await supertest(web)
      .delete(`/api/contacts/${contact.id}/addresses/${address.id + 1}`)
      .set("X-API-TOKEN", "test")

    logger.debug(response.body)
    expect(response.status).toBe(404)
    expect(response.body.errors).toBeDefined()
  })

  it('should be reject remove address if contact not found', async () => {
    const contact = await ContactTest.get()
    const address = await AddressTest.get()

    const response = await supertest(web)
      .delete(`/api/contacts/${contact.id + 1}/addresses/${address.id}`)
      .set("X-API-TOKEN", "test")

    logger.debug(response.body)
    expect(response.status).toBe(404)
    expect(response.body.errors).toBeDefined()
  })
})

describe('GET /api/contacts/:contactId/addresses', () => {
  beforeEach(async () => {
    await UserTest.create()
    await ContactTest.create()
    await AddressTest.create()
  })

  afterEach(async () => {
    await AddressTest.deleteAll()
    await ContactTest.deleteAll()
    await UserTest.delete()
  })

  it('should be able to get list addresses', async () => {
    const contact = await ContactTest.get()

    const response = await supertest(web)
      .get(`/api/contacts/${contact.id}/addresses`)
      .set("X-API-TOKEN", "test")

    logger.debug(response.body)
    expect(response.status).toBe(200)
    expect(response.body.data.length).toBe(1)
  })

  it('should be reject get list address if contact not found', async () => {
    const contact = await ContactTest.get()

    const response = await supertest(web)
      .get(`/api/contacts/${contact.id + 1}/addresses`)
      .set("X-API-TOKEN", "test")

    logger.debug(response.body)
    expect(response.status).toBe(404)
    expect(response.body.errors).toBeDefined()
  })
})
