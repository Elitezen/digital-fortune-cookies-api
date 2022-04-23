# Digital Fortune Cookies API
API that serves a fortune along with 6 lucky numbers

## Routes

### GET Home
`https://digital-fortune-cookies-api.herokuapp.com/`

### GET Fortune
Use to retrieve 1 fortune
`https://digital-fortune-cookies-api.herokuapp.com/fortune`

Example JSON Response:
```json
{
  "fortune":"The human spirit is stronger than anything that can happen to it.",
  "luckyNumbers":[12,74,81,42,51,31]
}
```

### POST fortunes
Use to retrieve multiple fortunes (Up to 10)

Parameters:
`amount` - Amount of fortunes to request (1 - 10 range)

Example Query: `https://digital-fortune-cookies-api.herokuapp.com/fortune?amount=3`

Example JSON Response:
```json
[
	{
		"fortune": "A bird in the hand is worth three in the bush!!",
		"luckyNumbers": [
			23,
			90,
			24,
			51,
			5,
			22
		]
	},
	{
		"fortune": "Happiness is an activity.",
		"luckyNumbers": [
			57,
			51,
			40,
			73,
			35,
			10
		]
	},
	{
		"fortune": "People who are late are often happier than those who have to wait for them",
		"luckyNumbers": [
			91,
			82,
			100,
			97,
			54,
			47
		]
	}
]
```