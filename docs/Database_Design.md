## Business requirement 

* Create Events
* Search Events
* Feedback
* Profile Creation
* Feed wall
* Person information
* Account authenication
* Chatroom


## Database Design

Database including user profile, pet profile, events, post, feedback


### 1. Table `user_profile`

Table for user profile

| Field | Type | Note | Description |
|---|---|---|---|
| id | int(11) | PK, AUTO_INCREMENT |
| username | varchar(255)| UNIQ |  |
| password | varchar(255)|  |  |
| first_name | varchar(255) |  |  |  
| last_name | varchar(255) |  |  |
| email | varchar(255)| UNIQ |  |
| age | tinyint(150) | |Optional |
| gender | varchar(1) | |F or M |
| job | varchar(255) | |Optional |
| facebook_account | varchar(255) | |Optional |
| google_account | varchar(255) | |Optional |
| instagram_account | varchar(255) | |Optional |
| phone | varchar(255)| UNIQ |  |
| avatar | varchar(1024)| | image of people |
| description | longtext |  | self-introduction | 
| activated | tinyint(1)| | Boolean: user is activated or not |
| whitelisting | tinyint(1)| | Boolean: if this user is admin user |
| created_at | datetime(6) |  |  |
| updated_at | datetime(6) |  |  |


### 2. Table `pet_profile`

Table for pet profile

| Field | Type | Note | Description |
|---|---|---|---|
| id | int(11) | PK, AUTO_INCREMENT |
| nick_name | varchar(255)| | |
| tag | varchar(255)| |eg. cat/dog/bird/mouse/other|
| type | varchar(255)| |eg. Husky|
| age | tinyint(50) | | |
| gender | varchar(1) | |F or M |
| weight | float | |in .lb |
| characteristics | varchar(255)| |eg. mild/brutal|
| is_neutered | tinyint(1)| | Boolean: pet is neutered or not |
| image | varchar(1024) |  | image of pet |
| video | varchar(1024) |  | video of pet |
| description | longtext |  | description of pet | 
| created_at | datetime(6) |  |  |
| updated_at | datetime(6) |  |  |


### 3. Table `events`

Table for events detail

| Field | Type | Note | Description |
|---|---|---|---|
| id | int(11) | PK, AUTO_INCREMENT |
| title | varchar(255)| | |
| type | varchar(255)| |all the allowed pet type |
| tag | varchar(255)| |eg. Birthday Party/Beach Meetup |
| date |  date | | Stores date in the format YYYY-MM-DD |
| time |  time | | Stores time in the format HH:MI:SS |
| address | longtext |  | address of event | 
| is_neutered | tinyint(1)| | Boolean: need all attending pets neutered  default:false |
| people_limit | int | | |
| cost | float | | |
| description | longtext |  | description of event | 
| requirement | longtext |  | description of requirement | 
| image | varchar(1024) |  | image of event (Optional)|
| video | varchar(1024) |  | video of event (Optianal)|
| created_at | datetime(6) |  |  |
| updated_at | datetime(6) |  |  |


### 4. Table `post`

Table for post/thread

| Field | Type | Note | Description |
|---|---|---|---|
| id | int(11) | PK, AUTO_INCREMENT |
| poster_id | int(11) | ForeignKey to user_profile.id |
| title | varchar(255)| | |
| image | varchar(1024) |  | image of event (Optional)|
| video | varchar(1024) |  | video of event (Optianal)|
| description | longtext| |  |
| paws | int| | Numbers of paws(like) |
| created_at | datetime(6) |  |  |
| updated_at | datetime(6) |  |  |


### 5. Table `feedback`

Table for feedback

| Field | Type | Note | Description |
|---|---|---|---|
| id | int(11) | PK, AUTO_INCREMENT |
| event_id |  int(11) | ForeignKey to events.id | |
| stars | tinyint(5)| | | 0-5 stars |
| description | longtext |  | feedback of event | 
| created_at | datetime(6) |  |  |
| updated_at | datetime(6) |  |  |


### 6. Table `pet_ownership`

Table for pets ownership

| Field | Type | Note | Description |
|---|---|---|---|
| id | int(11) | PK, AUTO_INCREMENT |
| username | varchar(255)| ForeignKey to user_profile.username |  |
| pet_id | int(11)| ForeignKey to pet_profile.id | |
| created_at | datetime(6) |  |  |
| updated_at | datetime(6) |  |  |


### 7. Table `host_event`

Transaction table for hosting events

| Field | Type | Note | Description |
|---|---|---|---|
| id | int(11) | PK, AUTO_INCREMENT |
| event_id | int(11)| ForeignKey to events.id |  |
| host_name | varchar(255)| ForeignKey to user_profile.username |  |
| created_at | datetime(6) |  |  |
| updated_at | datetime(6) |  |  |