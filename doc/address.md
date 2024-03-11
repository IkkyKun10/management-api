#Address API Spec

## Create Address

Endpoint : POST /api/contacts/{idContact}/addresses

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
  "street": "Jalan apa",
  "city": "Kota",
  "province": "Provinsi",
  "country": "Negara",
  "postal_code": "1234"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota",
    "province": "Provinsi",
    "country": "Negara",
    "postal_code": "1234"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal code required!"
}
```

## Get Address

Endpoint : GET /api/contacts/{idContact}/addresses/{idAddress}

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota",
    "province": "Provinsi",
    "country": "Negara",
    "postal_code": "1234"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Address not found"
}
```

## Update Address

Endpoint : PUT /api/contacts/{idContact}/addresses/{idAddress}

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
  "street": "Jalan apa",
  "city": "Kota",
  "province": "Provinsi",
  "country": "Negara",
  "postal_code": "1234"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota",
    "province": "Provinsi",
    "country": "Negara",
    "postal_code": "1234"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal code required!"
}
```

## Remove Address 

Endpoint : DELETE /api/contacts/{idContact}/addresses/{idAddress}

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "Success"
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```

## List Address

Endpoint : GET /api/contacts/{idContact}/addresses

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan apa",
      "city": "Kota",
      "province": "Provinsi",
      "country": "Negara",
      "postal_code": "1234"
    },
    {
      "id": 2,
      "street": "Jalan apa",
      "city": "Kota",
      "province": "Provinsi",
      "country": "Negara",
      "postal_code": "1234"
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "Contact not found"
}
```