# Digital Fortune Cookies API
API that serves a fortune along with 6 lucky numbers

## Routes

### GET Home
`https://fortunecookies-i3p5.onrender.com/`

### GET Fortune
Use to retrieve 1 fortune
`https://fortunecookies-i3p5.onrender.com/fortune/`

Example JSON Response:
```json
{
	"success": true,
	"cookie": {
		"fortune": "Your life does not get better by chance, it gets better by change.",
		"luckyNumbers": [
			26,
			24,
			34,
			68,
			74,
			90
		]
	}
}
```

Use to retrieve multiple fortunes (Up to 100 per call)

Parameters:
`amount` - Amount of fortunes to request (1 - 100 range)

Example Query: `https://fortunecookies-i3p5.onrender.com/fortune?amount=3`

Example JSON Response:
```json
{
	"success": true,
	"cookies": [
		{
			"fortune": "Begin your life anew with strength, grace and wonder.",
			"luckyNumbers": [
				53,
				71,
				59,
				18,
				2,
				67
			]
		},
		{
			"fortune": "Save the whales. Collect the whole set.",
			"luckyNumbers": [
				5,
				100,
				29,
				81,
				66,
				14
			]
		},
		{
			"fortune": "Your succeess will astonish everyone.",
			"luckyNumbers": [
				12,
				77,
				4,
				44,
				17,
				69
			]
		}
	]
}
```
