export const userData = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "John",
        last: "Doe",
      },
      location: {
        street: {
          number: 123,
          name: "Main St",
        },
        city: "Anytown",
        state: "Anystate",
        country: "USA",
        postcode: 12345,
        coordinates: {
          latitude: "34.0522",
          longitude: "-118.2437",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Standard Time",
        },
      },
      email: "john.doe@example.com",
      login: {
        uuid: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        username: "johndoe",
        password: "password123",
        salt: "saltedhash",
        md5: "md5hashvalue",
        sha1: "sha1hashvalue",
        sha256: "sha256hashvalue",
      },
      dob: {
        date: "1980-05-15T00:00:00.000Z",
        age: 45,
      },
      registered: {
        date: "2010-01-01T00:00:00.000Z",
        age: 15,
      },
      phone: "123-456-7890",
      cell: "098-765-4321",
      id: {
        name: "SSN",
        value: "XXX-XX-XXXX",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/1.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Jane",
        last: "Smith",
      },
      location: {
        street: {
          number: 456,
          name: "Park Ave",
        },
        city: "Otherville",
        state: "Otherstate",
        country: "Canada",
        postcode: 54321,
        coordinates: {
          latitude: "43.6532",
          longitude: "-79.3832",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Standard Time",
        },
      },
      email: "jane.smith@example.com",
      login: {
        uuid: "f0e9d8c7-b6a5-4321-fedc-ba9876543210",
        username: "janesmith",
        password: "anotherpassword",
        salt: "anothersalt",
        md5: "anothermd5",
        sha1: "anothersha1",
        sha256: "anothersha256",
      },
      dob: {
        date: "1992-11-22T00:00:00.000Z",
        age: 32,
      },
      registered: {
        date: "2018-03-10T00:00:00.000Z",
        age: 7,
      },
      phone: "987-654-3210",
      cell: "123-987-6543",
      id: {
        name: "SIN",
        value: "YYY-YYY-YYY",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/2.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
      },
      nat: "CA",
    },
  ],
  info: {
    seed: "randomseed",
    results: 2,
    page: 1,
    version: "1.4",
  },
};
