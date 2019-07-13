# API design docs

## auth

signup

```
mutation {
  createUser (username: "t6", email: "t6@gmail.com", password: "123456", 
    city:"b", state:"b", country: "b", 
    gender:"male", nick_name: "dogs1", birthday: "2019-06-30 16:37:30",
  	categories: ["bird", "horse"]) {
		username
    email
    password
  }
}


// result
{
  "data": {
    "createUser": {
      "username": "t6",
      "email": "t6@gmail.com",
      "password": "$2b$10$dKaoIdAcq9OL6ZHGAMZljuadPeBg.yQmZ.9Nq4KUrOVwejVKK.Ete"
    }
  }
}
```

login

```
mutation {
  login(email: "t6@gmail.com", password: "123456")
}

// result
{
  "data": {
    "login": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImVtYWlsIjoidDZAZ21haWwuY29tIiwiaWF0IjoxNTYyOTc5MTI0LCJleHAiOjE1NjMwNjU1MjR9.ybDisSQlcTJTL5hYad-OD1Fbg4j-NJlvE5qXJk0eZYc"
  }
}
```


## Query

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

### user with pet profile

**Have issue, need to figure out later**

```
query {
  getUserPetByUsername(username:"ruiwang") {
    id
  	username
    email
    pet_profiles {
      nick_name
    }
    created_at
    updated_at
  }
}

// result
{
  "data": {
    "getUserPetByUsername": {
      "id": null,
      "username": null,
      "email": null,
      "pet_profiles": [
        {
          "nick_name": "little dog"
        },
        {
          "nick_name": "little cat"
        }
      ],
      "created_at": null,
      "updated_at": null
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


Event
---

### Find all events
```
{
  getEvents {
    id
    title
		event_start_at
    location_id
    address
    restrict_pets_number
    restrict_attendee_number
    is_neutered
    detail
    note
  }
}


// result
{
  "data": {
    "getEvents": [
      {
        "id": "1",
        "title": "event 1",
        "event_start_at": "2019-07-10 21:23:29",
        "location_id": 1,
        "address": "SanJose",
        "restrict_pets_number": 5,
        "restrict_attendee_number": 5,
        "is_neutered": false,
        "detail": "detail1",
        "note": "note1"
      },
      {
        "id": "2",
        "title": "event 2",
        "event_start_at": "2019-07-10 21:23:29",
        "location_id": 2,
        "address": "BeiJing",
        "restrict_pets_number": 10,
        "restrict_attendee_number": 10,
        "is_neutered": true,
        "detail": "detail2",
        "note": "note2"
      }
    ]
  }
}
```
### Find event by id
```
{
  getEventById(id: 1) {
    id
    title
    event_start_at
    location_id
    address
    restrict_pets_number
    restrict_attendee_number
    is_neutered
    detail
    note
  }
}


// result
{
  "data": {
    "getEventById": {
      "id": "1",
      "title": "event 1",
      "event_start_at": "2019-07-10 21:23:29",
      "location_id": 1,
      "address": "SanJose",
      "restrict_pets_number": 5,
      "restrict_attendee_number": 5,
      "is_neutered": false,
      "detail": "detail1",
      "note": "note1"
    }
  }
}
```

### Find event by location id
```
{
  getEventByLocationId(location_id: 1) {
    id
    title
    event_start_at
    location_id
    address
    restrict_pets_number
    restrict_attendee_number
    is_neutered
    detail
    note
  }
}


// result
{
  "data": {
    "getEventByLocationId": {
      "id": "1",
      "title": "event 1",
      "event_start_at": "2019-07-10 21:23:29",
      "location_id": 1,
      "address": "SanJose",
      "restrict_pets_number": 5,
      "restrict_attendee_number": 5,
      "is_neutered": false,
      "detail": "detail1",
      "note": "note1"
    }
  }
}
```

Event Feedback
---

### Find Event feedback by id
```
{
  getEventFeedbacks {
    id
    user_id
    event_id
    rating
    comment
  }
}


// result
{
  "data": {
    "getEventFeedbacks": [
      {
        "id": "1",
        "user_id": 1,
        "event_id": 1,
        "rating": 5,
        "comment": "Very good"
      },
      {
        "id": "2",
        "user_id": 2,
        "event_id": 2,
        "rating": 4,
        "comment": "Very Enjoy"
      }
    ]
  }
}
```
### Find Event feedback by id
```
{
  getEventFeedbackById(id:1) {
    id
    user_id
    event_id
    rating
    comment
  }
}


