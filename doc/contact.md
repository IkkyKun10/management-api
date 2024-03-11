# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
  "first_name": "Riezki",
  "last_name": "Maisyar",
  "email": "www@indij.com",
  "phone": "0984885677"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Riezki",
    "last_name": "maisyar",
    "email": "ejjfjf@kdfj.com",
    "phone": "0393457576767"
  }
}
```


Response Body (Failed) :

```json
{
  "errors": "first_name must not blank"
}
```


## Get contact

Endpoint : GET /api/contacts

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Riezki",
    "last_name": "maisyar",
    "email": "ejjfjf@kdfj.com",
    "phone": "0393457576767"
  }
}
```


Response Body (Failed) :

```json
{
  "errors": "Contact not found"
}
```

## Update Contact


Endpoint : PUT /api/contacts/{id}

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
  "first_name": "Riezki",
  "last_name": "Maisyar",
  "email": "www@indij.com",
  "phone": "0984885677"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Riezki",
    "last_name": "maisyar",
    "email": "ejjfjf@kdfj.com",
    "phone": "0393457576767"
  }
}
```


Response Body (Failed) :

```json
{
  "errors": "first_name must not blank"
}
```

## Remove contact


Endpoint : DELETE /api/contacts/{id}

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "Success"
```


Response Body (Failed) :

```json
{
  "errors": "Contact not found"
}
```

## Search contact 


Endpoint : GET /api/contacts

Query parameter :
- name : string, contact first name or last name, optional
- phone: string, contact phone, optional
- email: string, contact email, optional
- page : number, default 1
- size : number, default 10

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Riezki",
      "last_name": "maisyar",
      "email": "ejjfjf@kdfj.com",
      "phone": "0393457576767"
    },
    {
      "id": 2,
      "first_name": "Riezki",
      "last_name": "maisyar",
      "email": "ejjfjf@kdfj.com",
      "phone": "0393457576767"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```


Response Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```



