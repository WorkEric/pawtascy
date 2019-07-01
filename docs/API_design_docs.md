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