// result
{
  "data": {
    "getEventFeedbackById": {
      "id": "1",
      "user_id": 1,
      "event_id": 1,
      "rating": 5,
      "comment": "Very good"
    }
  }
}
```
### Find Event feedback by user id
```
{
  getEventFeedbackByUserId(user_id:1) {
    id
    user_id
    event_id
    rating
    comment
  }
}


// result
{
  "data": {
    "getEventFeedbackByUserId": {
      "id": "1",
      "user_id": 1,
      "event_id": 1,
      "rating": 5,
      "comment": "Very good"
    }
  }
}
```
### Find Event feedback by event id
```
{
  getEventFeedbackByEventId(event_id:1) {
    id
    user_id
    event_id
    rating
    comment
  }
}


// result
{
  "data": {
    "getEventFeedbackByEventId": {
      "id": "1",
      "user_id": 1,
      "event_id": 1,
      "rating": 5,
      "comment": "Very good"
    }
  }
}
```

Event Topic
---

### Get all event topics
```
{
  getEventTopics {
    id
    topic
    order_number
  }
}


// result
{
  "data": {
    "getEventTopics": [
      {
        "id": "1",
        "topic": "Birthday Party",
        "order_number": "A1"
      },
      {
        "id": "2",
        "topic": "Meet New Friends",
        "order_number": "B2"
      }
    ]
  }
}
```

### Get event topic by id
```
{
  getEventTopicById (id:1) {
    id
    topic
    order_number
  }
}


// result
{
  "data": {
    "getEventTopicById": {
      "id": "1",
      "topic": "Birthday Party",
      "order_number": "A1"
    }
  }
}
```

### Get event topic by order number
```
{
  getEventTopicByOrderNumber (order_number:"A1") {
    id
    topic
    order_number
  }
}


// result
{
  "data": {
    "getEventTopicByOrderNumber": {
      "id": "1",
      "topic": "Birthday Party",
      "order_number": "A1"
    }
  }
}
```


<br>

## Mutation

Location
---

create

```
mutation {
  createLocation (city:"ddd", state:"test", country: "china") {
    city
    state
    country
  }
}

// result
{
  "data": {
    "createLocation": {
      "city": "ddd",
      "state": "test",
      "country": "china"
    }
  }
}
```

update 

```
mutation {
  updateLocation (id:3, city:"ddd") {
    city
    state
    country
  }
}

// result
{
  "data": {
    "updateLocation": {
      "city": "ddd",
      "state": "bbb",
      "country": "china"
    }
  }
}
```

User
---

Business: When new user sign up account

- user, user_profile
- location
- pet_profile, pet_category
- user_pet_proifle

```
mutation {
  createUser (username: "test1", email: "test1@gmail.com", password: "123456", 
    city:"b", state:"b", country: "b", 
    gender:"male", nick_name: "dogs1", birthday: "2019-06-30 16:37:30",
  	categories: ["bird", "horse"]) {
		username
    email
    password
  }
}


// result
{
  "data": {
    "createUser": {
      "username": "test1",
      "email": "test1@gmail.com",
      "password": "123456"
    }
  }
}
```

update user information


```
mutation {
  updateUser (id: 1, first_name: "rui1", password:"12345") {
		username
    first_name
    email
    password
  }
}


// result
{
  "data": {
    "updateUser": {
      "username": "ruiwang",
      "first_name": "rui1",
      "email": "ruiwang@gmail.com",
      "password": "12345"
    }
  }
}
```

UserProfile
---

update user_profile information

```
mutation {
  updateUserProfile (user_id: 1, age: "28") {
    user_id,
    age
    job
  }
}

// result
{
  "data": {
    "updateUserProfile": {
      "user_id": 1,
      "age": "28",
      "job": "software engineer"
    }
  }
}
```

PetProfile
---

create pet_profile

```
mutation {
  createPetProfile (user_id: 1, nick_name: "test2", categories:["suger", "handsome"]) {
    is_neutered
    nick_name
  }
}

