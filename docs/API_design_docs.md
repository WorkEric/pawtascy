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

// result
{
  "data": {
    "getLocations": [
      {
        "city": "Beijing",
        "state": "BJ",
        "country": "China",
        "zip_code": 100036,
        "time_zone": "Asia/Shanghai"
      },
      {
        "city": "CHENGDU",
        "state": "SC",
        "country": "China",
        "zip_code": 200045,
        "time_zone": "Asia/Shanghai"
      },
      {
        "city": "aaa",
        "state": "bbb",
        "country": "china",
        "zip_code": null,
        "time_zone": "Africa/Bissau"
      }
    ]
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

// result
{
  "data": {
    "getUsers": [
      {
        "username": "ruiwang",
        "email": "ruiwang@gmail.com"
      },
      {
        "username": "yannie",
        "email": "nieyan0723@gmail.com"
      }
    ]
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

// result
{
  "data": {
    "getUserByUsername": {
      "username": "ruiwang",
      "email": "ruiwang@gmail.com"
    }
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

// result
{
  "data": {
    "getUserByEmail": {
      "username": "ruiwang",
      "email": "ruiwang@gmail.com"
    }
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

### get users by pet_profile id

```
query {
  getUsersByPetProfileId(id:1) {
    id
    first_name
    last_name
    email
    username
    created_at
    updated_at
  }
}

// result
{
  "data": {
    "getUsersByPetProfileId": [
      {
        "id": "1",
        "first_name": "rui",
        "last_name": "wang",
        "email": "ruiwang@gmail.com",
        "username": "ruiwang",
        "created_at": "2019-06-30 16:37:30",
        "updated_at": "2019-06-30 16:37:30"
      }
    ]
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


PetProfile
---

### Get all pet profile

```
query {
  getPetProfiles {
    id
    nick_name
    breed
    birthday
    avatar
    gender
    is_neutered
    dislike
    health
    character
    description
  }
}

// result
{
  "data": {
    "getPetProfiles": [
      {
        "id": "1",
        "nick_name": "little dog",
        "breed": "breed1",
        "birthday": "2019-06-30 16:37:30",
        "avatar": null,
        "gender": "male",
        "is_neutered": true,
        "dislike": "bones",
        "health": "good",
        "character": "bark",
        "description": "A genius dog"
      },
      {
        "id": "2",
        "nick_name": "little cat",
        "breed": "breed2",
        "birthday": "2019-06-30 16:37:30",
        "avatar": null,
        "gender": "female",
        "is_neutered": false,
        "dislike": "fish",
        "health": "good",
        "character": "meow",
        "description": "Another genius cat"
      }
    ]
  }
}

```

### Get pet profle by ID

```
query {
  getPetProfileById(id:1) {
    id
    nick_name
    breed
    birthday
    avatar
    gender
    is_neutered
    dislike
    health
    character
    description
  }
}

// result
{
  "data": {
    "getPetProfileById": {
      "id": "1",
      "nick_name": "little dog",
      "breed": "breed1",
      "birthday": "2019-06-30 16:37:30",
      "avatar": null,
      "gender": "male",
      "is_neutered": true,
      "dislike": "bones",
      "health": "good",
      "character": "bark",
      "description": "A genius dog"
    }
  }
}
```

### Get pet profile by Category

```
query {
  getPetProfilesByCategory(name:"dog") {
    id
    nick_name
    character
    breed
    birthday
    created_at
    updated_at
  }
}

// result
{
  "data": {
    "getPetProfilesByCategory": [
      {
        "id": "1",
        "nick_name": "little dog",
        "character": "bark",
        "breed": "breed1",
        "birthday": "2019-06-30 16:37:30",
        "created_at": "2019-06-30 16:37:30",
        "updated_at": "2019-06-30 16:37:30"
      }
    ]
  }
}
```


### Get pet profile by username

```
query {
  getPetProfilesByUsername(username: "ruiwang") {
    id
    nick_name
    breed
    birthday
    gender
    weight
    character
    is_neutered
    dislike
    health
    description
    created_at
    updated_at
  }
}

// result
{
  "data": {
    "getPetProfilesByUsername": [
      {
        "id": "1",
        "nick_name": "little dog",
        "breed": "breed1",
        "birthday": "2019-06-30 16:37:30",
        "gender": "male",
        "weight": "10lbs",
        "character": "bark",
        "is_neutered": true,
        "dislike": "bones",
        "health": "good",
        "description": "A genius dog",
        "created_at": "2019-06-30 16:37:30",
        "updated_at": "2019-06-30 16:37:30"
      },
      {
        "id": "2",
        "nick_name": "little cat",
        "breed": "breed2",
        "birthday": "2019-06-30 16:37:30",
        "gender": "female",
        "weight": "5lbs",
        "character": "meow",
        "is_neutered": false,
        "dislike": "fish",
        "health": "good",
        "description": "Another genius cat",
        "created_at": "2019-06-30 16:37:30",
        "updated_at": "2019-06-30 16:37:30"
      }
    ]
  }
}
```


Pet category
---

### Find all pet categories

```
query {
  getPetCategories {
    id
    name
	  order_number
  }
}

// result
{
  "data": {
    "getPetCategories": [
      {
        "id": "1",
        "name": "dog",
        "order_number": 1
      },
      {
        "id": "2",
        "name": "cat",
        "order_number": 2
      }
    ]
  }
}
```

### Find pet category by Id

```
query {
  getPetCategoryById(id:1) {
    id
    name
	  order_number
  }
}

// result
{
  "data": {
    "getPetCategoryById": {
      "id": "1",
      "name": "dog",
      "order_number": 1
    }
  }
}
```

### Get Pet categories by pet proifle id 

```
query {
  getPetCategoriesByPetProfileId(id:1) {
    id
    name
    created_at
    updated_at
  }
}

// result
{
  "data": {
    "getPetCategoriesByPetProfileId": [
      {
        "id": "1",
        "name": "dog",
        "created_at": "2019-06-30 16:37:30",
        "updated_at": "2019-06-30 16:37:30"
      }
    ]
  }
}
```

Chatroom
---

### Find all chatrooms

```
{
  getChatrooms {
    id
    event_id
    title
  }
}

// result
{
  "data": {
    "getChatrooms": [
      {
        "id": "1",
        "event_id": 1,
        "title": "Cat meowing"
      },
      {
        "id": "2",
        "event_id": 2,
        "title": "Dog barking"
      }
    ]
  }
}
```

### Find chatroom by event_id

```
{
  getChatroomByEventId(event_id: 1) {
    id
    event_id
    title
  }
}


// result
{
  "data": {
    "getChatroomByEventId": {
      "id": "1",
      "event_id": 1,
      "title": "Cat meowing"
    }
  }
}
```

