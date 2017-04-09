function recommender()
{
	var unseenComics = []; //set of unseen comics, initially empty
	var similarUserBonuses = []; //set of comics to receive a bonus based on similar user tastes
	var allUsersTags = []; //set of all the user's tags
	var userPrefsData = []; //set of calculated user tag values
	//TODO
	
	//Get set of 'unseen' comics
	
	//Get values for tags based on current user
	//
	//Get set of user's ranking data
	//Loop
	//Look up each comic's tags from tags table
	//Apply user's rating for that comic to all tags, then store into the set
	//End Loop
	//
	//Loop
	//Find next uncalculated entry from all tag values set (won't have an entry in the set)
		//Loop
		//Add value from current instance of tag to total value sum
		//increase 'occurred' count by 1
		//End Loop
		//Take sum and divide by 'occurred' count
		//Take final value and add to user values set
	//End Loop
	
	//Call compareUsers() to get bonuses for comics outside the favorites intersect
	
	//Walk the set of 'unseen' comics and calculate a score per comic
	//
	//Is comic score greater than threshold?
	//If yes, push comic to candidate set
	
	//Select three random comics from candidate set, then present to user
	//Tags to be shown are three highest for the comic based upon applied-to-comic count
}

function compareUsers()
{
	//TODO
	
	//Get count of user entries in the users database
	
	//Select up to three users at random from the database (count is maximum random number)
	
	//Get current user's favorites
	
	//Loop	
	//Get random user #'s favorites
	
	//If number of matching favorites is greater than 75%, then find comics outside this intersect
	//Push found non-intersecting comics into set of bonus-getting comics
	//Do the above per random user
	
	//If loop finishes and no overlaps found, no bonuses are returned.  
	//Let this be OPAQUE, because user doesn't need to know and likely doesn't care
}

function toggleFavorite()
{
	//TODO
	
	//Look at current user's favorites
	//If comic is found in favorites, then remove from the set
	//Else, add to the set
}

function addTag()
{
	//TODO
	
	//Look through comic-tag pairs in database
	//If pairing doesn't exist, add it
	//Else, increase the pair's applied-to-comic count
}

function addRating()
{
	//TODO
	
	//Look at user-comics pairs in database
	//If pair exists, change rating
	//Else, add the pair and apply rating
}