// result
{
  "data": {
    "createPetProfile": {
      "is_neutered": false,
      "nick_name": "test2"
    }
  }
}
```

update pet_profile

- categories
	- if category exist, update 
	- if category not exist, create a one

```
mutation {
  updatePetProfile (id: 28, nick_name: "test3", categories:["suger", "good"]) {
    is_neutered
    nick_name
  }
}

// result
{
  "data": {
    "updatePetProfile": {
      "is_neutered": false,
      "nick_name": "test3"
    }
  }
}
```

EventTopic
---

create event_topic

```
mutation {
  createEventTopic(topic: "Test  create", order_number: "c1") {
    id
    topic
    order_number
    created_at
    updated_at
  }
}

// result
{
  "data": {
    "createEventTopic": {
      "id": "3",
      "topic": "Test  create",
      "order_number": "c1",
      "created_at": "1562900712769",
      "updated_at": "1562900712769"
    }
  }
}
```

update event_topic

```
mutation {
  updateEventTopic (id: 3, topic: "test update", order_number: "D3") {
    id
    topic
    order_number
    created_at
    updated_at
  }
}

// result
{
  "data": {
    "updateEventTopic": {
      "id": "3",
      "topic": "test update",
      "order_number": "D3",
      "created_at": "2019-07-12 03:05:12",
      "updated_at": "2019-07-12 03:27:22"
    }
  }
}
```

Event
---

create event

```
mutation {
  createEvent(title: "Test create event", location_id: 1, address: "Mountain View", event_start_at: "2019-07-10 21:23:29", cover: "cover3", cost: "cost3", restrict_attendee_number: 3, restrict_pets_number: 4, is_neutered: true, detail: "detail3", note: "note3") {
    id
    title
    location_id
    address
    event_start_at
    cover
    cost
    restrict_attendee_number
    restrict_pets_number
    is_neutered
    detail
    note
    created_at
    updated_at
  }
}


// result
{
  "data": {
    "createEvent": {
      "id": "4",
      "title": "Test create event",
      "location_id": 1,
      "address": "Mountain View",
      "event_start_at": "1562819009000",
      "cover": "cover3",
      "cost": "cost3",
      "restrict_attendee_number": 3,
      "restrict_pets_number": 4,
      "is_neutered": true,
      "detail": "detail3",
      "note": "note3",
      "created_at": "1562903288763",
      "updated_at": "1562903288763"
    }
  }
}
```

update event

```
mutation {
  updateEvent(id: 2, title: "Test create event", location_id: 1, address: "Mountain View", event_start_at: "2019-07-10 21:23:29", cover: "cover3", cost: "cost3", restrict_attendee_number: 3, restrict_pets_number: 4, is_neutered: true, detail: "detail3", note: "note3") {
    id
    title
    location_id
    address
    event_start_at
    cover
    cost
    restrict_attendee_number
    restrict_pets_number
    is_neutered
    detail
    note
    created_at
    updated_at
  }
}


// result
{
  "data": {
    "updateEvent": {
      "id": "2",
      "title": "Test create event",
      "location_id": 1,
      "address": "Mountain View",
      "event_start_at": "2019-07-11 04:23:29",
      "cover": "cover3",
      "cost": "cost3",
      "restrict_attendee_number": 3,
      "restrict_pets_number": 4,
      "is_neutered": true,
      "detail": "detail3",
      "note": "note3",
      "created_at": "2019-07-10 21:23:29",
      "updated_at": "2019-07-12 03:51:01"
    }
  }
}
```

EventFeedback
---

create event_feedback

```
mutation {
  createEventFeedback(event_id: 1, user_id: 2, rating: 5, comment: "test create event feedback") {
    id
    event_id
    user_id
    rating
    comment
  }
}

// result
{
  "data": {
    "createEventFeedback": {
      "id": "5",
      "event_id": 1,
      "user_id": 2,
      "rating": 5,
      "comment": "test create event feedback"
    }
  }
}
```

update event_feedback

```
mutation {
  updateEventFeedback(id: 1, event_id: 1, user_id: 2, rating: 5, comment: "test update event feedback") {
    id
    event_id
    user_id
    rating
    comment
  }
}


// result
{
  "data": {
    "updateEventFeedback": {
      "id": "1",
      "event_id": 1,
      "user_id": 2,
      "rating": 5,
      "comment": "test update event feedback"
    }
  }
}
```