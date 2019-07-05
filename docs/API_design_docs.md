# API design docs


Location
---

### find all

```
{
 getLocations {
  city,
  state,
  country,
  zip_code,
  time_zone
 }
}
```

### find by city + state + country

```
# find one
{
 getLocationByKeys (city: "aaa", state: "bbb", country: "china") {
  city,
  state,
  country,
  zip_code,
  time_zone
 }
}
# result
{
  "data": {
    "getLocationByKeys": {
      "city": "aaa",
      "state": "bbb",
      "country": "china",
      "zip_code": null,
      "time_zone": "Africa/Bissau"
    }
  }
}

# not found
{
 getLocationByKeys (city: "aaa", state: "aaa", country: "china") {
  city,
  state,
  country,
  zip_code,
  time_zone
 }
}
# result
{
  "data": {
    "getLocationByKeys": null
  }
}
```

### create

```
mutation {
  createLocation (city: "shanghai", state: "beijing", country: "china") {
    id
    city
    state
    country
  }
}

```

### update

```
mutation {
  updateLocation (id: "3", city: "aaa", state: "bbb", country: "china") {
    id
    city
    state
    country
  }
}
```

User
---

### FindAll

```
{
 getUsers {
  username,
  email,
 }
}
```

### Find user by Username

```
{
 getUserByUsername(username:"ruiwang") {
  username,
  email,
 }
}
```

### Find user by email

```
{
 getUserByEmail(email:"ruiwang@gmail.com") {
  username,
  email,
 }
}
```


### Fin user with profile all
```
query {
  getUserWithProfile {
    id
    username
    email
    user_profile {
      id
      gender
      age
      job
    }
  }
}

// result
{
  "data": {
    "getUserWithProfile": [
      {
        "id": "1",
        "username": "ruiwang",
        "email": "ruiwang@gmail.com",
        "user_profile": {
          "id": "1",
          "gender": "Male",
          "age": "20",
          "job": "software engineer"
        }
      },
      {
        "id": "2",
        "username": "yannie",
        "email": "nieyan0723@gmail.com",
        "user_profile": {
          "id": "2",
          "gender": "Male",
          "age": "30",
          "job": "test automation engineer"
        }
      }
    ]
  }
}
```


### Find user with profile by id

```
query {
  getUserWithProfileById(id:1) {
    id
    username
    email
    user_profile {
      id,
      gender,
      age,
      job,
    }
  }
}

// result
{
  "data": {
    "getUserWithProfileById": {
      "id": "1",
      "username": "ruiwang",
      "email": "ruiwang@gmail.com",
      "user_profile": {
        "id": "1",
        "gender": "Male",
        "age": "20",
        "job": "software engineer"
      }
    }
  }
}
```


### find user with profile by username

```
query {
  getUserWithProfileByUsername(username: "ruiwang"){
    id
    username
    email
    user_profile {
      id,
      gender,
      age,
      job,
      location_id
    }
  }
}

// result
{
  "data": {
    "getUserWithProfileByUsername": {
      "id": "1",
      "username": "ruiwang",
      "email": "ruiwang@gmail.com",
      "user_profile": {
        "id": "1",
        "gender": "Male",
        "age": "20",
        "job": "software engineer",
        "location_id": 1
      }
    }
  }
}
```


User Profile
---

### FindAll

```
{
  getUserProfiles {
    gender,
    age,
    job
  }
}
```

### Get user profile by user_id

```
{
  getUserProfileByUserId(id: 1) {
    gender,
    age,
    job
  }
}
```

### get user profile by location

```
query {
  getUserProfileByLocation(city:"Beijing", state:"BJ", country:"China"){
    id,
    gender,
    age,
    job,
    user_id
  }
}

// result
{
  "data": {
    "getUserProfileByLocation": [
      {
        "id": "1",
        "gender": "Male",
        "age": "20",
        "job": "software engineer",
        "user_id": 1
      }
    ]
  }
}
```
