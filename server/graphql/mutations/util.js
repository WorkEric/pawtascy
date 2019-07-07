// create objects

function user_profile_obj(gender, age, job, avatar, self_introduction, user_id, location_id) {
    return {
        gender: gender,
        age: age,
        job: job,
        avatar: avatar,
        self_introduction: self_introduction,
        user_id: user_id,
        location_id: location_id
    }
}

function pet_profile_obj(nick_name, avatar, breed, birthday, gender, 
                         is_neutered, weight, character, dislike, health, description) {
    return {
        nick_name: nick_name,
        avatar: avatar,
        breed: breed,
        birthday: birthday,
        gender: gender,
        is_neutered: is_neutered,
        weight: weight,
        character: character,
        dislike: dislike,
        health: health,
        description: description
    }
}

function location_obj(city, state, country, zip_code, time_zone) {
    return {
        city: city,
        state: state,
        country: country,
        zip_code: zip_code,
        time_zone: time_zone,
    }
}

module.exports = {
    user_profile_obj,
    pet_profile_obj,
    location_obj
}
