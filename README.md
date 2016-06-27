## Booker App


##Tech Stack:
+ SailsJS
+ AngularJS
+ MySQL db

##API spec:

+ GET: /api/items/ <br>
```
{
  "success": true,
  "data": [
    {
      "availability": [
        {
          "dates": [
            "2016-06-29",
            "2016-06-30"
          ],
          "item_id": 1,
          "id": 1,
          "createdAt": "2016-06-26T15:04:39.000Z",
          "updatedAt": "2016-06-26T15:04:39.000Z"
        }
      ],
      "name": "Skydiving - Tandem",
      "description": "A parachute jump as a tandem jump is a fantastic experience that everyone should experience. To go along with an instructor, which means there is no need to spend time on theoretical and practical preparation. In fact, it is just to follow some simple instructions and otherwise just enjoy the ride full. The experience can be tried in the country, from early spring to October, with our selected partners ( Parachute Club DFC , Center Jump , Skydive 2000 ,  Østjyllands Parachute Club  and Drop Zone Denmark ) and with the guarantee of an adrenaline rush and eternal memory - the perfect experience gift.",
      "id": 1,
      "createdAt": "2016-06-26T15:04:39.000Z",
      "updatedAt": "2016-06-26T15:04:39.000Z"
    },
    {
      "availability": [
        {
          "dates": [
            "2016-06-29",
            "2016-06-30"
          ],
          "item_id": 2,
          "id": 2,
          "createdAt": "2016-06-26T15:04:39.000Z",
          "updatedAt": "2016-06-26T15:04:39.000Z"
        }
      ],
      "name": "Sports Car Driving",
      "description": "Xtreme Xperience has hand picked the finest supercars from across the globe just for you. Contact us to find out how you can drive an exotic car for a day!",
      "id": 2,
      "createdAt": "2016-06-26T15:04:39.000Z",
      "updatedAt": "2016-06-26T15:04:39.000Z"
    }
  ]
}
```


+ GET: /api/items/:itemId <br>
```
{
  "success": true,
  "data": [
    {
      "availability": [
        {
          "dates": [
            "2016-06-29",
            "2016-06-30"
          ],
          "item_id": 2,
          "id": 2,
          "createdAt": "2016-06-26T15:04:39.000Z",
          "updatedAt": "2016-06-26T15:04:39.000Z"
        }
      ],
      "name": "Sports Car Driving",
      "description": "Xtreme Xperience has hand picked the finest supercars from across the globe just for you. Contact us to find out how you can drive an exotic car for a day!",
      "id": 2,
      "createdAt": "2016-06-26T15:04:39.000Z",
      "updatedAt": "2016-06-26T15:04:39.000Z"
    }
  ]
}
```

+ GET: /api/chps/ <br>
```
{
  "success": true,
  "data": [
    {
      "name": "heart disease",
      "id": 1,
      "createdAt": "2016-06-26T15:04:39.000Z",
      "updatedAt": "2016-06-26T15:04:39.000Z"
    },
    {
      "name": "arthritis",
      "id": 2,
      "createdAt": "2016-06-26T15:04:39.000Z",
      "updatedAt": "2016-06-26T15:04:39.000Z"
    },
    {
      "name": "obesity",
      "id": 3,
      "createdAt": "2016-06-26T15:04:39.000Z",
      "updatedAt": "2016-06-26T15:04:39.000Z"
    },
    {
      "name": "diabetes",
      "id": 4,
      "createdAt": "2016-06-26T15:04:39.000Z",
      "updatedAt": "2016-06-26T15:04:39.000Z"
    }
  ]
}
```


+ POST :  /api/orders/
```
Body request : 
{gender: 1, date: "2016-06-30", name: "Eli", age: 20, weight: 50, chp: object}
```


##Getting started:
You will need to set up a db connection, to do that you have to edit config/connection.js and config/models.js.<br>
I've also included a booker.sql with sample data included in, cause there is not api to create items, just orders for them.<br>
After you lift the app and you have some data in items you can go to :8080/#/items/itemId and book your travel.

```
$ git clone https://github.com/AlexN93/booker.git
$ npn install
$ bower install
$ sails lift
```