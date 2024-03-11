# User Spec

## Register User

Endpont : Post /api/users

Request body :

```json
{
  "username": "Riezki",
  "password": "********",
  "name": "Riezki Maisyar"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Riezki",
    "name": "Riezki Maisyar"
  },
  "message": "Register Berhasil"
}
```

Response Body (Failed) :

```json
{
  "errors": "Username must not blank"
}
```

## Login user


Endpont : Post /api/users/login

Request body :

```json
{
  "username": "Riezki",
  "password": "********",
  "token": "auth-token-uuid"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Riezki",
    "name": "Riezki Maisyar"
  },
  "message": "Login Berhasil"
}
```

Response Body (Failed) :

```json
{
  "errors": "Username or password wrong, ..."
}
```

## Get user


Endpont : GET /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "username": "Riezki",
    "name": "Riezki Maisyar"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```

## Update user

Request Header :

- X-API-TOKEN : token

Endpont : PATCH /api/users/current

Request body :

```json
{
  "password": "********", // tidak wajib
  "name": "Riezki Maisyar" // tidak wajib
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "Riezki", 
    "name": "Riezki Maisyar"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```

## Logout user

Request Header :

- X-API-TOKEN : token

Endpont : DELETE /api/users/current

Request body :

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
