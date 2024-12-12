// This endpoint retrieves the Landsat 8 image for the supplied 
// location and date. The response will include the date and URL 
// to the image that is closest to the supplied date. The requested
//  resource may not be available for the exact date in the request.
//  You can retrieve a JSON that contains the inputs you provided
//  and a URL to the resulting image through the assets endpoint. 
// The assets endpoint no longer returns a list of potential images 
// within your date range due to a change on the Google Earth Engine API side.

// The cloud score was an optional calculation that returns the percentage
//  of the queried image that is covered by clouds, but it is not available
//  in current versions of the API. If False If HTTP Request

//  GET https://api.nasa.gov/planetary/earth/imagery

// Parameter	Type	    Default	    Description
// lat	        float	    n/a 	    Latitude
// lon	        float	    n/a	        Longitude
// dim	        float	    0.025	    width and height of image in degrees
// date	        YYYY-MM-DD	today	    date of image; if not supplied, then the most recent image (i.e., closest to today) is returned
// cloud_score	bool	    False	    [NOT CURRENTLY AVAILABLE!!!!] 
//                                      calculate the percentage of the image covered by clouds
// api_key	    string	    DEMO_KEY	api.nasa.gov key for expanded usage

//  https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01
//  &api_key=DEMO_KEY
//  Singapore Lat 1.39 %2C Lng 103.85
//  https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01
//  &api_key=DEMO_KEY

// https://api.nasa.gov/planetary/earth/imagery?lon=103.85&lat=1.39&api_key=DEMO_KEY
// https://api.nasa.gov/planetary/earth/imagery?lon=103.85&lat=1.39&api_key=XYcDIaU4DJKBzH4bbRTdHb94gkUFp4gp81a9iVQJ


// This endpoint retrieves the date-times and asset names for 
// closest available imagery for a supplied location and date. 
// The satellite passes over each point on earth roughly 
// once every sixteen days. This is an amazing visualization 
// of the acquisition pattern for Landsat 8 imagery. 
// The objective of this endpoint is primarily to support 
// the use of the imagery endpoint.

// GET https://api.nasa.gov/planetary/earth/assets

// Parameter	Type	    Default	    Description
// lat	        float	    n/a	        Latitude
// lon	        float	    n/a	        Longitude
// date	        YYYY-MM-DD	n/a     	beginning of 30 day date range that will be used to look for closest image to that date
// dim	        float	    0.025	     width and height of image in degrees
// api_key	    string	    DEMO_KEY	api.nasa.gov key for expanded usage

// https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01
// &&dim=0.10&api_key=DEMO_KEY



//  https://nasa-gibs.github.io/gibs-api-docs/
