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