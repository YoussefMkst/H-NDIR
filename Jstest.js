//Type of List element is {"ListName", "ListID"}
var AdminList1 = [["aListName", "aListID1"],["aListName2", "aListID2"], ["aListName3", "aListID3"]];
var MemberList1 =[["mListName", "mListID1"],["mListName2", "mListID2"], ["mListName3", "mListID3"]];
var List1 = [AdminList1, MemberList1];

var AdminList2 = [["a2ListName", "aListID1"],["a2ListName2", "aListID2"], ["a2ListName3", "aListID3"]];
var MemberList2 =[["m2ListName", "mListID1"],["m2ListName2", "mListID2"], ["m2ListName3", "mListID3"]];
var List2 = [AdminList2, MemberList2];

//Type of List element is ["UserID", ""]
var User1 = ["01", List1];
var User2 = ["02", List2];

var Users = [User1, User2];
var Lists = [AdminList1, AdminList2, MemberList1, MemberList2];
var DB = [User1, User2];
//{List Name, List_Users}
var List_details = ["Ututu", ["Midri", "Khayat", "Moustaid"]]
function Retrieve(DB){
	//Case of User1
		//Didn't implement finding the user as they are already Logged In

	//Get User1 Lists
	//DB >> User 0 >> Lists >> AdminLists >> Loop over Names
	var ALists = ((DB[0])[1])[0];

	//Print only List Names: WORKS FINE
	/*console.log("You are Admin of:\n");
	for(var i = 0; i< Lists.length; i++){
		console.log(Lists[i][0] + "\n");
	}*/
	
	//Organize them as Admin, Not Admin

	console.log("You are Admin of:\n");
	for(var i = 0; i< ALists.length; i++){
		console.log(ALists[i][0] + "\n");
	}


	//DB >> User 0 >> Lists >> MemberLists {>> Loop over Names}
	var MLists = ((DB[0])[1])[1];

	console.log("You are Member of:\n");
	for(var i = 0; i< MLists.length; i++){
		console.log(MLists[i][0] + "\n");
	}
}

function Create(userID, List_details, DB){
	// Find User in DB => Remove later as he is already logged in


	//Create new List
	var pquery = {Admin: userID, Name: List_details[0] }; // Later push also:  Members: List_details[1]
	//Assign Name to List

	//Make ADMIN = User_id OR uSERNAME (primary key)


	// Will be replaced by db ADMIN LIST FETCHING QUEY
	(((DB[0])[1])[0]).push(pquery);
	console.log(((DB[0])[1])[0]);

}
function Generate(){
	var i;
	var N_Mlist= "<ol id = 'inner2'>";;
	console.log(MemberList1.length);
	for(i = 0; i < MemberList1.length; i++){
		//console.log("Index i is", i);
		//append i+1 as index, will become link to which list to access
		N_Mlist = N_Mlist.concat("<li> <a href='/");
		N_Mlist= N_Mlist.concat((i+1).toString());

		N_Mlist= N_Mlist.concat("'>");
		N_Mlist= N_Mlist.concat((MemberList1[i])[0]);
		N_Mlist= N_Mlist.concat("</a></li>");

	}
	N_Mlist.concat("</ol>");
	console.log(N_Mlist);
};

Retrieve(DB);
Create((User1)[0], List_details, DB );
Generate();