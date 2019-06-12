# Pawtascy需求和设计文档V1


Business requirement
---

- user system
- pet system
- event system
- feedback system (comments and rating)
- chatroom
- sharing system (sharing event to FB, Twitter)


database design
---

**Table: user**

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| username | varchar(255) | unique |
| email | varchar(255) | unique |
| first_name | varchar(255) |  |
| last_name | varchar(255) |  |
| password | varchar(255) | sha256 (salt + password) |
| is_superuser | tinyint(1) | project owner role: higher than user and staff user |
| is_staff | tinyint(1)| admin user |
| is_active | tinyint(1)| True is active user, otherwise block user |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: user_profile**

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| user_id | int(11) | One to One to user.id |
| gender | varchar(255) | option: Male/Female |
| age | int(11) | option: 0-18/18-24/24-35/35-55/above 35 |
| job | varchar(255) |  |
| phone | varchar(255) |  |
| location_id | int(11) | Foreign key to the location table|
| address | varchar(255) | |
| avatar | varchar(1024) | image, store in s3 bucket |
| self_introduction | longtext | |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: auth_google**

- [google oauth return value](https://developers.google.com/actions/identity/google-sign-in-oauth)

```json=true
    {
      "sub": 1234567890,        // The unique ID of the user's Google Account
      "iss": "https://accounts.google.com",        // The assertion's issuer
      "aud": "123-abc.apps.googleusercontent.com", // Your server's client ID
      "iat": 233366400,         // Unix timestamp of the assertion's creation time
      "exp": 233370000,         // Unix timestamp of the assertion's expiration time
      "name": "Jan Jansen",
      "given_name": "Jan",
      "family_name": "Jansen",
      "email": "jan@gmail.com", // If present, the user's email address
      "locale": "en_US"
    }
```

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| user_id | int(11) | Foreign key to user.id |
| google_id | int(11) | unique |
| family_name | varchar(255) |  |
| exp_at | datetime(6) | Unix timestamp of the assertion's expiration time |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |



**Table: auth_facebook**

- [facebook oauth return data](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/)

```json=true
{
    "data": {
        "app_id": 138483919580948, 
        "type": "USER",
        "application": "Social Cafe", 
        "expires_at": 1352419328, 
        "is_valid": true, 
        "issued_at": 1347235328, 
        "metadata": {
            "sso": "iphone-safari"
        }, 
        "scopes": [
            "email", 
            "publish_actions"
        ], 
        "user_id": "1207059"
    }
}
```

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| user_id | int(11) | Foreign key to user.id |
| `fb_user_id` | int(11) | unique |
| exp_at | datetime(6) | Unix timestamp of the assertion's expiration time |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |



**Table: location**

- unique together: city and country
- search for city all the time
- [cron job to fetch location](https://developers.google.com/places/web-service/details)

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| city | varchar(255) | |
| country | varchar(255) | option |
| zip_code | int(11) |  |
| time_zone | varchar(255) | present time for different country |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: pet_profile**

- Q: favirote and character 
- Q: funny story

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| nick_name | varchar(255) | |
| avatar | varchar(1024) | image, store in s3 bucket |
| breed | varchar(255) | 品种 |
| birthday | datetime(6) |  |
| age | int(11) |  |
| gender | varchar(20) | option:male/female |
| size | varchar(20) | option:small, medium,large |
| weight | varchar(255) | option: 1-25lbs/25-50lbs/... |
| character | varchar(255) | wording, currently just list |
| is_neutered | tinyint(1) |  |
| dislike | varchar(1024) | desciption waht pet dislike |
| health | varchar(1024) | description of pet health condition |
| description | longtext | more description for this pet |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: pet_image**

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| `pet_profile_id` | int(11) | Foreign Key to pet_profile.id |
| title | varchar(255) | image name |
| description | longtext | image description |
| image_link | varchar(1024) | put on s3 bucket |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: pet_video**

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| `pet_profile_id` | int(11) | Foreign Key to pet_profile.id |
| title | varchar(255) | video name |
| description | longtext | video description |
| video_link | varchar(1024) | put on s3 bucket |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: pet_category**

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| name | varchar(255) | e.g.dogs/cat/birds/others |
| order_number | varchar(255) |  |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: `pet_profile_category`**

- relation: many to many transaction table for `pet_profile` and `pet_category`

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| `pet_profile_id` | int(11) | Foreign Key to pet_profile.id |
| `pet_category_id` | int(11) | Foreign Key to pet_category.id |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: user_pet**

- relation: many to many transaction talbe for `user` and `pet_profile`

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| user_id | int(11) | Foreign Key to user.id |
| `pet_profile_id` | int(11) | Foreign Key to pet_profile.id |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: event**

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| title | varchar(255) |  |
| location_id | int(11) | Foreign key to the location table|
| address | varchar(255) | |
| `event_start_at` | datetime(6) | event begin time(local time) |
| `event_end_at` | datetime(6) | event end time(local time) |
| cover | varchar(255) | image, store in s3 bucket |
| cost | varchar(255) | option:cost range |
| `restrict_guest_number` | int(11) | limited of guest number |
| `restrict_pets_number` | int(11) | limited of pet number |
| is_neutered | tinyint(1) |  |
| detail | longtext | at least 50 words |
| notice | longtext | requirements need to pay attention |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: event_topic**

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| topic | varchar(255) |  |
| order_number | varchar(255) |  |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: `event_information_topic`**

- relation: many to many transaction tables for `event` and `event_topic`

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| event_id | int(11) | Foreign key to event.id |
| `event_topic_id` | int(11) | Foreign key to event_topic.id |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: `event_pet_category`**

- relation: many to many transaction table for `event` and `pet_category`

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| event_id | int(11) | Foreign key to event.id |
| `pet_category_id` | int(11) | Foreign key to pet_category.id |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |



**Table: user_event**

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| user_id | int(11) | Foreign key to user.id |
| event_id | int(11) | Foreign key to event.id |
| role | varchar(255) | option: host/guest |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: event_feedback**

- unique together: event_id and user_id

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| event_id | int(11) | Foreign key to event.id |
| user_id | int(11) | Foreign key to user.id |
| rating | int(11) | option: 1 to 5 |
| comment | longtext | comments of event |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |


**Table: chatroom**

- relation: one to one with `event`
- no group owner and guest function

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| event_id | int(11) | one event to one chatroom |
| title | varchar(255) | default: event name |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |



**Table: message**

- no recall message function
- no multi-media type, only text now
- no at reply specific message
- no at specific person

|  Field | Type | Note |
| -------- | -------- | -------- |
| id | int(11) | PK, AUTO_INCREMENT |
| chatroom_id | int(11) | Foreign key to chartroom.id |
| user_id | int(11) | Foreign key to user.id |
| content | longtext |  |
| created_at | datetime(6) |  |
| updated_at | datetime(6) |  |

