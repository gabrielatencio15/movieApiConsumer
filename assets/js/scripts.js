/*Made by:
	Gabriel Atencio
	Software Engineer
*/

//Function that encrypts values to MD5 hash.
let MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

//Function that gets you to the Home Page.
let GoHome = () => {
	document.location.href="/talentTest";
}

//Function that is triggered when clicking on Create Account link.
function RegisterNewUserForm()
{			
	$.ajax({        
		type: 'POST',
		url:   '?c=createUser&m=registerUser',               
		success:  function (response) {
				$("#login-form-wrap").html(response);
		}
	});
}

//Function that is triggered when the submit button on Register Account Form to validate and save users.
function RegisterNewUserFormSubmit()
{			
	//console.log($("#create-user-form").serialize());

	let username = $("#username").val().trim();

	if(validateUserExistance(username))
	{
		return;
	}

	$.ajax({        
		type: 'POST',
		data: $("#create-user-form").serialize(),
		url:   '?c=createUser&m=registerUserFormSubmit',               
		success:  function (response) {
			respuesta = JSON.parse(response);
			if(respuesta.status.error)
			{
				ShowInputError(respuesta.status.error, respuesta.status.errorMessage);
				//console.log(respuesta)
				return;
			}
			else if(respuesta.status === 'success')
			{
				let user = {
					username: username,
					phonenumber: $("#phonenumber").val().trim(),
					email: $("#email").val().trim(),
					password: MD5($("#user_password").val().trim()),
				}
				//Save data in local storage to avoid DB in this test.
				localStorage.setItem(username, JSON.stringify(user));

				swal("Welcome!", 'The account has been successfully created!', "success")
					.then((value) => {
						GoHome();
				 	 });
			}
				
		}
	});
}

//Function that is triggered when the submit button on Register Account Form to validate and save users.
function ShowInputError(inputId, errorMessage)
{	
	let message = '';

	switch(inputId)
	{
		case 'username':
			message = errorMessage == 'match' ? 'The username can only contain letters.' : 'The username is required.'
			break;
		case 'phonenumber':
			message = errorMessage == 'match' ? 'The phone number must have the following format: a “+” followed by 9 numbers e.g., +123456789' : 'The phone number is required.'
			break;
		case 'email':
			message = errorMessage == 'match' ? 'The email must be a valid entry, e.g., talent@example.com' : 'The email is required.'
			break;
		case 'password':
			message = errorMessage == 'match' ? 'The password must have these caracteristics: \na. Length of 6 characters \nb. One letter must be Uppercased \nc. It must contain one of these special characters: *-.' : 'The password is required.'
			break;
		
	}

	swal("Wrong input", message, "error");
}

//Function to validate whether a user exists or not.
function validateUserExistance(username)
{
	if(localStorage.getItem(username))
	{
		swal("Account already exists", 'The user: '+username+' already exists, please sign in!', "info");
		return true;
	}
}

//Function to locate pages into the server.
function getURLSite(op)
{
    var path = window.location.pathname;
    path = path.split("/");
    var url = window.location.origin+"/";
    for(var i=0;i<(path.length-1);i++)
        url += path[i]+"/";
    url += op;
    return url;
}

//Function to validate user-registered credentials.
function validateUserCredentials()
{
	let username = $("#username_login").val();
	let user = localStorage.getItem(username);

	if(user)
	{	
		if(JSON.parse(user).password == MD5($("#password_login").val()))
		{
			let url = getURLSite('views/all/login.php');

			$.ajax({        
				type: 'POST',
				data: {username: username, email: JSON.parse(user).email, phonenumber: JSON.parse(user).phonenumber},
				url:  url,              
				success:  function (response) {
					window.location = "views/all/homeLoggedInUser.php";
				}
			});
		}
		else
		{
			swal("Oops!", 'The password you entered is not correct!', "error");
		}
	}
	else
	{
		swal("Oops!", 'The user: '+username+' is not registered!', "error");
	}
	
}

//Function to get API data.
function getApiData()
{
	swal({
		text: 'Search for a movie. e.g. "The Avengers".',
		content: "input",
		button: {
		  text: "Search!",
		  closeModal: false,
		},
	  })
	  .then(name => {
		if (!name || name.trim()=='')
		{
			swal("Oops!", 'You need to type the movie name to search!', "error");
			return false;
		} 

		$.ajax({        
			type: 'POST',
			data: {movieName: name},
			url:  '../module/movieApi.php',              
			success:  function (response) {
				respuesta = JSON.parse(response);
				swal.stopLoading();
				if(respuesta.Response === 'True')
				{
					storageJson(respuesta.Search);
					swal("Good!", 'The results were added to your local database!', "success");
				}
				else
				{
					swal("Oops!", 'No movies were found for: '+name, "warning");
				}
			}
		});
	  });
}

//Function to save/update JSON to local storage.
function storageJson(jsonData)
{
	//Get current movies to check whether they exist or not.
	let movies = localStorage.getItem('movies');

	if(movies)
	{
		let jsonStoragedMovies = $.parseJSON(movies);

		$.each(jsonStoragedMovies,function(key,value)
		{
			jsonData.push(value);
		});
	
		localStorage.setItem('movies', JSON.stringify(jsonData));
	}
	else
	{
		localStorage.setItem('movies', JSON.stringify(jsonData));
	}
	
}

//Function got on Internet to sort arrays (Movies JSON).
function sortByProperty(objArray, prop, direction){
    if (arguments.length<2) throw new Error("ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION");
    if (!Array.isArray(objArray)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");
    const clone = objArray.slice(0);
    const direct = arguments.length>2 ? arguments[2] : 1; //Default to ascending
    const propPath = (prop.constructor===Array) ? prop : prop.split(".");
    clone.sort(function(a,b){
        for (let p in propPath){
                if (a[propPath[p]] && b[propPath[p]]){
                    a = a[propPath[p]];
                    b = b[propPath[p]];
                }
        }
        // convert numeric strings to integers
        a = a.match(/^\d+$/) ? +a : a;
        b = b.match(/^\d+$/) ? +b : b;
        return ( (a < b) ? -1*direct : ((a > b) ? 1*direct : 0) );
    });
    return clone;
}

//Function to get local storaged JSON.
function retrieveMoviesData()
{
	//Get current movies to check whether they exist or not.
	let movies = localStorage.getItem('movies');

	//Get order specification from dropdown to send the function.
	let orderBy = $('#sort_by').find(":selected").val();

	if(movies)
	{
		$.ajax({        
			type: 'POST',
			data: {movieList: JSON.stringify(sortByProperty($.parseJSON(movies),orderBy,1))},
			url:  '../module/movieList.php',              
			success:  function (response) {
				$("#movies_list").html(response);
			}
		});
	}
	else
	{
		swal("Oops!", 'There are not any movie added!', "info");
	}
}



//Function for users to logout.
function logout()
{
	swal({
		title: "Are you sure?",
		icon: "info",
		buttons: true,
		dangerMode: true,
	  })
	  .then((willDelete) => {
		if (willDelete) 
		{
			window.location = "logout.php";
		}
		else 
		{
		  return false;
		}
	  });
}



